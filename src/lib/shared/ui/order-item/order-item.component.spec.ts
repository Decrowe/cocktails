import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueItemComponent } from './order-item.component';

describe('QueueItemComponent', () => {
  let component: QueueItemComponent;
  let fixture: ComponentFixture<QueueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
