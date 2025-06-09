const projects = [
  {
    url: "https://fitokrama.by",
    img: "./images/projects/fitokrama.png",
    stak: ["HTML", "CSS", "JS"],
    desc: "Сайт онлайн аптеки в Беларуси",
    name: "Fitokrama",
  },
  {
    url: "https://everminer.vercel.app",
    img: "./images/projects/everminer.png",
    name: "Everminer",
    desc: "Сайт майнеров ",
    stak: ["HTML", "CSS", "JS"],
  },
  {
    name: "OsiyoHomeTex",
    stak: ["HTML", "CSS", "JS"],
    desc: "Full-stack проект для текстильной компании в Узбекистане.",
    url: "https://osiyohometex.uz",
    img: "./images/projects/osiyohome.png",
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

const completedTasks = [
  {
    title: "Переверстать страничку из Тильды",
    comment:
      "Хорошо сделал свою работу. Достаточно быстро. Вежливый в общении, буду обращаться еще",
    score: 5.0,
  },
  // {
  //   title: "Верстка лендинга",
  //   comment:
  //     "Работу выполнил еле как и на половину, пришлось проверять и указывать правки по 5 раз одни и те же, в итоге работа выполнена на 60%",
  //   score: 2.4,
  // },
  {
    title: "Сделать сайт-визитку",
    comment:
      "все супер. Сделано быстро, четко и в полном соответствии с заданием. Рекомендую!",
    score: 5.0,
  },
  {
    title: "Доработать верстку, добавить окно с плеером",
    comment:
      "Отлично выполнил заказ по хорошей цене и за быстрый срок, учел все мои комментарии. Буду обращаться еще!",
    score: 5.0,
  },
  {
    title: "Доработка сайта",
    comment: "Выполнил работу в срок и со всеми моими предпочтениями",
    score: 5.0,
  },
  {
    title: "Сверстать один экран для веб ап приложения",
    comment: "Все хорошо, вовремя и качественно",
    score: 5.0,
  },
  {
    title: "Сделать несложную функцию в приложение на реакте",
    comment: "Супер, огромная благодарность!",
    score: 5.0,
  },
  {
    title: "Верстка одностраничника",
    comment: "Договорились о цене, работу выполнил быстро.",
    score: 5.0,
  },
  {
    title: "Адаптивная верстка сайта tailwind",
    comment:
      "Отличный специалист, который выполнил все задачи в установленные сроки и без каких-либо замечаний. Обязательно обращусь к нему снова. Было очень удобно наблюдать за процессом работы онлайн и видеть, как продвигается разработка сайта. Кроме того, специалист проявлял высокий уровень коммуникации и был всегда готов ответить на любые вопросы, что делало сотрудничество еще более приятным и продуктивным.",
    score: 5.0,
  },
];

document.querySelector("#reviews").innerHTML = completedTasks
  .map(
    (i) =>
      `
        <div class="feedback">
          <img src="./images/profile.svg" class="element-animation el" alt="" />
          <section class="element-animation eb">
            <h1>${i.title}</h1>
            <p>${i.comment}</p>
          </section>
          <span class="element-animation er">${i.score}.0</span>
          <img class="element-animation er star" src="./images/star.svg" />
        </div>
        `
  )
  .join("");

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
