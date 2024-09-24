
class PageCreator {
    constructor() {

    }
    static createElementText(type, textContent, className) {
        let elem = document.createElement(`${type}`)
        elem.textContent = textContent
        elem.setAttribute("class", className)
        return elem
    }
    static genContainer(moduleName) {
        return this.createElementText("div", "", `container-${moduleName}`)
    }
    static appendChildren(parent, children) {
        children.foreEach(child => parent.appendChild(child))
    }
}
export {PageCreator}