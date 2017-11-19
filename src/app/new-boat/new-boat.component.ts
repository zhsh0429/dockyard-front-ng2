import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoatService } from '../boat.service';
import { Boat } from '../boat.interface';


@Component({
  selector: 'app-new-boat',
  templateUrl: './new-boat.component.html',
  styleUrls: ['./new-boat.component.css']
})
export class NewBoatComponent implements OnInit {

  boat: Boat;

  constructor(
    private boatService: BoatService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.boatService.addBoat(form.value)
      .subscribe(
        (boat: Boat) => alert('New Boat created!'),
        (error: Error) => alert('Failed')
      );
    form.reset();
  }
}
