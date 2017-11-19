import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../worker.interface';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  @Input() worker: Worker;
  @Input() boatId: number;
  @Input() showSigned: boolean;
  @Output() workerAdded = new EventEmitter<Worker>();


  constructor(
    private workerService: WorkerService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  unsign() {
    this.workerService.unsign(this.boatId, this.worker).subscribe(
      (worker: Worker) => alert('un-signed'),
      (error: Error) => console.log(error)
    );
  }

  sign() {
    this.workerService.sign(this.boatId, this.worker).subscribe(
      (worker: Worker) => {
        alert('signed');
        this.workerAdded.emit(worker);
      },
      (error: Error) => console.log(error)
    );
  }
}
