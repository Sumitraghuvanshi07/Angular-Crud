import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime=(new Date()).getTime();
    return next.handle(request).pipe(
      map(event=>{
        if(event instanceof HttpResponse)
        {
          const endTime=(new Date()).getTime();
        const diff=endTime-startTime;
        console.log(diff+'ms');
        }
        return event;
        
        
      })
    )
  }
}
