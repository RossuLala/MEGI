export class IndulModel {
  id: number;
  nev: string;
  leir: string;
  kep: string;
  ar: number;
  datum: string;
  noMin: number;
  noMax: number;
  ffMin: number;
  ffMax: number;
  noRend: number;
  ffRend: number;
  itn: string;

  constructor(parameter?: IndulModel){
    if (parameter) {
      Object.assign(this, parameter);
    }
  }
}
