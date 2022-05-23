
let LSproduct = JSON.parse(localStorage.getItem("products")) || []

let container = document.querySelector("#all_products")

append ()

function append(){

    LSproduct.forEach(function(ele,index) {
        
        let card = document.createElement("div")
        card.style="border:1px solid black; height:400px; width:300px; margin-top:25px; margin-left:20px"

        let imgcard = document.createElement("div")
        imgcard.style="height:70%; width:100%; border:1px solid black"

        let img = document.createElement("img")
        img.style="height:100%; width:100%"
        img.src=ele["img"]
        imgcard.append(img)

        let type = document.createElement("p")
        type.innerText="Type :" + ele["type"]

        let desc = document.createElement("p")
        desc.innerText="Description :" + ele["desc"]

        let price = document.createElement("price")
        price.innerText="Price :" + ele["price"]

        let remove = document.createElement("button")
        remove.innerText="Remove"
        
        remove.addEventListener("onclick", function(){
            remove(index)
        })
            
       
       

        card.append(imgcard,type,desc,price,remove)
        container.append(card)

    });

  

    
}

function addProFunc(){
    window.location.href="index.html"
}

function remove(index){
    LSproduct = JSON.parse(localStorage.getItem("products"))

    
    LSproduct.slice(ele,ele)
    localStorage.setItem("products",JSON.stringify(LSproduct))


    // LSproduct.filter(function(ele,i){
    //     if (i===index){
           
    //     }
    //     else{
    //         return i!==index
    //     }
    // })
}