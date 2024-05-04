import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcallComponent } from './searchcall.component';

describe('SearchcallComponent', () => {
  let component: SearchcallComponent;
  let fixture: ComponentFixture<SearchcallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchcallComponent]
    });
    fixture = TestBed.createComponent(SearchcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
