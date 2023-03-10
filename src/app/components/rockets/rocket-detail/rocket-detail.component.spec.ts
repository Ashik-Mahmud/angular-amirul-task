import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetailComponent } from './rocket-detail.component';

describe('RocketDetailComponent', () => {
  let component: RocketDetailComponent;
  let fixture: ComponentFixture<RocketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
