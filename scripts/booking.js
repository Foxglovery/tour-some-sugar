import { getBookings, getBands, getVenues } from "./database.js";

const bookings = structuredClone(getBookings())
const venues = structuredClone(getVenues())
const bands = structuredClone(getBands())

document.addEventListener( 
    "click",
    (clickevent) => {
        const itemClicked = clickevent.target
        const clickedBandId = Number(itemClicked.dataset.bandid) //grabs venue id on click
        let bandStats = []
        if (itemClicked.dataset.type === "booking") {
            for (const band of bands) {
                if (clickedBandId === band.id) {
                    
                    bandStats = band
                }
            }
            const bandStatsMessage=`${bandStats.name}\nThey will wow you with ${bandStats.genre}\nThey have been laying down sick beats since ${bandStats.founded}\nSouls on board: ${bandStats.members}`
            window.alert(bandStatsMessage)
        }
    }
)

const findVenue = (book) => {
    let venueName = null
    for (const venue of venues) {
        if (venue.id === book.venueId) {
            venueName = venue
        }
    }

    return venueName
}

const findBand = (book) => {
    let bandName = null
    for (const band of bands) {
        if (band.id === book.bandId) {
            bandName = band
        }
    }

    return bandName
}



export const bookingList = () => {
    let html = ""
    html = "<ul>"
    for (const book of bookings) {
        const event = findVenue(book)
        const peep = findBand(book)
        html += `<li data-type="booking" data-bandId="${book.bandId}">${peep.name} will be playing at ${event.name} on ${book.date}</li>`
    }

    html += "</ul>"

    return html
}
//THIS WORKS WHAT ARE THE NEXT STEPS.
//ADDING EVENT LISTENERS
//STYLING