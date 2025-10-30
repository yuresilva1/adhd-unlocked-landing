// Google Ads tracking helper
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string | Date,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export const trackGoogleAdsEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackGoogleAdsConversion = (conversionLabel?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionLabel || 'AW-17679023576',
    });
  }
};

export const trackGoogleAdsPurchase = (value: number, currency = 'USD') => {
  trackGoogleAdsEvent('purchase', {
    value,
    currency,
  });
};
