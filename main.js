function whoIsSwimming() {
  var record = [];

  for (var day = 1; day <= 365; day++) {
    if (day % 50 === 0) {
      record.push(`Jack and John, day: ${day}`);
    } else if (day % 3 === 0) {
      record.push(`Jack, day: ${day}`);
    } else {
      record.push(`John, day: ${day}`);
    }
  }

  var el = document.getElementById("root");

  record.map(function(val) {
    var p = document.createElement("p");
    p.innerHTML = val;
    el.appendChild(p);
  });
}
