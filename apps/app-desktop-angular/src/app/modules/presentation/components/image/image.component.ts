import { Component, Input } from '@angular/core';
import { ImageInformationModel } from '@libraries/lib-common';

@Component({
  selector: 'app-image',
  template: `<img class="image" src="assets/images/planning-1.png" />`,
  styles: [
    `
      :host {
        height: 100%;
        width: 100%;
        display: flex;
      }

      .image {
        margin: auto;
        object-fit: contain;
      }
    `,
  ],
})
export class ImageComponent {
  @Input() information: ImageInformationModel;
}