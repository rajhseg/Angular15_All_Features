import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpanelrowComponent } from './rpanelrow.component';

describe('RpanelrowComponent', () => {
  let component: RpanelrowComponent;
  let fixture: ComponentFixture<RpanelrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpanelrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpanelrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
