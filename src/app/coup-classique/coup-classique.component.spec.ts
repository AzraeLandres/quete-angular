import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupClassiqueComponent } from './coup-classique.component';

describe('CoupClassiqueComponent', () => {
  let component: CoupClassiqueComponent;
  let fixture: ComponentFixture<CoupClassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoupClassiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoupClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
