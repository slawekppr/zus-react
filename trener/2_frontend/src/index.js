console.log("Hello jQuery");
// $('#title').text('Hello jQuery')
function add(x, y) {
    return x + y;
}
// document.getElementById("test")!.textContent = "123";
var Person = /** @class */ (function () {
    // name:string
    //   #secret = "tajne";
    function Person(name) {
        this.name = name;
        // this.name = name
        debugger;
    }
    Person.prototype.probujemy = function () {
        throw new Error('ups...');
    };
    Object.defineProperty(Person.prototype, "costam", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Person.DRIVING_AGE = 18;
    return Person;
}());
new Person('Baska!').probujemy();
//# sourceMappingURL=index.js.map