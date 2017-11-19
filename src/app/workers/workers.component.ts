import { Component, Input, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  workers: Worker[];
  @Input() boatId: number;

  showSigned = true;

  constructor(
    private workerService: WorkerService,
  ) { }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(
      (workers: Worker[]) => this.workers = workers,
      (error: Response) => console.log(error),
    );
  }

  showToggle() {
    this.showSigned = !this.showSigned;
  }

  onAdded(worker: Worker) {
    this.showSigned = true;
  }
}
