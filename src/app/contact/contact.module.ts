import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,

        ContactRoutingModule
    ]
})
export class ContactModule { }
