import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css'],
})
export class HoldingsComponent implements OnInit {
  totalCurrentPrice: number = 0;
  holdings: Map<number, number> = new Map<number, number>();
  holdingsName: Map<number, string> = new Map<number, string>();
  holdingsPrice: Map<number, number> = new Map<number, number>();
  constructor() {
    this.holdings.set(1, 10);
    this.holdings.set(2, 22);
  }

  ngOnInit(): void {}

  handleStockName(stockData: { id: number; name: string }) {
    console.log('Received Stock Name Data:', stockData);
    this.holdingsName.set(stockData.id, stockData.name);
  }

  handleStockPrice(stockPriceData: { id: number; price: number }) {
    console.log('Received Stock Price Data:', stockPriceData);

    if (this.holdings.has(stockPriceData.id)) {
      let previousPrice = this.holdingsPrice.get(stockPriceData.id) || 0;
      this.updateTotalCurrentPrice(
        stockPriceData.id,
        previousPrice,
        stockPriceData.price
      );
      this.holdingsPrice.set(stockPriceData.id, stockPriceData.price);
    }
  }

  updateTotalCurrentPrice(
    stockId: number,
    previousPrice: number,
    currentPrice: number
  ) {
    let quantity = this.holdings.get(stockId) || 0;
    this.totalCurrentPrice += (currentPrice - previousPrice) * quantity;
  }
}
