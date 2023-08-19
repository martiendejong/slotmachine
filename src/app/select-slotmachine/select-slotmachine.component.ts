import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-slotmachine',
  templateUrl: './select-slotmachine.component.html',
  styleUrls: ['./select-slotmachine.component.less']
})
export class SelectSlotmachineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() selectSlotMachine = new EventEmitter<SlotMachine>();

  select(slotmachine: SlotMachine)
  {
    this.selectSlotMachine.emit(slotmachine);
  };

  slotmachines: SlotMachine[] = [ 
    { 
      alias: 'fruitmachine',
      name: 'Fruitmachine',
      rolls: 5,
      options: [
        {
          alias: 'aardbei',
          value: 10,
          name: 'Aardbei',
          imageUrl: 'images/4786848_strawberry_healthy_food_fresh_meal_fruit.png',
        },
        {
          alias: 'citroen',
          value: 5,
          name: 'Citroen',
          imageUrl: 'images/4786845_food_lemon_fresh_meal_fruit_healthy.png',
        },
        {
          alias: 'kers',
          value: 2,
          name: 'Kers',
          imageUrl: 'images/4786854_cherry_healthy_food_fresh_meal_fruit.png',
        },
        {
          alias: 'ananas',
          value: 2,
          name: 'Ananas',
          imageUrl: 'images/4786846_fruit_healthy_food_pineapple_fresh_meal.png',
        }
      ],
      prizes: [
        WinChance.threeOfTheSame,
        WinChance.fourOfTheSame,
        WinChance.fiveOfTheSame
      ]
    },
    { 
      alias: 'fruitmachine',
      name: 'Fruitmachine',
      rolls: 5,
      options: [
        {
          alias: 'aardbei',
          value: 10,
          name: 'Aardbei',
          imageUrl: 'images/4786848_strawberry_healthy_food_fresh_meal_fruit.png',
        },
        {
          alias: 'citroen',
          value: 5,
          name: 'Citroen',
          imageUrl: 'images/4786845_food_lemon_fresh_meal_fruit_healthy.png',
        },
        {
          alias: 'kers',
          value: 2,
          name: 'Kers',
          imageUrl: 'images/4786854_cherry_healthy_food_fresh_meal_fruit.png',
        },
        {
          alias: 'ananas',
          value: 2,
          name: 'Ananas',
          imageUrl: 'images/4786846_fruit_healthy_food_pineapple_fresh_meal.png',
        }
      ],
      prizes: [
        WinChance.threeOfTheSame,
        WinChance.fourOfTheSame,
        WinChance.fiveOfTheSame
      ]
    }    
  ];
}

export class Identifiable
{
  constructor(public alias: string, public name: string)
  {

  }
}

export class SlotMachine extends Identifiable
{
  constructor
  (
    alias: string, 
    name: string, 
    public rolls: number, 
    public options: SlotOption[], 
    public prizes: WinChance[]
  )
  {
    super(alias, name);
  }
}

export class SlotOption extends Identifiable
{
  constructor
  (
    alias: string, 
    name: string, 
    public value: number, 
    public imageUrl: string
  )
  {
    super(alias, name);
  }
}

export class WinChanceResult
{
  constructor
  (
    public win: boolean, 
    public amount: number,
    public description: string
  )
  {

  }
}

export class WinChance
{
  constructor
  (
    public check: (combination: SlotOption[]) => WinChanceResult
  )
  {

  }

  static threeOfTheSame: WinChance = {
    check: (combination: SlotOption[]): WinChanceResult => 
    {
      var groups = groupBy(combination, i => i.alias);
      var winGroups = groups.filter(group => group.items.length == 3);
      if(winGroups.length == 0)
      {
        return {
          win: false,
          amount: 0,
          description: ''
        };
      }

      return {
        win: true,
        amount: winGroups[0].items[0].value * 5,
        description: ''
      };
    }
  };

  static fourOfTheSame: WinChance = {
    check: (combination: SlotOption[]): WinChanceResult => 
    {
      var groups = groupBy(combination, i => i.alias);
      var winGroups = groups.filter(group => group.items.length == 4);
      if(winGroups.length == 0)
      {
        return {
          win: false,
          amount: 0,
          description: ''
        };
      }

      return {
        win: true,
        amount: winGroups[0].items[0].value * 10,
        description: ''
      };
    }
  };  

  static fiveOfTheSame: WinChance = {
    check: (combination: SlotOption[]): WinChanceResult => 
    {
      var groups = groupBy(combination, i => i.alias);
      var winGroups = groups.filter(group => group.items.length == 5);
      if(winGroups.length == 0)
      {
        return {
          win: false,
          amount: 0,
          description: ''
        };
      }

      return {
        win: true,
        amount: winGroups[0].items[0].value * 50,
        description: ''
      };
    }
  };
}

export class Grouping
{
  constructor(
    public key: any,
    public items: any[]
  )
  {

  }
}

/**
 * @description
 * Takes an Array<V>, and a grouping function,
 * and returns a Map of the array grouped by the grouping function.
 *
 * @param list An array of type V.
 * @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
 *                  K is generally intended to be a property key of V.
 *
 * @returns Map of the array grouped by the grouping function.
 */
export function groupBy(list: any[], keyGetter: (item: any) => any): Grouping[] {
  var groupings: Grouping[] = [];
  list.forEach((item) => 
  {
    const key = keyGetter(item);
    var existingGroupings = groupings.filter(gg => gg.key == key);
    if(existingGroupings.length > 0)
    {
      existingGroupings[0].items.push(item);
    }
    else
    {  
      groupings.push({key: key, items: [item]});
    }
  });
  return groupings;
}