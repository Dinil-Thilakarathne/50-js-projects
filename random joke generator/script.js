const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Want to hear a construction joke? Oh never mind, I'm still working on that one.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
    "How do you organize a space party? You planet!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call fake spaghetti? An impasta!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why did the math book look sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "How do you make a tissue dance? You put a little boogie in it!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What's the difference between a snowman and a snowwoman? Snowballs!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What's brown and sticky? A stick!",
    "What's the best time to go to the dentist? Tooth-hurty!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
    "Why don't eggs tell jokes? Because they might crack up!"
  ];
  
const generateBtn = document.getElementById("jokeGenerateBtn");
const joke = document.querySelector(".joke");

// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random()*jokes.length);
}
// generate random color 
generateBtn.addEventListener("click" , () => {
    joke.textContent = jokes[generateRandomNumber()];
})








  