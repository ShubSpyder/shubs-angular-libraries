import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGlassMotionComponent } from './angular-glass-motion.component';

describe('AngularGlassMotionComponent', () => {
  let component: AngularGlassMotionComponent;
  let fixture: ComponentFixture<AngularGlassMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGlassMotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularGlassMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
