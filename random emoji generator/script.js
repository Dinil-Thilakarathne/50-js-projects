// hex values array 
const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔",
    "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥",
    "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
    "🤡", "👹", "👺", "💩", "👻", "💀", "👽", "👾", "🤖", "🎃",
    "👑", "👒", "🎩", "🎓", "🧢", "⛑️", "💄", "💍", "💼", "🌂",
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐽", "🐸", "🐙", "🐵", "🙈", "🙉", "🙊",
    "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉",
    "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞"
    // Add more emojis 
  ];
const generateBtn = document.getElementById("colorGenerateBtn");
const emoji = document.querySelector(".emoji");

// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random()*emojis.length);
}

const emojiGenerator = () => {
    emoji.textContent = emojis[generateRandomNumber()];
    // change emoji 
}
// generate random color 
generateBtn.addEventListener("click" , emojiGenerator())








  