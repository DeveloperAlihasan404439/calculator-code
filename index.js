let totle = '';
let value;
const input = document.getElementById('input-h1');
document.getElementById('clear').addEventListener('click', (event)=>{
    input.value = '';
    totle = ''
})
document.getElementById('delet').addEventListener('click', (event)=>{
    totle = totle.slice(0,-1)
    input.value = totle
})
document.getElementById('persent').addEventListener('click', (event)=>{
    const persent = event.target.innerText
    totle += persent
    input.value = totle;
})
document.getElementById('vag').addEventListener('click', (event)=>{
    const deletString = event.target.innerText;
    totle += deletString
    input.value = totle;
})
document.getElementById('saven').addEventListener('click', (event)=>{
    const sevenString = event.target.innerText;
    totle += sevenString;
    input.value = totle;
})
document.getElementById('eaight').addEventListener('click', (event)=>{
    const eaightString = event.target.innerText;
    totle += eaightString
    input.value = totle;
})
document.getElementById('nine').addEventListener('click', (event)=>{
    const nineString = event.target.innerText;
    totle += nineString
    input.value = totle;
})
document.getElementById('maltipol').addEventListener('click', (event)=>{
    const maltipolString = event.target.innerText;
    totle += maltipolString
    input.value = totle;
})
document.getElementById('for').addEventListener('click', (event)=>{
    const forString = event.target.innerText;
    totle += forString
    input.value = totle;
})
document.getElementById('five').addEventListener('click', (event)=>{
    const fiveString = event.target.innerText;
    totle += fiveString
    input.value = totle;
})
document.getElementById('six').addEventListener('click', (event)=>{
    const sixString = event.target.innerText;
    totle += sixString
    input.value = totle;
})
document.getElementById('mines').addEventListener('click', (event)=>{
    const minesString = event.target.innerText;
    totle += minesString
    input.value = totle;
})
document.getElementById('one').addEventListener('click', (event)=>{
    const oneString = event.target.innerText;
    totle += oneString
    input.value = totle;
})
document.getElementById('tow').addEventListener('click', (event)=>{
    const towString = event.target.innerText;
    totle += towString
    input.value = totle;
})
document.getElementById('three').addEventListener('click', (event)=>{
    const threeString = event.target.innerText;
    totle += threeString
    input.value = totle;
})
document.getElementById('ples').addEventListener('click', (event)=>{
    const plesString = event.target.innerText;
    totle += plesString
    input.value = totle;
})
document.getElementById('dot').addEventListener('click', (event)=>{
    const dotString = event.target.innerText;
    totle += dotString
    input.value = totle;
})
document.getElementById('zero').addEventListener('click', (event)=>{
    const zeroString = event.target.innerText;
    totle += zeroString
    input.value = totle;
})
document.getElementById('doblezero').addEventListener('click', (event)=>{
    const doblezeroString = event.target.innerText;
    totle += doblezeroString
    input.value = totle;
})
document.getElementById('equal').addEventListener('click', (event) => {
    const expression = totle
    .replace(/\+/g, ' + ')
    .replace(/-/g, ' - ')
    .replace(/x/g, ' * ')
    .replace(/÷/g, ' / ')
    .replace(/%/g, ' / 100 * ') 
    
    try {
        const result = eval(expression);
        totle = result.toString();
        input.value = totle;
    } catch (error) {
        totle = '';
        input.value = 'Error';
    }
});