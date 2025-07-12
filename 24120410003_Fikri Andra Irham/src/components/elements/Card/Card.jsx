import React, { forwardRef } from 'react';
import clsx from 'clsx';

const Card = forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        `
        rounded-xl shadow-lg border

        p-6
        `,
        'bg-light-card border-border-color',
        'dark:bg-dark-card dark:border-dark-border-color',
        className 
      )}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;