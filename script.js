$(document).ready(function(){
  //basic setup

  $('#calculate').on('click', function(e){
    e.preventDefault();
    calculateHoles();
    //plotHoles();
    /*calculateSolution();
    plotSolution();*/
  });
});

function calculateHoles(){
  var num = parseFloat($('#number2').val());
  var holes = math.complex(0,0);
  var n = 5;
  var k = 6;
  for (let i = 1; i < num+1; i++) {
    holes = math.add(holes, math.complex(Math.cos(2*Math.PI*i/num), Math.sin(2*Math.PI*i/num)));
    console.log(holes);
  }
  
}