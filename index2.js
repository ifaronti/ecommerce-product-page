const thumbnailz = [...document.querySelectorAll('.thumbnailz')]
const large = document.getElementById('large')

thumbnailz.map(thumbnail =>{
    thumbnail.onclick = () =>{
        large.src = `./images/${thumbnail.alt}.jpg`
        thumbnail.classList.add('activeThumb')

        thumbnailz.map(thumb =>{
            return thumb !== thumbnail ? thumb.classList.remove('activeThumb')
            :
            ''
        })
    }
})


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

let moNextBtn = document.querySelector('.mobile_next')
let moprevBtn = document.querySelector('.mobile_prev')

// ******************** lightbox variables ******************

let nextBtn = document.querySelector(".nextbtn")
let prevBtn = document.querySelector(".previousbtn")

// ******************** mobile dropdown menu function *****************8

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// ************************************ cart functions ************************************

plusBtn.addEventListener('click', function(){
    let addedQuantity = 0
    quantity.innerHTML = addedQuantity+1
})

minusBtn.addEventListener('click', function(){
    let addedQuantity = 0
    if(quantity.innerHTML == 0){
        quantity.innerHTML = 0
    }
    else{
        quantity.innerHTML = Number(quantity.innerText) - 1
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

closeCart.addEventListener('click', ()=>{
    checkCart.style.display = 'none'
})

moNextBtn.addEventListener('click', ()=>{

})

moprevBtn.addEventListener('click', ()=>{
})