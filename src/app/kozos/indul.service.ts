import { Injectable } from '@angular/core';
import {IndulModel} from './indul-model';
import {IgenyModel} from './igeny-model';

@Injectable({
  providedIn: 'root'
})
export class IndulService {
  private _indulok: IndulModel[];

  constructor() {
    this._indulok = [
      {
        'id': 1,
        'nev': 'ONLY ENGLISH',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-01.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 2,
        'nev': 'BLUES EST',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-02.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 3,
        'nev': 'PAINTBAL',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-03.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 4,
        'nev': 'CSOCSÓ',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-04.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 5,
        'nev': 'KARAOKE',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-05.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 6,
        'nev': 'ACTIVITY',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-06.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 7,
        'nev': 'SUSHI',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-07.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 8,
        'nev': 'TÁBORTŰZ - TÁBORVÍZ',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-08.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 9,
        'nev': 'HAJÓKIRÁNDULÁS',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-09.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      },
      {
        'id': 10,
        'nev': 'TÁNCOLJUNK',
        'leir': 'Ismerkedjünk angolul!',
        'kep': 'assets/P-10.jpg',
        'ar': 6000,
        'datum': '2018-12-12 18:00',
        'noMin': 25,
        'noMax': 35,
        'ffMin': 30,
        'ffMax': 40,
        'noRend': 13,
        'ffRend': 13,
        'itn': 'igen'
      }
    ];
  }

  getAllIndul(): IndulModel[] {
    return this._indulok;
  }
}
