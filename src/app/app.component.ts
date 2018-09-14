import { Component } from '@angular/core';


import './layouts/custom/_content/app.less';
import './layouts/custom/_content/modal.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  onActivate() {
    window.scrollTo(0, 0);
  }
}
