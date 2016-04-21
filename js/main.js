var options = {
    //zone: document.getElementById('joystick'),    // active zone
    position: {       // preset position for 'static' mode
      top: '40%',
      left: '50%'
    },
    mode: "static",   // 'dynamic', 'static' or 'semi'
    color: "red"
};

var joy = nipplejs.create(options);

joy.on('move dir start end', function (evt, data) {
  //console.log(evt, data);
  //console.log(evt.type);
  console.log(evt);

  if (data.direction){
    output = "<p>x direction: " +data.direction.x+ "</br>y direction: " +data.direction.y+ "</br>angle: "+data.direction.angle+ "</p>";
    console.log(output);
    document.getElementById('console').innerHTML = output;
  }

  if (data.pressure){
    document.getElementById('pressure').style.opacity = data.pressure;
  }

});


/*joy.on('added', function (evt, nip){

  console.log(evt, nip);

  nip.on('move dir', function (evt, data) {
    console.log(evt, data);
    output = "<p>x direction: " +data.direction.x+ "</br>y direction: " +data.direction.y+ "</br>angle: "+data.direction.angle+ "</p>";
    document.getElementById('console').innerHTML = output;
  });

});*/
