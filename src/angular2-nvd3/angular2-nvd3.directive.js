var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
import { Angular2NvD3 } from './angular2-nvd3.core';
var NvD3Directive = (function () {
    function NvD3Directive(el) {
        this.el = el;
        this.ngNvD3 = new Angular2NvD3.NgNvD3(this.el);
    }
    NvD3Directive.prototype.ngOnChanges = function () {
        this.ngNvD3.updateWithOptions(this.options, this.data);
    };
    NvD3Directive.prototype.ngOnInit = function () {
        this.ngNvD3.isViewInitialize(true);
        this.ngNvD3.updateWithOptions(this.options, this.data);
    };
    return NvD3Directive;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], NvD3Directive.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NvD3Directive.prototype, "data", void 0);
NvD3Directive = __decorate([
    Directive({ selector: '[appNvD3]' }),
    __metadata("design:paramtypes", [ElementRef])
], NvD3Directive);
export { NvD3Directive };
//# sourceMappingURL=angular2-nvd3.directive.js.map