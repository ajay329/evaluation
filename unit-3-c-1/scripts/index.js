//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",adddata)
var dataarr=JSON.parse(localStorage.getItem("products"))||[]

function adddata(){
    event.preventDefault();
    var dataobj={
        
type: product.type.value,
desc: product.desc.value,
price: product.price.value,
image: product.image.value,

    }
    dataarr.push(dataobj)
    localStorage.setItem("products",JSON.stringify(dataarr))
    window.location.href="index.html"
}

