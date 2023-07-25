let thumb1 = document.getElementById('mage1')
let thumb2 = document.getElementById('mage2')
let thumb3 = document.getElementById('mage3')
let thumb4 = document.getElementById('mage4')

let large1 = document.querySelector('.large1')
let large2 = document.querySelector('.large2')
let large3 = document.querySelector('.large3')
let large4 = document.querySelector('.large4')

// ******************  carting variables ********************
let plusBtn = document.querySelector(".plus_btn")
let minusBtn = document.querySelector(".minus_btn")
let add2Cart = document.querySelector(".addcart")
let quantity = document.querySelector(".quantity")
let itemCount = document.querySelector(".cartnumber")
let zeroError = document.querySelector(".zero_quantity_error")
let shoppingCart = document.querySelector(".cart")
let checkCart = document.querySelector(".cart_box")
let shoppingCartSvg = document.querySelector(".the_cart")
let checkCartItems = document.querySelector(".cart_filled")
let closeCart = document.querySelector(".cart_close")
let cartP4 = document.querySelector(".cart_p4")
let cartP2 = document.querySelector(".cart_p2")
let cartSum = document.querySelector(".bolden_sum")
let addedQ = ''
checkOutBtn = document.querySelector('.checkoutbtn')
delItem = document.querySelector('.checkout_deletebtn')
trueQl = window.matchMedia("(max-width: 960px)")



// ******************** mobile variables **************88

let menu = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar_menu')

let molarge1 = document.querySelector('.molarge1')
let molarge2 = document.querySelector('.molarge2')
let molarge3 = document.querySelector('.molarge3')
let molarge4 = document.querySelector('.molarge4')

let moNextBtn = document.querySelector('.mobile_next')
let moprevBtn = document.querySelector('.mobile_prev')

// ******************** lightbox variables ******************
let lightboxer = document.querySelector(".lightboxing")
let closeBox = document.querySelector(".closebtn")
let thumb1b = document.getElementById('mage1b')
let thumb2b = document.getElementById('mage2b')
let thumb3b = document.getElementById('mage3b')
let thumb4b = document.getElementById('mage4b')

let large1b = document.querySelector('.large1b')
let large2b = document.querySelector('.large2b')
let large3b = document.querySelector('.large3b')
let large4b = document.querySelector('.large4b')

let nextBtn = document.querySelector(".nextbtn")
let prevBtn = document.querySelector(".previousbtn")

//************************************ main section functions ***********************/

large1.addEventListener('click', function(){
    lightboxer.style.display = 'block'
    large1b.style.display = 'block'
    large2b.style.display = 'none'
    large3b.style.display = 'none'
    large4b.style.display = 'none'
    thumb1b.style.border = '3px solid'
    thumb1b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb1b.style.opacity = '.6'
    thumb2b.style.border = 'none'
    thumb3b.style.border = 'none'
    thumb4b.style.border = 'none'
    thumb2b.style.opacity = '1'
    thumb3b.style.opacity = '1'
    thumb4b.style.opacity = '1'
})

large2.addEventListener('click', function(){
    lightboxer.style.display = 'block'
    large2b.style.display = 'block'
    large1b.style.display = 'none'
    large3b.style.display = 'none'
    large4b.style.display = 'none'
    thumb2b.style.border = '3px solid'
    thumb2b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb2b.style.opacity = '.6'
    thumb3b.style.opacity = '1'
    thumb4b.style.opacity = '1'
    thumb1b.style.opacity = '1'
    thumb1b.style.border = 'none'
    thumb3b.style.border = 'none'
    thumb4b.style.border = 'none'
})

large3.addEventListener('click', function(){
    lightboxer.style.display = 'block'
    large3b.style.display = 'block'
    large2b.style.display = 'none'
    large1b.style.display = 'none'
    large4b.style.display = 'none'
    thumb3b.style.border = '3px solid'
    thumb3b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb3b.style.opacity = '.6'
    thumb2b.style.opacity = '1'
    thumb4b.style.opacity = '1'
    thumb1b.style.opacity = '1'
    thumb2b.style.border = 'none'
    thumb1b.style.border = 'none'
    thumb4b.style.border = 'none'
})

