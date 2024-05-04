import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpubliComponent } from './leftpubli.component';

describe('LeftpubliComponent', () => {
  let component: LeftpubliComponent;
  let fixture: ComponentFixture<LeftpubliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftpubliComponent]
    });
    fixture = TestBed.createComponent(LeftpubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
