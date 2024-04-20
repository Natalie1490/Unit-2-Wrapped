///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


const summedPrice = cart.reduce((accumulator, food) => {
    return accumulator + food.price;
  }, 0);

console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const taxRate = 0.06;
const couponValue = 0.10;
const cartTotal = summedPrice;


function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal - couponValue + taxAmount;
    return finalPrice;
  }
  
  const finalPrice = calcFinalPrice(cartTotal, couponValue, taxRate);
  console.log(finalPrice);
  

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
 Name: Could be useful for creating email blast or addressing customers to make them feel more welcome.
 Age: Good for tracking which age groups frequent the business. Using this the owner can create events that targets more people of that age group.
 Location: Location can help you undersatnd which cities or areas might be best to open up a new location in the future.
 favFood: This can help owners understand which items work on the menu or she be added to the menu.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Bart',
    age: 75,
    location: 'Cape Town',
    favFood: 'pasta',
};

const natTheCustomer = {
    name: 'Natalie',
    age: 22,
    location: 'NYC',
    favFood: 'N/A',
};