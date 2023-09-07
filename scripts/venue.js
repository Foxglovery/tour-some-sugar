import { getBands, getBookings, getVenues } from "./database.js";

const venues = structuredClone(getVenues())
const bookings = structuredClone(getBookings())
const bands = structuredClone(getBands())

document.addEventListener( 
    "click",
    (clickevent) => {
        const itemClicked = clickevent.target
        const clickedVenueId = itemClicked.dataset.id //grabs venue id on click
        if (itemClicked.dataset.type === "venue") {
            let bookedBandId = []
            for (const booking of bookings) {
                if (parseInt(clickedVenueId) === booking.venueId) { //
                    bookedBandId.push(booking.bandId) // Push matches into new array
                }
            }
            const bookedBandNames = bookedBandId.map(id => bands.find(band => band.id === id).name); // looks at new band id array and for each entry, makes new array of name of matching band.
            let bookedBandMessage = `Come See ` //textContent displays begining message
            if (bookedBandNames.length > 1) { // if more than 1 name in array
                bookedBandMessage += bookedBandNames.slice(0, -1).join(`, `) + `, and ` + bookedBandNames.slice(-1); // seperates index 0 through next to last item; and adds "and" before concat slice of last entr; and adds precious commas with join
            } else {
                bookedBandMessage += bookedBandNames[0]
            }
        window.alert(bookedBandMessage)
        }
    }
)




export const venueList = () => {
    let html = "<ul>"

        for (const venue of venues) {
            html += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
        }
        return html += "</li>"
}