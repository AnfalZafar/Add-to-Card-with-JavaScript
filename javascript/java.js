var arr = [
    {
        name : "Sharing",
        price : "2090 Rs",
        img : "https://images.kfcpakistan.com/image/1670428289482-image.jpg",
    },
    {
        name : "Mid Night",
        price : "450 Rs",
        img : "https://images.kfcpakistan.com/image/1664808381179-image.png",
    },
    {
        name : "Signature Boxes",
        price : "1390 Rs",
        img : "https://images.kfcpakistan.com/image/1670428259329-image.jpg",
    },
]
var card = "";
arr.forEach(func => {
    card += `
    <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
    <div class="card m-auto" style="width: 15rem;">
  <img src="${func.img}" class=" card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${func.name}</h5>
    <p class="card-text">${func.price}</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
    onclick = "add(this)" data-name = "${func.name}";
    data-price = "${func.price}";
    data-img = "${func.img}";
    >
  Add To Bucket
</button>

    </div>
</div>
</div>
    `
})
document.getElementById("card").innerHTML = card;

var table_arr = [];
function add(food){
    var name = food.getAttribute("data-name");
    var price = food.getAttribute("data-price");
    var img = food.getAttribute("data-img");

    var table_obj = {
        name : name,
        price : price,
        img : img,
    }
   table_arr.push(table_obj);
   localStorage.setItem("table" , JSON.stringify(table_arr))  
   var gain = JSON.parse(localStorage.getItem("table"));
   var table = "";
   for(i = 0 ; i < gain.length; i++){
    table += "<tr>" + "<th>" + gain[i].name + "</th>" + "<th>" + gain[i].price + "</th>"+ "<th>" + "<img class='name' src = "+ gain[i].img + ">" + "</th>" + "</tr>"
   }
   document.getElementById("table").innerHTML = table;
}