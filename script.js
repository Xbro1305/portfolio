const projects = [
  {
    name: "Лазурь",
    stak: ["HTML", "CSS", "JS"],
    desc: "Лендинг для пляжа.",
    code: "https://github.com/Xbro1305/lazur",
    url: "https://candid-seahorse-bfd5a1.netlify.app/",
    img: "./images/projects/1.png",
  },
  {
    name: "На червенском",
    stak: ["HTML", "CSS", "JS"],
    desc: "Лендинг для компании чистки ковров. ",
    img: "./images/projects/2.png",
    code: "https://github.com/Xbro1305/kovrochistka",
    url: "https://kanio.by",
  },
  {
    name: "Кликер",
    desc: "Простой игрово кликер для TG Web App",
    stak: ["ReactJS"],
    code: "https://github.com/Xbro1305/webapp",
    img: "./images/projects/3.png",
    url: "https://webapp-b2kc.vercel.app/frens",
  },
  {
    name: "reManga",
    url: "https://book-gilt-nu.vercel.app/",
    code: "https://github.com/Xbro1305/boo",
    stak: ["ReactJS", "Redux", "vite"],
    desc: "Сайт для любителей манги",
    img: "./images/projects/4.png",
  },
  {
    code: "https://github.com/Xbro1305/fitokrama",
    url: "fitokrama.by",
    img: "./images/projects/5.png",
    stak: ["HTML", "CSS", "JS"],
    code: "https://github.com/Xbro1305/fitokrama",
    desc: "Сайт онлайн аптеки в Беларуси",
    name: "Fitokrama",
  },
  {
    code: "https://github.com/Xbro1305/everminer/",
    url: "everminer.vercel.app",
    img: "./images/projects/6.png",
    name: "Everminer",
    desc: "Сайт майнеров ",
    stak: ["HTML", "CSS", "JS"],
  },
];

document.querySelector(".projects_list").innerHTML = projects
  .map((i) => {
    return `
          <div class="project">
            <img
              src="${i.img}"
              class="element-animation"
              alt=""
            />
            <div class="project_info element-animation eb">
              <h1>${i.name}</h1>
              <div class="project_stack">
              ${i.stak
                .map(
                  (s) => `
                <p>${s}</p>
                `
                )
                .join(" ")}
              </div>
              <p class="project_desc">
                ${i.desc}
              </p>
              <div class="project_links">
                <a href="${i.code}">
                  <img src="./images/Vector (1).svg" alt="" />
                  Код
                </a>
                <a href="${i.url}">
                  <img src="./images/Vector (2).svg" alt="" />
                  Демо
                </a>
              </div>
            </div>
          </div>`;
  })
  .join(" ");

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
      change.target.style.animationPlayState = "running";
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.2],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

const goto = (num) => {
  document.querySelector(".formImg").style.top = `${num * 75 - 75}px`;
};

const menu = () => {
  document.querySelector(".menubar").classList.toggle("active");
};
