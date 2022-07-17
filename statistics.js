'use strict';


let tabel_information=document.getElementById('tabel-information');
let foodName=document.getElementById('foodName');
let price=document.getElementById('price');

let FoodInformaintion=[];
let information;
let Tablearay=["ID", "NAME", "Type", "Price"];
function Food(FoodId, FoodName, Type, Price){
    this.FoodId=FoodId;
    this.FoodName=FoodName;
    this.Type=Type;
    this.Price=Price;
    FoodInformaintion.push(this);
}


createTable();
function createTable(){
  let table=document.createElement('table');
  table.id='table';
  tabel_information.appendChild(table);
  let tr=document.createElement('tr');
  table.appendChild(tr);
  for(let i=0;i<4;i++){
   let th=document.createElement("th");
   th.textContent=Tablearay[i];
   tr.appendChild(th);
  }
}
Food.prototype.renderTable = function () {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let name = document.createElement("td");
    let type = document.createElement("td");
    let price = document.createElement("td");
  
    id.textContent = this.FoodId;
    name.textContent = this.FoodName;
    type.textContent = this.Type;
    price.textContent = this.Price;
    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(type);
    tr.appendChild(price);
    table.appendChild(tr);
  };

  function getDataFromLocalStroge() {
    let parsedData = JSON.parse(localStorage.getItem("foodinformation"));
  
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Food(parsedData[i].FoodId, parsedData[i].FoodName, parsedData[i].Type, parsedData[i].Price);
      }
    }
    for(let i=0;i<FoodInformaintion.length;i++){
        FoodInformaintion[i].renderTable();
    }

  }
  getDataFromLocalStroge();





console.log("table here");
