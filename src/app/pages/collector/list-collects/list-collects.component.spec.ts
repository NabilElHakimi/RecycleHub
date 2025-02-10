import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollectsComponent } from './list-collects.component';

describe('ListCollectsComponent', () => {
  let component: ListCollectsComponent;
  let fixture: ComponentFixture<ListCollectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCollectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCollectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
