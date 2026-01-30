import { TestBed } from '@angular/core/testing';

import { AngularGlassMotionService } from './angular-glass-motion.service';

describe('AngularGlassMotionService', () => {
  let service: AngularGlassMotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularGlassMotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
