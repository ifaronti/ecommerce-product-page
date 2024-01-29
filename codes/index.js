const thumbnailz = [...document.querySelectorAll('.thumbnailz')]
const lightThumb = document.querySelector('.thumblist')
const imgButtons = document.querySelector('.imgBtns')
const large = document.getElementById('largeImg')
let lightBox = document.querySelector('.lightBox')
let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.previousBtn')
let closeBoxBtn= document.querySelector('.closeLightBox')

allLinks = thumbnailz.map(thumbnail => thumbnail.alt)

thumbnailz.map(thumbnail =>{
    thumbnail.onclick = () =>{
        large.src = `./images/${thumbnail.alt}.jpg`

        thumbnailz.map(thumb =>{
            return thumb !== thumbnail ? thumb.classList.remove('activeThumb')
            :
            thumbnail.classList.add('activeThumb')
        })
    }
})

let i = 0

const nextImg = ()=>{
    i++
    if(i > allLinks.length - 1){
        i = 0
    }
    large.src =  `./images/${allLinks[i]}.jpg`
    thumbnailz.map(thumbnail => {
    thumbnail !== thumbnailz[i] ? thumbnail.classList.remove('activeThumb'): thumbnail.classList.add('activeThumb')
    })
}

const prevImg = ()=>{
    i--
    if(i < 0){
        i = 3
    }
    large.src =  `./images/${allLinks[i]}.jpg`
    thumbnailz.map(thumbnail => {
    thumbnail !== thumbnailz[i] ? thumbnail.classList.remove('activeThumb'): thumbnail.classList.add('activeThumb')
    })
}

prevBtn.onclick = prevImg
nextBtn.onclick = nextImg


large.onclick = () => {
    lightBox.dataset.boolean = "true"
    large.classList.add('largeImg')
    lightThumb.classList.add('centerThumb')
    imgButtons.style.display = 'flex'
    closeBoxBtn.style.display = 'block'
}

closeBoxBtn.onclick = () => {
    lightBox.dataset.boolean = "false"
    large.classList.remove('largeImg')
    lightThumb.classList.remove('centerThumb')
    imgButtons.style.display = 'none'
    closeBoxBtn.style.display = 'none'
}
// ******************  cart variables ********************
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

// ******************** mobile variables **************88

let menu = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar_menu')

// ******************** mobile dropdown menu function *****************8

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    lightBox.classList.toggle('visibleBox')
})

// ************************************ cart functions ************************************

plusBtn.onclick = () => quantity.innerHTML = Number(quantity.innerText) + 1

minusBtn.addEventListener('click', ()=>{
    quantity.innerHTML == 0 ? '': quantity.innerHTML = Number(quantity.innerHTML) - 1
})

add2Cart.addEventListener('click', ()=>{
    if (quantity.innerHTML == 0){
        zeroError.style.display = 'block'
        itemCount.style.display = 'none'
    }
    else{
        addedQ = quantity.innerHTML
        zeroError.style.display = 'none'
        localStorage.setItem('quantity', addedQ) 
    }
    location.reload()
})

let flawts = localStorage.getItem('quantity') 

const cartLogic = () =>{
    checkCart.style.display = 'block'
    if( flawts){
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
                return
            }
        }
    }
}

shoppingCart.onmouseover =  cartLogic

checkCart.onmouseover = () => checkCart.style.display = 'block'
closeCart.onclick = () => checkCart.style.display = 'none'


if (flawts){
    itemCount.style.display = 'block'
    itemCount.innerHTML = `${flawts}`
}

const emptyCart = ()=>{
    localStorage.clear()
    itemCount.style.display = 'none'
    checkCartItems.style.display = 'none'
    cartP2.style.display = 'block'
}

checkOutBtn.onclick = emptyCart

const deleteItem = ()=>{
    if(itemCount.innerHTML == 1){
        emptyCart()
        location.reload()
        return
    }
        
    if (flawts >= 2){
        itemCount.innerHTML = `${Number(itemCount.innerHTML) - 1}`
        cartP4.innerHTML = `$125 x ${itemCount.innerHTML}:`
        cartSum.innerHTML = `$${Number(125) * Number(itemCount.innerHTML)}`
        localStorage.setItem('quantity', itemCount.innerHTML)
        return
    }
}

delItem.addEventListener('click', deleteItem)
