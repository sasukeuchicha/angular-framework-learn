import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-example1',
  templateUrl: './child-example1.component.html',
  styleUrls: ['./child-example1.component.css'],
})
export class ChildExample1Component {
  @Input() value: number = 0;
  @Output() outputEmitter = new EventEmitter<number>();

  incrementValue() {
    this.outputEmitter.emit(this.value + 1);
  }
  decrementValue() {
    this.outputEmitter.emit(this.value - 1);
  }
}
