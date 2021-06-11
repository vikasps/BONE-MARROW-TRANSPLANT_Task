const warningData = [
  {
    id: 1,
    icon: "Group1.png",
    content:
      "Failure to thrive – not gaining weight and height as per the age norms",
  },
  {
    id: 2,
    icon: "Group2.png",
    content: "Infections warranting multiple hospitalizations",
  },
  {
    id: 3,
    icon: "Group3.png",
    content: "Requirement of intravenous antibiotics to clear infections",
  },
  {
    id: 4,
    icon: "Group4.png",
    content: "2 or more episodes of pneumonia",
  },
  {
    id: 5,
    icon: "Group5.png",
    content:
      "Family history of death of children at young age due to immune deficiency ",
  },

  {
    id: 6,
    icon: "Group6.png",
    content: "Repeated episodes of diarrheaxz",
  },
  {
    id: 7,
    icon: "Group7.png",
    content: "2 or more episodes of sinus infections within a year",
  },
  {
    id: 8,
    icon: "Group8.png",
    content: "2 or more episodes of ear discharge",
  },
  {
    id: 9,
    icon: "Group9.png",
    content: "Repeated skin infections",
  },
  {
    id: 10,
    icon: "Group10.png",
    content: "Repeated abscess formation (liver abscess, brain abscess)",
  },
];

// warningData.slice(-1)[0].addClass('warning__card__last__child')
// .warning__card__last__child{
//     margin
// }

$(document).ready(function () {
  $("#topBtn").fadeOut();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });


  // Back-to-top icon js starts here

  $("#topBtn").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 800);
  });

  genearateWarning();
  warningData[length - 1].classlist.add("warning__card__last__child");
});

function genearateWarning() {
  var content = "";
  for (var i = 0; i < warningData.length; i++) {
    content += ` <div class="card-1">
    <img src="./images/warning-images/${warningData[i].icon}" alt="warning-img-1">
    <p class="warning-card-text">${warningData[i].content}</p>
</div>`;
  }
  document.getElementById("warningParentCards").innerHTML = content;
}

  // Back-to-top icon js ends here
