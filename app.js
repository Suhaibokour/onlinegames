

function yesNoQ(){



var name = prompt("Write your name to confirm that you are not a Robot please")

alert("WELCOME to Dota2 introduction " + name);




var knowdota2 = prompt("Have you ever played Dota2 before?( yes . no )")


while (knowdota2 != "yes" && knowdota2 != "no") {
  knowdota2 = prompt("Pleas answer with yes or no")
}


if (knowdota2 == "no") { alert("Then read down below to learn about it") }
else {
  var svenpics = prompt("How many times you want to see Sven's picture?")
  for (x = 1; x <= svenpics; x++) {
    document.write("<div>" +
      "<img src='https://gosu.ai/blog/content/images/2020/08/sven.png'/>" +
      "</div>)")
  }
}
}
yesNoQ()


function lunaPics(){



var luna = prompt("How many time would you like to see luna's pics?")

for (i = 1; i <= luna; i++) {
  document.write("<div>" + 
  "<img src='https://c4.wallpaperflare.com/wallpaper/363/904/53/defense-of-the-ancient-dota-dota-2-valve-wallpaper-preview.jpg'/>" + 
"</div>)")
}
return luna;
}
lunaPics()

// var finalResult = lunaPics();
// if (finalResult != ''){alert("Have a nice day!")}
// else{
//   alert("Then read down below to learn about it") }






// if(knowdota2 == "no"){alert("Then read down below to learn about it")}
// else{ alert("Then add me on steam by the name Zarakiok")} 


// Hello this is suhaib and i belive this is the theird dynamic component to finish with, thank you. 
