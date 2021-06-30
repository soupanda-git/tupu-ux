import { Component } from '@angular/core';

@Component({
  selector: 'tupu-app',
  template: `
        <router-outlet></router-outlet>
    `,
})
export class TupuAppComponent {
  title = 'tupu';
}
