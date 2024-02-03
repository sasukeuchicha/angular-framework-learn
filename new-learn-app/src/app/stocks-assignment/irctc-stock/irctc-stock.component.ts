import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-irctc-stock',
  templateUrl: './irctc-stock.component.html',
  styleUrls: ['./irctc-stock.component.css'],
})
export class IrctcStockComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  @Output() stockValueEmitter: EventEmitter<{ id: number; price: number }> =
    new EventEmitter<{ id: number; price: number }>();
  @Output() stockNameEmmiter: EventEmitter<{ id: number; name: string }> =
    new EventEmitter<{ id: number; name: string }>();

  stockId = 1;
  stockName = 'IRCTC';
  stockPrice = 100;
  randomNumber = 0;

  ngOnInit(): void {
    this.stockNameEmmiter.emit({ id: this.stockId, name: this.stockName });
    this.subscription = interval(1000).subscribe(() => {
      this.randomNumber = Math.random() * 3;
      this.stockValueEmitter.emit({
        id: this.stockId,
        price: this.stockPrice + Number(this.randomNumber.toPrecision(5)),
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
