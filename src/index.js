
import "./style.css"
import { loadPageHome } from "./home"
import { loadPageAbout } from "./about"
import { loadPageMenu } from "./menu"
import data from "./cocktails.json"

class indexClass{
contentDiv = document.querySelector("#content")
nav = document.querySelector("nav")
currentTab = "home"
    init() {
        this.#addListeners()
        this.#updateTab()
        console.log(data)
    }
    #addListeners() {
        this.nav.addEventListener("click", (event)=> {
            if(event.target.id === "nav") {
                return
            }
            this.currentTab = event.target.id
            this.#updateTab()
        })
    }
    #updateTab() {
        let loadFunc = this.#loadFunctions()
        while (this.contentDiv.firstChild) {
            this.contentDiv.removeChild(this.contentDiv.firstChild)
        }
        this.contentDiv.appendChild(loadFunc())
    }
    #loadFunctions() {
        switch (this.currentTab) {
            case "home": {
                return loadPageHome
            }
            case "about": {
                return loadPageAbout
            }
            case "menu": {
                return loadPageMenu
            }
            default: {
                console.log(this.currentTab)
                throw Error(`currentTab has malformed State: ${this.currentTab}`)
            }
        }
    }
}



const indexClassInstance = new indexClass()
indexClassInstance.init()