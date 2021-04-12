import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public profit: BehaviorSubject<string> = new BehaviorSubject('0')
  public summInEndPeriod: BehaviorSubject<string> = new BehaviorSubject('0')

  constructor(
  ) { }

  calculateProfit(summ: number, period: number, rate: number): void {
    this.profit.next((summ / 100 * period / 365 * rate).toFixed(2))
    this.summInEndPeriod.next((+summ + parseFloat(this.profit.value)).toFixed(2))
  }
}
