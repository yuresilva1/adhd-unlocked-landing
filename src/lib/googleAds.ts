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

export const trackGoogleAdsConversion = (url?: string) => {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17679023576/WQhZCMf33bYbENj7ge5B',
      value: 1.0,
      currency: 'BRL',
      transaction_id: '',
      event_callback: callback,
    });
  }

  return false;
};

export const trackGoogleAdsPurchase = (value: number, currency = 'USD') => {
  trackGoogleAdsEvent('purchase', {
    value,
    currency,
  });
};
