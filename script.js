const clock = document.querySelector('.clock');


const tick =  () => {

    const now = new Date();
    

    

    const hr = (now.getHours() == 0?'12':now.getHours() >12? now.getHours() -12: now.getHoures());
    const min = (now.getMinutes()<10?'0':'') + now.getMinutes();
    const sec = (now.getSeconds()<10?'0':'') + now.getSeconds();
   


    const html = `
    <h4> The current time is: </h6>
    <span>${hr}</span>:
    <span>${min}</span>:
    <span>${sec}</span>`;

    clock.innerHTML = html;
    
};

setInterval(tick, 1000);