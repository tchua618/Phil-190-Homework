  var yourName = prompt("What is yor name?")

  //if-els statement
  if (yourName != null) {
      document.getElementById("Hello_World!").innerHTML = "Hello " + yourName;
  } else {
      alert("please enter a name next time.")
  }

  //basic math
  document.write("5 + 4 = ", 5 + 4, "<br />")
  document.write("5 - 4 = ", 5 - 4, "<br />")
  document.write("5 * 4 = ", 5 * 4, "<br />")
  document.write("5 / 4 = ", 5 / 4, "<br />")
  document.write("5 % 4 = ", 5 % 4, "<br />")
  document.write("<br />");

  //Max, Min Value
  document.write("MAX Number ", Number.MAX_VALUE, "<br />")
  document.write("MIN Number ", Number.MIN_VALUE, "<br />")
  document.write("<br />");

  //decimal work
  precisionTest = 0.1000000000000001;
  document.write(precisionTest + 0.1000000000000001, "<br />")
  var estimate = 1234.567890
  document.write("Estimate to two decimal places: ", (estimate / 12).toFixed(2), "<br />")
  document.write("<br />");

  //basic incrementation(+=1)
  var randNum = 0;
  document.write("randNum++ ", randNum++, "<br />")
  document.write("++randNum ", ++randNum, "<br />")
  document.write("randNum-- ", randNum--, "<br />")
  document.write("--randNum ", --randNum, "<br />")
  document.write("<br />");

  //math variables
  var exp = Math.E;
  document.write("e = ", exp, "<br />")
  var pi = Math.PI;
  document.write("pi = ", pi, "<br />")
  document.write("<br />");

  //Math.random 
  document.write("Random number (1-10): ", Math.floor((Math.random() * 10) + 1), "<br />")
  document.write("<br />");


  //String to numbers
  document.write("Number to String : ", Number("3.14"), "<br />");
  document.write("Number to Int : ", parseInt("5"), "<br />");
  document.write("Number to Float : ", parseFloat("5.555"), "<br />");
  document.write("<br />");




  //for loop array
  //randomizes array length
  //new Array makes twoExponent an object
  var twoExponent = new Array(Math.floor(Math.random() * 10));

  for (var i = 0; i < twoExponent.length; i++) {
    //shows  2^i
    twoExponent[i] = Math.pow(2, i);
    if (i != twoExponent.length - 1){
      document.write(twoExponent[i], ", ");
    }else{
      //prevents comma from occurring after the last index in twoExponent
      document.write(twoExponent[i], "<br />");
    }
    
  }
  document.write("<br />");

  //object
  var one = new Object;
  one.alpha = "Hello ";
  one.omega = "World!"
  document.write(one.alpha, one.omega, "<br />");

  
  //Plotting a sigmoid function
  function sigmoid(x) {
      return (1 / (1 + Math.pow(exp, -x)));
  }

  function draw() {
      var canvas = document.getElementById("canvas");
      if (null == canvas || !canvas.getContext) return;

      var axes = {},
          ctx = canvas.getContext("2d");
      axes.x0 = .5 + .5 * canvas.width; // x0 pixels from left to x=0
      axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
      axes.scale = 40; // 40 pixels from x=0 to x=1
      axes.doNegativeX = true;

      showAxes(ctx, axes);
      funGraph(ctx, axes, sigmoid, "rgb(11,153,11)", 1);
  }

  function funGraph(ctx, axes, func, color, thick) {
      var xx, yy, dx = 4,
          x0 = axes.x0,
          y0 = axes.y0,
          scale = axes.scale;
      var iMax = Math.round((ctx.canvas.width - x0) / dx);
      var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
      ctx.beginPath();
      ctx.lineWidth = thick;
      ctx.strokeStyle = color;

      for (var i = iMin; i <= iMax; i++) {
          xx = dx * i;
          yy = scale * func(xx / scale);
          if (i == iMin) ctx.moveTo(x0 + xx, y0 - yy);
          else ctx.lineTo(x0 + xx, y0 - yy);
      }
      ctx.stroke();
  }

  function showAxes(ctx, axes) {
      var x0 = axes.x0,
          w = ctx.canvas.width;
      var y0 = axes.y0,
          h = ctx.canvas.height;
      var xmin = axes.doNegativeX ? 0 : x0;
      ctx.beginPath();
      ctx.strokeStyle = "rgb(128,128,128)";
      ctx.moveTo(xmin, y0);
      ctx.lineTo(w, y0); // X axis
      ctx.moveTo(x0, 0);
      ctx.lineTo(x0, h); // Y axis
      ctx.stroke();
  }
  document.write("<br />");
