import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Stock } from '../models/stock';
@Component({
  selector: 'app-all-stocks',
  templateUrl: './all-stocks.component.html',
  styleUrls: ['./all-stocks.component.css'],
})
export class AllStocksComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  @Input() stocksNeeded: Stock[] = [];
  @Output() stockEmitter = new EventEmitter();

  informQuantityChange() {
    this.stockEmitter.emit();
  }
  informPriceChange() {
    this.stockEmitter.emit();
  }
  ngOnInit() {
    this.informPriceChange();
    this.informQuantityChange();
  }
  ngOnDestroy(): void {}
}
