// Quotes array: each quote has text and category
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Success is not in what you have, but who you are.", category: "Success" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", category: "Life" },
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

// Function to show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><em>Category: ${quote.category}</em>`;
}

// Function to add a new quote
function addQuote() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote);

    // Update DOM immediately
    const message = document.createElement("p");
    message.textContent = `New quote added: "${newQuote.text}" (${newQuote.category})`;
    quoteDisplay.appendChild(message);

    // Clear input fields
    newQuoteText.value = "";
    newQuoteCategory.value = "";
  } else {
    alert("Please enter both a quote and a category.");
  }
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// Show one quote at startup
showRandomQuote();

