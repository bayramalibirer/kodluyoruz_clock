let myname=prompt(`Adınız nedir? `)
let mynameDOM=document.querySelector('#myName')
mynameDOM.innerHTML=`${myname}`

function updateClock() {
    const now = new Date();
    const days_Week = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const day = days_Week[now.getDay()];
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const time = `${hour}:${minute}:${second} , ${day}`;
    
    document.getElementById('myClock').innerText = time;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  