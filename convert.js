async function click1(){
    const api = "34281b4ef57bf42fdf228b8f"
   var input1 =  document.getElementById("input1").value 
   const response = await fetch(`https://v6.exchangerate-api.com/v6/${api}/pair/USD/TRY/${input1}`)
   const data  = await response.json()
   document.getElementById("span1").innerHTML = data.conversion_result.toFixed(2) + "TRY"

}
async function click2(){
    const api1 = "34281b4ef57bf42fdf228b8f"
    var input2 =  document.getElementById("input2").value 
    const response2 = await fetch(`https://v6.exchangerate-api.com/v6/${api1}/pair/TRY/USD/${input2}`)
    const data2  = await response2.json()
    document.getElementById("span2").innerHTML = data2.conversion_result.toFixed(2) + "USD"
 
}