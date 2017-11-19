import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Boat } from '../boat.interface';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  boats: Boat[];

  constructor(private boatService: BoatService,
              private router: Router,
  ) {}

  ngOnInit() {
  }

  onGetBoats() {
    this.boatService.getBoats()
      .subscribe(
        (boats: Boat[]) => this.boats = boats,
        (error: Response) => console.log(error),
      );
  }

  onDeleted(boat: Boat) {
    const position = this.boats.findIndex(
      (boatEl: Boat) => {
        return boatEl.id === boat.id;
      }
    );
    this.boats.splice(position, 1);
  }

}
