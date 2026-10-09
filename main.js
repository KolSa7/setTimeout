/*let szinek=['red','green','blue'];

document.body.style.backgroundColor=szinek[Math.floor(Math.random()*szinek.length)];

const szinvaltas=setInterval(()=>{
    document.body.style.backgroundColor=szinek[Math.floor(Math.random()*szinek.length)];
},1000);

document.getElementById('btn').addEventListener('click',()=>{
    clearInterval(szinvaltas);
});*/
const text=document.getElementById('text');
const button=document.getElementById('start')
let startTime;
startBtn=true
button.addEventListener('click',()=>{
    if(startBtn){
        button.textContent="shoot";
        document.body.style.backgroundColor='white';
        text.textContent="Wait for green...";
        let rnd=Math.floor(Math.random()*5)+5;
        startBtn=false;
        setTimeout(()=>{
            startTime=Date.now();
            text.textContent="SHOOT";
            document.body.style.backgroundColor='green';
        },rnd*1000);
    }
    else{
        let result=Date.now()-startTime;
        if(result<0){
            text.textContent='Túl hamar nyomtál...'
        }
        else{
            text.textContent="A reakcióidőd:"+result+"ms";
        }
        button.textContent="restart";
        startBtn=true;
    }
});




