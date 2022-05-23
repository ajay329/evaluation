function appenddata(){


var dataarr=JSON.parse(localStorage.getItem("products"))||[]
let allproduct=document.getElementById("all_products")
dataarr.forEach(function(elem,index){
    let div=document.createElement("div")
    let type=document.createElement("p")
    type.innerText=elem.type
    let desc=document.createElement('p')
    desc.innerText=elem.desc
    let price=document.createElement("p")
    price.innerText=elem.price
    let img=document.createElement("img")
    img.src=elem.image
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
        remove(index)
    })
    div.append(img,type,desc,price,btn)
    allproduct.append(div)
})

}
appenddata();



function remove(index){
    var dataarr=JSON.parse(localStorage.getItem("products"))||[]
    
dataarr.splice(index,1)
localStorage.setItem("products",JSON.stringify(dataarr))
window.location.reload();
appenddata()

}