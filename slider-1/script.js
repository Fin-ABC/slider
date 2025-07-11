// Buat interaksinya
const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

delayAutoPlay = 10000;
let isi = document.getElementById("list");
let thumb = document.getElementById("thumbnail");
let data = [
  {
    imgSrc: "img/arisu.jpg",
    title: "Sosok Aseli My Istrii",
    name: "Arisu Sakayanagi",
    figureImg: "img/icon/arisu.webp",
    figcaption: "1A - 2A",
    desc: "Arisu Sakayanagi (坂柳 有栖, Sakayanagi Arisu) adalah karakter pendukung utama dalam seri Classroom of the Elite. Dia adalah seorang pelajar di Advanced Nurturing High School, dan merupakan pemimpin yang mewakili Kelas-A.",
    quote: "The Queen",
  },
  {
    imgSrc: "img/hiyori.png",
    title: "Sosok Aseli My Istrii",
    name: "Hiyori Shiina",
    figureImg: "img/icon/hiyori.jpg",
    figcaption: "1C - 2D - 3B",
    desc: "Mungkin Aku bisa membuat teman dengan ketertarikan yang sama. Sebagian diriku berpikir tindakan seperti ini tidak seperti aku, sedangkan sebagian lainnya sangatlah tertarik terhadap perkembangan ini. Aku berharap kalau, di masa depan, persaingan diantara kelas tidak akan menciptakan celah diantara kita diantara kita.",
    quote: "Kutu Buku",
  },
];

data.forEach((item) => {
  isi.innerHTML += `
    <div class="item">
          <img src="${item.imgSrc}" alt="image" />
          <div class="detail">
            <div class="title">${item.title}</div>
            <div class="name">${item.name}</div>
            <figure>
              <img src="${item.figureImg}" alt="icon" />
              <figcaption>${item.figcaption}</figcaption>
            </figure>
            <div class="desc">
                ${item.desc}
            </div>
            <a href="#" class="more">More details &raquo;</a>
          </div>
        </div>
    `;
  thumb.innerHTML += `
    <div class="item">
            <img src="${item.imgSrc}" alt="thumbnail">
            <div class="detail">
                <div class="name">${item.name}</div>
                <blockquote>"${item.quote}"</blockquote>
            </div>
        </div>
    `;
});

let autoPlay = setTimeout(() => {
  next.click();
}, delayAutoPlay);

next.addEventListener("click", () => {
  initSlider("next");
});

prev.addEventListener("click", () => {
  initSlider("prev");
});

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    const lastItem = sliderItems.length - 1;
    list.prepend(sliderItems[lastItem]);
    thumbnail.prepend(thumbnailItems[lastItem]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  clearTimeout(autoPlay);
  autoPlay = setTimeout(() => {
    next.click();
  }, delayAutoPlayAutoPlay);
};
