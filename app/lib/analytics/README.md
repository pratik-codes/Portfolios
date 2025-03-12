# Analytics Service

This is an analytics service abstraction built on top of Mixpanel. It provides a simple interface for tracking events, page views, and user actions in your Next.js application.

## Setup

1. Make sure you have a `.env` file with the following variables:
   ```
   NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
   MIXPANEL_API_SECRET=your_mixpanel_secret
   ```

2. The analytics service is automatically initialized when imported, and the AnalyticsProvider is already integrated in the root layout.

## Usage

### Basic Event Tracking

```tsx
import analytics from '@/app/lib/analytics';

// Track a custom event
analytics.track('Button Clicked', {
  buttonName: 'Sign Up',
  location: 'Hero Section'
});
```

### Hooks

```tsx
import { useAnalytics } from '@/app/lib/hooks/useAnalytics';

function MyComponent() {
  const { trackButtonClick, trackLinkClick, trackFormSubmission } = useAnalytics();

  const handleButtonClick = () => {
    // Your business logic

    // Track the event
    trackButtonClick('Submit Button', {
      formName: 'Contact Form'
    });
  };

  return (
    <button onClick={handleButtonClick}>Submit</button>
  );
}
```

### Pre-built Tracking Components

```tsx
import { TrackingButton, TrackingLink, TrackingForm } from '@/app/components/AnalyticsTrackingComponents';

function MyComponent() {
  return (
    <div>
      {/* Button that automatically tracks clicks */}
      <TrackingButton
        trackingName="Sign Up"
        trackingProps={{ location: 'Hero Section' }}
        onClick={() => console.log('Button clicked')}
      >
        Sign Up
      </TrackingButton>

      {/* Link that automatically tracks clicks */}
      <TrackingLink
        href="/about"
        trackingName="About Link"
        trackingProps={{ location: 'Navigation' }}
      >
        About Us
      </TrackingLink>

      {/* Form that automatically tracks submissions */}
      <TrackingForm
        formName="Contact Form"
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
        }}
      >
        {/* Form fields */}
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </TrackingForm>
    </div>
  );
}
```

### User Identification

```tsx
import analytics from '@/app/lib/analytics';

// Identify a user
analytics.identify({
  userId: 'user123',
  userProperties: {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'premium'
  }
});

// Reset user identification
analytics.reset();
```

## Events Tracked Automatically

- **Page Views**: Tracked automatically through the `AnalyticsProvider` component
- **Button Clicks**: When using the `TrackingButton` component
- **Link Clicks**: When using the `TrackingLink` component
- **Form Submissions**: When using the `TrackingForm` component

## Event Properties

All events include these default properties:
- `timestamp`: ISO string of when the event occurred
- For page views: `path`, `title`, `referrer`, `url`
- For clicks: `element`, `page`, `text`, `location` (if available)
