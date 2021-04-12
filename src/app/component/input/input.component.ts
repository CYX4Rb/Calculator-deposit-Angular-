import { StateService } from '../../services/state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  isVisibleToolTip: boolean = false

  titleTooltipPeriod: string = 'Tooltic 1'
  textTooltipPeriod: string = 'Text of tooltip 1'
  titleTooltipSumm: string = 'Tooltic 2'
  textToolTipSumm: string = 'Text of tooltip 2'

  constructor(
    public state: StateService
  ) { }
}
