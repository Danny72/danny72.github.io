jQuery(document).ready(function() {
  (function() {
    var vocab, key, count = 0;
    var index = 0;
    $("div.check_answer").on("click","a",function() {
      var ans = $(this).find("span").text(), index;
      index = Math.floor(Math.random()*Object.keys(vocab).length);
      if (ans === "Correct ✔") {
        $("ul.progress_bar li").not(".clicked").eq(0).css("background","green").addClass("clicked");
      }
      else {
        $("ul.progress_bar li").not(".clicked").eq(0).css("background","red").addClass("clicked");
      }
      key = Object.keys(vocab)[index];
      $("#current_verb").text(key);
      $("#current_answer").text(vocab[key]).fadeOut(0).fadeIn('slow');
    });

    $.getJSON("/data/vocab.json", function(json) {
      vocab = json['infinitive verbs'];
    }).fail(function(data, textStatus, error) {
      console.log("failed because status: " + textStatus + " | error: " + error);
    });

    $("ul.dot_matrix").on("click","li",function() {
      var func = function(index) {
        var digit, seg, anon_func, interval_id;
        digit = ["0x7E","0x30","0x6D","0x79","0x33","0x5B","0x5F","0x70","0x7F","0x7B"];
        seg = Number(digit[index]).toString(2).split("");
        if (seg.length < 7) { seg.splice(0,0,"0"); }
        console.log(seg);
        $("li.dot_matrix").removeClass("active");
        seg.forEach(function(e,i) {
          if (e === "1") {
            $("li.seg"+i).toggleClass("active");
          }
        });
      };
      anon_func = function() {
        if (index < 10) { func(index++); } 
        else { 
          $("li.dot_matrix").removeClass("active"); 
          console.log("end");
          window.clearInterval(interval_id);
          index = 0;
        }
      };
      interval_id = setInterval(anon_func, 1000);
      $(this).toggleClass("active");
    });
  }());
});
