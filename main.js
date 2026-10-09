let szinek=['red','green','blue'];

document.body.style.backgroundColor=szinek[Math.floor(Math.random()*szinek.length)];

const szinvaltas=setInterval(()=>{
    document.body.style.backgroundColor=szinek[Math.floor(Math.random()*szinek.length)];
},1000);

document.getElementById('btn').addEventListener('click',()=>{
    clearInterval(szinvaltas);
});




