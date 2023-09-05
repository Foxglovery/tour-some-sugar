import { getBookings, getBands, getVenues } from "./database.js";

const bookings = structuredClone(getBookings())
const venues = structuredClone(getVenues())
const bands = structuredClone(getBands())

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
        html += `<li>${peep.name} will be playing at ${event.name} on ${book.date}</li>`
    }

    html += "</ul>"

    return html
}
//THIS WORKS WHAT ARE THE NEXT STEPS.
//ADDING EVENT LISTENERS
//STYLING