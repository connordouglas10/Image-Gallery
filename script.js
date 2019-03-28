var curimg;

function enlarge(img){
  var src = "iL" + img.toString();
  document.getElementById("enl").style.display="block";
  document.getElementById(src).style.display = "block";
  curimg = img;

}


function min(){
  //for(i = 1; i < 12; i++){
  //  document.getElementById('iL'+i.toString()).style.display = "none";
  //}

  document.getElementById('iL'+curimg).style.display = "none";
  document.getElementById('enl').style.display = "none";
}
function minGen(){
  var im = document.getElementsByClassName('imL');
  var d = document.getElementsByClassName('imL');
  im.style.display="none";
  d.style.display="none";
}

function left(){
  if(curimg == 1){

  }else{
    min();
    curimg--;
    enlarge(curimg);
  }
}

function right(){
  if(curimg == 12){

  }else{
    min();
    curimg++;
    enlarge(curimg);
  }
}
