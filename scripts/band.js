import { getBands, getBookings, getVenues } from "./database.js";

const venues = structuredClone(getVenues())
const bookings = structuredClone(getBookings())
const bands = structuredClone(getBands())

document.addEventListener( 
    "click",
    (clickevent) => {
        const itemClicked = clickevent.target
        const clickedBandId = itemClicked.dataset.id //grabs venue id on click
        if (itemClicked.dataset.type === "band") {
            let bookedVenueId = []
            for (const booking of bookings) {
                if (parseInt(clickedBandId) === booking.bandId) { // checks iterant id vs clicked id
                    bookedVenueId.push(booking.venueId) // Push matches into new array
                }
            }
            const bookedVenueNames = bookedVenueId.map(id => venues.find(venue => venue.id === id).name); // looks at boooked band id array and for each entry, makes new array of names of venues with matching ids..
            let bookedBandMessage = `${itemClicked.textContent} will be playing at ` //textContent displays band name at top of alert
                if (bookedVenueNames.length > 1) { // if more than 1 name in array
                    bookedBandMessage += bookedVenueNames.slice(0, -1).join(`, `) + `, and ` + bookedVenueNames.slice(-1); // seperates index 0 through next to last item; and adds "and" before concat slice of last entr; and adds precious commas with join
                } else {
                    bookedBandMessage += bookedVenueNames[0]
                }
            window.alert(bookedBandMessage) 
            
        }
    }
)

export const bandList = () => {
    let html = "<ul>"

        for (const band of bands) {
            html += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
        }
        return html += "</li>"
}