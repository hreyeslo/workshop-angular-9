import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>Hello {{name}}! - <ng-content></ng-content></p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
