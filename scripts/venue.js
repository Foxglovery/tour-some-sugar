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
                if (Number(clickedVenueId) === booking.venueId) { //
                    bookedBandId.push(booking.bandId) // Push matches into new array
                }
            }
            const bookedBandNames = bookedBandId.map(id => bands.find(band => band.id === id).name); // looks at new band id array and for each entry, makes new array of name of matching band.
            const bookedBandMessage =bookedBandNames.join(`, `)
            window.alert(`Come see ${bookedBandMessage}`)
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