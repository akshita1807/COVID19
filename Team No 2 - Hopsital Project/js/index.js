    $(document).ready(function () {
    // -- HEADER SECTION --

    function navbarOpen() {
        $("body").toggleClass("stop-scroll");
        $("#navbar-slide-container").toggleClass("active");
        $("#navbar-slide-backfill").css({ display: "block", background: "rgba(0,0,0,0.4)" });
    }

    function navbarClose() {
        $("body").toggleClass("stop-scroll");
        $("#navbar-slide-container").toggleClass("active");
        $("#navbar-slide-backfill").css({ display: "none", background: "transparent" });
    }

    $("#navbar-open").click(navbarOpen);
    $("#navbar-close").click(navbarClose);
    $("#navbar-slide-backfill").click(navbarClose);

    $("#slide-home").click(() => {
        location.href = "index.html";
        navbarClose();
    });
    $("#slide-services").click(() => {
        location.href = "index.html#service";
        navbarClose();
    });
    $("#slide-blog").click(() => {
        location.href = "blog.html";
        navbarClose();
    });
    $("#slide-contact").click(() => {
        location.href = "index.html#contact";
        navbarClose();
    });
    $("#slide-book").click(() => {
        location.href = "appoint.html";
        navbarClose();
    });
  });
    // -- /HEADER SECTION --

// Validating email
function f3() {
    var email = document.getElementById("em-1").value;
    var ep = /^\w+[0-9]*[#.]?[a-z0-9]+(@)[a-z]+(.com|.in|.edu.in)$/;

    if (ep.test(email)) {
      document.getElementById("t3").style.color = "Green";
      document.getElementById("t3").innerHTML = "Correct";
    } else {
      document.getElementById("t3").style.color = "Black";
      document.getElementById("t3").innerHTML = "Incorrect";
    }
  }
  function f33() {
    var email = document.getElementById("em-1").value;
    if (email.length == 0) {
      document.getElementById("t3").style.color = "Red";
      document.getElementById("t3").innerHTML = "Fields With * Can't Be Left Empty!!";
    }
  }
  // For validating name
  function f1() {
    var name = document.getElementById("nm-1").value;
    var np = /^[a-z ,.'-]+$/i;

    if (np.test(name)) {
      document.getElementById("t1").style.color = "Green";
      document.getElementById("t1").innerHTML = "Correct";
    } else {
      document.getElementById("t1").style.color = "Black";
      document.getElementById("t1").innerHTML = "Incorrect";
    }
  }
  // Function for final verify and alert after clicking on send message button
  function msgSucc() {
    var nme = document.getElementById("nm-1").value;
    var sub = document.getElementById("sub-1").value;
    // var msg1 = document.getElementById("msg-1").value;
    // var em = document.getElementById("em-1").value;
    if (nme =="" || sub =="" || document.getElementById("cont-msg").value.length==0 || document.getElementById("em-1").value.length==0) {
      alert("Fill all required Details!!");
    } else {
      alert("Message sent successfully!!");
    }
  }

  //Making the scrolling over the page smooth
  var navMenuAncTags = document.querySelectorAll(".navb-menu a");
  for (var i = 0; i < navMenuAncTags.length; i++) {
      navMenuAncTags[i].addEventListener("click", function (event) {
          event.preventDefault();
          var targetSectionId = this.textContent.trim().toLowerCase();
          var targetSection = document.getElementById(targetSectionId);
          var interval = setInterval(function () {
              var targetSectionCoor = targetSection.getBoundingClientRect();
              if (targetSectionCoor.top <= 0) {
                  clearInterval(interval);
                  return;
              }
              window.scrollBy(0, 30);
          }, 20);
      });
  }