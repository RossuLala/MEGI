import { Component, OnInit, NgModule } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
    selector: 'app-top-itn',
    templateUrl: './top-itn.component.html',
    styleUrls: ['./top-itn.component.css']
})
export class TopItnComponent implements OnInit {
    public szinKod: object = this.ConfigService.get('colorCode');

    constructor(
        private ConfigService: ConfigService,
    ) {
    }

    ngOnInit() {
        console.log('colorCode____', this.szinKod);
        //gombMi();
    }
    

}
