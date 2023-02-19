
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
      quote: "Be the change that you wish to see in the world.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      person: "Thomas Edison"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
      person: "Albert Einstein"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      person: "Alan Kay"
    },
    {
      quote: "You can't build a reputation on what you are going to do.",
      person: "Henry Ford"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      person: "Jimmy Dean"
    }
  ];
  
  console.log(quotes[0].quote); // outputs "Be the change that you wish to see in the world."
  console.log(quotes[0].person); // outputs "Mahatma Gandhi"
//   function printQuotes() {
//     for (let i = 0; i < quotes.length; i++) {
//         quote.innerHTML = quotes[i].quote
//         person.innerHTML = quotes[i].person

//     //   console.log(quotes[i].quote);
//     //   console.log("- " + quotes[i].person);
//     }
//   }

  
  
  btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
    
    quote.innerHTML = quotes[random].quote
    person.innerHTML = quotes[random].person
   
      
  })
