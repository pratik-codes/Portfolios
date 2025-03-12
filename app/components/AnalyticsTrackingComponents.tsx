'use client';

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FormHTMLAttributes } from 'react';
import { useAnalytics } from '../lib/hooks/useAnalytics';

interface TrackingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
     trackingName: string;
     trackingProps?: Record<string, any>;
}

/**
 * Button that automatically tracks clicks
 */
export function TrackingButton({
     trackingName,
     trackingProps,
     onClick,
     children,
     ...props
}: TrackingButtonProps) {
     const { trackButtonClick } = useAnalytics();

     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
          // Track the button click
          trackButtonClick(trackingName, trackingProps);

          // Call the original onClick handler if it exists
          if (onClick) {
               onClick(e);
          }
     };

     return (
          <button onClick={handleClick} {...props}>
               {children}
          </button>
     );
}

interface TrackingLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
     trackingName: string;
     trackingProps?: Record<string, any>;
}

/**
 * Link that automatically tracks clicks
 */
export function TrackingLink({
     trackingName,
     trackingProps,
     href,
     onClick,
     children,
     ...props
}: TrackingLinkProps) {
     const { trackLinkClick } = useAnalytics();

     const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          // Track the link click
          trackLinkClick(trackingName, href || '#', trackingProps);

          // Call the original onClick handler if it exists
          if (onClick) {
               onClick(e);
          }
     };

     return (
          <a href={href} onClick={handleClick} {...props}>
               {children}
          </a>
     );
}

interface TrackingFormProps extends FormHTMLAttributes<HTMLFormElement> {
     formName: string;
     trackingProps?: Record<string, any>;
}

/**
 * Form that automatically tracks submissions
 */
export function TrackingForm({
     formName,
     trackingProps,
     onSubmit,
     children,
     ...props
}: TrackingFormProps) {
     const { trackFormSubmission } = useAnalytics();

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          // Track the form submission
          trackFormSubmission(formName, trackingProps);

          // Call the original onSubmit handler if it exists
          if (onSubmit) {
               onSubmit(e);
          }
     };

     return (
          <form onSubmit={handleSubmit} {...props}>
               {children}
          </form>
     );
}
