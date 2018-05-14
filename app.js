var value;
var value2;
function* main() {
    console.log('start');
    yield pause(1000);
    console.log('mid');
    yield pause(1000);
    console.log('end');
}

function pause(milliseconds) {
    setTimeout(() => {
        console.log('paused for ' + milliseconds);
        value2 = main().next();
    }, milliseconds);
}

function app(){
    main().next();
}

function app2() {
    var appleStore = countAppleSales(); // Generator { }
    console.log(appleStore.next()); // { value: 3, done: false }
    console.log(appleStore.next()); // { value: 7, done: false }
    console.log(appleStore.next()); // { value: 5, done: false }
    console.log(appleStore.next()); // { value: undefined, done: true }
}

function* countAppleSales() {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
        yield saleList[i];
    }
}