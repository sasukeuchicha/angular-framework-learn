import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html',
  styleUrls: ['./d2.component.css'],
})
export class D2Component
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentChecked
{
  constructor() {}

  ngOnInit(): void {
    console.log('On Init called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes called');
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked called');
  }
  ngAfterViewInit(): void {
    console.log('After View Init called');
  }
  ngOnDestroy(): void {
    console.log('On Destroy Called');
  }
}
