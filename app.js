const works = [
  {
    src: "assets/web/01-travel-06.webp",
    title: "Aerial Silence",
    category: "Travel",
    caption: "Alpine light falling over blue peaks.",
    w: 1900,
    h: 1265
  },
  {
    src: "assets/web/02-travel-01.webp",
    title: "Mist Study",
    category: "Travel",
    caption: "Mountain ridges held in low cloud.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/03-travel-03.webp",
    title: "Ochre Ridge",
    category: "Travel",
    caption: "Earth tones, thin air, open distance.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/04-travel-04.webp",
    title: "Shelter Line",
    category: "Travel",
    caption: "Wood, shadow and a quiet horizon.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/05-travel-08.webp",
    title: "Cloud Room",
    category: "Travel",
    caption: "A landscape nearly swallowed by weather.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/06-travel-09.webp",
    title: "Veiled Summit",
    category: "Travel",
    caption: "Soft fog with a painterly edge.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/07-travel-10.webp",
    title: "Fence I",
    category: "Travel",
    caption: "A small human mark in a wide place.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/08-travel-12.webp",
    title: "Coast Study",
    category: "Travel",
    caption: "Pale water and shoreline rhythm.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/09-ferrari-01.webp",
    title: "Rosso Detail",
    category: "Automotive",
    caption: "A close, graphic gesture of speed.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/10-ferrari-02.webp",
    title: "Chrome Circle",
    category: "Automotive",
    caption: "Wheel, shadow and a monochrome pause.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/11-ferrari-03.webp",
    title: "Arrival",
    category: "Automotive",
    caption: "A low car held in green light.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/12-ferrari-04.webp",
    title: "Facade",
    category: "Automotive",
    caption: "Architecture and machine in balance.",
    w: 1264,
    h: 1900
  },
  {
    src: "assets/web/13-ferrari-07.webp",
    title: "Blue Meeting",
    category: "Automotive",
    caption: "People and cars in ceremonial daylight.",
    w: 1900,
    h: 1265
  },
  {
    src: "assets/web/14-ferrari-08.webp",
    title: "Red Interval",
    category: "Automotive",
    caption: "A classic red line between trees.",
    w: 1900,
    h: 1250
  },
  {
    src: "assets/web/15-verduyn-02.webp",
    title: "Portrait In Wood",
    category: "Portraits",
    caption: "A soft fashion portrait with warm interior tones.",
    w: 1267,
    h: 1900
  },
  {
    src: "assets/web/16-verduyn-03.webp",
    title: "Three Figures",
    category: "Portraits",
    caption: "A composed group portrait, airy and direct.",
    w: 1267,
    h: 1900
  },
  {
    src: "assets/web/17-verduyn-04.webp",
    title: "Yellow Dress",
    category: "Portraits",
    caption: "Color, shadow and a theatrical stillness.",
    w: 1267,
    h: 1900
  },
  {
    src: "assets/web/18-verduyn-05.webp",
    title: "Hands And Fabric",
    category: "Portraits",
    caption: "A quiet detail of texture and poise.",
    w: 1267,
    h: 1900
  },
  {
    src: "assets/web/19-verduyn-06.webp",
    title: "Green Suit",
    category: "Portraits",
    caption: "Editorial posture, intimate framing.",
    w: 1267,
    h: 1900
  },
  {
    src: "assets/web/20-verduyn-07.webp",
    title: "Blue Pair",
    category: "Portraits",
    caption: "Two figures against a warm interior plane.",
    w: 1267,
    h: 1900
  },
  {
    src: "assets/web/21-high-pressure-cleaning-01.webp",
    title: "Glass Front",
    category: "Commissioned",
    caption: "A commercial facade cleaned into reflection.",
    w: 1200,
    h: 800
  },
  {
    src: "assets/web/22-high-pressure-cleaning-04.webp",
    title: "Steam Line",
    category: "Commissioned",
    caption: "Work in motion, mist against glass.",
    w: 1200,
    h: 1800
  },
  {
    src: "assets/web/23-high-pressure-cleaning-05.webp",
    title: "Water Mark",
    category: "Commissioned",
    caption: "Utility translated into image and rhythm.",
    w: 1200,
    h: 1800
  },
  {
    src: "assets/web/24-high-pressure-cleaning-06.webp",
    title: "Amber Window",
    category: "Commissioned",
    caption: "A worker seen through warmth and blur.",
    w: 1200,
    h: 1800
  },
  {
    src: "assets/web/25-kids-01.webp",
    title: "Plaid Portrait",
    category: "Kids",
    caption: "A young subject framed with calm confidence.",
    w: 1200,
    h: 1803
  },
  {
    src: "assets/web/26-kids-04.webp",
    title: "Red Accent",
    category: "Kids",
    caption: "Playful color against a soft city wall.",
    w: 1200,
    h: 1803
  },
  {
    src: "assets/web/27-kids-05.webp",
    title: "Street Pose",
    category: "Kids",
    caption: "A bright character moment in natural light.",
    w: 1200,
    h: 1803
  },
  {
    src: "assets/web/28-kids-06.webp",
    title: "Color Wall",
    category: "Kids",
    caption: "Graphic color, small stance, big presence.",
    w: 1200,
    h: 1803
  }
];

const grid = document.querySelector("#gallery-grid");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxCaption = document.querySelector("#lightbox-caption");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let visibleWorks = [...works];
let activeIndex = 0;

function renderGallery(filter = "All") {
  visibleWorks = filter === "All" ? [...works] : works.filter((work) => work.category === filter);
  grid.innerHTML = "";

  visibleWorks.forEach((work, index) => {
    const item = document.createElement("button");
    item.className = "gallery-item";
    item.type = "button";
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
    item.setAttribute("aria-label", `Open ${work.title}`);
    item.innerHTML = `
      <span class="print-frame">
        <img src="${work.src}" width="${work.w}" height="${work.h}" alt="${work.caption}" loading="lazy">
      </span>
      <span class="art-caption">
        <span>${work.title}</span>
        <small>${work.category}</small>
      </span>
    `;
    item.addEventListener("click", () => openLightbox(index));
    grid.appendChild(item);
  });

  observeRevealItems();
}

function setActiveFilter(button) {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.toggle("is-active", filterButton === button);
  });
}

function openLightbox(index) {
  activeIndex = index;
  updateLightbox();
  lightbox.showModal();
}

function updateLightbox() {
  const work = visibleWorks[activeIndex];
  lightboxImage.src = work.src;
  lightboxImage.alt = work.caption;
  lightboxTitle.textContent = work.title;
  lightboxCaption.textContent = `${work.category} - ${work.caption}`;
}

function moveLightbox(direction) {
  activeIndex = (activeIndex + direction + visibleWorks.length) % visibleWorks.length;
  updateLightbox();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button);
    renderGallery(button.dataset.filter);
  });
});

closeButton.addEventListener("click", () => lightbox.close());
prevButton.addEventListener("click", () => moveLightbox(-1));
nextButton.addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    moveLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    moveLightbox(1);
  }
});

function observeRevealItems() {
  const items = document.querySelectorAll(".gallery-item:not(.is-observed)");
  items.forEach((item) => item.classList.add("is-observed"));
  revealObserver(items);
}

function revealObserver(elements) {
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

function updateScrollLight() {
  const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(window.scrollY / max, 1).toFixed(4);
  document.documentElement.style.setProperty("--scroll", progress);
}

revealObserver(document.querySelectorAll(".reveal"));
window.addEventListener("scroll", updateScrollLight, { passive: true });
window.addEventListener("resize", updateScrollLight);
updateScrollLight();
renderGallery();
