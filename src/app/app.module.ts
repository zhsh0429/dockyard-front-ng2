import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoatComponent } from './boat/boat.component';
import { BoatsComponent } from './boats/boats.component';
import { NewBoatComponent } from './new-boat/new-boat.component';
import { routing } from './app.routing';
import { BoatService } from './boat.service';
import { DetailBoatComponent } from './detail-boat/detail-boat.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatComponent,
    BoatsComponent,
    NewBoatComponent,
    DetailBoatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [BoatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
