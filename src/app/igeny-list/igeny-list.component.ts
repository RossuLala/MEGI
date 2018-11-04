import { Component, OnInit, Input } from '@angular/core';
import { IgenyModel } from '../kozos/igeny-model';
import { IgenyService } from '../kozos/igeny.service';

@Component({
    selector: 'app-igeny-list',
    templateUrl: './igeny-list.component.html',
    styleUrls: ['./igeny-list.component.css']
})
export class IgenyListComponent implements OnInit {
    public igenyek: IgenyModel[];

    constructor(private _igenyService: IgenyService) { 
        this.igenyek = this._igenyService.getAllIgeny();
        console.log(this.igenyek);
    }


    ngOnInit() { 
    }

}
