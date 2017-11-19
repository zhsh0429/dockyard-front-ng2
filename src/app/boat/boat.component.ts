import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boat } from '../boat.interface';
import { Router } from '@angular/router';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {

  @Input() boat: Boat;
  @Output() boatDeleted = new EventEmitter<Boat>();

  constructor(private router: Router,
              private boatService: BoatService,
  ) {}

  ngOnInit() {
  }

  gotoDetail(boat: Boat): void {
    this.router.navigate(['/detail-boat', boat.id]);
  }

  onDelete() {
    this.boatService.deleteBoat(this.boat.id)
      .subscribe(
        () => {
          this.boatDeleted.emit(this.boat);
          console.log('Boat deleted');
        }
      );
    // TODO: un-sign this boat from all workers
  }

}
