import { Component } from '@angular/core';
import { SlotMachine } from './select-slotmachine/select-slotmachine.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'gokkasten';
  slotmachine: SlotMachine | null = null;
}
