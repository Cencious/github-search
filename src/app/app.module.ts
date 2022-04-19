import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './directive/color.directive';
import { UppercasePipe } from './pipe/uppercase.pipe';
import { UsersComponent } from './components/users/users.component';
import { DateCountPipe } from './pipe/date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    UppercasePipe,
    UsersComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
