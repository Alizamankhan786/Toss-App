

const h2 = document.querySelector(`#toss`);
const image = document.querySelector(`img`);

function toss(head , tails){


    const num = Math.ceil(Math.random(head , tails)*2);
    console.log(num);


    if(num < 1){
        console.log(`won`);
        h2.innerHTML = `You Won The Toss`;

    }else if(num > 1){
        console.log(`Won`);
        h2.innerHTML = `You Loss The Toss`

    }else{
        console.log(`Loss`);
    }
}

if(num === 1){

    image.src = ''
    
}else{

    image . src = ``
}






