import { CalculatorService } from './calculator.service';
import { StateType, DepositType, One_SummType, ParamType } from '../models/StateModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../../depcalc.json'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: StateType = data
  public typesDeposit: DepositType[] = this.state.deposits

  public selectedDeposit: BehaviorSubject<DepositType> = new BehaviorSubject(this.state.deposits[0])
  public selectedPeriod: BehaviorSubject<number> = new BehaviorSubject(1)
  public selectedSumm: BehaviorSubject<number> = new BehaviorSubject(1000000)
  public selectedRate: BehaviorSubject<number> = new BehaviorSubject(2.0)

  private selectedParam: ParamType = this.selectedDeposit.value.param[0]
  private summsAndRate: One_SummType[] = this.selectedParam.summs_and_rate
  private selectedSummAndRate: One_SummType = this.selectedParam.summs_and_rate[0]

  public minPeriod: BehaviorSubject<number> = new BehaviorSubject(this.selectedDeposit.value.param[0].period_from)
  public minSumm: BehaviorSubject<number> = new BehaviorSubject(this.summsAndRate[0].summ_from)

  constructor(
    private calculator: CalculatorService
  ) {
    this.calculator.calculateProfit(this.selectedSumm.value, this.selectedPeriod.value, this.selectedRate.value)
  }

  changeDeposit(deposit: string): void {
    const selectedDeposit = this.typesDeposit.find(el => el.code === deposit)
    if (selectedDeposit != null) {
      this.selectedDeposit.next(selectedDeposit)
    }

    this.updatePeriodByDeposit();
    this.defineEveryThink();
    this.selectedSumm.next(this.minSumm.value)
    this.updateReferenceValues()
  }

  changePeriod(period: number): void {
    this.selectedPeriod.next(period)

    this.defineEveryThink()
    this.updateReferenceValues()
  }

  changeSumm(summ: number): void {
    this.selectedSumm.next(summ)

    this.updateReferenceValues()
  }

  private defineEveryThink() {
    this.defineParam()
    this.defineDeltaSumm()
  }

  private defineParam(): void {
    const param = this.selectedDeposit.value.param

    if (param[param.length - 1].period_from <= this.selectedPeriod.value) {
      this.selectedParam = param[param.length - 1]
      this.summsAndRate = this.selectedParam.summs_and_rate
    } else {
      for (let i = 0; i < param.length - 1; i++) {
        if (param[i + 1].period_from > this.selectedPeriod.value && this.selectedPeriod.value >= param[i].period_from) {
          this.selectedParam = param[i];
          this.summsAndRate = this.selectedParam.summs_and_rate
        }
      }
    }
  }

  private defineDeltaSumm(): void {
    this.minSumm.next(this.selectedParam.summs_and_rate[0].summ_from)
    if (this.minSumm.value > this.selectedSumm.value) {
      this.selectedSumm.next(this.minSumm.value)
    }
  }

  private defineSummAndRate(): void {
    if (this.selectedSumm.value >= this.summsAndRate[this.summsAndRate.length - 1].summ_from) {
      this.selectedSummAndRate = this.summsAndRate[this.summsAndRate.length - 1]
    } else {
      for (let i = 0; i < this.summsAndRate.length - 1; i++) {
        if (this.summsAndRate[i + 1].summ_from > this.selectedSumm.value && this.selectedSumm.value >= this.summsAndRate[i].summ_from) {
          this.selectedSummAndRate = this.summsAndRate[i]
        }
      }
    }
  }

  private updatePeriodByDeposit() {
    this.minPeriod.next(this.selectedDeposit.value.param[0].period_from)
    this.selectedPeriod.next(this.minPeriod.value)
  }

  private updateReferenceValues() {
    this.defineSummAndRate()
    this.selectedRate.next(this.selectedSummAndRate.rate)
    this.calculator.calculateProfit(this.selectedSumm.value, this.selectedPeriod.value, this.selectedRate.value)
  }
}