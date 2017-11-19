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
import { WorkerService} from './worker.service';
import { WorkerComponent } from './worker/worker.component';
import { WorkersComponent } from './workers/workers.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatComponent,
    BoatsComponent,
    NewBoatComponent,
    DetailBoatComponent,
    WorkerComponent,
    WorkersComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [BoatService, WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
