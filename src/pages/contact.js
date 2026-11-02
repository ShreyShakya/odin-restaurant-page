export function loadContact() {
    const contact = {
        address: "4257 Isleta Boulevard, Albuquerque, NM",
        phone: "(505) 555-0199",
        email: "contact@lospolloshermanos.com",
        hours: "Monday – Saturday: 10 AM – 10 PM"
    };

    const content = document.querySelector('#content')
    const contactTitle = document.createElement('h1')
    contactTitle.textContent = "Contact Us"
    const address = document.createElement('p')
    const phone = document.createElement('p')
    const email = document.createElement('p')
    const hours = document.createElement('p')

    address.textContent = contact.address
    phone.textContent = contact.phone
    email.textContent = contact.email
    hours.textContent = contact.hours

    content.append(contactTitle, address, phone, email, hours)

}