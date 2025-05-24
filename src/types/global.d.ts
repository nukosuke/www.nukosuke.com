export {};

declare global {
  interface Window {
    // Google reCAPTCHA v3
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
