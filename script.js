const convertButton = document.querySelector('.convert-button')
const currencyselect = document.querySelector('.currency-select')
function convertValues() {
   const inputCurrencyValue = document.querySelector('.input-currency').value

   const currencyvaluetoconvert = document.querySelector('.currency-value-to-convert') // valor em real//
   const currencyValueconverted = document.querySelector('.currency-value') //outras moedas//
   
  
   const dolarToday = 5.2
   const eurotoday = 6.2
   


   if(currencyselect.value == 'Dolar'){ // se ele selecionar o valor de dolar/
      currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"USD"
   }).format(inputCurrencyValue/dolarToday)

   }
   if(currencyselect.value == 'Euro'){ //se selecionar o euro/
    currencyValueconverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style:"currency",
      currency:"EUR"
    }).format(inputCurrencyValue/eurotoday)
   }

   
   currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
      style:"currency",
      currency:"BRL"
   }).format(inputCurrencyValue)
  
   
 }  
 function changecurrency (){
const currencyname = document.getElementById('currency-name')// no id, nao precisa de (.)//
const currencyimg = document.querySelector('.currency-img')

if(  currencyselect.value == 'Dolar'){
 currencyname.innerHTML = 'Dolar Americano'
 currencyimg.src = './assets/estados-unidos.png' 
}

 if(  currencyselect.value == 'Euro'){
 currencyname.innerHTML = 'EURO'  
currencyimg.src= './assets/euro.png'
 }
 convertValue()
 }  
 currencyselect.addEventListener('change',changecurrency) // change em português = a trocar//
convertButton.addEventListener('click', convertValues)

