const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circlePic = document.getElementById("cta-img");
circlePic.setAttribute("src", siteContent["cta"]["img-src"]);

let midPic = document.getElementById("middle-img");
midPic.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let nav = document.querySelectorAll("nav a");

for(i = 0;i<6;i++) {
  let navItem = "nav-item-"+(i+1);
  nav[i].textContent = siteContent["nav"][navItem];
}

let title = document.getElementsByTagName("h1")[0];
title.innerHTML = "DOM <br> IS <br> AWESOME";

let tButton = document.getElementsByTagName("button")[0];
tButton.textContent = siteContent["cta"]["button"];

let secTitle = document.querySelectorAll(".main-content h4");
let secBody = document.querySelectorAll(".main-content p");
let arrTitle = ["features", "about", "services", "product", "vision"];
for(i=0;i<secTitle.length;i++){
  let secTitleWords = arrTitle[i] + "-h4";
  secTitle[i].textContent = siteContent["main-content"][secTitleWords];
  let secBodyWords = arrTitle[i]+ "-content";
  secBody[i].textContent = siteContent["main-content"][secBodyWords];
}

let contH4 = document.querySelector(".contact h4");
contH4.textContent = siteContent["contact"]["contact-h4"];

let contAddr = document.querySelectorAll(".contact p")[0];
contAddr.textContent = siteContent["contact"]["address"];

let contPhone = document.querySelectorAll(".contact p")[1];
contPhone.textContent = siteContent["contact"]["phone"];

let contEmail = document.querySelectorAll(".contact p")[2];
contEmail.textContent = siteContent["contact"]["email"];

let foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];

let apChild = document.createElement("a");
apChild.textContent = "Backstory";
let append = document.querySelector("nav");
append.appendChild(apChild);

let preChild = document.createElement("a");
preChild.textContent = "Highlights";
let pre = document.querySelector("nav");
pre.prepend(preChild);

let navBar = document.querySelectorAll(".container nav a");
navBar.forEach(item => item.style.color = "green");
