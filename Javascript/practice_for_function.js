function printPoem () {
    console.log(` Bilkul Sandy
 “Khud Par Yakeen”
 Raaste mushkil hain, toh kya hua,
 Manzil abhi door hai, toh kya hua.
 Har din thoda sa khud ko behtar bana,
 Gir kar uth, phir se kadam badha.
 Log kya kahenge, ye sochna chhod de,
 Apne sapno se kabhi rishta na tod de.
 Aaj agar tu akela chal raha hai,
  Kal tera waqt bhi tera naam kahega.
 Bas ek baat yaad rakh—
 Speed chahe slow ho, par rukna mat,
 Sapna chhota ho ya bada, jhukna mat.
 Tu kar sakta hai… bas khud par yakeen rakh. 🔥 `);
}
printPoem();

//create a function to roll a dice & always display the valve of the dice (1 to 6).
function rollDice() {
   let rand = Math.floor(Math.random() * 6) + 1;
   console.log(rand);
}
rollDice();