import { StateService } from '../../services/state.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements DoCheck {

  isVisibleToolTip: boolean = false

  titleTooltipPeriod: string = 'Tooltic 1'
  textTooltipPeriod: string = 'Text of tooltip 1'
  titleTooltipSumm: string = 'Tooltic 2'
  textToolTipSumm: string = 'Text of tooltip 2'

  period: HTMLElement | 0 = 0
  sum: HTMLElement | 0 = 0

  selectedPeriod: number = this.state.selectedPeriod.value
  selectedSum: number = this.state.selectedSumm.value
  constructor(
    public state: StateService
  ) { }
  
  changePeriod(period: any, element: HTMLElement): void {
    this.selectedPeriod = period.target.value
    this.state.changePeriod(period.target.value)
    this.setWidthSelectedPeriod(element)
  }

  changeSum(sum: any, element: HTMLElement): void{
    this.selectedSum = sum.target.value
    console.log(this.selectedSum)
    this.state.changeSumm(sum.target.value)
    this.setWidthSelectedSum(element)
  }

  setWidthSelectedPeriod(period: HTMLElement): void {
    this.period = period
    period.style.width = 100 * (this.state.selectedPeriod.value - this.state.minPeriod.value)/(365 - this.state.minPeriod.value) + '%'
  }

  setWidthSelectedSum(sum: HTMLElement): void {
    this.sum = sum
    sum.style.width = 100 * (this.state.selectedSumm.value - this.state.minSumm.value)/(500000000 - this.state.minSumm.value) + '%'
  }

  ngDoCheck() {
    if(this.sum !== 0)this.setWidthSelectedSum(this.sum)
    if(this.period !== 0)this.setWidthSelectedPeriod(this.period)
  }
}