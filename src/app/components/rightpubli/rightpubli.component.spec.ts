import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpubliComponent } from './rightpubli.component';

describe('RightpubliComponent', () => {
  let component: RightpubliComponent;
  let fixture: ComponentFixture<RightpubliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightpubliComponent]
    });
    fixture = TestBed.createComponent(RightpubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
