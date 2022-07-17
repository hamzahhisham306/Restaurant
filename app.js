'use strict';
let form=document.getElementById('form');
let tabel_information=document.getElementById('tabel-information');
let foodName=document.getElementById('foodName');
let price=document.getElementById('price');
let FoodInformaintion=[];

function Food(FoodId, FoodName, Type, Price){
    this.FoodId=FoodId;
    this.FoodName=FoodName;
    this.Type=Type;
    this.Price=Price;
    FoodInformaintion.push(this);
}




form.addEventListener('submit', handlerForm);

function createId(){
  return  Math.floor(1000 + Math.random() * 9000);
}
function handlerForm(event){
    let Id = createId();
    let FoodName=event.target.foodName.value;
    let Type=event.target.select.value;
    let Price=event.target.price.value;
    let informaintion=new Food(Id, FoodName, Type, Price);
    savaDataToLocal();
  
}


function savaDataToLocal(){
   let arrayFood=JSON.stringify(FoodInformaintion);
   let stringArray=localStorage.setItem('foodinformation', arrayFood);
}

function getDataFromLocalStroge() {
    let parsedData = JSON.parse(localStorage.getItem("foodinformation"));
  
    if (parsedData) {
      for (let i = 0; i < parsedData.length; i++) {
        new Food(parsedData[i].FoodId, parsedData[i].FoodName, parsedData[i].Type, parsedData[i].Price);
      }
    }
    console.log(parsedData)
  }
  getDataFromLocalStroge();
