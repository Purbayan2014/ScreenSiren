import { TestBed } from '@angular/core/testing';

import { SameSiteInterceptorInterceptor } from './same-site-interceptor.interceptor';

describe('SameSiteInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SameSiteInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SameSiteInterceptorInterceptor = TestBed.inject(SameSiteInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
