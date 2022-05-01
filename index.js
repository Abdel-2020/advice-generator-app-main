let cardQuote = document.getElementsByClassName('card-quote');
let cardQuoteTitle = document.getElementsByClassName('card-quote-title');

const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    cardQuoteTitle[0].innerHTML = `Advice #${data.slip.id}`
    cardQuote[0].innerHTML = `"${data.slip.advice}"`;
}


fetchAdvice();