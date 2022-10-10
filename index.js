window.onload = function showTime(){
  var date = new Date();
  var h = date.getHours();
  console.log(h)
  var m = date.getMinutes();
  console.log(m);
  var s = date.getSeconds();
  console.log(s);
  var session = "AM";
  
  if(h > 12){
    h = h-12;
    session = "PM";
  }

  if(h == 0){
    h =12;
    session = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var  time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("myClock").innerHTML = time;

    setInterval(showTime, 1000)

}
   showTime();