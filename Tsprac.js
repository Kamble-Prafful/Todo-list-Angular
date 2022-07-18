var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function Trying(arr, value) {
    var arr2 = __spreadArray([value], arr, true);
    return arr2;
}
var demoArr = [1, 2, 6];
var output = Trying(demoArr, -25);
// console.log(output);
console.log('lol');
