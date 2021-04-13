import { NgModule } from '@angular/core';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
@NgModule({
    declarations: [
        PageNotFountComponent],
    imports: [
        CommonModule,
        SharedModule,
        PageNotFoundRoutingModule


    ]
})
export class PageNotFoundModule { }
