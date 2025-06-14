const convertButton = document. querySelector('.convert-button')
const currencyselect =document.querySelector('.currency-select')
function convertvalues(){
    const inputCurrencyValue =document. querySelector('.input-currency').value
    const currencyvaluetoconvert = document. querySelector('.currency-value-to-convert')
    const currencyvalueconverted =document. querySelector('.currency-value')

 const dolarToday= 5.2
 const eurotoday= 6.2
    
 currencyvaluetoconvert.innerHTML = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL'
 }). format(inputCurrencyValue)
 if(currencyselect.value == 'Dolar'){
    currencyvalueconverted.innerHTML = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }). format(inputCurrencyValue/dolarToday)
 }
 if(currencyselect.value == 'Euro'){
    currencyvalueconverted.innerHTML = new Intl.NumberFormat('de-DE',{
        style:'currency',
        currency:'EUR'
    }).format(inputCurrencyValue/eurotoday)
 }
}    
function changecurrency(){
const currencyname= document.getElementById('currency-name')
const currencyimg = document. querySelector('.currency-img')

if( currencyselect.value =='Dolar'){
    currencyname.innerHTML ='Dolar Americano'
    currencyimg.src='./assets/estados-unidos.png'
}
if( currencyselect.value =='Euro'){
    currencyname.innerHTML = 'Euro'
    currencyimg.src='./assets/euro.png'
}
convertvalues()
  }
  currencyselect.addEventListener('change', changecurrency)
convertButton.addEventListener('click', convertvalues)
//esse deu certo/