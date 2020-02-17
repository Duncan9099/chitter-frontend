describe("FizzBuzz", function() {
    let fizzBuzz; 

    beforeEach(function() {
        fizzBuzz = new FizzBuzz()
    })

    describe("Fizz on multiples of three", function() {
        it("Fizzes on three", function() {
            expect(fizzBuzz.play(3)).toEqual('Fizz')
        })

        it("Fizzes on six", function() {
            expect(fizzBuzz.play(6)).toEqual("Fizz")
        })
    })

    describe("Buzz on multiples of five", function() {
        it("Buzzes on five", function() {
            expect(fizzBuzz.play(5)).toEqual("Buzz")
        })

        it("Buzzes on ten", function() {
            expect(fizzBuzz.play(10)).toEqual("Buzz")
        })
    })

    describe("FizzBuzz on multiples of both 3 and 5", function() {
        it("FizzBuzzes on 15", function() {
            expect(fizzBuzz.play(15)).toEqual("FizzBuzz")
        })

        it("FizzBuzzes on 30", function() {
            expect(fizzBuzz.play(30)).toEqual("FizzBuzz")
        })
    })

    describe("normal number", function() {
        it("Number on 4", function() {
            expect(fizzBuzz.play(4)).toEqual(4)
        })
    })
})