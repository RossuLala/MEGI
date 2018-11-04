import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FejComponent } from './fej/fej.component';
import { TopVideoComponent } from './top/top-video/top-video.component';
import { TopSzovegComponent } from './top/top-szoveg/top-szoveg.component';
import { TopCarouselComponent } from './top/top-carousel/top-carousel.component';
import { TopItnComponent } from './top/top-itn/top-itn.component';
import { MenuComponent } from './menu/menu.component';
import { IgenyListComponent } from './igeny-list/igeny-list.component';
import { IndulListComponent } from './indul-list/indul-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ConfigService } from './config.service';
import { IgenyService } from './kozos/igeny.service';
import { IndulService } from './kozos/indul.service';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FejComponent,
    TopVideoComponent,
    TopSzovegComponent,
    TopCarouselComponent,
    TopItnComponent,
    MenuComponent,
    IgenyListComponent,
    IndulListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    IgenyService,
    IndulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
