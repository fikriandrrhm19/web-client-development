"use client";

import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';

const FORM_COOKIE_KEY = 'contactFormDraft';

const contactFormSchema = z.object({
  fullName: z.string()
    .min(1, 'Full Name is required')
    .max(100, 'Full Name must not exceed 100 characters')
    .trim()
    .regex(/^[a-zA-Z\s.'-]+$/, 'Full Name should only contain letters, spaces, periods, apostrophes, or hyphens.'),
  
  email: z.string()
    .min(1, 'Email Address is required')
    .email('Invalid email address')
    .max(255, 'Email Address must not exceed 255 characters')
    .toLowerCase()
    .trim(),
  
  subject: z.string()
    .min(1, 'Subject is required')
    .max(150, 'Subject must not exceed 150 characters')
    .trim(),
  
  message: z.string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message must not exceed 1000 characters')
    .trim(),
});

export function useContactFormLogic() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const [shakeKey, setShakeKey] = useState(0);

  useEffect(() => {
    try {
      const savedData = Cookies.get(FORM_COOKIE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.keys(parsedData).forEach(key => {
          if (contactFormSchema.shape[key] && typeof parsedData[key] === 'string') {
            setValue(key, parsedData[key]);
          }
        });
      }
    } catch (error) {
      console.error("Failed to load form data from cookie:", error);
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      try {
        if (type !== 'reset' && !isSubmitting) {
          const dataToSave = Object.fromEntries(
            Object.entries(value).filter(([, val]) => val !== undefined)
          );
          Cookies.set(FORM_COOKIE_KEY, JSON.stringify(dataToSave), { expires: 7 });
        }
      } catch (error) {
        console.error("Failed to save form data to cookie:", error);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, isSubmitting]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setShakeKey((prevKey) => prevKey + 1);
    }
  }, [errors]);

  const showModal = useCallback((message, type) => {
    setModalState({ isOpen: true, message, type });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({ ...prevState, isOpen: false }));
  }, []);

  const onSubmit = useCallback(async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message from server.');
      }

      const result = await response.json();
      console.log("Form submission successful (Client):", result.message);

      showModal(result.message || 'Message sent successfully! Thank you for reaching out.', 'success');
      reset();

      try {
        Cookies.remove(FORM_COOKIE_KEY);
      } catch (error) {
        console.error("Failed to remove form data from cookie after submit:", error);
      }

    } catch (error) {
      console.error("Error submitting form (Client):", error.message);
      showModal(error.message || 'Failed to send message. Please try again later.', 'error');
    }
  }, [reset, showModal]);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    modalState,
    closeModal,
    shakeKey,
  };
}