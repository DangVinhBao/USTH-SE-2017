import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <my-hotspot></my-hotspot>
  `,
  styles: [`
    h1 {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'Image Hotspot';
}
