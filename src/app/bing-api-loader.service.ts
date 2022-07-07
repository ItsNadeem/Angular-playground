import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class BingApiLoaderService {
  private promise: Promise<unknown> | undefined;
  private url = 'https://www.bing.com/api/maps/mapcontrol?callback=_onBingLoaded&branch=release&key=AtIZfi-opfDS-OYCfadslk1zfaJKiv0oDpjAE3ZqyFLALiK0w5Rq1yYp1yfwb_VF';

  constructor(@Inject(DOCUMENT) private _documentRef: Document, @Inject(WINDOW) private _windowRef: Window) {}

  public load() {
    // First time 'load' is called?
    if (!this.promise) {

        // Make promise to load
        this.promise = new Promise( resolve => {

            // Set callback for when bing maps is loaded.
            this._windowRef['_onBingLoaded'] = () => {
                resolve('Bing Maps API loaded');
            };

            const node = this._documentRef.createElement('script');
            node.src = this.url;
            node.type = 'text/javascript';
            node.async = true;
            node.defer = true;
            this._documentRef.getElementsByTagName('head')[0].appendChild(node);
        });
    }

    // Always return promise. When 'load' is called many times, the promise is already resolved.
    return this.promise;
  }
}
