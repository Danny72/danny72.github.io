jQuery(document).ready(function($) {

  "use strict";

  (function() {
    
    //colours the header cats on hover
    $(".page-link").hover(function() {
      var col = $(this).find("a").attr("data");
      $("body").toggleClass();
      $(this).toggleClass("color-" + col);
      $(".site-header").css("border-bottom","4px solid " + col);
    }, function() {
      var bordcol, col = $(this).find("a").attr("data");
      $("body").toggleClass();
      bordcol = $("body").attr("class");
      bordcol = $("div." + bordcol + " a").attr("data");
      $(this).toggleClass("color-" + col);
      $(".site-header").css("border-bottom","4px solid " + bordcol);
    });

    $("a.site-title").parent().addClass("page-link index");
    
    //colours the border on initial page load
    var col, active = $("div.post").attr("data") || "index";
    $("div." + active).addClass("active");
    col = $("div.active a").attr("data");
    $(".site-header").css("border-bottom","4px solid " + col);

  }());

  if ($("body.spanish-vocab")) {

    (function() {
      var data, json, shuff_arr, count, score = [0], get_word_at, percent, correct = $("#testcorrect"),
      shuffle, invert, cur_lang, load_questions, max;
        
      //loads in vocab json via ajax
      function load_data(func) {
        var el, ol;
          $.getJSON("/data/vocab.json", function(d) {
            func(d);
          }).fail(function(data, textStatus, error) {
            console.log("failed because status: " + textStatus + " | error: " + error);
          });
      }

      //populates the select box with vocab categories
      function create_select_options(data) {
        var i, keys = Object.keys(data), op;
        for (i=-0;i<keys.length;i+=1) {
          op = $(document.createElement("option")).attr("id","option"+i);
          op.attr("value",keys[i]).text(keys[i]);
          $("#test_select").append(op);
        }       
      }   

      //swaps k/v pairs in object
      //this is not inverting some unicode k/v pairs not sure why
      //for in loop does the same
      invert = function(obj) {
        var i, new_obj = {}, x, max = Object.keys(obj).length;
        for (i=0;i<max;i+=1) {
          new_obj[obj[Object.keys(obj)[i]]] = Object.keys(obj)[i];
        }
        return new_obj;
      };

      //setup the questions
      load_questions = function() {
        max = +Object.keys(data).length;
        shuff_arr = shuffle(Object.keys(data));
        get_word_at = function(n) { return shuff_arr[n]; };
        count = 0;
        score = [0];
        percent = $("#testpercent").text((score[0])+" / "+max);
        $("#testword").text(get_word_at(count));
      };

      //loads in remote data, assigns it to the divs
      function start() {
        var func = function(d) {  
          json = d;
          data = json.misc;
          cur_lang = "eng";
          create_select_options(d);
          load_questions();
        }
        load_data(func);
      }

      //shuffles an array
      shuffle = function(arr) {
        var m = arr.length, t , i;
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
      function submit_ans() {
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

      //animate the test words
      $("#testpercent").click(function() {
        count += 1;
        if (count < max) {
          $("#testword").animate({opacity: 0},500, function() {
            $(this).text(get_word_at(count));
            }).animate({opacity: 1},500);
        }
        $(this).text((score[0])+" / "+max);
      });
            
      //handles language switching
      $("#options").on("click","input", function() {
        var val = $(this).attr("value");
        if (val === "eng" && val !== cur_lang) { cur_lang = "eng"; }
        else if (val === "spa" && val !== cur_lang) { cur_lang = "spa"; }
        console.log(cur_lang);
        data = invert(data);
        count = 0;
        score[0] = 0;
        load_questions();
      });

      //handles test data switching
      $("#test_select").change(function() {
        var value = $(this).val(), onl;
        console.log(value);
        data = json[value];
        if (cur_lang === "spa") { data = invert(data); }
        count = 0;
        score[0] = 0;
        load_questions();
      });
            
      //handles spanish char inserts
      $("#espbuttons").on("click","input", function() {
        var ans = $("#answer1").val();
        $("#answer1").val(ans + $(this).attr("value"));
        $("#answer1").focus();
      });

      $("#reset_test").click(function() {
        $("#testdisplay").css("height","").contents().fadeIn(500);
        $("#testoptions").contents().fadeIn(500);
        $("p.correct").remove();
        load_questions();
      });
            
      //handles using enter to submit answers
      $(document).keydown(function(event) {
        if (event.which === 13) { submit_ans(); }
      });

      start();
    }());
  }

  //loads the vocab JSON
  (function() {
    var data, spanish = [];
    $.getJSON("/data/vocab.json", function(json) {
      var keys = Object.keys(json);
      data = json;
      keys.forEach(function(c,i) {
        Object.keys(json[c]).forEach(function(e,i) {
          spanish.push([e,c]);
        });
      });
      spanish = spanish.sort(function(a,b) {
        return a < b ? -1 : 1;
      });

      //filters the vocab list based on user input and updates page
      $("#vocab_list input").on("input", function() {
        var regex, espword, espcat, i, fil_data, max_len;;
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
          $("section.words div:eq(1)").append("<p>"+data[espcat][espword]+"</p>");
        }
      });
      $("#vocab_list input").trigger("input");
    }).fail(function(data, textStatus, error) {
      console.log("failed because status: " + textStatus + " | error: " + error);
    });

    //click handler for esp char buttons
    $("#vocabbuttons").on("click","input", function() {
      var new_txt = $("input.text_input").val() + $(this).val();
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

  }());

});
