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
let type=[];
let namesFood=[];
let pricesFood=[];
let numberType=[0,0,0,0,0];
for(let i=0;i<FoodInformaintion.length;i++){
  type.push(FoodInformaintion[i].Type);
  namesFood.push(FoodInformaintion[i].FoodName);
  pricesFood.push(Number(FoodInformaintion[i].Price))
}
for(let i=0;i<type.length;i++){
  switch(type[i]){
    case 'Fruit and vegetables':numberType[0]=numberType[0]+1; break;
    case 'Starchy food':numberType[1]=numberType[1]+1;break;    
    case 'Dairy':numberType[2]=numberType[2]+1;break;
    case 'Protein':numberType[3]=numberType[3]+1;break;
    case 'Fat':numberType[4]=numberType[4]+1;break;
  }
}

const labels = [
  'Fruit and vegetables',
  'Starchy food',
  'Dairy',
  'Protein',
  'Fat',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: ['#541690', '#FF4949', '#FF8D29', '#D61C4E', '#293462'],
    borderColor: 'rgb(255, 99, 132)',
    data: numberType,
  }]
};

const config = {
  type: 'pie',
  data: data,
  options: {}
};
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

console.log(FoodInformaintion)
console.log(numberType)


const label2 = namesFood;

const data2 = {
  labels: namesFood,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: ['#541690', '#FF4949', '#FF8D29', '#D61C4E', '#293462','red', 'yellow', 'blue', 'black'],
    borderColor: 'rgb(255, 99, 132)',
    data: pricesFood,
  }]
};

const config2 = {
  type: 'bar',
  data: data2,
  options: {}
};
const bar = new Chart(
  document.getElementById('Bar'),
  config2
);
console.log(namesFood)
console.log('prices',pricesFood)