
// when you click a coffee order, draw the details of the order to another part of the page
// store the coffee data in localStorage
// load the coffee data when the page loads, only retrieving it if there is no data in localStorage
// add links with filtering by the first letter of the email (or coffee order, your choice)

// const API_URL = 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';
const API_URL = '/dummy.json'

let allEmailArray = [];
let allOrders;

// fetch the API
fetch(API_URL)
    .then(function(j) {
        return j.json();
    })
    .then(function(data) {
        allOrders = data;
        allEmailArray = Object.keys(data);
        // console.log(allEmailArray)
        // console.log(allOrders)
        drawEmailToListing(allEmailArray);
    });


// draw all the email addresses associated with the coffee orders to the page in a list
function drawEmailToListing (keys) {
    
    keys.forEach(function(ea) {
        const anchorElement = document.createElement('a');
        anchorElement.textContent = ea;
        anchorElement.addEventListener('click', function() {
            drawDetails(ea)
        })
        const listItem = document.createElement('li');
        listItem.appendChild(anchorElement);
        const listArea = document.querySelector('[data-listing]')
        listArea.appendChild(listItem);
    })
}

// when you click a coffee order, draw the details of the order to another part of the page

function drawDetails (email) {
    
    const detailArea = document.querySelector('[data-detail]')
    detailArea.textContent = '';
    const emailDiv = document.createElement('div');
    const coffeeDiv = document.createElement('div');
    const flavorDiv = document.createElement('div');
    const sizeDiv = document.createElement('div');
    const strengthDiv = document.createElement('div');
    
    if (email === allOrders[email].emailAddress) {
        emailDiv.textContent = `Email Address: ${allOrders[email].emailAddress}`;
        coffeeDiv.textContent = `Cofee: ${allOrders[email].coffee}`;
        flavorDiv.textContent = `Flavor: ${allOrders[email].size}`;
        sizeDiv.textContent = `Size: ${allOrders[email].flavor}`;
        strengthDiv.textContent = `Strenth: ${allOrders[email].strength}`;

    }
    
    detailArea.appendChild(emailDiv)
    detailArea.appendChild(coffeeDiv)
    detailArea.appendChild(flavorDiv)
    detailArea.appendChild(sizeDiv)
    detailArea.appendChild(strengthDiv)



}
