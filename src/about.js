
import data from "./contact.json"
import { PageCreator } from "./createPage";

function loadPageAbout() {
    const container = PageCreator.genContainer("about")
    const ContactDiv = PageCreator.createElementText("div", "Contact Us", "contact-title")
    const contactList = document.createElement("ul")
    contactList.setAttribute("class", "contact-list")

    const dataObj = data.contactInformation[0]

    const phoneNumber = PageCreator.createElementText("div",`Phone: ${dataObj.phone}`,"phone-number")
    const email = PageCreator.createElementText("div",dataObj.email,"email")
    const address = PageCreator.createElementText("div",dataObj.address,"address")
    console.log(dataObj.address)

    contactList.appendChild(phoneNumber)
    contactList.appendChild(email)
    contactList.appendChild(address)

    const elems = [ContactDiv,contactList]
    elems.forEach(elem => container.appendChild(elem))

    return container


}
export {loadPageAbout}