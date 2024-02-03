import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from '../models/group';
import { Stock } from '../models/stock';

@Component({
  selector: 'app-all-group',
  templateUrl: './all-group.component.html',
  styleUrls: ['./all-group.component.css'],
})
export class AllGroupComponent {
  stocks: Stock[] = [
    { stockId: 1, stockName: 'IRCTC', stockPrice: 1000, stockQuantity: 22 },
    { stockId: 2, stockName: 'IRFC', stockPrice: 1000, stockQuantity: 3 },
    { stockId: 3, stockName: 'Suzlon', stockPrice: 40, stockQuantity: 54 },
    { stockId: 4, stockName: 'Adani', stockPrice: 1200, stockQuantity: 12 },
    { stockId: 5, stockName: 'MRF', stockPrice: 120000, stockQuantity: 4 },
    { stockId: 6, stockName: 'TCS', stockPrice: 2400, stockQuantity: 7 },
    { stockId: 7, stockName: 'Cyient', stockPrice: 7200, stockQuantity: 9 },
  ];

  groups: Group[] = [
    {
      groupId: 1,
      groupName: 'Railways',
      stocksByIds: [1, 2],
      groupTotal: 0,
    },
    {
      groupId: 2,
      groupName: 'Energy',
      stocksByIds: [3, 4],
      groupTotal: 0,
    },
    {
      groupId: 3,
      groupName: 'Technology',
      stocksByIds: [6, 7],
      groupTotal: 0,
    },
    {
      groupId: 4,
      groupName: 'Materials',
      stocksByIds: [5],
      groupTotal: 0,
    },
  ];

  @Output() totalSumEmitter = new EventEmitter<number>();

  changes(groupId: number, stockIds: number[]) {
    let groupFound = this.groups.find((group) => group.groupId === groupId);
    if (groupFound == undefined) {
      return;
    }
    let index = this.groups.indexOf(groupFound);
    let stocksSum = 0;
    stocksSum = this.sum(stockIds);
    groupFound.groupTotal = stocksSum;
    this.groups[index].groupTotal = stocksSum;
    this.updateTotalSum();
  }

  sum(stockIds: number[]) {
    let stocksFound = this.getAllStocks(stockIds);
    let total = stocksFound.reduce(
      (total, stock) => total + stock.stockPrice * stock.stockQuantity,
      0
    );
    return total;
  }
  updateTotalSum() {
    let totalSum = this.groups.reduce(
      (total, group) => total + group.groupTotal,
      0
    );
    this.totalSumEmitter.emit(totalSum);
  }

  getAllStocks(stockIds: number[]): Stock[] {
    let allStocks: Stock[] = this.stocks.filter((stock) => {
      return stockIds.includes(stock.stockId);
    });
    return allStocks;
  }
}
