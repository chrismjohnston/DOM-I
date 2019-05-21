const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//append and prepend
const nav1 = document.querySelector("nav");
const newElement1 = document.createElement("a");
newElement1.href = "#";
newElement1.style.color = "green";
newElement1.textContent = "Home";

const newElement2 = document.createElement("a");
newElement2.href = "#";
newElement2.style.color = "green";
newElement2.textContent = "Career";

nav1.prepend(newElement1);
nav1.appendChild(newElement2);

console.log(nav1);

//nav bar links
const navbar = document.querySelectorAll("a");
navbar[0].textContent = siteContent["nav"]["nav-item-0"];
navbar[1].textContent = siteContent["nav"]["nav-item-1"];
navbar[2].textContent = siteContent["nav"]["nav-item-2"];
navbar[3].textContent = siteContent["nav"]["nav-item-3"];
navbar[4].textContent = siteContent["nav"]["nav-item-4"];
navbar[5].textContent = siteContent["nav"]["nav-item-5"];
navbar.forEach(item => (item.style.color = "green"));

//title
const h1Title = document.querySelector("h1");
h1Title.textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Main Content
const h4MainContent = document.querySelectorAll("h4");
h4MainContent[0].textContent = siteContent["main-content"]["features-h4"];
h4MainContent[1].textContent = siteContent["main-content"]["about-h4"];
h4MainContent[2].textContent = siteContent["main-content"]["services-h4"];
h4MainContent[3].textContent = siteContent["main-content"]["product-h4"];
h4MainContent[4].textContent = siteContent["main-content"]["vision-h4"];

const pMainContent = document.querySelectorAll("p");
pMainContent[0].textContent = siteContent["main-content"]["features-content"];
pMainContent[1].textContent = siteContent["main-content"]["about-content"];
pMainContent[2].textContent = siteContent["main-content"]["services-content"];
pMainContent[3].textContent = siteContent["main-content"]["product-content"];
pMainContent[4].textContent = siteContent["main-content"]["vision-content"];

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Contact

const h4contact = document.querySelector(".contact h4");
h4contact.textContent = siteContent["contact"]["contact-h4"];
const pContact = document.querySelectorAll(".contact p");
pContact[0].textContent = siteContent["contact"]["address"];
pContact[1].textContent = siteContent.contact.phone;
pContact[2].textContent = siteContent["contact"]["email"];

//Footer
const footerCopy = document.querySelectorAll("footer");
footerCopy[0].textContent = siteContent.footer.copyright;
