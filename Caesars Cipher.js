
function rot13(str) { // LBH QVQ VG!
  var str13 = "";
  for(var i = 0; i < str.length; i++){  
  var incr;
    if (str.charCodeAt(i) < 65 | str.charCodeAt(i) > 90){
      incr = 0;
    } else if(str.charCodeAt(i) < 78){
      incr = 13;
    } else {
      incr = -13;
    }
  str13 += String.fromCharCode(str.charCodeAt(i)+incr);
  }

  return str13;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");