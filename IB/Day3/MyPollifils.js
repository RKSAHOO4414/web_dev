Array.prototype.MyforEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}
Array.prototype.MyEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) == false) {
            return false;
        }
    }
    return true;
}
Array.prototype.MySome = function (cb) {

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) == true) {
            return true;
        }
    }
    return false
}
Array.prototype.MyfindIdx = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) == true) {
            return i;
        }
    }
    return -1;
}

Array.prototype.MyReducer = function(cb){
   let ans = 0 ;
    for ( let i = 0 ; i<this.length;i++){
        ans = ans + this[i];
    }
    return ans ;
}

Array.prototype.MyConcat = function(cb){
    let concatAns= [];
     for ( let i = 0 ; i< this.length;i++){
         concatAns[i]=this[i];
     }
}
let array1 = ['a', 'b', 'c'];
let array2 = [1, 30, 39, 29, 10, 13, 40];
let array = [1, 2, 3, 4, 5];
let array3 = [5, 12, 8, 130, 44];

function even(element) {
    return element % 2 === 0;
}
function printElem(element) {
    console.log(element)
}
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}
function isLargeNumber(element) {
    return element > 13;
}

function reducer(elem){
     console.log(elem);
}

function concat(ele){
    console.log(ele);
}

array1.MyforEach(printElem)
array2.MyEvery(isBelowThreshold)
array.MySome(even);
array.MyfindIdx(isLargeNumber);
let newarr = array.MyReducer(reducer);
console.log(newarr);