large4.addEventListener('click', function(){
    lightboxer.style.display = 'block'
    large4b.style.display = 'block'
    large2b.style.display = 'none'
    large3b.style.display = 'none'
    large1b.style.display = 'none'
    thumb4b.style.border = '3px solid'
    thumb4b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb4b.style.opacity = '.6'
    thumb3b.style.opacity = '1'
    thumb2b.style.opacity = '1'
    thumb1b.style.opacity = '1'
    thumb2b.style.border = 'none'
    thumb1b.style.border = 'none'
    thumb3b.style.border = 'none'
})

thumb1.addEventListener('click', function(){
    large1.style.display = 'block'
    large2.style.display = 'none'
    large3.style.display = 'none'
    large4.style.display = 'none'
    thumb1.style.border = '3px solid'
    thumb1.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb1.style.opacity = '.6'
    thumb2.style.border = 'none'
    thumb3.style.border = 'none'
    thumb4.style.border = 'none'
    thumb2.style.opacity = '1'
    thumb3.style.opacity = '1'
    thumb4.style.opacity = '1'
    
})

thumb2.addEventListener('click', function(){
    large2.style.display = 'block'
    large1.style.display = 'none'
    large3.style.display = 'none'
    large4.style.display = 'none'
    thumb2.style.border = '3px solid'
    thumb2.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb2.style.opacity = '.6'
    thumb3.style.opacity = '1'
    thumb4.style.opacity = '1'
    thumb1.style.opacity = '1'
    thumb1.style.border = 'none'
    thumb3.style.border = 'none'
    thumb4.style.border = 'none'
})

thumb3.addEventListener('click', function(){
    large3.style.display = 'block'
    large2.style.display = 'none'
    large1.style.display = 'none'
    large4.style.display = 'none'
    thumb3.style.border = '3px solid'
    thumb3.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb3.style.opacity = '.6'
    thumb2.style.opacity = '1'
    thumb4.style.opacity = '1'
    thumb1.style.opacity = '1'
    thumb2.style.border = 'none'
    thumb1.style.border = 'none'
    thumb4.style.border = 'none'
})

thumb4.addEventListener('click', function(){
    large4.style.display = 'block'
    large2.style.display = 'none'
    large3.style.display = 'none'
    large1.style.display = 'none'
    thumb4.style.border = '3px solid'
    thumb4.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb4.style.opacity = '.6'
    thumb3.style.opacity = '1'
    thumb2.style.opacity = '1'
    thumb1.style.opacity = '1'
    thumb2.style.border = 'none'
    thumb1.style.border = 'none'
    thumb3.style.border = 'none'
})

// ************************ lightbox section functions ************************

closeBox.addEventListener('click', function(){
    lightboxer.style.display = 'none'
})

thumb1b.addEventListener('click', function(){
    large1b.style.display = 'block'
    large2b.style.display = 'none'
    large3b.style.display = 'none'
    large4b.style.display = 'none'
    thumb1b.style.border = '3px solid'
    thumb1b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb1b.style.opacity = '.6'
    thumb2b.style.border = 'none'
    thumb3b.style.border = 'none'
    thumb4b.style.border = 'none'
    thumb2b.style.opacity = '1'
    thumb3b.style.opacity = '1'
    thumb4b.style.opacity = '1'
})

thumb2b.addEventListener('click', function(){
    large2b.style.display = 'block'
    large1b.style.display = 'none'
    large3b.style.display = 'none'
    large4b.style.display = 'none'
    thumb2b.style.border = '3px solid'
    thumb2b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb2b.style.opacity = '.6'
    thumb3b.style.opacity = '1'
    thumb4b.style.opacity = '1'
    thumb1b.style.opacity = '1'
    thumb1b.style.border = 'none'
    thumb3b.style.border = 'none'
    thumb4b.style.border = 'none'
})

