"use client";

import React from 'react';
import { Send } from 'lucide-react';
import clsx from 'clsx';

import Button from '@/components/elements/Button';
import FormField from '@/components/elements/FormField';
import StatusMessageModal from '@/components/elements/StatusMessageModal';
import { useContactFormLogic } from '@/hooks/useContactFormLogic';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    modalState,
    closeModal,
    shakeKey,
  } = useContactFormLogic();

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg border relative z-20
                      bg-white dark:bg-dark-card dark:border-dark-border-color">
        <form onSubmit={handleSubmit} className="space-y-[18px]" noValidate>
          <FormField
            id="fullName"
            label="Full Name"
            placeholder="Let me know who you are"
            register={register}
            error={errors.fullName}
            shakeKey={shakeKey}
          />

          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="I'll get back to you here"
            register={register}
            error={errors.email}
            shakeKey={shakeKey}
          />

          <FormField
            id="subject"
            label="Subject"
            placeholder="What do you want to talk about?"
            register={register}
            error={errors.subject}
            shakeKey={shakeKey}
          />

          <FormField
            id="message"
            label="Message"
            placeholder="Type your message..."
            register={register}
            error={errors.message}
            shakeKey={shakeKey}
            isTextArea={true}
            rows={5}
          />

          <Button
            type="submit"
            variant="gradient"
            shape="lg"
            isLoading={isSubmitting}
            className="w-full text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter"
            aria-label={isSubmitting ? "Sending message..." : "Send message"}
            disabled={isSubmitting}
          >
            Send Message
            <Send className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </div>

      <StatusMessageModal
        isOpen={modalState.isOpen}
        message={modalState.message}
        type={modalState.type}
        onClose={closeModal}
      />
    </>
  );
}