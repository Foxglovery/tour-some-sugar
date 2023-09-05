import { getBands } from "./database.js";

const bands = structuredClone(getBands())

export const bandList = () => {
    let html = "<ul>"

        for (const band of bands) {
            html += `<li data-type="band">${band.name}</li>`
        }
        return html += "</li>"
}