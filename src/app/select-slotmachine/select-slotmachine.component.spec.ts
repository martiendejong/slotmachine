import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSlotmachineComponent } from './select-slotmachine.component';

describe('SelectSlotmachineComponent', () => {
  let component: SelectSlotmachineComponent;
  let fixture: ComponentFixture<SelectSlotmachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSlotmachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSlotmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
