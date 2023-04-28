import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SameSiteInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add SameSite=None attribute to cookies
    const cookie = req.headers.get('Cookie');
    if (cookie) {
      const cookieParts = cookie.split('; ');
      const updatedCookieParts = cookieParts.map((part) => {
        if (part.toLowerCase().includes('samesite=')) {
          return part + '; Secure';
        }
        return part + '; SameSite=None; Secure';
      });
      const updatedCookie = updatedCookieParts.join('; ');
      req = req.clone({
        headers: req.headers.set('Cookie', updatedCookie),
      });
    }

    return next.handle(req);
  }
}
