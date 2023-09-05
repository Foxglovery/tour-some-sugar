import { getVenues } from "./database.js";

const venues = structuredClone(getVenues())

export const venueList = () => {
    let html = "<ul>"

        for (const venue of venues) {
            html += `<li data-type="venue">${venue.name}</li>`
        }
        return html += "</li>"
}