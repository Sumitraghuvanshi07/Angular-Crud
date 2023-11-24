import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './Service/product.service';
import { HeaderInterceptor } from './header.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { TestInterceptor } from './test.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService,
    {provide:HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true},
 //   {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true},
  //  {provide:HTTP_INTERCEPTORS, useClass:TestInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
