
let form=document.getElementById('form');
let tabel_information=document.getElementById('tabel-information');
let foodName=document.getElementById('foodName');
let price=document.getElementById('price');
let FoodInformaintion=[];
let Tablearay=["ID", "NAME", "Type", "Price"];
function Food(FoodId, FoodName, Type, Price){
    this.FoodId=FoodId;
    this.FoodName=FoodName;
    this.Type=Type;
    this.Price=Price;
    FoodInformaintion.unshift(this.FoodId, this.FoodName, this.Type, this.Price);
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

form.addEventListener('submit', handlerForm);

function createId(){
  return  Math.floor(1000 + Math.random() * 9000);
}
function handlerForm(event){
    event.preventDefault();
  
    createNew(event);
}
function createNew(event){
    let Id = createId();
    let FoodName=event.target.foodName.value;
    let Type=event.target.select.value;
    let Price=event.target.price.value;
    let informaintion=new Food(Id, FoodName, Type, Price);
    informaintion.renderFood();
    foodName.value='';
    price.value='';
}



Food.prototype.renderFood=function(){
  let tr2=document.createElement("tr");
  let table=document.getElementById('table')
  for(let i=0;i<4;i++){
    let td =document.createElement('td');
    td.textContent=FoodInformaintion[i];
    tr2.appendChild(td);
  }
  table.appendChild(tr2);

    
}
console.log(FoodInformaintion);
