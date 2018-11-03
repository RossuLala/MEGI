import { Component, OnInit, Input } from '@angular/core';
import { IgenyModel } from '../kozos/igeny-model';
import { IgenyService } from '../kozos/igeny.service';

@Component({
    selector: 'app-igeny',
    templateUrl: './igeny.component.html',
    styleUrls: ['./igeny.component.css']
})
export class IgenyComponent implements OnInit {
    public igenyek: IgenyModel[];

    constructor(private _igenyService: IgenyService) { 
        this.igenyek = this._igenyService.getAllIgeny();
        console.log(this.igenyek);
    }


    ngOnInit() { 
    }

}
