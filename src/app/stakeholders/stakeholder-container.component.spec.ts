import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderContainerComponent } from './stakeholder-container.component';

describe('StakeholderContainerComponent', () => {
  let component: StakeholderContainerComponent;
  let fixture: ComponentFixture<StakeholderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
