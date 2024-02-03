import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-nestle-stock',
  templateUrl: './nestle-stock.component.html',
  styleUrls: ['./nestle-stock.component.css'],
})
export class NestleStockComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  @Output() stockValueEmitter: EventEmitter<{ id: number; price: number }> =
    new EventEmitter<{ id: number; price: number }>();
  @Output() stockNameEmmiter: EventEmitter<{ id: number; name: string }> =
    new EventEmitter<{ id: number; name: string }>();
  stockId = 2;
  stockName = 'Nestle Ltd';
  stockPrice = 1200;
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
