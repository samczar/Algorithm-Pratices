var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello " + person;
}
var user = "Jane User";
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        document.body.innerHTML = "Can move " + distance + " distance";
    };
    Animal.prototype.respirate = function (methodUsed) {
        document.body.innerHTML = "Respire through " + methodUsed;
    };
    return Animal;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Human;
}(Animal));
var human = new Human();
human.respirate('Nose');
human.move(50);
document.body.innerHTML = "" + greeter(user);
