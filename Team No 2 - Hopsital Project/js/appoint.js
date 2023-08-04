$(document).ready(function () {
    $("input[type='radio'][name='radio-group']").click(() => {
        if ($("input[type='radio'][name='radio-group']:checked").val() == "Pradeep") {
            $("#fee").html("Appointment Fee: <span>₹</span>900");
            $(".btn.cond").css("display", "block");
        } else if ($("input[type='radio'][name='radio-group']:checked").val() == "Kaira") {
            $("#fee").html("Appointment Fee: <span>₹</span>600");
            $(".btn.cond").css("display", "block");
        } else if ($("input[type='radio'][name='radio-group']:checked").val() == "Ashish") {
            $("#fee").html("Appointment Fee: <span>₹</span>800");
            $(".btn.cond").css("display", "block");
        } else if ($("input[type='radio'][name='radio-group']:checked").val() == "Rahul") {
            $("#fee").html("Appointment Fee: <span>₹</span>1200");
            $(".btn.cond").css("display", "block");
        }
    });

    $("#goto-form").click(() => {
        $(".doctor-select").css("display", "none");
        $(".details-form").css("display", "block");
        $(window).scrollTop($(".details-form").offset().top - 140);
    });

    $("#goto-doctor").click(() => {
        $(".details-form").css("display", "none");
        $(".doctor-select").css("display", "block");
        $(window).scrollTop($(".doctor-select").offset().top - 100);
    });

    $("#goto-pay").click(() => {
        $(".details-form").css("display", "none");
        $(".payment").css("display", "block");
        $(window).scrollTop($(".payment").offset().top - 100);
    });

    $("#cancel").click(() => {
        $(".payment").css("display", "none");
        $(".details-form").css("display", "block");
        $(window).scrollTop($(".details-form").offset().top - 100);
    });

    function creditDebit() {
        $("#table-2").html(
            '<tr class="row" id="icon-row"><td class="col-1"></td><td class="col-2"><i class="fab fa-cc-visa"></i><i class="fab fa-cc-mastercard"></i><i class="fab fa-cc-paypal"></i><i class="fab fa-cc-amex"></i><i class="fab fa-cc-discover"></i></td></tr>' +
                '<tr class="row row-2"><td class="col-1"><label for="card-name">Name on Card</label></td><td class="col-2"><input type="text" id="card-name" maxlength = "50" required onkeypress = "return onlyAlphabets(event,this);/></td><td class="col-3"></td></tr>' +
                '<tr class="row row-3"><td class="col-1"><label for="card-no">Card Number</label></td><td class="col-2"><input type="text" id="card-no" maxlength = "16" required onkeypress = "return onlyNumbers(event,this);/></td><td class="col-3"></td></tr>' +
                '<tr class="row row-4"><td class="col-1"><label for="card-expiry1">Expiration Date</label></td><td class="col-2"><select id="card-expiry1" name="month" required><option value="default">Month</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><select name="year" id="card-expiry2" required><option value="default">Year</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option><option value="2036">2036</option><option value="2037">2037</option><option value="2038">2038</option><option value="2039">2039</option><option value="2040">2040</option></select></td><td class="col-3"></td></tr>' +
                '<tr class="row row-5"><td class="col-1"><label for="cvv">Security Code</label></td><td class="col-2"><input type="text" id="cvv" maxlength = "3" required onkeypress = "return onlyNumbers(event,this);/></td><td class="col-3"></td></tr>'
        );
    }

    $("#pay1").click(creditDebit);
    $("#pay2").click(creditDebit);

    $("#pay3").click(() => {
        $("#table-2").html(
            '<tr class="row"><td class="col-1">Select Bank</td><td class="col-2"><select required><option>ICICI Bank</option><option>Axis Bank</option><option>SBI</option><option>HDFC Bank</option><option>Kotak Mahindra Bank</option></select></td></tr>' +
                '<tr class="row"><td class="col-1"><label for="acc-no">Account Number</label></td><td class="col-2"><input type="text" id="acc-no" maxlength = "16" required onkeypress = "return onlyNumbers(event,this);" /></td></tr>'
        );
    });

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
        location.href = "index.html#services";
        navbarClose();
    });
    $("#slide-blog").click(() => {
        location.href = "blog.html";
        navbarClose();
    });
    $("#slide-contact").click(() => {
        location.href = "index.html";
        navbarClose();
    });
    $("#slide-book").click(() => {
        location.href = "appoint.html";
        navbarClose();
    });

    // -- /HEADER SECTION --
});

// Form Validation
    function onlyAlphabets(e, t) {
        try {
            if (document.event) {
                var charCode = document.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) return true;
            else return false;
        } catch (err) {
            alert(err.Description);
        }
    }
    function onlyNumbers(e, t) {
        try {
            if (document.event) {
                var charCode = document.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if ((charCode > 47 && charCode < 58) || charCode == 45) return true;
            else return false;
        } catch (err) {
            alert(err.Description);
        }
    }
    function onlyAlphanumeric(e, t) {
        try {
            if (document.event) {
                var charCode = document.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if (
                (charCode > 47 && charCode < 58) ||
                (charCode > 64 && charCode < 91) ||
                (charCode > 96 && charCode < 123) ||
                charCode == 32 ||
                charCode == 44 ||
                charCode == 46
            )
                return true;
            else return false;
        } catch (err) {
            alert(err.Description);
        }
    }