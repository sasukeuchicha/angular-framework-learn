import { Component } from '@angular/core';

@Component({
  selector: 'app-total-component',
  templateUrl: './total-component.component.html',
  styleUrls: ['./total-component.component.css']
})
export class TotalComponentComponent {
  groupSum: number = 0

  totalSumUpdate(sumTotal: number){
    this.groupSum = sumTotal
  }
}
