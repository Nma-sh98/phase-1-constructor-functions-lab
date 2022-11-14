// // Create a constructor function for each of the following:

// // Scooter with year, color, and model properties

// function User(year, color, modelProperties){
//     this.year = year;
//     this.color = color;
//     this.modelProperties = modelProperties;
// }
// const Scooter= new User("2010", "blue", "gasolin")
// Scooter.year;

// // Driver with name, age, and experience properties

// function User(name, age, experienceProperties){
//     this.name = name;
//     this.age = age;
//     this.experienceProperties = experienceProperties;
// }
// const Driver= new User("Nma", "24", "Car Driver")
// Driver.name;

// // PickupLocation with address and city properties

// function User(adress, cityProperties){
//     this.adress = adress;
//     this.cityProperties = cityProperties;
// }
// const PickupLocation= new User("London", "Crowded")
// PickupLocation.adress;

function Scooter(year, color, model) {
    this.year = year
    this.color = color
    this.model = model
}

function Driver(name, age, experience) {
    this.name = name
    this.age = age
    this.experience = experience
}

function PickupLocation(address, city) {
    this.address = address
    this.city = city
}