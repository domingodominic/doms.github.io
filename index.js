const listOne = document.querySelector(".list-one");
const listTwo = document.querySelector(".list-two");
const listThree = document.querySelector(".list-three");
const techTitle = document.querySelector(".tech-title");
const techSpan = document.querySelector(".tech-span");
const techdesc = document.querySelector(".tech-desc");
const fourTwo = document.querySelector(".four-two");

//for technologyyyyy
listOne.addEventListener("click", function () {
  techSpan.innerText = "THE TERMINOLOGY...";
  techTitle.innerText = `LAUNCH VEHICLE`;
  fourTwo.style.backgroundImage = "url('vehicle.png')";
  techdesc.innerHTML = `
  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
});

listTwo.addEventListener("click", function () {
  techSpan.innerText = "THE TERMINOLOGY...";
  techTitle.innerText = `SPORT SPACESHIP`;
  fourTwo.style.backgroundImage = "url('sport.png')";
  techdesc.innerHTML = `
  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
});
listThree.addEventListener("click", function () {
  techSpan.innerText = "THE TERMINOLOGY...";
  techTitle.innerText = `SPACE CAPSULE`;
  fourTwo.style.backgroundImage = "url('capsule.png')";
  techdesc.innerHTML = `
  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;
});

const container = document.querySelector(".container");
const mainHome = document.querySelector(".main-home");
const section_2 = document.querySelector(".section-two");
const innerMenu = document.querySelector(".inner-menu");
const descTitle = document.querySelector(".des-title");
const innerDesc = document.querySelector(".inner-desc");
const sectionThree = document.querySelector(".section-three");
const sectionFour = document.querySelector(".section-four");
const innerList = document.querySelector(".inner-list");
const carousel = document.querySelector(".carousel");
const role = document.querySelector(".role");
const cName = document.querySelector(".crew-name");
const cDesc = document.querySelector(".crew-desc");
const CREW = document.querySelector(".column-two");
const planet = document.querySelector(".img");

const carouselChild = carousel.children;

carouselChild.item(0).addEventListener("click", function () {
  CREW.style.backgroundImage = `url("douglas.png")`;

  CREW.classList.toggle("opacity");
  role.classList.toggle("forText");
  cName.classList.toggle("forText");
  cDesc.classList.toggle("forText");
  role.innerText = "COMMANDER ";
  cName.innerText = "DOUGLAS HURLEY";
  cDesc.innerText =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
});
carouselChild.item(1).addEventListener("click", function () {
  CREW.style.backgroundImage = `url("mark.png")`;
  CREW.classList.toggle("opacity");
  role.classList.toggle("forText");
  cName.classList.toggle("forText");
  cDesc.classList.toggle("forText");
  role.innerText = "MISSION SPECIALIST";
  cName.innerText = "MARK SHUTTLEWORTH";
  cDesc.innerText =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
});
carouselChild.item(2).addEventListener("click", function () {
  CREW.style.backgroundImage = `url("victor.png")`;
  CREW.classList.toggle("opacity");
  role.classList.toggle("forText");
  cName.classList.toggle("forText");
  cDesc.classList.toggle("forText");
  role.innerText = "PILOT";
  cName.innerText = "VICTOR GLOVER";
  cDesc.innerText =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
});
carouselChild.item(3).addEventListener("click", function () {
  CREW.style.backgroundImage = `url("ansari.png")`;
  CREW.classList.toggle("opacity");
  role.classList.toggle("forText");
  cName.classList.toggle("forText");
  cDesc.classList.toggle("forText");
  role.innerText = "PILOT";
  cName.innerText = "VICTOR GLOVER";
  cDesc.innerText =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
});

const two = document.querySelector(".two");
const four = document.querySelector(".four");
const crew = document.querySelector(".crew");
const technology = document.querySelector(".technology");
const parentList = innerMenu.children;

const section = document.querySelector(".section");
const moon = document.querySelector("#moon");
const img = document.querySelector(".image-path");

const header = (document.querySelector(".header").style.visibility = "visible");
section_2.remove();
sectionThree.remove();
sectionFour.remove();

technology.addEventListener("click", function () {
  container.append(sectionFour);
  section_2.remove();
  sectionThree.remove();
  mainHome.remove();
});

const home = document
  .querySelector(".home")
  .addEventListener("click", function () {
    sectionFour.remove();
    container.append(mainHome);
    section_2.remove();
    sectionThree.remove();
  });
const destination = document
  .querySelector(".destination")
  .addEventListener("click", function () {
    sectionFour.remove();
    sectionThree.remove();
    mainHome.remove();
    container.append(section_2);
  });

// moon.addEventListener("click", function () {
//   img.src = "mars-bg.png";
// });
crew.addEventListener("click", function () {
  sectionFour.remove();
  section_2.remove();
  mainHome.remove();
  container.append(sectionThree);
});

parentList.item(0).addEventListener("click", function () {
  innerDesc.classList.toggle("forDesc");
  planet.classList.toggle("rotate");
  two.innerText = "384,400 KM";
  four.innerText = "3 DAYS";
  innerDesc.innerText =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  descTitle.innerText = "MOON";
  descTitle.classList.toggle("opacity");
  img.src = "mars.png";
  img.classList.toggle("opacity");
});
parentList.item(1).addEventListener("click", function () {
  innerDesc.classList.toggle("forDesc");
  descTitle.classList.toggle("opacity");
  planet.classList.toggle("rotate");
  two.innerText = "225 MIL. KM";
  four.innerText = "9 MONTHS";
  innerDesc.innerText =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  descTitle.innerText = "MARS";
  img.src = "mars-bg.png";
  img.classList.toggle("rotate");
});
parentList.item(2).addEventListener("click", function () {
  innerDesc.classList.toggle("forDesc");
  planet.classList.toggle("rotate");
  descTitle.classList.toggle("opacity");
  two.innerText = "628 MIL. KM";
  four.innerText = "3 YEARS";
  innerDesc.innerText =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  descTitle.innerText = "EUROPA";
  img.src = "europa.png";
});
parentList.item(3).addEventListener("click", function () {
  planet.classList.toggle("rotate");
  descTitle.classList.toggle("opacity");
  innerDesc.classList.toggle("forDesc");
  two.innerText = "1.6 BIL. KM";
  four.innerText = "7 YEARS";
  innerDesc.innerText =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  descTitle.innerText = "TITAN";
  img.src = "titan.png";
});
