import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';


//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],

  imports: [
    CommonModule, //So se usa nos modulos filhos
    RoutingModule,
    SharedModule
  ],
})
export class PagesModule {}
