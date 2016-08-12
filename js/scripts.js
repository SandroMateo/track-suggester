$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var rails = 0; /*writing or arts or math*/
    var drupal = 0; /*writing or business or math*/
    var android = 0; /*math or arts*/
    var design = 0; /*arts or math*/
    var net = 0; /*business or math*/
    var age = parseInt($("#age").val());
    var subject = parseInt($("input:radio[name=subject]:checked").val());
    var pastime = parseInt($("input:radio[name=pastime]:checked").val());
    var place = parseInt($("input:radio[name=place]:checked").val());
    var animal = parseInt($("input:radio[name=animal]:checked").val());
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
      $("#result").text("Ruby/Rails!");
    } else if (drupal > rails && drupal > android && rails > design && rails > net) {
        $("#result").text("PHP/Drupal!");
    } else if (android > rails && android > drupal && android > design && android > net) {
        $("#result").text("Java/Android");
    } else if (design > rails && design > drupal && design > android && design > net) {
        $("#result").text("CSS/Design!");
    } else {
        $("#result").text("C#/.NET!");
    }
  });
});
