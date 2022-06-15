var started =false;
var userChoice;
var person_score=0;
var computer_score=0;
var id;
var choice;
var arr=["rock","paper","scissors"];
$("body").keypress(function() {
if(!started)
{
  started=true;

  $("h1").text("You are on the go.Yay!");
}
});
$("button").click(function(){
  if(started)
  {
   id = $(this).attr("id");
  console.log(id);
  var audio = new Audio("sounds/green.mp3");
  audio.play();
  $(this).addClass("animation");
  setTimeout(function(){
    $("button").removeClass("animation");

  },50);
  nextpress();

}
});

function nextpress(){
  var random= Math.floor(Math.random()*2)+1;
  choice=arr[random];
  console.log(choice);
  checkScore();
}
function checkScore(){
  var img_person_id=id;
  var computer_id=choice;
  $("#p-img").attr("src","images/"+img_person_id+".png");
  $("#c-img").attr("src","images/"+computer_id+".png");



  if(id==choice)
  {
    person_score++;
    computer_score++;
    $(".p-score").text(person_score);
    $(".c-score").text(computer_score);

  }
  else if((id=="rock" && choice=="scissors" )|| (id=="paper" && choice=="rock")||(id=="scissors"
  && choice=="paper"))
  {
      person_score++;
      $(".p-score").text(person_score);


  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $(".p-score").text(0);
    $(".c-score").text(0);
    if(person_score>computer_score)
    $("h1").text("Game over. Yay,YOU WIN!");
    else if(person_score==computer_score){
      $("h1").text("Game over. DRAW!");}
      else
      $("h1").text("Game over. OH NO!")

    setTimeout(restart,1200);

  }
}
function restart(){
  started=false;
  person_score=0;
  computer_score=0;
  $("h1").text("Press any key to start again!");


}
