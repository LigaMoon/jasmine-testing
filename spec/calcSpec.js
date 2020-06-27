// describe("A Function returning a drink when the age is entered", function() {
//     beforeEach(function() {
//         drink = new whatCanIDrink();
//     });

//     describe("Checks age", function() {
//         it("should return an error message if age is bellow 0", function() {
//             let num = whatCanIDrink(-5)
//             expect(num).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
//         });
//         it("should return drink Toddy if the age is between 1 and 13", function() {
//             let num = whatCanIDrink(13)
//             expect(num).toBe("Drink Toddy");
//         });
//         it("should return drink coke if the age is between 14 and 17", function() {
//             let num = whatCanIDrink(16)
//             expect(num).toBe("Drink Coke");
//         });
//         it("should return drink beer if the age is between 18 and 20", function() {
//             let num = whatCanIDrink(20)
//             expect(num).toBe("Drink Beer");
//         });
//         it("should return drink whiskey if the age is less that 130", function() {
//             let num = whatCanIDrink(21)
//             expect(num).toBe("Drink Whiskey");
//         });
//         it("should return an error if anyting else is returned", function() {
//             let num = whatCanIDrink(136)
//             expect(num).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
//         });
//         it("should return an error if not a number has been entered", function() {
//             let num = whatCanIDrink("a")
//             expect(num).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
//         });
//         it("should be defined", function() {
//             expect(whatCanIDrink).toBeDefined();
//         });
//     });
// });

describe("Function fizzBuzz", function() {
    beforeEach(function() {
        newNumber = fizzBuzz();
    });

    describe("check if a number is divisible by certain other numbers", function() {
        it("the function should be declared", function(){
            expect(fizzBuzz).toBeDefined();
        });
        it("should return FizzBuzz if a number nentered is divisible by 3 and 5", function(){
            let result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz if the number is only divisible by 3", function() {
            let result = fizzBuzz(-33)
            expect(result).toBe("Fizz");
        });
        it("should return Buzz if the number is divisible by 5", function() {
            let result = fizzBuzz(95)
            expect(result).toBe("Buzz");
        });
        it("should return the number entered if it's not divisible by 3 or 5 or both", function() {
            let result = fizzBuzz(88)
            expect(result).toBe(88);
        });
        it("should return the input if it's not a number", function(){
            let result = fizzBuzz("hi")
            expect(result).toBe("hi");
        });
    });
});