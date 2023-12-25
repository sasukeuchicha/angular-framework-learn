import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(){}
  displayNow:number=0;
  clickedEvent = [];
  displayContent(){
    this.displayNow+=1;
    this.clickedEvent.push(new Date());
  }
}
