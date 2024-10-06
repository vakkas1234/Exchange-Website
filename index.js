async function load1(event){
    const api = "34281b4ef57bf42fdf228b8f"
    const response = await fetch(` https://v6.exchangerate-api.com/v6/34281b4ef57bf42fdf228b8f/latest/USD`)
    const data  =  await response.json()
    const response1 = await fetch(`https://v6.exchangerate-api.com/v6/34281b4ef57bf42fdf228b8f/latest/EUR`)
    const data1  = await response1.json()
    const response2 = await fetch(`https://v6.exchangerate-api.com/v6/34281b4ef57bf42fdf228b8f/latest/GBP`)
    const data2 = await response2.json()
    document.getElementById("th1").innerHTML = data.conversion_rates.TRY
   document.getElementById("th2").innerHTML = data1.conversion_rates.TRY
   document.getElementById("th3").innerHTML = data2.conversion_rates.TRY
}