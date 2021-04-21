const groceryList = [

        {
            id: 1,
            name: "milk",
            price: 3.95,
            dateCreated: "Apr19",
        },
        {
            id: 2,
            name: "eggs",
            price: 3.05,
            dateCreated: "Apr19",
        },
        {
            id: 3,
            name: "pizza rolls",
            price: 4.65,
            dateCreated: "Apr19",
        },
        {
            id: 4,
            name: "protein",
            price: 8.95,
            dateCreated: "Apr19",
        },
        {
            id: 5,
            name: "fave fruit",
            price: 3.95,
            dateCreated: "Apr19",
        },
        {
            id: 6,
            name: "sandwich buns",
            price: 2.65,
            dateCreated: "Apr19",
        },
        {
            id: 7,
            name: "condiments",
            price: 10.33,
            dateCreated: "Apr19",
        }
    ]
    // console.log(groceryList)

const addToGroceryList = (groceryItemObject) => {
    const lastIndex = groceryList.length - 1
    const currentLastItem = groceryList[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    groceryItemObject.id = idForNewItem
    groceryList.push(groceryItemObject)
}

const chianti = {

    name: "chianti",
    price: 16.00,
    dateCreated: "Apr20",
}
addToGroceryList(chianti)

const grapes = {

    name: "grapes",
    price: 4.00,
    dateCreated: "Apr20",
}
addToGroceryList(grapes)


const sponges = {

    name: "sponges",
    price: 6.00,
    dateCreated: "Apr20",
}
addToGroceryList(sponges)


const tea = {

    name: "tea",
    price: 5.29,
    dateCreated: "Apr20",
}
addToGroceryList(tea)


const coffee = {

    name: "coffee",
    price: 14.00,
    dateCreated: "Apr20",
}
addToGroceryList(coffee)


const romano = {

    name: "romano",
    price: 7.29,
    dateCreated: "Apr20",
}
addToGroceryList(romano)

// console.log(groceryList)

const findExpensiveGroceries = () => {
    const expensiveGroceries = []
    for (grocery of groceryList) {
        if (grocery.price >= 8.00) {
            expensiveGroceries.push(grocery)
            console.log(expensiveGroceries)
        }
    }
    return expensiveGroceries //return occurs inside function but outside for and if loops

}
const expensiveGroceries = findExpensiveGroceries() //calling the function logs the array
console.log(expensiveGroceries)
    //findExpensiveGroceries(expensiveGroceries) throws error message: Object.<anonymous>