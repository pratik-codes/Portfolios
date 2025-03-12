'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import analytics from '../analytics';

/**
 * Hook that automatically tracks page views when the route changes
 *
 * Note: We're avoiding useSearchParams() to prevent the need for Suspense boundaries
 * in every component that uses this hook.
 */
export function usePageViewTracking() {
     const pathname = usePathname();

     useEffect(() => {
          // We need to run this on the client side only
          if (typeof window === 'undefined') return;

          // Track page view when the component mounts and when the route changes
          const path = pathname || window.location.pathname;

          analytics.trackPageView({
               path,
               title: document.title,
               referrer: document.referrer,
          });
     }, [pathname]);

     return null;
}

/**
 * Hook that returns utility functions for tracking
 */
export function useAnalytics() {
     const pathname = usePathname();

     const trackButtonClick = useCallback(
          (buttonName: string, additionalProps?: Record<string, any>) => {
               analytics.trackClick({
                    element: 'button',
                    page: pathname || '',
                    text: buttonName,
                    ...additionalProps,
               });
          },
          [pathname]
     );

     const trackLinkClick = useCallback(
          (linkText: string, linkUrl: string, additionalProps?: Record<string, any>) => {
               analytics.trackClick({
                    element: 'link',
                    page: pathname || '',
                    text: linkText,
                    location: linkUrl,
                    ...additionalProps,
               });
          },
          [pathname]
     );

     const trackFormSubmission = useCallback(
          (formName: string, additionalProps?: Record<string, any>) => {
               analytics.track('Form Submission', {
                    formName,
                    page: pathname || '',
                    ...additionalProps,
               });
          },
          [pathname]
     );

     return {
          trackButtonClick,
          trackLinkClick,
          trackFormSubmission,
          track: analytics.track.bind(analytics),
     };
}

export default useAnalytics;
