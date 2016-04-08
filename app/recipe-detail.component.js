System.register(['angular2/core', './recipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, recipe_1;
    var RecipeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', recipe_1.Recipe)
                ], RecipeDetailComponent.prototype, "recipe", void 0);
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-detail',
                        template: "\n\t\t<div *ngIf=\"recipe\">\n\t\t\t<h2>{{recipe.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{recipe.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<input [(ngModel)]=\"recipe.name\" placeholder=\"name\"/>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});
//# sourceMappingURL=recipe-detail.component.js.map