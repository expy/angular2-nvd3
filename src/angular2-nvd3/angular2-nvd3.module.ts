import { NgModule } from '@angular/core';
import { NvD3Component } from './angular2-nvd3.component';
// import { NvD3Directive } from './angular2-nvd3.directive';

@NgModule({
    declarations: [
        NvD3Component
    ],
    exports: [
        NvD3Component
    ]
})
export class NvD3Module { }