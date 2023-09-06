import { venueList} from "./venue.js"
import { bandList} from "./band.js"
import { bookingList } from "./booking.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar</h1>
<article class="details">
    <section class="bookings">
        <h2>Bookings</h2>
        ${bookingList()}
    </section>
    </article>
    <article class="smallContainer">
    <section class="venues">
        <h2>Venues</h2>
        ${venueList()}
    </section>


<section class="bands">
    <h2>Bands</h2>
    ${bandList()}
</section>
</article>
`

mainContainer.innerHTML = applicationHTML