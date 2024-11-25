

var quotes = [
    {
        text:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde",
    },
    {
        text:"You only live once, but if you do it right, once is enough.",
        author:"Mae West",
    },
    {
        text:"A friend is someone who knows all about you and still loves you.",
        author:"Elbert Hubbard",
    },
    {
        text:"Always forgive your enemies; nothing annoys them so much.",
        author:"Oscar Wilde",
    },
    {
        text:"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author:"William W. Purkey",
    },
    {
        text:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi",
    },
    {
        text:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author:"Maya Angelou",
    },
]
  

function getQuote(){
    
    var randomCalc = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomCalc];

    document.getElementById("theQuote").innerHTML = `“${randomQuote.text}”`;
    document.getElementById("theAuthor").innerHTML = `--${randomQuote.author}`;

}
