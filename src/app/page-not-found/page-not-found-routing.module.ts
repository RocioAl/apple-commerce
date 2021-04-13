import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
const routes: Routes = [
    {
        path: '',
        component: PageNotFountComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
