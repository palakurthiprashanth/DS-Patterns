class Point {
    constructor(x, y) {
        this.x= x;
        this.y= y;
    }
    distance_from_origin() {
        return (this.x*this.x) + (this.y*this.y);
    }

    compare(b) {
        return this.distance_from_origin() - b.distance_from_origin();
    }
}

function find_closest_points(points, k) {
    let maxHeap= new Heap(function(a, b) {
        return a.compare(b);
    });

    for (var i=0;i<k;i++) {
        maxHeap.push(points[i]);
    }

    for (var i=k;i<points.length;i++) {
        if (points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
            maxHeap.pop();
            maxHeap.push(points[i]);
        }
    }
    return maxHeap.toArray();
}
const result = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2);
console.log(result);// [1,3],[2,-1]
