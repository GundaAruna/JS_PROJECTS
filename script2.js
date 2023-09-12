
async function RandomQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      const quoteElement = document.querySelector('.quote p');
      quoteElement.textContent = randomQuote.text;
    } catch (error) {
      console.error('Error in getting random quote:', error);
    }
  }
  
  const newQuoteBtn = document.getElementById('new-quote-btn');
  newQuoteBtn.addEventListener('click', RandomQuote);
  RandomQuote();
