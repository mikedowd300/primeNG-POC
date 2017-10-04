"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var carservice_1 = require("./cars/carservice");
require("../assets/css/styles.css");
require("../../node_modules/primeng/resources/themes/omega/theme.css");
require("../../node_modules/primeng/resources/primeng.min.css");
require("../../node_modules/font-awesome/css/font-awesome.min.css");
var AppComponent = (function () {
    function AppComponent(carService) {
        this.carService = carService;
        this.car = new PrimeCar();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) {
            cars.forEach(function (car, i) {
                car.ybc = car.year + car.brand + car.color;
            });
            _this.cars = cars;
        }).then(function () {
            console.log(_this.cars);
        });
    };
    AppComponent.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    };
    AppComponent.prototype.save = function () {
        var cars = this.cars.slice();
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.delete = function () {
        var index = this.findSelectedCarIndex();
        this.cars = this.cars.filter(function (val, i) { return i != index; });
        this.car = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    AppComponent.prototype.onYearSelect = function (event, year) {
        event.stopPropagation();
        console.log(year);
    };
    AppComponent.prototype.sayHello = function (event) {
        console.log('Howdy');
    };
    AppComponent.prototype.cloneCar = function (c) {
        var car = new PrimeCar();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    AppComponent.prototype.findSelectedCarIndex = function () {
        return this.cars.indexOf(this.selectedCar);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], AppComponent);
exports.AppComponent = AppComponent;
var PrimeCar = (function () {
    function PrimeCar(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
    return PrimeCar;
}());
exports.PrimeCar = PrimeCar;
//# sourceMappingURL=app.component.js.map