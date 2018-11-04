import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top/top.component';
import { IgenyComponent } from './igeny-list/igeny.component';
import { IndulComponent } from './indul-list/indul.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'igeny-list', component: IgenyComponent },
    { path: 'indul-list', component: IndulComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'top', component: TopComponent },
    { path: '', redirectTo: '/top', pathMatch: 'full' }, // csak akkor teljesen üres
    { path: '**', component: PageNotFoundComponent }
    // fontos a sorend, mert sorrendben hatja végre
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static routableComponents = [
        TopComponent,
        IgenyComponent,
        IndulComponent,
        MenuComponent,
        PageNotFoundComponent
    ];
}