thumb3b.addEventListener('click', function(){
    large3b.style.display = 'block'
    large2b.style.display = 'none'
    large1b.style.display = 'none'
    large4b.style.display = 'none'
    thumb3b.style.border = '3px solid'
    thumb3b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb3b.style.opacity = '.6'
    thumb2b.style.opacity = '1'
    thumb4b.style.opacity = '1'
    thumb1b.style.opacity = '1'
    thumb2b.style.border = 'none'
    thumb1b.style.border = 'none'
    thumb4b.style.border = 'none'
})

thumb4b.addEventListener('click', function(){
    large4b.style.display = 'block'
    large2b.style.display = 'none'
    large3b.style.display = 'none'
    large1b.style.display = 'none'
    thumb4b.style.border = '3px solid'
    thumb4b.style.borderColor = 'hsl(26, 100%, 55%)'
    thumb4b.style.opacity = '.6'
    thumb3b.style.opacity = '1'
    thumb2b.style.opacity = '1'
    thumb1b.style.opacity = '1'
    thumb2b.style.border = 'none'
    thumb1b.style.border = 'none'
    thumb3b.style.border = 'none'
})


nextBtn.addEventListener('click', function(){
    if (large1b.style.display != 'none'){
        large1b.style.display = 'none'
        large2b.style.display = 'block'
        large3b.style.display = 'none'
        large4b.style.display = 'none'
        thumb2b.style.border = '3px solid'
        thumb2b.style.borderColor = 'hsl(26, 100%, 55%)'
        thumb2b.style.opacity = '.6'
        thumb1b.style.border = 'none'
        thumb3b.style.border = 'none'
        thumb4b.style.border = 'none'
        thumb1b.style.opacity = '1'
        thumb3b.style.opacity = '1'
        thumb4b.style.opacity = '1'
    }
    else{
        if (large2b.style.display != 'none'){
            large1b.style.display = 'none'
            large3b.style.display = 'block'
            large2b.style.display = 'none'
            large4b.style.display = 'none'
            thumb3b.style.border = '3px solid'
            thumb3b.style.borderColor = 'hsl(26, 100%, 55%)'
            thumb3b.style.opacity = '.6'
            thumb1b.style.border = 'none'
            thumb2b.style.border = 'none'
            thumb4b.style.border = 'none'
            thumb1b.style.opacity = '1'
            thumb2b.style.opacity = '1'
            thumb4b.style.opacity = '1'
        }
        else {
            if (large3b.style.display != 'none'){
                large1b.style.display = 'none'
                large4b.style.display = 'block'
                large2b.style.display = 'none'
                large3b.style.display = 'none'
                thumb4b.style.border = '3px solid'
                thumb4b.style.borderColor = 'hsl(26, 100%, 55%)'
                thumb4b.style.opacity = '.6'
                thumb1b.style.border = 'none'
                thumb2b.style.border = 'none'
                thumb3b.style.border = 'none'
                thumb1b.style.opacity = '1'
                thumb2b.style.opacity = '1'
                thumb3b.style.opacity = '1'
            }
            else{
                if (large4b.style.display != 'none'){
                    large1b.style.display = 'block'
                    large2b.style.display = 'none'
                    large3b.style.display = 'none'
                    large4b.style.display = 'none'
                    thumb1b.style.border = '3px solid'
                    thumb1b.style.borderColor = 'hsl(26, 100%, 55%)'
                    thumb1b.style.opacity = '.6'
                    thumb2b.style.border = 'none'
                    thumb3b.style.border = 'none'
                    thumb4b.style.border = 'none'
                    thumb2b.style.opacity = '1'
                    thumb3b.style.opacity = '1'
                    thumb4b.style.opacity = '1'
                }
            }
        }
    }
})

