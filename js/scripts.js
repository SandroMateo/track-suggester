var rails = 0;
var drupal = 0;
var android = 0;
var design = 0;
var net = 0;
var age;
var name;
$(function() {
  $("form#start").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var subject = parseInt($("input:radio[name=subject]:checked").val());
    var pastime = parseInt($("input:radio[name=pastime]:checked").val());
    var place = parseInt($("input:radio[name=place]:checked").val());
    var animal = parseInt($("input:radio[name=animal]:checked").val());
    name = $("input#name").val();
    age = parseInt($("#age").val());
    if (age < 18) {
      rails = 1;
    } else if (age >= 18 && age < 21) {
        drupal = 1;
    } else if (age >= 21 && age < 26) {
        android = 1;
    } else if (age >= 26 && age < 31) {
        design = 1;
    } else {
        net = 1;
    }
    $("span.name").text(name);
    $("button#switch").slideUp("fast");
    $("#content").fadeIn(1500);
  });
  $("form#content").submit(function(event) {
    event.preventDefault();
    var subject = parseInt($("input:radio[name=subject]:checked").val());
    var pastime = parseInt($("input:radio[name=pastime]:checked").val());
    var place = parseInt($("input:radio[name=place]:checked").val());
    var animal = parseInt($("input:radio[name=animal]:checked").val());
    if(subject === 1) {
      rails += 1;
      drupal += 1;
      android += 1;
      design += 1;
      net += 1;
    } else if (subject === 2) {
        rails += 1;
        drupal = 1;
    } else if (subject === 3) {
      android += 1;
      design += 1;
    } else {
      drupal += 1;
      net += 1;
    }
    if (pastime === 1) {
      rails += 1;
      drupal += 1;
    } else if (pastime === 2) {
        drupal += 1;
        net += 1;
    } else if (pastime === 3) {
        drupal += 1;
        android += 1;
        design += 1;
        net += 1;
    } else {
        rails += 1;
        drupal += 1;
        android += 1;
    }
    if (place === 1) {
      rails += 1;
      android += 1;
      design += 1;
    } else if (place === 2) {
      drupal += 1;
      android += 1;
      net += 1;
      rails += 1;
      design += 1;
    } else if (place === 3) {
      rails += 1;
      android += 1;
      design += 1;
    } else {
      android += 1;
    }
    if (animal === 1) {
      rails += 1;
      android += 1;
      design += 1;
    } else if (animal === 2) {
        rails += 1;
        drupal +=1;
        design += 1;
    } else if (animal === 3) {
        drupal += 1;
        net += 1;
    } else {
        android += 1;
    }
    if (rails > drupal && rails > android && rails > design && rails > net) {
      $("#survey").slideUp("milliseconds");
      $("body").addClass("background-image1");
      $("#result").addClass("text-color1");
      $("h2#result").text(name + ", you got: Ruby/Rails!").fadeIn(1500);
    } else if (drupal > rails && drupal > android && rails > design && rails > net) {
        $("#survey").slideUp("milliseconds");
        $("body").addClass("background-image2");
        $("#result").addClass("text-color2");
        $("#result").text(name + ", you got: PHP/Drupal!").fadeIn(1500);
    } else if (android > rails && android > drupal && android > design && android > net) {
        $("#survey").slideUp("milliseconds");
        $("body").addClass("background-image3");
        $("#result").addClass("text-color3");
        $("#result").text(name + ", you got: Java/Android!").fadeIn(1500);
    } else if (design > rails && design > drupal && design > android && design > net) {
        $("#survey").slideUp("milliseconds");
        $("body").addClass("background-image4");
        $("#result").addClass("text-color4");
        $("#result").text(name + ", you got: CSS/Design!").fadeIn(1500);
    } else {
        $("#survey").slideUp("milliseconds");
        $("body").addClass("background-image5");
        $("#result").addClass("text-color5");
        $("#result").text(name + ", you got: C#/.NET!").fadeIn(1500);
    }
  });
});
