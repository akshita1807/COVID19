$(document).ready(function () {
    // Move text up on hover in card 0
    $("#menu-item1").mouseover(() => {
        $("#menu-item1 .item-text").css("height", "140px");
    });
    $("#menu-item1").mouseout(() => {
        $("#menu-item1 .item-text").css("height", "80px");
    });

    $("#menu-item2").mouseover(() => {
        $("#menu-item2 .item-text").css("height", "140px");
    });
    $("#menu-item2").mouseout(() => {
        $("#menu-item2 .item-text").css("height", "80px");
    });

    $("#menu-item3").mouseover(() => {
        $("#menu-item3 .item-text").css("height", "140px");
    });
    $("#menu-item3").mouseout(() => {
        $("#menu-item3 .item-text").css("height", "80px");
    });

    $("#menu-item4").mouseover(() => {
        $("#menu-item4 .item-text").css("height", "140px");
    });
    $("#menu-item4").mouseout(() => {
        $("#menu-item4 .item-text").css("height", "80px");
    });

    $("#menu-item5").mouseover(() => {
        $("#menu-item5 .item-text").css("height", "140px");
    });
    $("#menu-item5").mouseout(() => {
        $("#menu-item5 .item-text").css("height", "80px");
    });

    $("#menu-item6").mouseover(() => {
        $("#menu-item6 .item-text").css("height", "140px");
    });
    $("#menu-item6").mouseout(() => {
        $("#menu-item6 .item-text").css("height", "80px");
    });

    // Open article items

    function articleLayout() {
        $("#card1").css("display", "block");
        $("#card2").css("display", "block");
        $("#card0").css("display", "none");
    }

    function changeText1() {
        $(window).scrollTop($("#card1").offset().top - 130);

        $("#card1-title").html("<h2>Covaxin vs Covishield - A Detailed Comparision</h2>");
        $("#card1-subtitle").html("<h4>2 days ago</h4>");
        $("#card1-img").css({
            "background-image": 'url("img/vaccine.jpg")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
        });
        $("#card1-content").html(
            "<p>The second phase of the COVID-19 vaccination drive has already begun in India, and many people are still unaware of how the two vaccines – Covaxin and Covishield – are different from each other.</p><br>" +
                "<p>The second phase began on March 1, in which people over the age of 60 and those above 45 with associated comorbidities can take the life-saving shots.</p><br>" +
                "<p>Currently, the government hasn’t allowed people to decide which vaccine they want to get, but the result of the first phase clearly suggests that both the vaccines being inoculated in India are safe and effective.</p><br>" +
                "<p>Well, we have compiled all the information to give you a better understanding of the formulation and every other detail about the vaccine you are going to get to stay safe from the Coronavirus.</p><br>" +
                "<h2>Developer</h2><br>" +
                "<p>Covaxin has been developed by Hyderabad-based Bharat Biotech International Ltd in association with the Indian Council of Medical Research (ICMR) and the National Institute of Virology (NIV).</p><br>" +
                "<p>Covishield has been developed by the Oxford-AstraZeneca and is being manufactured by the Serum Institute of India (SII).</p><br>" +
                "<h2>Type of Vaccine</h2><br>" +
                "<p>Covaxin is an inactivated vaccine, which has been prepared on a tried and tested platform of dead viruses.</p><br>" +
                "<p>This vaccine is developed with Whole-Virion Inactivated Vero Cell-derived technology. They contain inactivated viruses, which can not infect a person but still can teach the immune system to prepare a defence mechanism against the active virus.</p><br>" +
                "<p>These conventional vaccines have been in use for decades now. There are vaccines for some other diseases as well which are made using the same technology. These diseases are –</p><br>" +
                "<ul><li>Seasonal influenza</li><li>Rabies</li><li>Polio</li><li>Pertussis</li><li>Japanese encephalitis</li></ul><br>" +
                "<p>Covishield has been prepared using the viral vector platform which is a totally different technology.</p><br>" +
                "<p>A chimpanzee adenovirus – ChAdOx1 – has been modified to enable it to carry the COVID-19 spike protein into the cells of humans. Well, this cold virus is basically incapable of infecting the receiver but can very well teach the immune system to prepare a mechanism against such viruses.</p><br>" +
                "<p>The exact technology was used to prepare vaccines for viruses like Ebola.</p><br>" +
                "<h2>Doses</h2><br>" +
                "<p>There is no difference between the two vaccines in terms of dosage. Both of them follow a two-dose regimen, administered 28 days apart.</p><br>" +
                "<h2>Efficiency</h2><br>" +
                "<p>Both the vaccines have shown more than satisfactory results ever since the inoculation started in India.</p><br>" +
                "<p>The effectiveness of the Covishield vaccine is nearly 90% as per the global reports and Covaxin’s 81% according to interim 3rd phase trial results.</p><br>" +
                "<p>Covishield, on the other hand, has shown a very satisfactory efficacy of 62 percent.</p><br>"
        );
        $("#card1-hastags").html(
            '<a href="#">#Coronavirus</a><a href="#">#coronavirusoutbreak</a><a href="#">#COVAXIN</a><a href="#">#COVID-19</a><a href="#">#lockdown</a><a href="#">#covid19vaccinenews</a><a href="#">#covishield</a><a href="#">#Vaccine</a>'
        );
    }
    
    function changeText2() {
        $(window).scrollTop($("#card1").offset().top - 130);

        $("#card1-title").html("<h2>Delicious Blackberries And Their Health Benefits</h2>");
        $("#card1-subtitle").html("<h4>3 days ago</h4>");
        $("#card1-img").css({
            "background-image": 'url("img/berry.jpg")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
        });
        $("#card1-content").html(
            "<p>Eat a handful of berries, and you will get a burst of sweetness in your mouth. This pandemic taught us the importance of berries since they are a rich source of vitamin C that ultimately boosts our immunity.  </p><br>" +
                "<p>Out of other berries, blackberries are one of the versatile berries with a lot of nutrients. In Hindi, this berries known as Jamun is a tropical fruit. It is usually grown during summers in India. The tiny, juicy and tasty fruit is native to Europe, but farmers grow it across the United States all year round.</p><br>" +
                "<p>They come from brambles, which are a type of thorny bush. Each blackberry, when ripe, is made up of 20-50 single seeds known as drupelets that are small, juice-filled, and a deep purplish black. This bright flavor and intense color of fruit can make a delicious fruit salsa or a spread for dessert.</p><br>" +
                "<h2>Nutritional benefits of blackberries</h2><br>" +
                "<p>A small, 3-4 cm fruit is the powerhouse of nutrition. It is rich in essential nutrients and antioxidants. The nutrients found in blackberries are as follows –</p><br>" +
                "<ul><li>Vitamins – Vitamin C, Vitamin A, Vitamin K, and Vitamin B</li><li>Dietary fibers</li><li>Antioxidants – anthocyanins</li><li>Minerals – magnesium, potassium, calcium, folate, zinc, and iron</li><li>Carbohydrates </li></ul>" +
                "<h2>Health benefits of blackberries </h2><br>" +
                "<p>Blackberries have some impressive health benefits, like their taste. Research states that blackberries contain anthocyanins, a powerful phytonutrient and one of the highest antioxidant content of all fruits. Here are the best health benefits of blackberries –</p><br>" +
                "<ol><li>Keep your heart healthy</li><li>Help to strengthen your bones</li><li>Prevents cancer</li><li>Diabetic management</li><li>Good for gut</li><li>Boost your brain</li><li>Healthy pregnancy management</li><li>Fights skin problem</li></ol>"
        );
        $("#card1-hastags").html(
            '<a href="#">#benefits of blackberries</a><a href="#">#blackberry fruit benefits</a><a href="#">#health benefits of blackberries</a>'
        );
    }

    function changeText3() {
        $(window).scrollTop($("#card1").offset().top - 130);

        $("#card1-title").html("<h2>7 Easy Home Remedies For Knee Joint Pain</h2>");
        $("#card1-subtitle").html("<h4>4 days ago</h4>");
        $("#card1-img").css({
            "background-image": 'url("img/knee.jpg")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
        });
        $("#card1-content").html(
            "<p>Knee pain has become a part of life for many people because it never goes. This pain can start at any age. However, usually, it is more as you age. Whether it is due to an injury or some underlying medical condition, knee pain can interfere with your daily activities. The debilitating pain may last for some hours or at times for days altogether. </p><br>" +
                "<p>The prominent cause of knee pain currently everyone is facing is – obesity. Obesity causing knee pain at any age as it causes extra pressure on your knee joints. For some, it can turn into a lifelong issue. Many types of minor knee pain respond well to self-care measures. Physical therapy and knee braces also can help relieve knee pain. In some cases, however, your knee may require surgical repair.</p><br>" +
                "<h2>Causes of knee joint pain</h2><br>" +
                "<p>Knee pain can have different causes. Being overweight puts you at greater risk for knee problems. Overusing your knee can trigger knee problems that cause pain. </p><br>" +
                "<ul><li>Fracture of the kneecap or other bones.</li><li>Minor injuries to the ligaments</li><li>Strain or sprain</li><li>Dislocation of the knee</li><li>Torn ligament</li><li>Torn cartilage</li><li>Bursitis – Inflammation from repeated pressure on the knee</li></ul><br>" +
                "<h2>Signs and symptoms</h2><br>" +
                "<p>The location and severity of knee pain may vary, depending on the cause of the problem. Signs and symptoms that sometimes accompany knee pain include:</p><br>" +
                "<ul><li>Swelling and stiffness</li><li>Redness and warmth to the touch</li><li>Weakness or instability</li><li>Popping or crunching noises</li><li>Inability to fully straighten the knee</li></ul><br>" +
                "<h2>Home remedies for knee joint pain</h2><br>" +
                "<ul><li>Heat and cold compression</li><li>Ginger</li><li>Turmeric</li><li>Tulsi</li><li>Essential oils</li><li>Cayenne pepper</li><li>Epsom salt</li></ul><br>"
        );
        $("#card1-hastags").html(
            '<a href="#">#home remedies for knee pain</a><a href="#">#knee joint pain</a><a href="#">#knee pain</a><a href="#">#knee pain remedies</a>'
        );
    }

    function changeText4() {
        $(window).scrollTop($("#card1").offset().top - 130);

        $("#card1-title").html("<h2>10 Health Benefits of Giloy – The Ultimate Immunity Booster</h2>");
        $("#card1-subtitle").html("<h4>5 days ago</h4>");
        $("#card1-img").css({
            "background-image": 'url("img/giloy.jpg")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
        });
        $("#card1-content").html(
            "<p>It’s time again to find a wave of peace in natural medicine to heal yourself. Based on many studies, Ayurveda treatment is considered the best natural form of healing in India and all over the world.</p><br>" +
                "<p>In Ayurveda, Giloy is considered one of the best medicine to treat various fevers and other conditions. Giloy is one of the three Amrit plants. Amrit means the ‘root of immortality. Hence, it is also called Amritavalli or Amrita in Sanskrit.</p><br>" +
                "<h2>What is Giloy?</h2><br>" +
                "<p>Giloy is scientifically known as Tinospora Cordifolia or Guduchi in Hindi. The stem of Giloy is considered highly effective because of its high nutritional content and the alkaloids found in it but the root and leaves also can be used.</p><br>" +
                "<p>According to a shloka of Charak Samhita, Giloy is one of the main herbs with a bitter taste. It is used in various disorders and also helps alleviate Vata and Kapha dosha.</p><br>" +
                "<p>Giloy also gets its name Heart-leaved moonseed by its heart-shaped leaves and its reddish fruit. </p><br>" +
                "<h2>What are the medicinal properties of Giloy?</h2><br>" +
                "<p>The stem of Giloy is considered highly effective because of its high nutritional content and the alkaloids, glycosides, steroids, and other compounds found in it, but the root and leaves also can be used.</p><br>" +
                "<p>These compounds present in Giloy have effective against various disorders, such as diabetes, cancer, neurological problems, fever, etc. </p><br>" +
                "<h2>How to consume Giloy?</h2><br>" +
                "<p>As per Ayurveda, Giloy can be consumed in either a powdered form or can be in the form of kadha (decoction) or even juice. Nowadays it is also available in capsules and readymade powder. Giloy applied topically too as a paste for skin problems.</p><br>" +
                "<p>The regular dose of Giloy is a teaspoon at a time, taken twice a day. The dose might vary depending on the type of health problem. </p><br>" +
                "<h2>Health Benefits of Giloy </h2><br>" +
                "<ol><li>Helps against chronic fever</li><li>Helps against dengue fever</li><li>Helps against hay fever</li><li>Helps against Corona-virus infection</li><li>Controls blood sugar level</li><li>Boosts immunity</li><li>Improve digestion</li><li>Reduces stress and anxiety</li><li>Treats arthritis and gout</li><li>Improves eye-sight</li></ol>" +
                "<h2>Side Effects of Giloy </h2><br>" +
                "<p>Giloy herb doesn’t have any side-effects. However, when taken Giloy with other diabetic medications it may lead to low blood sugar levels.</p><br>" +
                "<p>Giloy may cause the immune system to become more active which may worsen the symptoms of autoimmune disease such as rheumatoid arthritis. Its effect is unknown to lactating mothers. So, it’s good to remain on the safer side and avoid Giloy during lactation.</p><br>"
        );
        $("#card1-hastags").html(
            '<a href="#">#Giloy</a><a href="#">#giloy benefits for body</a><a href="#">#giloy for fever</a><a href="#">#health benefits of giloy</a><a href="#">#uses of giloy</a>'
        );
    }

    function changeText5() {
        $(window).scrollTop($("#card1").offset().top - 130);

        $("#card1-title").html("<h2>8 Nutritious Health Benefits of Sweet Lime</h2>");
        $("#card1-subtitle").html("<h4>6 days ago</h4>");
        $("#card1-img").css({
            "background-image": 'url("img/lime.jpg")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
        });
        $("#card1-content").html(
            "<p>Whether you are enjoying the pulp while chewing slowly, or want to swallow a glass of yellow-green juice, Mosambi can’t get rid of the fatigue caused by sweat. Sweet limes are known for their high vitamin C content, which provides the perfect flavor for many recipes. It is a multi-purpose summer fruit that will instantly refresh you when you squeeze the juice.</p><br>" +
                "<h2>What is Sweet lime?</h2><br>" +
                "<p>Sweet limes are spherical citrus fruit with finely-textured skins with yellowish-orange in color. The rind is semi-smooth and similarly pitted. In India, it is typically named mosambi or musambi.</p><br>" +
                "<h2>Nutritional Value of Sweet lime</h2><br>" +
                "<p>Sweet lime is a low-calorie fruit and high in Vitamin and mineral profile. One sweet lime on average weighs 106 gms. It can provide approx.</p><br>" +
                "<ul><li>Energy: 45 calories</li><li>Protein: 0.8 gms</li><li>Vitamin C: 53 mg</li><li>Fats: 0.3 gms</li><li>Vitamin A: 90.2 mcg</li><li>Dietary Fibre: 41.64 gms</li></ul><br>" +
                "<h2>Health Benefits of Sweet Lime</h2><br>" +
                "<ul><li>Helps Improve Immunity</li><li>Help Improve Digestion</li><li>Helps in Dehydration</li><li>Great for Eyes, Skin, and Hair</li><li>Aids Weight Loss</li><li>Helps Treat Ulcers</li><li>Excellent Source of Vitamin C</li><li>May Protect Bone Health</li></ul><br>" +
                "<h2>Uses of Sweet lime</h2><br>" +
                "<p>Sweet limes can be eaten as a snack, just peel them and enjoy them. You can also use it as a salad, sometimes even in seasoning sauce or chutney. Sweet lime is used as a fruit juice in India, you will always find this juice sold at a street stall. Salt can be added to freshly squeezed juice to enhance the taste.</p><br>" +
                "<p>You can also prepare sweet lime cucumber detox water. Mix both the ingredients and fill it with water and let it infuse for 3 to 4 hours.</p><br>"
        );
        $("#card1-hastags").html(
            '<a href="#">#sweet lime</a><a href="#">#sweet lime benefits</a><a href="#">#sweet lime health benefits</a><a href="#">#sweet lime nutrition</a>'
        );
    }

    function changeText6() {
        $(window).scrollTop($("#card1").offset().top - 130);

        $("#card1-title").html("<h2>9 Aloe Vera Benefits for Face and Skin!</h2>");
        $("#card1-subtitle").html("<h4>7 days ago</h4>");
        $("#card1-img").css({
            "background-image": 'url("img/aloe.jpg")',
            "background-size": "contain",
            "background-repeat": "no-repeat",
        });
        $("#card1-content").html(
            "<p>Aloe Vera, the modest houseplant is a ‘miracle,’ wonder plant, often hiding in plain sight. Having been around and used as a medicinal herb, it nourishes the body from the inside – it is rich in nutrients, aids in improving digestion, and even boost immunity. Aloe Vera can be used topically too, i.e., its gel can be used to enhance one’s skin, especially the face and the hair.</p><br>" +
                "<p>However, before we get into the essential reasons and health benefits of Aloe Vera, let us first learn how to extract Aloe Vera gel directly from the plant. If you have an Aloe Vera plant at home, select its fatter leaves or stems and cut it from the base. Or you may pull the leaves from their bottom.  Be careful as the plant has thorns.</p><br>" +
                "<p>Next, use a sharp knife to slice the thorns from the edge of each leaf. Then slice the stalk into half and keep the gel side up. You may slice open leaf as well. Use a spoon to scrape the gel out into a container. When all the gel is extracted, refrigerate the gel. If this process seems too tedious for you, you can buy Aloe Vera gel from the market as well.</p><br>" +
                "<p>Here are six reasons to apply Aloe Vera gel on your face, skin, and hair –</p><br>" +
                "<ul><li>Helps soothe sunburn</li><li>Helps to moisturize the skin</li><li>Boosts healing of wounds</li><li>Fights skin-aging</li><li>Reduces infection and acne</li><li>Lightens blemishes on the face</li></ul><br>" +
                "<h2>Aloe Vera for hair and scalp</h2><br>" +
                "<ul><li>Helps in hair growth</li><li>Keeps dandruff at bay</li><li>Acts as a conditioner to the hair and scalp</li></ul><br>"
        );
        $("#card1-hastags").html(
            '<a href="#">#sweet lime</a><a href="#">#sweet lime benefits</a><a href="#">#sweet lime health benefits</a><a href="#">#sweet lime nutrition</a>'
        );
    }

    function menuAction1() {
        articleLayout();
        changeText1();
    }

    function menuAction2() {
        articleLayout();
        changeText2();
    }

    function menuAction3() {
        articleLayout();
        changeText3();
    }

    function menuAction4() {
        articleLayout();
        changeText4();
    }

    function menuAction5() {
        articleLayout();
        changeText5();
    }

    function menuAction6() {
        articleLayout();
        changeText6();
    }

    // CTA for card 0 menu items
    $("#menu-item1").click(menuAction1);
    $("#menu-item2").click(menuAction2);
    $("#menu-item3").click(menuAction3);
    $("#menu-item4").click(menuAction4);
    $("#menu-item5").click(menuAction5);
    $("#menu-item6").click(menuAction6);

    // CTA for card 2 items
    $("#card-item1").click(changeText1);
    $("#card-item2").click(changeText2);
    $("#card-item3").click(changeText3);
    $("#card-item4").click(changeText4);
    $("#card-item5").click(changeText5);
    $("#card-item6").click(changeText6);

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
    $("#slide-about").click(() => {
        location.href = "index.html#contact";
        navbarClose();
    });
    $("#slide-book").click(() => {
        location.href = "appoint.html";
        navbarClose();
    });

    // -- /HEADER SECTION --
});

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
