import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   // console.log(request);
   const API_Key='test1234';
 
   var request=request.clone({
     setHeaders:{
   API_Key,
    
     },
    headers:request.headers.set('Content-type','application/json'),
    //headers: request.headers.delete(API_Key) 
   })

   
    console.log(request);
    
    return next.handle(request);
  }
}
