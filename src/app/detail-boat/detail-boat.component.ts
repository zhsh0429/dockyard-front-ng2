import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {BoatService} from '../boat.service';
import {Boat} from '../boat.interface';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-boat',
  templateUrl: './detail-boat.component.html',
  styleUrls: ['./detail-boat.component.css']
})

export class DetailBoatComponent implements OnInit {

  boat: Boat;
  originalBoat: Boat;

  readonly = true;

  constructor(
    private boatService: BoatService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.boatService.getBoat(+params.get('id')))
      .subscribe(
        (boat: Boat) => this.boat = boat,
        (error: Response) => console.log(error),
      );
  }

  goBack(): void {
    this.location.back();
  }

  edit(): void {
    this.originalBoat = Object.assign({}, this.boat);
    this.readonly = false;
  }

  cancel(): void {
    // TODO: restore the original data
    this.boat = this.originalBoat;
    this.readonly = true;
  }

  save(): void {
    this.boatService.updateBoat(this.boat).subscribe(
      (boat: Boat) => alert('Boat saved'),
      (error: Response) => console.log(error),
    );
    this.readonly = true;
  }

}
