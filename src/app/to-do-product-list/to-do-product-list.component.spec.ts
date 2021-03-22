import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoProductListComponent } from './to-do-product-list.component';

describe('ToDoProductListComponent', () => {
  let component: ToDoProductListComponent;
  let fixture: ComponentFixture<ToDoProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
