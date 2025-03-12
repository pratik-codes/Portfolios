'use client';

import { ReactNode, useEffect } from 'react';
import { usePageViewTracking } from '../lib/hooks/useAnalytics';
import analytics from '../lib/analytics';

interface AnalyticsProviderProps {
     children: ReactNode;
     userId?: string;
     userProperties?: Record<string, any>;
}

/**
 * AnalyticsProvider component that initializes analytics
 * and automatically tracks page views
 */
export default function AnalyticsProvider({
     children,
     userId,
     userProperties,
}: AnalyticsProviderProps) {
     // Track page views automatically
     usePageViewTracking();

     // Identify user if userId is provided
     useEffect(() => {
          if (userId) {
               analytics.identify({
                    userId,
                    userProperties,
               });
          }
     }, [userId, userProperties]);

     return <>{children}</>;
}

/**
 * HOC to wrap components with analytics tracking
 */
export function withAnalytics<P extends object>(Component: React.ComponentType<P>) {
     return function WrappedComponent(props: P) {
          usePageViewTracking();
          return <Component {...props} />;
     };
}
