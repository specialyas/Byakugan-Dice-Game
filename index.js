document.querySelector('button').addEventListener('click', rollDice)


function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6) +1;
    console.log(randomNumber1)
    document.querySelector('.img1').src = `images/dice${randomNumber1}.png`

    let randomNumber2 = Math.floor(Math.random() * 6)+1;
    console.log(randomNumber2)

    document.querySelector('.img2').src = `images/dice${randomNumber2}.png`

    if (randomNumber1 > randomNumber2){
        document.querySelector('h1').innerText = "Player 1 Won"
    }else if (randomNumber1 === randomNumber2){
        document.querySelector('h1').innerText = "Draw"
    }else {
        document.querySelector('h1').innerText = "Player 2 Won"
    }
}
