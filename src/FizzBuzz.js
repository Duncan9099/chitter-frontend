'use strict';

class FizzBuzz {
    play = (number) => {
        if (this.fizzBuzz(number)) { return "FizzBuzz" } 
        else if (this.fizz(number)) { return "Fizz" } 
        else if (this.buzz(number)) { return "Buzz" }
        else { return number }
    }

    fizz = (number) => { 
        if (number % 3 == 0) {
            return true
        }
    }

    buzz = (number) => {
        if (number % 5 == 0) {
            return true
        }
    }

    fizzBuzz = (number) => {
        if (number % 15 == 0) {
            return true
        }
    }

}