var name = prompt("Write your name to confirm that you are not a Robot please") 

alert("WELCOME to Dota2 introduction " + name)

var knowdota2 = prompt("Have you ever played Dota2 before?( yes . no )" )


while(knowdota2 != "yes" && knowdota2 != "no"){
  knowdota2 = prompt("Pleas answer with yes or no")
}

if(knowdota2 == "no"){alert("Then read down below to learn about it")}
else{ var svenpics = prompt("How many times you want to see Sven's picture?")
for ( x = 1; x < svenpics; x++){
  document.write("<div>" + 
  "<img src='https://gosu.ai/blog/content/images/2020/08/sven.png'/>" + 
"</div>)")
}
} 

// if(knowdota2 == "no"){alert("Then read down below to learn about it")}
// else{ alert("Then add me on steam by the name Zarakiok")} 


//Hello this is suhaib and i belive this is the theird dynamic component to finish with, thank you. 