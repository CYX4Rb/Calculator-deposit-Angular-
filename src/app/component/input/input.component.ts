//import { StateService } from '../../services/state.service';
import { StateService } from '../../services/state-copy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  isVisibleToolTip: boolean = false
  constructor(
    public state: StateService
  ) { }
  mouseEnter(){
    this.isVisibleToolTip = true
 }

 mouseLeave(){
   this.isVisibleToolTip = false
 }

  ngOnInit(): void {
  }
}
