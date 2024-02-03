import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-example2',
  templateUrl: './encapsulation-example2.component.html',
  styleUrls: ['./encapsulation-example2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class EncapsulationExample2Component {

}
