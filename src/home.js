
import barPic from "./bar.jpg"
import { PageCreator } from "./createPage"

function loadPageHome() {
    const menuButtonTop = document.querySelector("#menu")
    const container = PageCreator.genContainer("home")
    const barImg = document.createElement("img")
    const textDiv = PageCreator.createElementText("div", "Get the best drinks here!", "text-div")
    const menuButton = PageCreator.createElementText("button","Get them here","menu-button")
    const textDivContainer = PageCreator.createElementText("div", "","text-div-container")

    menuButton.addEventListener("click", (event)=> {
        menuButtonTop.click()
    })

    textDivContainer.appendChild(textDiv)
    textDivContainer.appendChild(menuButton)

    barImg.src = barPic
    barImg.setAttribute("alt", "Img couldnt be loaded!")

    container.appendChild(textDivContainer)
    container.appendChild(barImg)




    return container
}

export {loadPageHome}