import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-assessment',
  templateUrl: './binding-assessment.component.html',
  styleUrls: ['./binding-assessment.component.css'],
})
export class BindingAssessmentComponent {
  color = 'red';
  changeTextColor() {
    if (this.color == 'red') {
      this.color = 'blue';
    } else {
      this.color = 'red';
    }
  }
}
