import { Component } from '@angular/core';

@Component({
  selector: 'tupu-app',
  template: `
    <tupu-top-nav></tupu-top-nav>
    <router-outlet></router-outlet>
    `,
})
export class TupuAppComponent {
  title = 'tupu';
}
