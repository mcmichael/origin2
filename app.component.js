System.register(['angular2/core', './recipe-detail.component', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, recipe_detail_component_1, recipe_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_recipeService) {
                    this._recipeService = _recipeService;
                    this.title = 'Recipes';
                }
                AppComponent.prototype.getRecipes = function () {
                    var _this = this;
                    //this.recipes = this._recipeService.getRecipes();
                    this._recipeService.getRecipes().then(function (recipes) { return _this.recipes = recipes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getRecipes();
                };
                AppComponent.prototype.onSelect = function (recipe) { this.selectedRecipe = recipe; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'origin2',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Recipes</h2>\n    <ul class=\"recipes\">\n      <li *ngFor=\"#recipe of recipes\"\n        [class.selected]=\"recipe === selectedRecipe\"\n        (click)=\"onSelect(recipe)\">\n        <span class=\"badge\">{{recipe.id}}</span> {{recipe.name}}\n      </li>\n    </ul>\n  \t<my-recipe-detail [recipe]=\"selectedRecipe\"></my-recipe-detail> \n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .recipes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .recipes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .recipes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .recipes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .recipes .text {\n      position: relative;\n      top: -3px;\n    }\n    .recipes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
                        directives: [recipe_detail_component_1.RecipeDetailComponent],
                        providers: [recipe_service_1.RecipeService]
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map