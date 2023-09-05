const database = {
    bands: [{
        id: 1,
        name: "The Darling Judys",
        members: 3,
        genre: "Screamtronica",
        founded: 1980

    },
    {
        id: 2,
        name: "Peepums, The Quivering Harlequin",
        members: 1,
        genre: "Performance Art",
        founded: 1988

    },
    {
        id: 3,
        name: "Chai IV Bag",
        members: 6,
        genre: "Pleasantcore",
        founded: 1998

    },
    {
        id: 4,
        name: "Frank's Red Hot Saxplosion",
        members: 3,
        genre: "Permajazz",
        founded: 1968

    },
    {
        id: 5,
        name: "The Ghosts Living In Your Office Space",
        members: 20,
        genre: "Ethereal-Synth",
        founded: 1735

    },
    {
        id: 6,
        name: "Dangerous Melon",
        members: 1,
        genre: "Mumbledrag",
        founded: 2020

    },
    {
        id: 7,
        name: "Slick Wick Cheaters",
        members: 6,
        genre: "Utah-flange",
        founded: 2012

    },
    {
        id: 8,
        name: "Pennies For Jabronis",
        members: 3,
        genre: "Puppetry/Burlesque",
        founded: 2007

    },
    {
        id: 9,
        name: "Karl Slaygan",
        members: 2,
        genre: "Quantum-Drag",
        founded: 2001

    },
    {
        id: 10,
        name: "Whisper Nothings",
        members: 5,
        genre: "ASMR",
        founded: 2023

    }],
    bookings: [{
        id: 1, bandId: 1, venueId:  4, date: "10/13/23"
    },
    {
        id: 2, bandId: 4, venueId:  1, date: "10/17/23"
    },
    {
        id: 3,  bandId: 9, venueId:  3, date: "10/24/23"
    },
    {
        id: 4,  bandId: 2 , venueId:  2, date: "10/31/23"
    },
    {
        id: 5,   bandId: 5, venueId: 5 , date: "11/5/23"
    },
    {
        id: 6, bandId: 3, venueId:  6, date: "11/12/23"
    },
    {
        id: 7, bandId: 6, venueId: 3 , date: "11/27/23"
    },
    {
        id: 8, bandId: 1, venueId: 2 , date: "12/8/23"
    },
    {
        id: 9, bandId: 2, venueId: 4 , date: "12/16/23"
    },
    {
        id: 10, bandId: 7, venueId: 1 , date: "12/24/23"
    },
    {
        id: 11, bandId: 10, venueId:  6, date: "12/31/23"
    },
    {
        id: 12, bandId: 8, venueId:  1, date: "1/5/23"
    },
    {
        id: 13, bandId: 9, venueId:  2, date: "1/17/23"
    },
 ],
    venues: [{
        id: 1, name: "Bilkerie Estate", address: "1338 Fleetsail Circle", squarefeet: 100000, maxOccupancy: 2000
    },
    {
        id: 2, name: "Featherlight Fromageri", address: "6932 Castorole Place", squarefeet: 120000, maxOccupancy: 3000
    },
    {
        id: 3, name: "Krakenblurst Guildhall", address: "1 Obelisk Dr", squarefeet: 30000, maxOccupancy: 500
    },
    {
        id: 4, name: "Butts N Huts Tiki Fantastic Good Time ", address: "4000 Nibbler Hwy", squarefeet: 200000, maxOccupancy: 10000
    },
    {
        id: 5, name: "Karen's Corn Maze", address: "7639 Pickleball Lane", squarefeet: 160000, maxOccupancy: 4000
    },
    {
        id: 6, name: "Vita-plex Mart", address: "1260 Fennnugronk Way", squarefeet: 60000, maxOccupancy: 1500
    } ]
} 

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}