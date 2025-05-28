const loadingELement = document.createElement('div');
loadingELement.className = 'h-[169px] w-[674px] bg-[#CFDBFE] flex justify-center items-center'

const loadingElementText = document.createElement('div')
loadingElementText.textContent = 'Please Wait...'
loadingElementText.style = "font-family:'Irish Grover'"
loadingElementText.className = 'h-[76px] w-[266px] text-4xl animate-bounce'

loadingELement.appendChild(loadingElementText)

const mainElement = document.getElementById('main_content')

mainElement.appendChild(loadingELement)

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

async function getCryptoData(){
    try{
        const cryptoData = await fetch(URL)
        
        const responseData = await cryptoData.json();
         setTimeout(()=>{
            mainElement.removeChild(loadingELement)
            createCryptoCard(responseData)
        },2000) 
    }
    catch(error){
        console.log(error);
    }
}
getCryptoData();

function createCryptoCard(cryptoData){

    const cardLayout = document.createElement('div');
    cardLayout.className = 'w-[997px] h-fit bg-[#CFDBFE] flex-col p-16'

    for(let i =0;i<10;i++){
        const cryptoCoinDiv = document.createElement('div');
    cryptoCoinDiv.className = 'w-[859px] h-[79px] bg-[#191620] mt-4 mb-4 flex space-x-2'

    const btcImageDiv = document.createElement('div')
    const btcImage = document.createElement('img')
    btcImage.src = cryptoData[i].image
    btcImage.className = 'object-contain h-[45px] w-[45px] m-4'

    const btcSymbol = document.createElement('div')
    btcSymbol.textContent = cryptoData[i].symbol.toUpperCase()
    btcSymbol.style = "font-family: 'Irish Grover'"
    btcSymbol.className = 'text-white text-2xl m-4 mr-16'

    const btcName = document.createElement('div')
    btcName.textContent = cryptoData[i].name
    btcName.style ="font-family: 'Irish Grover'"
    btcName.className = 'text-white text-2xl m-4 mr-16'

    const btcPrice = document.createElement('div')
    const price = cryptoData[i].current_price.toLocaleString('en')
    btcPrice.style = "font-family: 'Irish Grover'"
    btcPrice.textContent = '$' + price;
    btcPrice.className = 'text-white text-2xl m-4 mr-16'

    const btcPercentageChange = document.createElement('div')
    const percentageChange = cryptoData[i].price_change_percentage_24h.toFixed(2);
    if(percentageChange>=0){
        btcPercentageChange.className = 'text-[#3FC712] text-2xl m-4'
    }
    else {
         btcPercentageChange.className = 'text-[#D21010] text-2xl m-4'
    }

    btcPercentageChange.textContent = cryptoData[i].price_change_percentage_24h.toFixed(2) + '%'
    btcPercentageChange.style = "font-family: 'Irish Grover'"
    
    



    btcImageDiv.appendChild(btcImage)
    cryptoCoinDiv.appendChild(btcImageDiv)
    cryptoCoinDiv.appendChild(btcSymbol)
    cryptoCoinDiv.appendChild(btcName)
    cryptoCoinDiv.appendChild(btcPrice)
    cryptoCoinDiv.appendChild(btcPercentageChange)

    cardLayout.appendChild(cryptoCoinDiv)

    }
    
    mainElement.appendChild(cardLayout)
}