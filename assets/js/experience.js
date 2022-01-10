AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Python Developer",
    cardImage: "assets/images/experience-page/unisoft.png",
    place: "Unisoft System Ltd",
    time: "(December, 2021 - present)",
    desp: "Developing ERP software using Odoo.",
  },
  {
    title: "RMA & Component Officer and Support Engineer",
    cardImage: "assets/images/experience-page/globalbrand.jpg",
    place: "Global Brand Pvt. Limited",
    time: "(August, 2021 - November, 2021)",
    desp: "",
  },
  {
    title: "Engineering: Undergraduate & Masters Asia Virtual Experience Program",
    cardImage: "assets/images/experience-page/ENG.png",
    place: "Virtual Internship",
    time: "(December 2020 to February 2021)",
    desp: "<li>Business Foundation Skills</li><li>Work Ready Skills</li><li>Technical Engineer Skills</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards


