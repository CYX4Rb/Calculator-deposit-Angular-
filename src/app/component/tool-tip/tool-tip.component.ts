import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent {
  @Input() title = ''
  @Input() text = ''
  isVisibleToolTip: boolean = false

  constructor() { }

  mouseEnter() {
    this.isVisibleToolTip = true
  }

  mouseLeave() {
    this.isVisibleToolTip = false
  }
}
