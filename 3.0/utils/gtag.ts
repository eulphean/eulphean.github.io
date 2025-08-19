// Google Analytics tracking functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = 'G-4JFCRE0BF9'; // Replace with your actual GA4 measurement ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track menu link clicks
export const trackMenuClick = (linkName: string) => {
  event('click', 'menu_navigation', linkName);
};

// Track commercial page visits
export const trackCommercialPageView = () => {
  event('page_view', 'commercial_page', 'commercial_visit');
};