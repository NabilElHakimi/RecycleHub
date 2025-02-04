import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorListComponent } from './collector-list.component';

describe('CollectorListComponent', () => {
  let component: CollectorListComponent;
  let fixture: ComponentFixture<CollectorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
