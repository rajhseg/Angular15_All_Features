import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpanelheaderComponent } from './rpanelheader.component';

describe('RpanelheaderComponent', () => {
  let component: RpanelheaderComponent;
  let fixture: ComponentFixture<RpanelheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpanelheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpanelheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
