import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  data: Object = {
    menuKep : "burger.jpg",
    colorCode: {
      igen: '#66883F',
      talan: '#F3C263',
      nem: '#C82C2D',
      szurke: '#45525D',
      narancs: '#CF6122'
    }
  }

  constructor(
 
  ) { }

  get(key){
    return this.data[key] || null; 
  }

  set(key, value){
    this.data[key] = value;
    return true;
  }
}