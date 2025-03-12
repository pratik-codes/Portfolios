'use client';

import mixpanel from 'mixpanel-browser';

// Types for tracked events
export interface PageViewEvent {
     path: string;
     title?: string;
     referrer?: string;
}

export interface ClickEvent {
     element: string;
     page: string;
     text?: string;
     location?: string;
}

export interface UserIdentifyProps {
     userId: string;
     userProperties?: Record<string, any>;
}

// Main analytics class
class Analytics {
     private initialized = false;
     private isLocalhost = false;

     constructor() {
          // Initialize Mixpanel when this class is instantiated
          if (typeof window !== 'undefined') {
               // Check if this is localhost environment
               this.isLocalhost = window.location.hostname === 'localhost' ||
                    window.location.hostname === '127.0.0.1';

               // Only initialize if not on localhost
               if (!this.isLocalhost) {
                    this.init();
               } else {
                    console.log('Analytics disabled on localhost environment');
               }
          }
     }

     private init(): void {
          if (this.initialized) return;

          const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

          if (!token) {
               console.warn('Mixpanel token is not defined. Analytics will be disabled.');
               return;
          }

          try {
               mixpanel.init(token, {
                    debug: process.env.NODE_ENV !== 'production',
                    track_pageview: false, // We'll handle this manually
                    persistence: 'localStorage',
               });
               this.initialized = true;
               console.log('Analytics initialized with Mixpanel');
          } catch (error) {
               console.error('Failed to initialize analytics:', error);
          }
     }

     /**
      * Track a custom event
      */
     track(eventName: string, properties?: Record<string, any>): void {
          // Skip tracking on localhost
          if (this.isLocalhost) {
               console.log(`[Analytics - localhost] Track event: ${eventName}`, properties);
               return;
          }

          if (!this.initialized) return;

          try {
               mixpanel.track(eventName, {
                    ...properties,
                    timestamp: new Date().toISOString(),
               });
          } catch (error) {
               console.error(`Failed to track event "${eventName}":`, error);
          }
     }

     /**
      * Track a page view
      */
     trackPageView({ path, title, referrer }: PageViewEvent): void {
          // Skip tracking on localhost
          if (this.isLocalhost) {
               console.log(`[Analytics - localhost] Page view: ${path}`);
               return;
          }

          this.track('Page View', {
               path,
               title: title || document.title,
               referrer: referrer || document.referrer,
               url: window.location.href,
          });
     }

     /**
      * Track a button/element click
      */
     trackClick({ element, page, text, location }: ClickEvent): void {
          // Skip tracking on localhost
          if (this.isLocalhost) {
               console.log(`[Analytics - localhost] Click: ${element} (${text}) on ${page}`);
               return;
          }

          this.track('Element Click', {
               element,
               page,
               text,
               location,
          });
     }

     /**
      * Identify a user
      */
     identify({ userId, userProperties }: UserIdentifyProps): void {
          // Skip tracking on localhost
          if (this.isLocalhost) {
               console.log(`[Analytics - localhost] Identify user: ${userId}`, userProperties);
               return;
          }

          if (!this.initialized) return;

          try {
               mixpanel.identify(userId);

               if (userProperties) {
                    mixpanel.people.set(userProperties);
               }
          } catch (error) {
               console.error('Failed to identify user:', error);
          }
     }

     /**
      * Reset the user identity
      */
     reset(): void {
          // Skip tracking on localhost
          if (this.isLocalhost) {
               console.log(`[Analytics - localhost] Reset user identity`);
               return;
          }

          if (!this.initialized) return;

          try {
               mixpanel.reset();
          } catch (error) {
               console.error('Failed to reset user:', error);
          }
     }
}

// Create a singleton instance
const analytics = new Analytics();

export default analytics;
