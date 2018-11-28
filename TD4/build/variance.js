var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Partie 1 : Variance
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.f = function () { };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.f = function () { };
    return B;
}(A));
function covariance1(l) {
    return l;
}
function contravariance1(l) {
    return l; //pas contravariant
}
function covariance2(l) {
    return l;
}
function contravariance2(l) {
    return l; //pas contravariant
}
function covariance3(l) {
    return l;
}
function contravariance3(l) {
    return l;
}
function covariance4(l) {
    return l;
}
function contravariance4(l) {
    return l; //pas contravariant
}
//# sourceMappingURL=variance.js.map