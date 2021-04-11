import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { ResultComponent } from './component/result/result.component';
import { SliceSumPipe } from './pipes/slice-sum.pipe';
import { SelectorComponent } from './component/selector/selector.component';
import { ToolTipComponent } from './component/tool-tip/tool-tip.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ResultComponent,
    SliceSumPipe,
    SelectorComponent,
    ToolTipComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
