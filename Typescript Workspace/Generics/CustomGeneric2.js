var Queue = /** @class */ (function () {
    function Queue() {
        this.array = new Array();
    }
    Queue.prototype.insert = function (e) {
        return this.array.push(e);
    };
    Queue.prototype.remove = function () {
        return this.array.shift();
    };
    Object.defineProperty(Queue.prototype, "all", {
        get: function () {
            return this.array;
        },
        enumerable: false,
        configurable: true
    });
    return Queue;
}());
var queue = new Queue();
queue.insert(56);
queue.insert(57);
queue.insert(45);
console.log(queue.all);
