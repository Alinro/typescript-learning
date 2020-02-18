import 'reflect-metadata';

// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// // const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// // console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

@controller
class Plane {
    color: string = 'red';

    @get('/login')
    fly(): void {
        console.log('vrrrrrr');
    }
}

function get(path: string) {
    return function markFunction(target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    };
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);

        // router.get(path, target.prototype[key]);
        console.log(path);
    }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);
