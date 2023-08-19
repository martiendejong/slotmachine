import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectSlotmachineComponent } from './select-slotmachine/select-slotmachine.component';
import { SlotmachineComponent } from './slotmachine/slotmachine.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectSlotmachineComponent,
    SlotmachineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
