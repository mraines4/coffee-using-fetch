// draw all the email addresses associated with the coffee orders to the page in a list
// when you click a coffee order, draw the details of the order to another part of the page
// store the coffee data in localStorage
// load the coffee data when the page loads, only retrieving it if there is no data in localStorage
// add links with filtering by the first letter of the email (or coffee order, your choice)

const API_URL = 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';

let allEmailArray = [];
let allOrders;

fetch(API_URL)
    .then(function(j) {
        return j.json();
    })
    .then(function(data) {
        allEmailArray = Object.keys(data);
        allOrders = data;
        console.log(allEmailArray)
        console.log(allOrders)
        drawEmailToListing(allEmailArray);
    });

function drawEmailToListing (keys) {
}