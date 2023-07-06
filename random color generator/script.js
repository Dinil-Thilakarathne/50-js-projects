// hex values array 
const colors = [0 , 1 ,2 , 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D" , "E", "F"];
const generateBtn = document.getElementById("colorGenerateBtn");
const colorBox = document.querySelector(".color-box");
const hexValue = document.getElementById("colorHexValue");


// generate random color 
generateBtn.addEventListener("click" , () => {
    let color = "#";
    for(let i = 0 ; i < 6 ; i++){
        color += colors[generateRandomNumber()];
        
    }

    // change bg color of color box 
    colorBox.style.backgroundColor = color;

    // display  color values 
    hexValue.textContent = color;
    rgbValue.textContent = hexToRgb(color);
})


// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}




  