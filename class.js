//מחלקת "נסיעה"
class Drive {
    constructor(renterName, date, kilometers) {
      this.renterName = renterName
      this.date = date
      this.kilometers = kilometers
    }
  }

  //"מחלקת "רכב
  class Car {
    constructor(companyName, modelName) {
      this.companyName = companyName
      this.modelName = modelName
      this.isAvailable = true
      this.totalKilometers = 0
      this.Drives = []
    }
  // מתודה לסכימת הקילומטרים
  calculateTotalKilometers() {
    let total = 0
    this.Drives.forEach(Drive => {
      total += Drive.kilometers
    })
    this.totalKilometers = total
  }
  
  // מתודה להוספת נסיעה
  addDrive(Drive) {
    this.Drives.push(Drive)
    this.calculateTotalKilometers()
  }
}

//מחלקת "כל רכבי החברה"
class allCompanyCars {
    constructor(renterName) {
        this.renterName = renterName
        this.Cars = []
    }

    //מתודה להוספת רכב   
    addCars(Car){
        this.Cars.push(Car)
        
      }

      //מתודה שמחזירה את הרכב עם הכי הרבה קילומטרז     
      getCarWithHighestKilometers() {
        let maxKilometers = 0
        let carWithHighestKilometers = null
        this.Cars.forEach(Car => {
          if (Car.totalKilometers > maxKilometers) {
            maxKilometers = Car.totalKilometers
            carWithHighestKilometers = Car
          }
        })
        return carWithHighestKilometers
      }
    
      //מתודה שמדפיסה רכבים פנויים
      printAvailableCars() {
        console.log("Available Vehicles:")
        this.Cars.forEach(Car => {
          if (Car.isAvailable) {
            console.log(Car.modelName)
          }
        })
      }
    
      //מתודה שמוסיפה נסיעה לרכב
      addDriveToCar(modelName, Drive) {
        const foundCar = this.Cars.find(Car => Car.modelName === modelName)
        if (foundCar) {
          foundCar.addDrive(Drive)
        } else {
          console.log("Vehicle not found!")
        }
      }
    }


// Example usage:
// Create "All company vehicles" department
const allCars = new allCompanyCars("ABC Car Rental");
const allCars2 = new allCompanyCars("ABCD Car Rental");

// Create cars
const car1 = new Car("ABC Car Rental", "Toyota Corolla");
const car2 = new Car("ABCD Car Rental", "Nissan Sentra");
const car3 = new Car("ABCD Car Rental", "Nissan Sentra");

// Add cars to "All company vehicles"
allCars.addCars(car1)
allCars.addCars(car2)
allCars.addCars(car3)

// Create travel trips
const trip1 = new Drive("John Doe", "2024-04-15", 120);
const trip2 = new Drive("Jane Smith", "2024-04-16", 150);

// Add trip to a specific vehicle
allCars.addDriveToCar("Toyota Corolla", trip1);
allCars.addDriveToCar("Nissan Sentra", trip2);

// Print list of available vehicles
allCars.printAvailableCars();

// Display vehicle with the highest mileage
console.log("Vehicle with highest mileage:");
console.log(allCars.getCarWithHighestKilometers())










