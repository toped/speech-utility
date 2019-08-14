import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

// console.log('JavaScript Cloures');
// const test = () => {
//     console.log('test');

// };

// const test2 = function someFunction() {
//     console.log('test');
// };

// const addTo = (outter) => {

//     const add = (inner) => {
//         return outter + inner;
//     };

//     return add;
// };

// console.log(addTo(3));

// const addThree = addTo(3);

// console.log(addThree(5));

// function Car(make) {
//     const _make = make;

//     this.getMake = () => {
//         return _make;
//     };
// }

// function CarBetter(make) {

//     return {
//         _make: make,
//         getMake() {
//             return this._make;
//         }
//     };
// }

// const c1 = new Car('Jeep');
// const c2 = CarBetter('Tesla');

// console.log(c1);
// console.log(c1.make);
// console.log(c1.getMake());
// console.dir('dir1->', c1);

// console.log(c2);
// console.log(c2._make);
// console.log(c2.getMake());
// console.dir('dir2->', c2);



// const outer = (multiplier) => {
//     let t = 2 * multiplier;

//     setTimeout(() => {
//         t = t * multiplier;
//     }, 2000);

//     return () => {
//         console.log(t);
//     };
// };

// const inner2 = outer(5);
// inner2();

// setTimeout(() => {
//     inner2();
// }, 2000);


// console.dir(inner2);


const backUpYoungMan = new Promise(function youngLady(resolve, reject) {

    setTimeout(() => {
        resolve('she said yes!!!!!');
    }, 2000);

    setTimeout(() => {
        reject('actuallllyyyyyy, nah b');
    }, 5000);
});

backUpYoungMan.then((r) => {
    console.log(r);
}).catch((r) => {
    console.log(r);
});

