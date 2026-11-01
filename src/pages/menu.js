export function loadMenu() {
    const content = document.querySelector('#content')
    const menuTitle = document.createElement('h1')
    menuTitle.textContent = "Our Menu"
    content.append(menuTitle)

    const menu = [
        {
            name: "Los Pollos Fried Chicken",
            description: "Crispy golden chicken, seasoned with our signature eleven herbs and spices.",
            price: 450
        },
        {
            name: "Pollos Chicken Burger",
            description: "Juicy chicken fillet, fresh lettuce, tomato, and our special Pollos sauce.",
            price: 350
        },
        {
            name: "Chicken Tenders",
            description: "Tender chicken strips coated in our signature crispy breading.",
            price: 300
        },
        {
            name: "Pollos Fries",
            description: "Golden, crispy fries with a pinch of our secret seasoning.",
            price: 150
        }
    ]

    menu.forEach(item => {
        const menuName = document.createElement('p')
        const menuDescription = document.createElement('p')
        const menuPrice = document.createElement('p')

        menuName.textContent = item.name
        menuDescription.textContent = item.description
        menuPrice.textContent = `$${item.price}`

        content.append(menuName, menuDescription, menuPrice)
    })
}