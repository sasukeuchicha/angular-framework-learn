import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-example1',
  templateUrl: './parent-example1.component.html',
  styleUrls: ['./parent-example1.component.css'],
})
export class ParentExample1Component {
  initialValue = 0;

  changeValue(value: number) {
    this.initialValue = value;
  }
}
