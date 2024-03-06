const abc=90;
//abc=88;
class Circle{
    public static readonly pie=3.142;  // single shared constant
    constructor(public readonly radius=0) // instance copy constant
     {}
    getArea(){
        return Circle.pie*this.radius*this.radius;
    }
}
//Circle.pie=3.14; 
let circle1=new Circle(6);
//circle1.radius=12;
let circle2=new Circle(10);
//circle2.radius=9;
let circle3=new Circle(14);
//circle3.radius=11;