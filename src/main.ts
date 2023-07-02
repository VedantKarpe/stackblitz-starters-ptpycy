import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AngularSignalsParentComponent } from './angular-signals-parent/angular-signals-parent.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [AngularSignalsParentComponent, CommonModule],
  template: `
    <app-angular-signals-parent/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
