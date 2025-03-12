const projects = [
  {
    url: "fitokrama.by",
    img: "./images/projects/lazur.png",
    stak: ["HTML", "CSS", "JS"],
    desc: "Сайт онлайн аптеки в Беларуси",
    name: "Fitokrama",
  },
  {
    url: "everminer.vercel.app",
    img: "./images/projects/everminer.png",
    name: "Everminer",
    desc: "Сайт майнеров ",
    stak: ["HTML", "CSS", "JS"],
  },
  {
    name: "Лазурь",
    stak: ["HTML", "CSS", "JS"],
    desc: "Лендинг для пляжа.",
    code: "https://github.com/Xbro1305/lazur",
    url: "https://candid-seahorse-bfd5a1.netlify.app/",
    img: "./images/projects/lazur.png",
  },
  {
    name: "На червенском",
    stak: ["HTML", "CSS", "JS"],
    desc: "Лендинг для компании чистки ковров. ",
    img: "./images/projects/kanio.png",
    url: "https://kanio.by",
  },
  {
    name: "Othercode",
    stak: ["ReactJS", "SCSS"],
    desc: "Сайт лендинг для компании.",
    img: "./images/projects/othercode.png",
    url: "https://othercode.vercel.app",
  },
  {
    name: "Умная Одежда",
    stak: ["ReactJS", "SCSS"],
    desc: "Онлайн магазин одежды, пока в разработке.",
    img: "./images/projects/smartwear.png",
    url: "https://test.maxiscomfort.ru/",
  },
  // {
  //   name: "Кликер",
  //   desc: "Простой игровой кликер для TG Web App",
  //   stak: ["ReactJS"],
  //   code: "https://github.com/Xbro1305/webapp",
  //   img: "./images/projects/clicker.png",
  //   url: "https://webapp-b2kc.vercel.app/frens",
  // },
  // {
  //   name: "reManga",
  //   url: "https://book-gilt-nu.vercel.app/",
  //   code: "https://github.com/Xbro1305/boo",
  //   stak: ["ReactJS", "Redux", "vite"],
  //   desc: "Сайт для любителей манги",
  //   img: "./images/projects/4.png",
  // },
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
                <a href="${i.code ? i.code : ""}">
                  <img src="./images/Vector (1).svg" alt="" />
                  Код ${i.code ? "" : "Скрыт"}
                </a>
                <a href="${i.url}" target="_blank">
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

const completedTasks = [
  {
    title: "Переверстать страничку из Тильды",
    description: "Есть страничка выкачанная из тильды...",
    skills: "html",
    created_at: 1710334420,
    price: "300 руб./за проект",
    feedback: {
      comment: "Хорошо сделал свою работу. Достаточно быстро...",
      created_at: 1710351660,
      score: 5.0,
    },
  },
  {
    title: "Сделать сайт-визитку",
    description: "Нужно сделать сайт-визитку...",
    skills: "html,верстка сайтов,css,сайт,web-разработка",
    created_at: 1710949107,
    price: "Цена договорная",
    feedback: {
      comment:
        "все супер. Сделано быстро, четко и в полном соответствии с заданием...",
      created_at: 1711013879,
      score: 5.0,
    },
  },
  {
    title: "Доработать верстку, добавить окно с плеером",
    description:
      "Это проект в университете, но в нашей команде есть только бекендеры...",
    skills: "html,css,javascript,верстка",
    created_at: 1712922341,
    price: "Цена договорная",
    feedback: {
      comment: "Отлично выполнил заказ по хорошей цене и за быстрый срок...",
      created_at: 1712939527,
      score: 5.0,
    },
  },
  {
    title: "Доработка сайта ",
    description: "Нужно доработать сайт погоды...",
    skills: "js,api,html,scss",
    created_at: 1715523500,
    price: "Цена договорная",
    feedback: {
      comment: "Выполнил работу в срок и со всеми моими предпочтениями...",
      created_at: 1716229773,
      score: 5.0,
    },
  },
  {
    title: "Сверстать один экран для веб ап приложения",
    description: "Нужно сверстать из макета в фигме один экран...",
    skills: "веб ап",
    created_at: 1718642007,
    price: "1000 руб./за проект",
    feedback: {
      comment: "Все хорошо, вовремя и качественно",
      created_at: 1728304920,
      score: 5.0,
    },
  },
  {
    title: "Сделать несложную функцию в приложение на реакте ",
    description: "В отклике укажите телеграм...",
    skills: "реакт",
    created_at: 1723197984,
    price: "650 руб./за проект",
    feedback: {
      comment: "Супер, огромная благодарность!",
      created_at: 1728470769,
      score: 5.0,
    },
  },
  {
    title: "Верстка одностраничника",
    description: "Переверстать готовый лендинг...",
    skills: "html,css",
    created_at: 1727752131,
    price: "5000 руб./за проект",
    feedback: {
      comment: "Договорились о цене, работу выполнил быстро.",
      created_at: 1730184980,
      score: 5.0,
    },
  },
  {
    title: "Адаптивная верстка сайта tailwind",
    description: "Требуется верстка сайта по предоставленным макетам...",
    skills:
      "верстка,seo-friendly,javascript,flexbox и grid layout,tailwindcss,js",
    created_at: 1730889425,
    price: "Цена договорная",
    feedback: {
      comment:
        "Отличный специалист, который выполнил все задачи в установленные сроки...",
      created_at: 1732363963,
      score: 5.0,
    },
  },
];
