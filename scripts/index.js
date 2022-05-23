//store the products array in localstorage as "products"

// let addproducts = document.querySelector("#add_product")
// addproducts.addEventListener("submit", AddProdFunc())


let LSproduct = JSON.parse(localStorage.getItem("products")) || []

function AddProdFunc(){
    event.preventDefault();

    let form = document.querySelector("#products")
    let type = document.querySelector("#type").value
    let desc = form.desc.value;
    let price = form.price.value;
    let img = form.image.value;

    let p1 = new PumaPro(type,desc,price,img)

    LSproduct.push(p1)
    
    localStorage.setItem("products",JSON.stringify(LSproduct))

    // let type = document.querySelector("#type").value=null
    // let desc = form.desc.value=null
    // let price = form.price.value=null
    // let img = form.image.value=null
    window.location.reload()


}

function PumaPro(t,d,p,i){
    this.type=t,
    this.desc=d,
    this.price=p,
    this.img=i
}


function Changepage(){
    window.location.href="inventory.html"
}
