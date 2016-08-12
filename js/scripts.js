$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var rails; /*writing or arts or math*/
    var drupal; /*writing or business or math*/
    var android; /*math or arts*/
    var design; /*arts or math*/
    var net; /*business or math*/
    var age = parseInt($("#age").val());
    var subject = parseInt($(".subject").val());
    var pastime = parseInt($(".pastime").val());
    var place = parseInt($(".place").val());
    var animal = parseInt($(".animal").val());
    if(subject === 1) {
      rails = 1;
      drupal = 1;
      android = 1;
      design = 1;
      net = 1;
    } else if (subject === 2) {
        rails = 1;
        drupal = 1;
    } else if (subject === 3) {
      android = 1;
      design = 1;
    } else {
      drupal = 1;
      net = 1;
    }
    if (rails === Math.max([rails, drupal, android, design, net])) {
      $("body").text("Ruby/Rails!");
    } else if (drupal === Math.max([rails, drupal, android, design, net])) {
        $("body").text("PHP/Drupal!");
    } else if (android === Math.max([rails, drupal, android, design, net])) {
        $("body").text("Java/Android");
    } else if (design === Math.max([rails, drupal, android, design, net])) {
        $("body").text("CSS/Design!");
    } else {
        $("body").text("C#/.NET!");
    }



  });
});
