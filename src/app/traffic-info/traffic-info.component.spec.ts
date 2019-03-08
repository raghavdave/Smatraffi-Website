import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficInfoComponent } from './traffic-info.component';

describe('TrafficInfoComponent', () => {
  let component: TrafficInfoComponent;
  let fixture: ComponentFixture<TrafficInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
