import { Component, OnInit } from '@angular/core';
import { IndulService } from '../kozos/indul.service';
import { IndulModel } from '../kozos/indul-model';

@Component({
  selector: 'app-indul',
  templateUrl: './indul.component.html',
  styleUrls: ['./indul.component.css']
})
export class IndulComponent implements OnInit {
  public indulok: IndulModel[];

  constructor(private _indulService: IndulService) {
    this.indulok = this._indulService.getAllIndul();
    console.log(this.indulok);
  }

  ngOnInit() {
  }

}
