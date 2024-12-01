


// function Circle(radius) {
//     // Instance members
//     this.radius = radius;

//     this.move = function() {
//         this.draw();
//         console.log('move');
        
//     }
// }
// // Prototype members
// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// // Circle.prototype // used as parent object created by this constructor
// const c1 = new Circle(1)
// const c2 = new Circle(1)

// Circle.prototype.toString = function () {
//     return 'Circle with radius ' + this.radius
// }

// // only returns instance members;
// console.log(Object.keys(c1))
// // Returns all members (instance + prototype) // we often call instance (own) in js, ownProperty, isntancePrototype
// for(let key in c1) console.log(key);

// you should not modify built in objects in js


function Stopwatch() {
    let startTime, endTime, running, duration = 0;

   
    Object.defineProperty(this, 'duration', { // expose the duration as read only property
        get: function() { return duration },
        set: function(value) { duration = value}
    })
    Object.defineProperty(this, 'startTime', { // expose the duration as read only property
        get: function() { return startTime }
    })
    Object.defineProperty(this, 'endTime', { // expose the duration as read only property
        get: function() { return endTime }
    })
    Object.defineProperty(this, 'running', { // expose the duration as read only property
        get: function() { return running }
    })
}
const a = new Stopwatch();
console.log(a);

Stopwatch.prototype.start = function() {
    if (this.running) {
        throw new Error('Stopwatch has already started.');
    }
    this.running = true;
    this.startTime = new Date()
}
Stopwatch.prototype.stop = function() {
    if(!this.running)
        throw new Error('Stopwatch is not started.')
    this.running = false;
    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds; // public read only property
}
Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}

const sw = new Stopwatch()
sw.duration = 10; // I can change it outside which is not right....
// remember: your objects should always be in a valid state.
