const convertbutton = document.querySelector('.convert-button')
const currencyselect = document.querySelector('.currency-select')
function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value

    const currencyvaluetoconvert = document.querySelector('.currency-value-to-convert')
    const currencyValueconverted = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const eurotoday = 6.2
    if ( currencyselect.value == 'Dolar'){
         currencyValueconverted.innerHTML = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'

         }).format(inputCurrencyValue/dolarToday)
    }
    if (currencyselect.value =='Euro'){
        currencyValueconverted.innerHTML = new Intl.NumberFormat('de-DE',{
            style:'currency',
            currency:'EUR'
        }).format(inputCurrencyValue/eurotoday)
    }


    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat('pt-br',{
    style: 'currency',
    currency:'BRL'
}).format(inputCurrencyValue)

}


convertbutton.addEventListener('click', convertValues)