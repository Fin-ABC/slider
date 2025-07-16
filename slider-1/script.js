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
    title: "Classroom of the Elite",
    name: "Arisu Sakayanagi",
    figureImg: "img/icon/arisu.webp",
    figcaption: "1A - 2A",
    desc: "Arisu Sakayanagi (坂柳 有栖, Sakayanagi Arisu) adalah karakter pendukung utama dalam seri Classroom of the Elite. Dia adalah seorang pelajar di Advanced Nurturing High School, dan merupakan pemimpin yang mewakili Kelas-A.",
    quote: "The Queen",
  },
  {
    imgSrc: "img/hiyori.png",
    title: "Classroom of the Elite",
    name: "Hiyori Shiina",
    figureImg: "img/icon/hiyori.jpg",
    figcaption: "1C - 2D - 3B",
    desc: "Mungkin Aku bisa membuat teman dengan ketertarikan yang sama. Sebagian diriku berpikir tindakan seperti ini tidak seperti aku, sedangkan sebagian lainnya sangatlah tertarik terhadap perkembangan ini. Aku berharap kalau, di masa depan, persaingan diantara kelas tidak akan menciptakan celah diantara kita diantara kita.",
    quote: "Kutu Buku",
  },
  {
    imgSrc: "img/maomao.jpg",
    title: "The Apothecary Diaries",
    name: "Maomao",
    figureImg: "img/icon/Maomao.webp",
    figcaption: "Poison Maiden",
    desc: "If I should die, I'd want to die of poison",
    quote: "Poison Maiden",
  },
  {
    imgSrc: "img/tanya.png",
    title: "The Saga of Tanya the Evil",
    name: "Tanya von Degurechaff",
    figureImg: "img/icon/tanya.png",
    figcaption: "Warrant Officer (Former) - Lieutenant (Former) - Lieutenant (Former)<br> - Captain (Former) - Major (Former) - Lt. Colonel (Current)",
    desc: "Freedom without laws means anarchy; laws without freedom means tyranny. So as much as they hate restrictions, they fear unlimited freedom",
    quote: "Curse you, Being X!",
  },
  {
    imgSrc: "img/victorique.jpg",
    title: "Gosick",
    name: "Victorique de Blois",
    figureImg: "img/icon/victorique.png",
    figcaption: "ヴィクトリカ・ド・ブロワ",
    desc: "Victorique is a small, almost doll-like girl with long blonde hair and emerald eyes. However, she possesses a voice and articulation in speaking that makes her sound like a mature woman. Despite being a student in Saint Marguerite Academy, she usually wears a black Victorian dress and Black Hairband which is full of lace and frills; she also possesses a wardrobe consisting of dresses of a variety of colors. As a child, her appearance is no different except for the lack of emotion she shows on her face. This can be seen when she speaks to Grevil de Blois, especially on the topic of love and affection.",
    quote: "Superhuman Detective",
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
