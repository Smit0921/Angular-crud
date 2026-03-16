import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhopLoaderService {
  private loaded = false;
  load(): Promise<void> {
    if (this.loaded) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[src="https://js.whop.com/static/checkout/loader.js"]');
      if (existing) {
        this.loaded = true;
        // small delay to allow script to initialize
        setTimeout(() => resolve(), 300);
        return;
      }
      const s = document.createElement('script');
      s.src = 'https://js.whop.com/static/checkout/loader.js';
      s.async = true;
      s.defer = true;
      s.onload = () => { this.loaded = true; resolve(); };
      s.onerror = (e) => reject(e);
      document.head.appendChild(s);
    });
  }
}
