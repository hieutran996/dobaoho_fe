import React from 'react';
import $ from "jquery";

function addToCart(value) {
    var currentListCart = localStorage.getItem('listcart');
    if (currentListCart === null) {
        currentListCart = []
    } else {
        currentListCart = JSON.parse(currentListCart)
    }

    var productCard = $(`#parent_cart_${value._id}`);
    var position = productCard.offset();  
    $('body').append('<div class="floating-cart"></div>');
    var cart = $('div.floating-cart');

    var cart_shopping = $('div#cart_shopping');
    var position_cart_shopping = cart_shopping.offset();  

    productCard.clone().appendTo(cart);
    $(cart).css({ 'top': position.top + 'px', "left": position.left + 'px' }).fadeIn("slow").addClass('moveToCart');

    // Move to Cart
    $(cart).css({ 'top': position_cart_shopping.top + 40  + 'px', "left": position_cart_shopping.left + 'px' });

    setTimeout(function () {
        $("body").addClass("MakeFloatingCart");
        $(cart).css({ 'top': position_cart_shopping.top + 'px', "left": position_cart_shopping.left + 'px' });
    }, 800);
    setTimeout(function () {
        $('div.floating-cart').remove();
        $("body").removeClass("MakeFloatingCart");    
    }, 1000);

    const idx = currentListCart.findIndex(element => element._id === value._id);

    if (idx < 0) {
        currentListCart.push({
            ...value,
            count: 1
        })
    } else {
        currentListCart[idx].count = currentListCart[idx].count + 1

    }

    localStorage.setItem('listcart', JSON.stringify(currentListCart));
}

export default addToCart;