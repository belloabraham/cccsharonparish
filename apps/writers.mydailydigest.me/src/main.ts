import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import DOMPurify from 'isomorphic-dompurify';
declare const window: any;

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: (input: any, sink: any) => {
      return DOMPurify.sanitize(input, {
        RETURN_TRUSTED_TYPE: true,
      }) as any;
    },
    //Permits src to be set for script url by non angular code
    //The browser 'default' CSP policy approves that this url is safe irrespective of any url
    createScriptURL: (string: any) => string,
  });
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
