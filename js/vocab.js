jQuery(document).ready(function($) {

  "use strict";
  /*jsl:option explicit*/

  (function() {
    var shuff_arr, count, score = [0], get_word_at, percent, cur_lang, max;
      
    //populates the select box with vocab categories
    function create_select_options(json) {
      var i, keys = Object.keys(json), op;
      for (i=-0;i<keys.length;i+=1) {
        op = $(document.createElement("option")).attr("id","option"+i);
        op.attr("value",keys[i]).text(keys[i]);
        $("#test_select").append(op);
      }       
    }   

    //setup the questions
    function load_questions(data) {
      max = +Object.keys(data).length;
      shuff_arr = shuffle(Object.keys(data));
      get_word_at = function(n) { return shuff_arr[n]; };
      count = 0;
      score = [0];
      percent = $("#testpercent").text((score[0])+" / "+max);
      $("#testword").text(get_word_at(count));
    }

    //swaps k/v pairs in object
    //this is not inverting some unicode k/v pairs not sure why
    //for in loop does the same
    function invert(obj) {
      var i, new_obj = {}; 
      max = Object.keys(obj).length;
      for (i=0;i<max;i+=1) {
        new_obj[obj[Object.keys(obj)[i]]] = Object.keys(obj)[i];
      }
      return new_obj;
    };

    //shuffles an array
    function shuffle(arr) {
      var m = arr.length, t, i;
      while (m) {
        m -= 1;
        i = Math.floor(Math.random() * m);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }
      return arr;
    };

    //function for checking correct answers
    function submit_ans(data) {
      if (count < max) {
        var ans = $("#answer1").val();
        if (data[get_word_at(count)] === ans) {
          $("#testpercent").toggleClass("correcta");
          score[0] += 1;
        }
        else {
          $("#testpercent").toggleClass("incorrecta");
          score.push([ans,data[get_word_at(count)],$("#testword").text()]);
        }
        percent.trigger("click");
        $("#answer1").val("");
      }
      if (count === max) {
        if (score.length === 1) { score = ["Perfect"]; }
        (function() {
          var wrong = 60 + (score.length - 1) * 60;
          $("#testdisplay").css("height",wrong +"px").contents().fadeOut(50);
          $("#testoptions").contents().fadeOut(50);
          $("#reset_test").fadeIn(500, function() {
            score.forEach(function(e,i) {
              var lab_names, lab, ele = $(document.createElement("p")).addClass("correct").css("opacity",0);
              lab_names = [e[2]," ",e[0],"\u2718","answer ",e[1]];
              console.log(e[2] + ": " + e[0] + ": " + e[1]);
              if (i===0) { ele.append("Score is " + e); }
              else { 
                lab_names.forEach(function(e,i) {
                        lab = $(document.createElement("label")).addClass("lab-correct").text(e);
                        if (i===1||i===3||i===4||i===6) { lab.css("color","red"); }
                        ele.append(lab);
                });
              }
              $("#testdisplay").append(ele);
            });
            
            //animate each correction fading in
            (function chain(sel) {
              sel.eq(0).animate({"opacity":1},400, function() {
                      (sel = sel.slice(1)).length && chain(sel);
              });
            }($("p.correct")));
          });
        }());
      }
    }
    
    //click handler: animate the test words if click on percentage
    function add_event_handlers(json, data) {
      $("#testpercent").click(function() {
        count += 1;
        if (count < max) {
          $("#testword").animate({opacity: 0},500, function() {
            var nword = get_word_at(count);
            $(this).text(nword);
            $("#search p").text("Search SpanishDict for " + nword);
            $("#search a").attr("href","http://spanishdict.com/translate/" + nword);
            }).animate({opacity: 1},500);
        }
        $(this).text((score[0])+" / "+max);
      });
            
      //click handler: language switching
      $("#options").on("click","input", function() {
        var val = $(this).attr("value");
        if (val === "eng" && val !== cur_lang) { cur_lang = "eng"; }
        else if (val === "spa" && val !== cur_lang) { cur_lang = "spa"; }
        console.log(cur_lang);
        data = invert(data);
        count = 0;
        score[0] = 0;
        load_questions(data);
      });

      //click handler: test data switching
      $("#test_select").change(function() {
        var value = $(this).val();
        data = json[value];
        if (cur_lang === "spa") { data = invert(data); }
        count = 0;
        score[0] = 0;
        load_questions(data);
      });
            
      //click handler: spanish char inserts
      $("#espbuttons").on("click","input", function() {
        var ans = $("#answer1").val();
        $("#answer1").val(ans + $(this).attr("value"));
        $("#answer1").focus();
      });

      //click handler: resets the test questions
      $("#reset_test").click(function() {
        $("#testdisplay").css("height","").contents().fadeIn(500);
        $("#testoptions").contents().fadeIn(500);
        $("p.correct").remove();
        load_questions(data);
      });
            
      //key event handler:  using enter to submit answers
      $(document).keydown(function(event) {
        if (event.which === 13) { submit_ans(data); }
      });

      //click handler for vocab char buttons - conslidate into gen char handler?
      $("#vocabbuttons").on("click","input", function() {
        var new_txt = $("input.text_input").val() + $(this).val();
        $("input.text_input").val(new_txt).focus();
      });
    }

    //loads the vocab JSON
    function load_vocab(json) {
      var spanish = [];
      var keys = Object.keys(json);
      keys.forEach(function(c) {
        Object.keys(json[c]).forEach(function(e) {
          spanish.push([e,c]);
        });
      });
      spanish = spanish.sort(function(a,b) {
        return a < b ? -1 : 1;
      });

      //event handler: filters the vocab list based on user input and updates page
      $("#vocab_list input").on("input", function() {
        var regex, espword, espcat, i, fil_data, max_len;
        $("#vocab_list p").remove();
        regex = new RegExp(document.querySelector("#vocab_list input").value,"g");

        fil_data = spanish.filter(function(x) {
          if (regex === "") { regex = new RegExp(".","g"); }
          return x[0].match(regex) ? true : false;
        });

        max_len = fil_data.length < 5 ? fil_data.length : 5;
        for (i=0;i<max_len;i+=1) {
          espword = fil_data[i][0];
          espcat = fil_data[i][1];
          $("section.words div:eq(0)").append("<p class="+espcat+">"+espword+"</p>");
          $("section.words div:eq(1)").append("<p>"+json[espcat][espword]+"</p>");
        }
      });
      $("#vocab_list input").trigger("input");
    } 

    //loads in vocab json via ajax
    $.getJSON("/data/vocab.json", function(json) {
      var data = json.misc;
      cur_lang = "eng";
      create_select_options(json);
      load_questions(data);
      add_event_handlers(json, data);
      load_vocab(json);
    }).fail(function(data, textStatus, error) {
      console.log("failed because status: " + textStatus + " | error: " + error);
    });

  }());

  //click handler for esp char buttons
  $("#vocabbuttons").on("click","input", function() {
    var new_txt = $("input.text_input").val() + $(this).val();
    console.log("but: " + $(this).val());
    console.log("current: " + $("input.text_input").val() + " | " + $(this).val());
    console.log("new txt: " + new_txt);
    console.log("esp char entered: " + new_txt);
    $("input.text_input").val(new_txt).focus();
  });


  $("#test_area").on("click","input", function() {
    $("#testpercent").toggleClass("correcta");
  });

  $("#test_area").on("click","label", function() {
    $("#testpercent").toggleClass("incorrecta");
  });

  $("#testpercent").on("animationend", function() {
    $("#testpercent").removeClass();
  });

  $("#testpercent").on("webkitAnimationEnd", function() {
    $("#testpercent").removeClass();
  });

});
