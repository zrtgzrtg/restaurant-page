
import { PageCreator } from "./createPage";
import data from "./cocktails.json"

function loadPageMenu() {
    const container = PageCreator.genContainer("menu")
    const cocktail1 = buildCocktail.genCocktail("Mojito")
    const cocktail2 = buildCocktail.genCocktail("Margarita")
    const cocktail3 = buildCocktail.genCocktail("Old Fashioned")
    const cocktail4 = buildCocktail.genCocktail("Cosmopolitan")
    container.appendChild(cocktail1)
    container.appendChild(cocktail2)
    container.appendChild(cocktail3)
    container.appendChild(cocktail4)
    return container
}
class buildCocktail {
    static genCocktail(cocktailName) {
        let cocktail = data.cocktails.find(cocktail1 => cocktail1.name ===cocktailName)
        console.log(cocktail)
        return this.wrapItem(cocktail)
    }

    static genItems(cocktail) {
        let retArray = [] 
        const drinkName = PageCreator.createElementText("div", cocktail.name,"cocktail-name")
        const price = PageCreator.createElementText("div",cocktail.price,"cocktail-price")
        const description = PageCreator.createElementText("div", cocktail.description,"cocktail-description")
        const ingredientsList = document.createElement("ul")
        ingredientsList.setAttribute("class", "cocktail-ing-list")
        console.log(cocktail)
        cocktail.ingredients.forEach(element => {
            let ingredient = PageCreator.createElementText("li",element,"ingredient")
            ingredientsList.appendChild(ingredient)
            
        });
        retArray.push(drinkName,price,description,ingredientsList)
        return retArray
    }
    static wrapItem(cocktail) {
        const cocktailContainer = PageCreator.genContainer(cocktail.name)
        this.genItems(cocktail).forEach(elem => cocktailContainer.appendChild(elem))
        return cocktailContainer
    }

}
export {loadPageMenu}