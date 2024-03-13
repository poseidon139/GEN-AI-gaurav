import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopicUserComponent } from './add-topic-user.component';

describe('AddTopicUserComponent', () => {
  let component: AddTopicUserComponent;
  let fixture: ComponentFixture<AddTopicUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTopicUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTopicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
