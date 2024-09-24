
import { PageCreator } from "./createPage"

function loadPageHome() {
    const container = PageCreator.genContainer("home")
    return container
}

export {loadPageHome}