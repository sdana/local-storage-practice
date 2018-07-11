//Declare initial storage structures

const homeInventoryDatabase = {}
homeInventoryDatabase.furniture = []
homeInventoryDatabase.appliances = []
homeInventoryDatabase.electronics = []

//declare objects and place inside proper storage structure

const couch = {
    name: "Couch",
    location: "Living Room",
    description: "Vintage Yellow and Green Couch"
}
const chair = {
    name: "Chair",
    location: "Living Room",
    description: "Orange Chair"
}
const bed = {
    name: "Bed",
    location: "Bedroom",
    description: "White farm-style wooden bedrframe with oversized headboard, memory foam mattress"
}
const mixer = {
    name: "KitchenAid Mixer",
    location: "Kitchen",
    description: "General purpose stand mixer with multiple attatchments"
}
const foodProcessor = {
    name: "KitchenAid food processor",
    location: "Kitchen",
    description: "Food processor for rapidly processing food"
}
const stickBlender = {
    name: "Stick Blender",
    location: "Kitchen",
    description: "Used for hand-blending things"
}
const recordPlayer = {
    name: "Music Hall MMF 5.1",
    location: "Living Room",
    description: "Fully manual belt-driven record player"
}
const receiver = {
    name: "Yamaha 5.1 receiver",
    location: "Living Room",
    description: "Main house receiver in living room"
}
const garageReceiver = {
    name: "Vintage Yamaha Receiver",
    location: "Garage",
    description: "Garage receiver"
}

homeInventoryDatabase.furniture.push(couch, chair, bed)
homeInventoryDatabase.appliances.push(mixer, foodProcessor, stickBlender)
homeInventoryDatabase.electronics.push(recordPlayer, receiver, garageReceiver)

//function for storing data locally
const saveDatabase = (localStorageKey, databaseObject) => {
    const dataString = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, dataString)
}

//function to retreive data from local storage
const getDatabase = (localStorageKey) => {
    const dataString = localStorage.getItem(localStorageKey)
    return JSON.parse(dataString)
}

saveDatabase("homeInventory", homeInventoryDatabase)