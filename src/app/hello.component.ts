import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<p>Hello {{name}}! - <ng-content></ng-content></p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() name: string;
  @Output() count: EventEmitter<number> = new EventEmitter<number>();

  // Añadir contador de spans y emitirlo por el output
}
