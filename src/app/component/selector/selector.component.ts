import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StateService } from 'src/app/services/state-copy.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  deposit = new FormControl('unic')
  constructor(
    public state: StateService
  ) { }
}
