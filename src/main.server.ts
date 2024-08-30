import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { Appnavbar } from './nav/app.navbar';


const bootstrap = () => bootstrapApplication(Appnavbar, config);

export default bootstrap;
