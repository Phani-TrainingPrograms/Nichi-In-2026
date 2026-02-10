//Using the tranditioinal module export syntax
module.exports = (function(){
    let cart = [];
  
    function addItem(item){
        cart = [...cart, item];
    }

    function generateBill(){
        let total = 0;
        for(const item of cart){
            total += item.price;
        }
        return total;
    }

    function getAllItems(){
        return cart
    }

    return{
        addItem, getAllItems, generateBill
    }

})()//Invoking this function immediately as IIFE(Immediately Invoked Function Expression)