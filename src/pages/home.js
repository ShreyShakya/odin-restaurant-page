import restaurantImage from "../images/background.jpg";

export function loadHome() {
    const content = document.querySelector('#content')
    const resName = document.createElement('h1')
    const resDescription = document.createElement('p')
    const mainImage = document.createElement('div')
    mainImage.classList.add('main-image');
    const resImage = document.createElement('img')

    resName.textContent = "Welcome to the Los Pollos Hermanos"
    resDescription.textContent = "Welcome to Los Pollos Hermanos — where family, flavor, and flawless service come together. Our chicken is prepared with the utmost care, seasoned to perfection, and served with a smile that's as warm as our kitchen."
    resImage.src = restaurantImage
    resImage.alt = "Description of the restaurant"

    mainImage.append(resImage)
    content.append(resName, resDescription, mainImage)
}
