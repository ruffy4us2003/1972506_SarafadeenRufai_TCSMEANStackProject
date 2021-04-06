import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonAppComponent } from './button-app/button-app.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ButtonAppComponent,
    CardComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule, MatInputModule,MatFormFieldModule,
    AppRoutingModule, HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatCardModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
