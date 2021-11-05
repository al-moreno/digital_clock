const clock = document.querySelector('.clock');


const tick =  () => {

    const now = new Date();
    const fns = dateFns.format(now, 'dddd Do MMMM YYYY')

    const hr = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const html = `
    <h4> The current day and time is: </h6>
    <h6> ${fns} </h4>
    <span>${hr}</span>:
    <span> ${min}</span>:
    <span> ${sec}</span>`;

    clock.innerHTML = html;
    
}

setInterval(tick, 1000);