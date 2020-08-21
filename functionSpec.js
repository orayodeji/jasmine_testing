describe("replaceWith",function(){
    it("returns a string",function(){
        expect(replaceWith("awesome","w","y")).toEqual("ayesome")
    })

    it("replace a string",function(){
        expect(replaceWith("Foo","F","B")).toEqual("Boo")
    })
})

describe("expand",function(){
    it("extends an array",function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
    })
    it("extends an array",function(){
        expect(expand(["foo","test"],1)).toEqual(["foo","test"])
    })
})

describe("acceptNumbersOnly",function(){
    it("only returns boolean", function(){
        expect(acceptNumbersOnly(1,"foo")).toBe(false)
    })
    it("only returns boolean", function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toBe(true)
    })
    it("only returns boolean", function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toBe(false)
    })

})

describe("mergeArr", function(){
    it("joins arrays and sort them", function(){
        expect(mergeArr([2,1],[3,4])).toEqual([1,2,3,4])
    })
})

describe("mergeObj", function(){
    it("combine objects", function(){
        expect(mergeObj(obj1= {name:"Foo",num: 33},
                        obj2 = {test: "thing",num: 55})).toEqual({
                        name: "Foo",test: "thing",num: 55})
    })
})
