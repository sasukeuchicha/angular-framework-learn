import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-example',
  templateUrl: './encapsulation-example.component.html',
  styleUrls: ['./encapsulation-example.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EncapsulationExampleComponent {}
