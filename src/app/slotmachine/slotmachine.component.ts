import { Component, Input, OnInit } from '@angular/core';
import { SlotMachine, SlotOption, WinChanceResult } from '../select-slotmachine/select-slotmachine.component';

@Component({
  selector: 'app-slotmachine',
  templateUrl: './slotmachine.component.html',
  styleUrls: ['./slotmachine.component.less']
})
export class SlotmachineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() slotmachine: SlotMachine = { 
    alias: 'nomachine',
    name: 'Geen gokkast',
    options: [],
    prizes: [],
    rolls: 0
  };

  roll() {
    var elements = document.getElementsByClassName("slot-roll");
    var combination: SlotOption[] = [];
    for(var i = 0; i < this.slotmachine.rolls; ++i)
    {
      var options = this.slotmachine.options;
      var optionIndex = Math.floor(Math.random() * options.length);
      combination.push(options[optionIndex]);
      var elem = elements[i] as HTMLElement;
      elem.scrollTop = optionIndex * (window.innerWidth * 0.15)
    }
  }
}
