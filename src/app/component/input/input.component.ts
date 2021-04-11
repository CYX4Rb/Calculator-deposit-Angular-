//import { StateService } from '../../services/state.service';
import { StateService } from '../../services/state-copy.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  isVisibleToolTip: boolean = false

  titleTooltipPeriod: string = 'Период'
  textTooltipPeriod: string = ''
  titleTooltipSumm: string = 'Cумма'
  textToolTipSumm: string = `Выберете сумму от: ${this.state.minSumm.value}` 
  constructor(
    public state: StateService
  ) { }
}
