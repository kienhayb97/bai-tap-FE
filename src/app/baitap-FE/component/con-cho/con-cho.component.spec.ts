import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConChoComponent } from './con-cho.component';

describe('ConChoComponent', () => {
  let component: ConChoComponent;
  let fixture: ComponentFixture<ConChoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConChoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConChoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
