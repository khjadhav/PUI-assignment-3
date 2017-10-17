
//create an empty array that will hold the shopping cart

var cart=[];

// The cart needs to hold the name, price and count of the items,
// add these as objects in the array
var Item= function(name, price, count){
    this.name=name;
    this.name=price;
    this.count=count
}

//function addItemToCart(name, price, count)
function addItemToCart(name, price, count){
    for ( var i in cart){
        if (cart[i].name === name){
            cart[i].count+= count;
            return;
        }
    }
    var item=new Item(name, price, count);
    cart.push(item);
}

//removeItemFromCart(name)//Removes one item
function removeItemFromCart(name){
    for(var i in cart){
        if(cart[i].name===name){
            cart[i].count--;
            console.log(cart[i].count);
            return;
        }
    }
}

addItemToCart("Apple", 1.22, 2);
addItemToCart("Pear", 1.72, 3);


console.log(cart[0].count);
removeItemFromCart("Apple");
console.log(cart[0].count);






//removesAllItemFromCart(name)

//clearCart()

//countCart() -> return total count

//totalCart() -> return total cost

//listCart() -> arrat of Items

