import { Injectable } from '@angular/core';
import { IgenyModel } from './igeny-model';


@Injectable({
    providedIn: 'root'
})
export class IgenyService {
    private _igenyek: IgenyModel[];

    constructor() {
        this._igenyek = [
            {
                'id': 1,
                'nev': 'ONLY ENGLISH',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-01.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'igen'
            },
            {
                'id': 2,
                'nev': 'BLUES EST',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-02.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'igen'
            },
            {
                'id': 3,
                'nev': 'PAINTBAL',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-03.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'igen'
            },
            {
                'id': 4,
                'nev': 'CSOCSÓ',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-04.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'talan'
            },
            {
                'id': 5,
                'nev': 'KARAOKE',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-05.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'talan'
            },
            {
                'id': 6,
                'nev': 'ACTIVITY',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-06.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'nem'
            },
            {
                'id': 7,
                'nev': 'SUSHI',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-07.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'nem'
            },
            {
                'id': 8,
                'nev': 'TÁBORTŰZ - TÁBORVÍZ',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-08.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'nem'
            },     
            {
                'id': 9,
                'nev': 'HAJÓKIRÁNDULÁS',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-09.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'nem'
            },
            {
                'id': 10,
                'nev': 'TÁNCOLJUNK',
                'leir': 'Ismerkedjünk angolul!',
                'kep': 'assets/P-10.jpg',
                'hetNap': 'SZ-V',
                'kezdes': 19,
                'vege': 21,
                'ar': 6000,
                'itn': 'nem'
            }                    
        ];
    }
    getAllIgeny(): IgenyModel[] {
        return this._igenyek;
      }
}