prevBtn.addEventListener('click', function(){
    if (large4b.style.display != 'none'){
        large4b.style.display = 'none'
        large3b.style.display = 'block'
        large2b.style.display = 'none'
        large1b.style.display = 'none'
        thumb3b.style.border = '3px solid'
        thumb3b.style.borderColor = 'hsl(26, 100%, 55%)'
        thumb3b.style.opacity = '.6'
        thumb1b.style.border = 'none'
        thumb2b.style.border = 'none'
        thumb4b.style.border = 'none'
        thumb1b.style.opacity = '1'
        thumb2b.style.opacity = '1'
        thumb4b.style.opacity = '1'
    }
    else{
        if (large3b.style.display != 'none'){
            large1b.style.display = 'none'
            large2b.style.display = 'block'
            large3b.style.display = 'none'
            large4b.style.display = 'none'
            thumb2b.style.border = '3px solid'
            thumb2b.style.borderColor = 'hsl(26, 100%, 55%)'
            thumb2b.style.opacity = '.6'
            thumb1b.style.border = 'none'
            thumb3b.style.border = 'none'
            thumb4b.style.border = 'none'
            thumb1b.style.opacity = '1'
            thumb3b.style.opacity = '1'
            thumb4b.style.opacity = '1'
        }
        else {
            if (large2b.style.display != 'none'){
                large2b.style.display = 'none'
                large1b.style.display = 'block'
                large4b.style.display = 'none'
                large3b.style.display = 'none'
                thumb1b.style.border = '3px solid'
                thumb1b.style.borderColor = 'hsl(26, 100%, 55%)'
                thumb1b.style.opacity = '.6'
                thumb4b.style.border = 'none'
                thumb2b.style.border = 'none'
                thumb3b.style.border = 'none'
                thumb4b.style.opacity = '1'
                thumb2b.style.opacity = '1'
                thumb3b.style.opacity = '1'
            }
            else{
                if (large1b.style.display != 'none'){
                    large4b.style.display = 'block'
                    large2b.style.display = 'none'
                    large3b.style.display = 'none'
                    large1b.style.display = 'none'
                    thumb4b.style.border = '3px solid'
                    thumb4b.style.borderColor = 'hsl(26, 100%, 55%)'
                    thumb4b.style.opacity = '.6'
                    thumb2b.style.border = 'none'
                    thumb3b.style.border = 'none'
                    thumb1b.style.border = 'none'
                    thumb2b.style.opacity = '1'
                    thumb3b.style.opacity = '1'
                    thumb1b.style.opacity = '1'
                }
            }
        }
    }
})


// ******************** mobile dropdown menu function *****************8



menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


// ************************************ cart functions ************************************

plusBtn.addEventListener('click', function(){
    quantity.innerHTML = Number(quantity.innerText) + 1
    addedQ = quantity.innerHTML
})

minusBtn.addEventListener('click', function(){
    if(quantity.innerHTML == 0){
        quantity.innerHTML = 0
    }
    else{
        quantity.innerHTML = Number(quantity.innerText) - 1
        addedQ = quantity.innerHTML
    }
})

add2Cart.addEventListener('click', function(){
    if (quantity.innerHTML == 0){
        zeroError.style.display = 'block'
        itemCount.style.display = 'none'
    }
    else{
        addedQ = quantity.innerHTML
        itemCount.style.display = 'block'
        itemCount.innerHTML = `${addedQ}`
        zeroError.style.display = 'none'
        localStorage.setItem('quantity', addedQ)
        
    }
    location.reload()
})

let flawts = localStorage.getItem('quantity') 

shoppingCart.addEventListener('mouseover', function(){
    checkCart.style.display = 'block'
    if(( flawts != 0) && (flawts != null)){
        cartP2.style.display = 'none'
        checkCartItems.style.display = 'block'
        if(flawts > 1){
            cartP4.innerHTML = `$125 x ${flawts}:`
            cartSum.innerHTML = `$${Number(125) * Number(flawts)}`
            cartP2.style.display = 'none'
        }
        else{
            if (flawts = 1){
                cartP4.innerHTML = `$125`
                cartP2.style.display = 'none'
            }
        }
    }
})

