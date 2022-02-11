let aboutUsBttnList = document.getElementsByClassName("aboutUs");
console.log(aboutUsBttnList);
console.log(aboutUsBttnList[0]);
console.log(aboutUsBttnList[1]);

function handleClick(event) {
  document
    .getElementById("aboutUsSection")
    .scrollIntoView({ behavior: "smooth" });
}

aboutUsBttnList[0].addEventListener("click", handleClick);
aboutUsBttnList[1].addEventListener("click", handleClick);
