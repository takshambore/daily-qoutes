const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
  ];
  
  const quoteText = document.getElementById("quote");
  const generateBtn = document.getElementById("generateBtn");
  
  generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });
  