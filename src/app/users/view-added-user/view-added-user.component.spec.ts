import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddedUserComponent } from './view-added-user.component';

describe('ViewAddedUserComponent', () => {
  let component: ViewAddedUserComponent;
  let fixture: ComponentFixture<ViewAddedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
