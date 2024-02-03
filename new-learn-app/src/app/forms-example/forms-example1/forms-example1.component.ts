import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-example1',
  templateUrl: './forms-example1.component.html',
  styleUrls: ['./forms-example1.component.css'],
})
export class FormsExample1Component {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
