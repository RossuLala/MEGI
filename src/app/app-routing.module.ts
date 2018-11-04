import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top/top.component';
import { IgenyListComponent } from './igeny-list/igeny-list.component';
import { IndulListComponent } from './indul-list/indul-list.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'igeny-list', component: IgenyListComponent },
    { path: 'indul-list', component: IndulListComponent },
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
        IgenyListComponent,
        IndulListComponent,
        MenuComponent,
        PageNotFoundComponent
    ];
}
