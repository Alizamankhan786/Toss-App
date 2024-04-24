

const h2 = document.querySelector(`h2`);
const image = document.querySelector(`img`);

function toss(head , tails){


    const num = Math.ceil(Math.random(head , tails)*2);

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

    image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
    
}else{

    image . src = `https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg`
}