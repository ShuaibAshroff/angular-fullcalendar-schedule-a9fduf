import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { Timetable2Component } from "./timetable2/timetable2.component";
import { AngularDraggableModule } from "angular2-draggable";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule
  ],
  declarations: [AppComponent, Timetable2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
