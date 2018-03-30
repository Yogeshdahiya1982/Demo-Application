import { NgModule} from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {RouteReuseStrategy} from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {DemoPageComponent} from './demo.module/test/demo.component'
import {DemoModuleRouting} from './demo.module/demo.module.route'


@NgModule({
  declarations: [ AppComponent,DemoPageComponent  ],
  imports: [ BrowserModule,FormsModule,DemoModuleRouting,HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