checkCart.addEventListener('mouseover', function(){
    checkCart.style.display = 'block'
})
checkCart.addEventListener('mouseout', function(){
    checkCart.style.display = 'none'
})


if (( flawts != 0) && (flawts != null)){
    itemCount.style.display = 'block'
    itemCount.innerHTML = `${flawts}`
}

checkOutBtn.addEventListener('click', function(){
    localStorage.clear()
    itemCount.style.display = 'none'
    checkCartItems.style.display = 'none'
    cartP2.style.display = 'block'

})

delItem.addEventListener('click', function(){
    if (itemCount.innerHTML == 1){
        localStorage.clear()
        cartP2.style.display = 'block'
        checkCartItems.style.display = 'none'
        itemCount.style.display = 'none'
        location.reload()
    }
    else{
        if (itemCount.innerHTML <= 2){
            itemCount.innerText = Number(itemCount.innerHTML) - Number(1)
            cartP4.innerHTML = `$125`
            cartSum.style.display = 'none'
            localStorage.setItem('quantity', itemCount.innerHTML)
        }
        else{
            if (flawts >= 2){
                itemCount.innerHTML = `${Number(itemCount.innerHTML) - Number(1)}`
                cartP4.innerHTML = `$125 x ${itemCount.innerHTML}:`
                cartSum.innerHTML = `$${Number(125) * Number(itemCount.innerHTML)}`
                localStorage.setItem('quantity', itemCount.innerHTML)
            }
        }

    }
})

// shoppingCart.addEventListener('click', function(){
//     if (checkCart.style.display == 'block'){
//         checkCart.style.display = 'none'
//     }
//     else{
//         if (checkCart.style.display == 'none'){
//             checkCart.style.display = 'block'
//         }
//     }
// })

closeCart.addEventListener('click', function(){
    checkCart.style.display = 'none'
})

moNextBtn.addEventListener('click', function(){
    if (molarge1.style.display != 'none'){
        molarge1.style.display = 'none'
        molarge2.style.display = 'block'
        molarge3.style.display = 'none'
        molarge4.style.display = 'none'
    }
    else{
        if (molarge2.style.display != 'none'){
            molarge1.style.display = 'none'
            molarge3.style.display = 'block'
            molarge2.style.display = 'none'
            molarge4.style.display = 'none'
        }
        else {
            if (molarge3.style.display != 'none'){
                molarge1.style.display = 'none'
                molarge4.style.display = 'block'
                molarge2.style.display = 'none'
                molarge3.style.display = 'none'
            }
            else{
                if (molarge4.style.display != 'none'){
                    molarge1.style.display = 'block'
                    molarge2.style.display = 'none'
                    molarge3.style.display = 'none'
                    molarge4.style.display = 'none'
                }
            }
        }
    }
})

moprevBtn.addEventListener('click', function(){
    if (molarge4.style.display != 'none'){
        molarge4.style.display = 'none'
        molarge3.style.display = 'block'
        molarge2.style.display = 'none'
        molarge1.style.display = 'none'
    }
    else{
        if (molarge3.style.display != 'none'){
            molarge1.style.display = 'none'
            molarge2.style.display = 'block'
            molarge3.style.display = 'none'
            molarge4.style.display = 'none'
        }
        else {
            if (molarge2.style.display != 'none'){
                molarge2.style.display = 'none'
                molarge1.style.display = 'block'
                molarge4.style.display = 'none'
                molarge3.style.display = 'none'
            }
            else{
                if (molarge1.style.display != 'none'){
                    molarge4.style.display = 'block'
                    molarge2.style.display = 'none'
                    molarge3.style.display = 'none'
                    molarge1.style.display = 'none'
                }
            }
        }
    }
})