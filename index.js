import square from './square';

const calsquare = (a) => {
    console.log(`the value of a is  ${a} and area is `+  square.area(a) + `perimeter is ` + square.perimeter(a));
}

calsquare(6);