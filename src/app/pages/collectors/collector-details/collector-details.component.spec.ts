import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDetailsComponent } from './collector-details.component';

describe('CollectorDetailsComponent', () => {
  let component: CollectorDetailsComponent;
  let fixture: ComponentFixture<CollectorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
