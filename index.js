const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-purple-100"];

document.getElementById("changeColorBtn").addEventListener('click',function(){
    document.body.classList.remove(...colors);

 let math=Math.floor(Math.random()*colors.length)


for(let i=0 ;i<colors.length; i++){
 
 if(i===math){
    document.body.classList.add(colors[i]);
  
    console.log("Applied color:",i, colors[i]);
 }
}
})


const todayDate = new Date();
const nameDay=todayDate.toLocaleDateString('en-US',{weekday:"short"})
const numberDay=todayDate.getDate()
const nameMonth=todayDate.toLocaleDateString('en-us',{month:"long"})
const getYear=todayDate.getFullYear()

const findDate = `${nameDay}, ${numberDay} ${nameMonth} ${getYear}`;
document.getElementById("date").innerText=findDate
console.log(findDate);