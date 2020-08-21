// all about constructors function
var car1 = {
    make: "toyota",
    model : "camry",
    year : 2018};
    
    var car2 = {
    make : "honda",
    model : "civic",
    year : 2016}
    
    var car3 = {
    make : "Benz",
    model : "G-Wagon",
    year: 2015}

    function Car(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;}
       // using the NEW key word  
        var car5 = new Car("tesla", "musk", 2020);

        // using the call function to apply in creating a bike

        function Bike(make, model, year, motorcycletype){
            Car.call(this,make,model,year)
            this.motorcycletype = motorcycletype;
        }


        //using the prototype 

        function Plane(airline){
            this.airline = airline
        }

        var newPlane = new Plane("Arik")
        Plane.prototype.product = function(){
            return "i just acquired a new airline company called " + this.airline 
        } 

        //apply

        function Parent(firstName, lastName){
            this.firstName = firstName;
            this.lastName =lastName;
        }

        function Children(firstName, lastName){
            Parent.apply(this,arguments)
        }