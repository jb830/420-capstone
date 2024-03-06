/**
	Title: teams.js
    Author: Joanna Brumfield
    Date: 4 March 2024
    Description: MongoDB Shell Scripts for teams and players collections.
 */

// Delete the teams and players collections.
db.teams.drop()
db.players.drop()

// Create teams collections using Document Validation.
db.createCollection("teams", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        name: {
          bsonType: "string"
        },
        mascot: {
          bsonType: "string"
        },
        players: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              _id: {
                bsonType: "objectId"
              },
              firstName: {
                bsonType: "string"
              },
              lastName: {
                bsonType: "string"
              },
              salary: {
                bsonType: "int"
              }
            }
          }
        }
      }
    }
  }
});


la = {
  name: "Los Angeles Galaxy",
  mascot: "Cozmo",
  players: [{
      firstName: "Landon",
      lastName: "Donovan",
      salary: 850000
    },
    {
      firstName: "David",
      lastName: "Beckham",
      salary: 6500000
    },
    {
      firstName: "Robbie",
      lastName: "Keane",
      salary: 4200000
    },
    {
      firstName: "Zlatan",
      lastName: "Ibrahimović",
      salary: 7200000
    },
    {
      firstName: "Cobi",
      lastName: "Jones",
      salary: 240000
    },
    {
      firstName: "Giovani",
      lastName: "dos Santos",
      salary: 6000000
    },
    {
      firstName: "Carlos",
      lastName: "Ruiz",
      salary: 300000
    },
    {
      firstName: "Omar",
      lastName: "Gonzalez",
      salary: 1000000
    },
    {
      firstName: "Javier",
      lastName: "Hernández",
      salary: 6200000
    },
    {
      firstName: "Steven",
      lastName: "Gerrard",
      salary: 5600000
    },
    {
      firstName: "Ashley",
      lastName: "Cole",
      salary: 800000
    }
  ]
}




nyFc = {
  name: "New York City FC",
  mascot: "Chance",
  players: [{
      firstName: "David",
      lastName: "Villa",
      salary: 850000
    },
    {
      firstName: "Andrea",
      lastName: "Pirlo",
      salary: 560000
    },
    {
      firstName: "Frank",
      lastName: "Lampard",
      salary: 600000
    },
    {
      firstName: "Maxi",
      lastName: "Moralez",
      salary: 750000
    },
    {
      firstName: "Alexander",
      lastName: "Callens",
      salary: 300000
    },
    {
      firstName: "Sean",
      lastName: "Johnson",
      salary: 350000
    },
    {
      firstName: "Anton",
      lastName: "Tinnerholm",
      salary: 400000
    },
    {
      firstName: "Valentín",
      lastName: "Castellanos",
      salary: 500000
    },
    {
      firstName: "Alex",
      lastName: "Ring",
      salary: 450000
    },
    {
      firstName: "Jesús",
      lastName: "Medina",
      salary: 550000
    },
    {
      firstName: "Maxime",
      lastName: "Chanot",
      salary: 380000
    }
  ]
};

toronto = {
  name: "Toronto FC",
  mascot: "Bitchy the Hawk",
  players: [{
      firstName: "Michael",
      lastName: "Bradley",
      salary: 6500000
    },
    {
      firstName: "Jozy",
      lastName: "Altidore",
      salary: 4900000
    },
    {
      firstName: "Sebastian",
      lastName: "Giovinco",
      salary: 7100000
    },
    {
      firstName: "Alejandro",
      lastName: "Pozuelo",
      salary: 3800000
    },
    {
      firstName: "Jonathan",
      lastName: "Osorio",
      salary: 1200000
    },
    {
      firstName: "Chris",
      lastName: "Mavinga",
      salary: 600000
    },
    {
      firstName: "Quentin",
      lastName: "Westberg",
      salary: 300000
    },
    {
      firstName: "Omar",
      lastName: "Gonzalez",
      salary: 1000000
    },
    {
      firstName: "Ayo",
      lastName: "Akinola",
      salary: 300000
    },
    {
      firstName: "Richie",
      lastName: "Laryea",
      salary: 210000
    },
    {
      firstName: "Nick",
      lastName: "DeLeon",
      salary: 250000
    }
  ]
}

atlanta = {
  name: "Atlanta United FC",
  mascot: "Freddie Falcon",
  players: [{
      firstName: "Josef",
      lastName: "Martínez",
      salary: 3300000
    },
    {
      firstName: "Miguel",
      lastName: "Almirón",
      salary: 2200000
    },
    {
      firstName: "Ezequiel",
      lastName: "Barco",
      salary: 1300000
    },
    {
      firstName: "Brad",
      lastName: "Guzan",
      salary: 740000
    },
    {
      firstName: "Pity",
      lastName: "Martínez",
      salary: 3100000
    },
    {
      firstName: "Julian",
      lastName: "Gressel",
      salary: 650000
    },
    {
      firstName: "Leandro",
      lastName: "González Pírez",
      salary: 600000
    },
    {
      firstName: "Darlington",
      lastName: "Nagbe",
      salary: 665000
    },
    {
      firstName: "Jeff",
      lastName: "Larentowicz",
      salary: 210000
    },
    {
      firstName: "Franco",
      lastName: "Escobar",
      salary: 300000
    },
    {
      firstName: "Brooks",
      lastName: "Lennon",
      salary: 225000
    }
  ]
}

seattle = {
  name: "Seattle Sounders FC",
  mascot: "Sammy the Sounder",
  players: [{
      firstName: "Nicolás",
      lastName: "Lodeiro",
      salary: 2800000
    },
    {
      firstName: "Raúl",
      lastName: "Ruidíaz",
      salary: 2000000
    },
    {
      firstName: "Jordan",
      lastName: "Morris",
      salary: 1100000
    },
    {
      firstName: "Stefan",
      lastName: "Frei",
      salary: 700000
    },
    {
      firstName: "Cristian",
      lastName: "Roldan",
      salary: 900000
    },
    {
      firstName: "Yeimar",
      lastName: "Gómez",
      salary: 600000
    },
    {
      firstName: "Xavier",
      lastName: "Arreaga",
      salary: 550000
    },
    {
      firstName: "João",
      lastName: "Paulo",
      salary: 1200000
    },
    {
      firstName: "Gustav",
      lastName: "Svensson",
      salary: 450000
    },
    {
      firstName: "Nouhou",
      lastName: "Tolo",
      salary: 300000
    },
    {
      firstName: "Will",
      lastName: "Bruin",
      salary: 350000
    }
  ]
}

//populate la, create ObjectIds for each player
la.players.forEach(player => {
  player._id = new ObjectId();
});
db.teams.insertOne(la);

//populate nyFa, create ObjectIds for each player
nyFc.players.forEach(player => {
  player._id = new ObjectId();
});
db.teams.insertOne(nyFc);

//populate toronto, create ObjectIds for each player
toronto.players.forEach(player => {
  player._id = new ObjectId();
});
db.teams.insertOne(toronto);

//populate atlanta, create ObjectIds for each player
atlanta.players.forEach(player => {
  player._id = new ObjectId();
});
db.teams.insertOne(atlanta);

//populate seattle, create ObjectIds for each player
seattle.players.forEach(player => {
  player._id = new ObjectId();
});
db.teams.insertOne(seattle);