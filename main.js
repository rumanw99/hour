setInterval(setClock , 1000)


const saH = document.getElementById('h');
const daH = document.getElementById('m');
const thH = document.getElementById('s');




function setClock(){
   const currentData = new Date()
   const th = currentData.getSeconds() / 60
   const da = (th + currentData.getMinutes())/ 60
   const sa = (da + currentData.getHours()) / 12

   setRotation(saH , sa)
   setRotation(daH , da)
   setRotation(thH , th)
}

function setRotation(element , n){

    element.style.setProperty('--rotation' , n * 360)
}
setClock()