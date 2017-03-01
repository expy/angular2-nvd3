var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NvD3Component } from './angular2-nvd3.component';
import { NvD3Directive } from './angular2-nvd3.directive';
var NvD3Module = (function () {
    function NvD3Module() {
    }
    return NvD3Module;
}());
NvD3Module = __decorate([
    NgModule({
        declarations: [
            NvD3Component,
            NvD3Directive
        ],
        exports: [
            NvD3Component,
            NvD3Directive
        ]
    })
], NvD3Module);
export { NvD3Module };
//# sourceMappingURL=angular2-nvd3.module.js.map