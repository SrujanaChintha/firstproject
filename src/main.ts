import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Appnavbar } from './nav/app.navbar';

bootstrapApplication(Appnavbar, appConfig)
  .catch((err) => console.error(err));
