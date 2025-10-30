// Facebook Pixel tracking helper
declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

export const trackFBEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

export const trackViewContent = (contentName: string, value?: number) => {
  trackFBEvent('ViewContent', {
    content_name: contentName,
    currency: 'USD',
    value: value || 9.97,
  });
};

export const trackInitiateCheckout = (value?: number) => {
  trackFBEvent('InitiateCheckout', {
    currency: 'USD',
    value: value || 9.97,
  });
};

export const trackPurchase = (value: number, currency = 'USD') => {
  trackFBEvent('Purchase', {
    currency,
    value,
  });
};
