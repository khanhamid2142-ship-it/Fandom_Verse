const hero = document.getElementById("hero");
const mainCard = document.querySelector(".main-card");
const leftCard = document.querySelector(".left-card");
const rightCard = document.querySelector(".right-card");
const ambientBg = document.getElementById("ambientBg");
const swipeHint = document.getElementById("swipeHint");
const titleEl = document.getElementById("title");
const metaEl = document.getElementById("meta");
const genreEl = document.getElementById("genre");
const ratingEl = document.getElementById("rating");
const descriptionEl = document.getElementById("description");
const counterEl = document.getElementById("counter");
const dots = document.getElementById("dots");
const overlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const modalImage = document.getElementById("modalAnimeImage");
const modalTitle = document.getElementById("playModalLabel");
const modalDescription = document.getElementById("modalAnimeDescription");
const modalMeta = document.getElementById("modalAnimeMeta");
const totalEl = document.getElementById("total");
const rightLabel = document.getElementById("rightLabel");
const viewLinks = document.querySelectorAll(".nav-links a[data-view]");
const appEl = document.querySelector(".app");
const listHead = document.getElementById("listHead");
const listSub = document.getElementById("listSub");
const listGrid = document.getElementById("listGrid");
const listFilters = document.getElementById("listFilters");
const listCount = document.getElementById("listCount");
const myListScroll = document.querySelector(".mylist-scroll");
const charactersView = document.getElementById("characters");
const characterGrid = document.getElementById("characterGrid");
const characterFilters = document.getElementById("characterFilters");
const voteNote = document.querySelector(".vote-note span");
const characterDetail = document.getElementById("characterDetail");
const characterDetailArt = document.getElementById("characterDetailArt");
const characterDetailBody = document.getElementById("characterDetailBody");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const EASE = "cubic-bezier(.22,.8,.2,1)";
function animateIn(el, frames, options) {
  if (!reduceMotion) el.animate(frames, { easing: EASE, ...options });
}

const readLibrary = selector => [...document.querySelectorAll(`${selector} .anime-source`)].map(source => ({
  title: source.querySelector("h2").innerHTML,
  plain: source.querySelector("strong").textContent,
  meta: source.querySelector(".anime-meta").textContent,
  genre: source.querySelector(".anime-genre").textContent,
  rating: source.querySelector(".anime-rating").textContent,
  description: source.querySelector("p").textContent,
  image: source.querySelector("img").src,
  alt: source.querySelector("img").alt
}));
const collections = {
  new: readLibrary("#animeLibrary"),
  movies: readLibrary("#movieLibrary"),
  gaming: readLibrary("#gamingLibrary"),
  manga: readLibrary("#mangaLibrary")
};
const animeArtworkOverrides = {
  "Attack on Titan": "images/pics/Aot.jfif?v=2",
  "Dragon Ball Z": "images/pics/dragon%20ball%20z.jpg?v=3"
};
collections.new.forEach(item => {
  if (animeArtworkOverrides[item.plain]) item.image = new URL(animeArtworkOverrides[item.plain], document.baseURI).href;
});
const rightLabels = { new: "ANIME", movies: "MOVIE", gaming: "GAMING", manga: "MANGA" };
const playLabels = { new: 'WATCH NOW', movies: 'WATCH NOW', gaming: 'PLAY NOW', manga: 'READ NOW' };
const searchTags = { new: "Anime", movies: "Movie", gaming: "Game", manga: "Manga" };

const characters = [
  { id: "goku", name: "Son Goku", franchise: "Dragon Ball Z", key: "new", index: 4, origin: "Born Kakarot on Planet Vegeta, he was sent to Earth as an infant and raised by Grandpa Gohan.", story: "A cheerful martial artist discovers his Saiyan heritage and repeatedly steps forward to protect Earth and the people he loves.", fights: "His turning points include the Saiyan battle with Vegeta, the showdown with Frieza on Namek, and the final clash with Kid Buu.", abilities: "Saiyan strength, ki control, the Kamehameha, Kaiō-ken, and Super Saiyan transformations." },
  { id: "tanjiro", name: "Tanjiro Kamado", franchise: "Demon Slayer", key: "new", index: 0, origin: "A kindhearted charcoal seller from a mountain family whose life is shattered by a demon attack.", story: "Tanjiro joins the Demon Slayer Corps and searches for a way to restore his sister Nezuko while confronting the demons responsible.", fights: "His battles at Natagumo Mountain and the Mugen Train show his persistence, compassion, and growth as a swordsman.", abilities: "Water Breathing, Hinokami Kagura, a keen sense of smell, and disciplined swordsmanship." },
  { id: "yuji", name: "Yuji Itadori", franchise: "Jujutsu Kaisen", key: "new", index: 1, origin: "A high school athlete with unusual physical strength who becomes the vessel of the cursed spirit Ryomen Sukuna.", story: "Yuji enters Tokyo Jujutsu High to fight curses and give people a proper death, carrying the danger of Sukuna within him.", fights: "His clashes with Mahito test his resolve, while the Shibuya Incident marks a devastating turning point in his life.", abilities: "Exceptional hand-to-hand combat, cursed energy reinforcement, and the divergent fist." },
  { id: "eren", name: "Eren Yeager", franchise: "Attack on Titan", key: "new", index: 2, origin: "Raised inside Wall Maria, Eren loses his home during the fall of Shiganshina and joins the Survey Corps.", story: "His pursuit of freedom begins as a fight for humanity's survival and grows into a conflict about history, inherited hatred, and choice.", fights: "The Female Titan pursuit, the return to Shiganshina, and the battle for Liberio define major shifts in his character.", abilities: "Titan shifting, elite combat training, and the difficult power to influence how Titans connect across time." },
  { id: "jinwoo", name: "Sung Jinwoo", franchise: "Solo Leveling", key: "new", index: 3, origin: "Known as humanity's weakest hunter, Jinwoo survives a deadly double dungeon and receives a mysterious system.", story: "He grows from a low-ranked hunter into a force capable of protecting his family and confronting the threats emerging from gates.", fights: "The job-change trial, the battle with the Ant King, and the Jeju Island raid chart his rise in power.", abilities: "The System's level-ups, stealth and combat skills, and the ability to command a growing shadow army." },
  { id: "naruto", name: "Naruto Uzumaki", franchise: "Naruto Shippuden", key: "new", index: 5, origin: "An orphan from the Hidden Leaf Village who grows up carrying the Nine-Tailed Fox sealed inside him.", story: "Rejected by many villagers, Naruto pursues recognition and his dream of becoming Hokage while building bonds across generations.", fights: "His confrontations with Pain and the final battle with Sasuke stand among the series' defining moments.", abilities: "Shadow clones, Rasengan, Sage Mode, and a deepening partnership with Kurama." },
  { id: "bruce", name: "Bruce Wayne", franchise: "The Dark Knight", key: "movies", index: 0, origin: "After witnessing his parents' murder in Gotham, Bruce devotes himself to understanding crime and fear.", story: "He returns to Gotham and becomes Batman, trying to protect the city without letting its violence define him.", fights: "His struggle against the Joker and the choice forced by Harvey Dent challenge both his limits and his faith in Gotham.", abilities: "Detective work, years of martial arts training, stealth, and technology funded by Wayne Enterprises." },
  { id: "cobb", name: "Dom Cobb", franchise: "Inception", key: "movies", index: 1, origin: "A skilled extractor whose work inside dreams has separated him from his children and left him unable to return home.", story: "Cobb accepts a near-impossible inception job, assembling a team to plant an idea while facing memories of his wife Mal.", fights: "The snow fortress operation and the shifting city dream sequence put his plan and grip on reality under pressure.", abilities: "Dream architecture, extraction strategy, lucid awareness, and careful team coordination." },
  { id: "cooper", name: "Joseph Cooper", franchise: "Interstellar", key: "movies", index: 2, origin: "A former NASA test pilot and engineer living as a farmer with his children in a world facing crop failure.", story: "Cooper leaves Earth on a mission through a wormhole to search for a home for humanity, hoping to return to his daughter Murph.", fights: "The expedition's near-disastrous docking maneuver and Cooper's choice at Gargantua are central turning points.", abilities: "Piloting, engineering, improvisation, and calm decision-making under extreme pressure." },
  { id: "michael", name: "Michael Corleone", franchise: "The Godfather", key: "movies", index: 3, origin: "The youngest son of the Corleone family, Michael begins as a decorated Marine who wants a life apart from the family business.", story: "After violence reaches his family, he becomes increasingly involved in its criminal empire and eventually assumes control.", fights: "The restaurant assassination and the simultaneous baptism and execution sequence mark his transformation.", abilities: "Strategic patience, political judgment, and a talent for anticipating rivals." },
  { id: "maximus", name: "Maximus Decimus Meridius", franchise: "Gladiator", key: "movies", index: 4, origin: "A respected Roman general and farmer whose loyalty to Emperor Marcus Aurelius puts him in the path of Commodus.", story: "Sold into slavery and forced into the arena, Maximus fights to survive and seek justice for his family and Rome.", fights: "His first arena battle at Zucchabar and the Colosseum showdown with Commodus define his public legend.", abilities: "Military command, swordsmanship, endurance, and the ability to earn the trust of fellow fighters." },
  { id: "neo", name: "Neo", franchise: "The Matrix", key: "movies", index: 5, origin: "Thomas Anderson is a programmer and hacker who suspects that the world around him is not real.", story: "After joining Morpheus and Trinity, he learns humanity is trapped in a machine-made simulation and becomes a key figure in its resistance.", fights: "The rescue of Morpheus and Neo's final confrontation with Agent Smith reveal his growing power and purpose.", abilities: "Exceptional martial arts inside the Matrix, heightened perception, and the ability to bend its rules." },
  { id: "v", name: "V", franchise: "Cyberpunk 2077", key: "gaming", index: 0, origin: "A mercenary in Night City whose background depends on the player's chosen path: Nomad, Streetkid, or Corpo.", story: "A heist gone wrong leaves V sharing their mind with the engram of Johnny Silverhand, starting a race to survive and define their identity.", fights: "The Arasaka heist and the climactic choice of how to approach the corporation shape V's possible endings.", abilities: "Player-built cyberware, weapon skills, hacking, and a flexible approach to combat." },
  { id: "tarnished", name: "The Tarnished", franchise: "Elden Ring", key: "gaming", index: 1, origin: "One of the Tarnished, called back to the Lands Between after the Shattering leaves the Elden Ring broken.", story: "The player character explores the realm, gathers Great Runes, and chooses what order might follow the demigods' age.", fights: "Encounters with Starscourge Radahn, Morgott, and Malenia are notable tests on the road to the Erdtree.", abilities: "A customizable mix of weapons, sorceries, incantations, spirit summons, and collected skills." },
  { id: "geralt", name: "Geralt of Rivia", franchise: "The Witcher 3", key: "gaming", index: 2, origin: "A witcher mutated and trained from childhood to hunt monsters for coin across the Continent.", story: "Geralt searches for Ciri while navigating war, political bargains, and the Wild Hunt's pursuit of her.", fights: "The hunt for the Griffin, the battle at Kaer Morhen, and the final confrontation with Eredin punctuate his journey.", abilities: "Two swords, witcher Signs, alchemy, tracking, and extensive knowledge of monsters." },
  { id: "michael-de-santa", name: "Michael De Santa", franchise: "Grand Theft Auto V", key: "gaming", index: 3, origin: "A retired bank robber living under witness protection in Los Santos with a family and a strained new identity.", story: "A return to crime draws Michael into a volatile partnership with Franklin and Trevor as old secrets catch up with him.", fights: "The jewelry store heist and the Union Depository operation are major set pieces in his criminal story.", abilities: "Experienced planning, marksmanship, and a special focus ability that slows time during gunfights." },
  { id: "kratos", name: "Kratos", franchise: "God of War Ragnarök", key: "gaming", index: 4, origin: "A Spartan warrior shaped by tragedy who left Greece and built a new life in the Norse realms with his son Atreus.", story: "Kratos tries to guide Atreus while confronting the prophecy and choices surrounding the approaching Ragnarök.", fights: "The opening fight with Thor and the later rematch with him are major tests of Kratos' restraint and strength.", abilities: "The Leviathan Axe, Blades of Chaos, Spartan Rage, and decades of battlefield experience." },
  { id: "arthur-morgan", name: "Arthur Morgan", franchise: "Red Dead Redemption 2", key: "gaming", index: 5, origin: "An orphan taken in by Dutch van der Linde who grows into one of the gang's most capable enforcers.", story: "As the gang's outlaw life unravels, Arthur questions his loyalty and considers what kind of legacy he can leave.", fights: "The Saint Denis bank robbery and Arthur's final ride are defining moments in his arc.", abilities: "Tracking, hunting, horsemanship, survival skills, and expert gunplay." },
  { id: "luffy", name: "Monkey D. Luffy", franchise: "One Piece", key: "manga", index: 0, origin: "Raised in Foosha Village, Luffy was inspired by Red-Haired Shanks, who entrusted him with his treasured straw hat.", story: "He sets out to become King of the Pirates, gathering the Straw Hat crew and pursuing the One Piece across the Grand Line.", fights: "His battles with Crocodile, Rob Lucci, and Kaido mark major steps in his growth as a captain.", abilities: "A rubber-like body, inventive Gear transformations, Haki, and unwavering trust in his crew." },
  { id: "guts", name: "Guts", franchise: "Berserk", key: "manga", index: 1, origin: "Born on a battlefield and raised among mercenaries, Guts becomes a formidable swordsman before joining the Band of the Hawk.", story: "After the Eclipse destroys the life he knew, he travels as the Black Swordsman while protecting Casca and seeking a way forward.", fights: "The hundred-man battle and his clashes with supernatural apostles showcase both his endurance and the cost of revenge.", abilities: "Mastery of the enormous Dragonslayer, the Berserker Armor, and extraordinary resolve." },
  { id: "musashi", name: "Miyamoto Musashi", franchise: "Vagabond", key: "manga", index: 2, origin: "Born Shinmen Takezō in a rural village, he survives the Battle of Sekigahara and begins life as a wandering swordsman.", story: "His search for strength gradually becomes a deeper search for purpose, shaped by encounters with rivals and ordinary people.", fights: "His duels with Inshun at Hōzōin Temple and the Yoshioka school are major stages in that journey.", abilities: "Two-sword technique, sharp observation, adaptability, and years of relentless training." },
  { id: "light", name: "Light Yagami", franchise: "Death Note", key: "manga", index: 3, origin: "A highly gifted student who discovers a supernatural notebook dropped into the human world by the shinigami Ryuk.", story: "Light uses the Death Note to kill criminals and attempts to create a new world, drawing the attention of detective L.", fights: "The cat-and-mouse contest with L and the later confrontation with Near form the story's central battles of intellect.", abilities: "The Death Note, careful deception, planning, and an exceptional ability to manipulate information." },
  { id: "tenma", name: "Dr. Kenzo Tenma", franchise: "Monster", key: "manga", index: 4, origin: "A Japanese neurosurgeon working in Germany who chooses to save young Johan Liebert instead of a politically important patient.", story: "When Johan becomes linked to a series of murders, Tenma leaves his career behind to find him and confront the consequences of his choice.", fights: "Tenma's pursuit across Germany and the final return to Ruhenheim bring the moral conflict to a head.", abilities: "Surgical expertise, compassion, composure, and the ability to navigate danger without becoming a killer." },
  { id: "denji", name: "Denji", franchise: "Chainsaw Man", key: "manga", index: 5, origin: "A debt-ridden teenager who hunts devils with Pochita to repay the yakuza after inheriting his father's debt.", story: "After being betrayed and revived through his bond with Pochita, Denji joins Public Safety and tries to build an ordinary life.", fights: "His first clash with the Bat Devil and the escalating battles against powerful devils shape his new life as a hunter.", abilities: "Chainsaw Devil hybrid form, rapid regeneration when given blood, and a stubborn instinct to keep going." }
];

const characterImages = {
  goku: "images/characters/GOKU.jpg",
  tanjiro: "images/characters/TANJIRO.jpg",
  yuji: "images/characters/Itadori Yuji.jpg",
  eren: "images/characters/EREN YEAGER.jpg",
  jinwoo: "images/characters/Solo Leveling.jpg",
  naruto: "images/characters/NARUTO UZUMAKI.jpg",
  bruce: "images/characters/BRUCE WAYNE.jpg",
  cobb: "images/characters/DOM COBB.jpg",
  cooper: "images/characters/Joseph Copper.jpg",
  michael: "images/characters/michael corleone.jpg",
  maximus: "images/characters/MAXIMUS DCIMUS.jpg",
  neo: "images/characters/NEO.jpg",
  v: "images/characters/V.jpg",
  tarnished: "images/characters/THE TARNISHED.jpg",
  geralt: "images/characters/GERALT OF RIVIA.jpg",
  "michael-de-santa": "images/characters/MICHAEL.jpg",
  kratos: "images/characters/KRATOS.jpg",
  "arthur-morgan": "images/characters/ARTHUR MORGAN.jpg",
  luffy: "images/characters/Luffy JoyBoy.jpg",
  guts: "images/characters/Guts.jpg",
  musashi: "images/characters/MIYAMOTO MUSHASHI .jpg",
  light: "images/characters/Light Yagami.jpg",
  tenma: "images/characters/Monster Wallpaper.jpg",
  denji: "images/characters/DENJI.jpg"
};

function getCharacterImage(character) {
  return characterImages[character.id] || collections[character.key][character.index].image;
}

let characterFilter = "all";
let characterVoteData = { counts: {}, voted: [] };
try {
  const storedVotes = JSON.parse(localStorage.getItem("animeflixCharacterVotes") || "{}");
  characterVoteData.counts = storedVotes.counts && typeof storedVotes.counts === "object" ? storedVotes.counts : {};
  characterVoteData.voted = Array.isArray(storedVotes.voted) ? storedVotes.voted : [];
} catch {}

const requestedView = new URLSearchParams(window.location.search).get("view");
const requestedMyList = requestedView === "mylist";
let view = ["new", "movies", "gaming", "manga"].includes(requestedView) ? requestedView : "new";
let sources = collections[view];
appEl.dataset.view = view;
viewLinks.forEach(link => link.classList.toggle("active", link.dataset.view === view));
let switchTimer = 0;
let current = 0;
let saved = [];
try {
  saved = JSON.parse(localStorage.getItem("animeflixSaved") || "[]");
  if (!Array.isArray(saved)) saved = [];
} catch {
  saved = [];
}

let startX = 0;
let startY = 0;
let dragging = false;

const animeLogoFiles = {
  'Demon Slayer': 'demon slayer.png',
  'Jujutsu Kaisen': 'jujutsu kaisen.png',
  'Attack on Titan': 'attack on titan.png',
  'Solo Leveling': 'solo leveling.png',
  'Dragon Ball Z': 'dragon ball z.png',
  'Naruto Shippuden': 'naruto shippuden.png'
};
const movieLogoFiles = {
  'The Dark Knight': 'the dark knight rises.png',
  'Inception': 'inception.png',
  'Interstellar': 'interstellar.png',
  'The Godfather': 'the god father.png',
  'Gladiator': 'gladiator.png',
  'The Matrix': 'the matrix.png'
};
const gameLogoFiles = {
  'cyberpunk 2077': 'cyberpunk 2077.png',
  'elden ring': 'elden ring.png',
  'witcher 3': 'witcher 3.png',
  'grand theft auto v': 'gta v.png',
  'god of war': 'god ragnarok.png',
  'red dead redemption 2': 'red dead redemption 2.png'
};
const mangaLogoFiles = {
  'One Piece': 'one pice.png',
  'Berserk': 'berserk.png',
  'Vagabond': 'vagabond.png',
  'Death Note': 'death note.png',
  'Monster': 'monster.png',
  'Chainsaw Man': 'chainsaw man.png'
};
function setImage(element, url) {
  element.style.backgroundImage = `url("${url}")`;
}

function setCardAnimeLogo(card, item) {
  const isAnime = view === 'new';
  const isMovie = view === 'movies';
  const isGame = view === 'gaming';
  const isManga = view === 'manga';
  const gameMatch = Object.keys(gameLogoFiles).find(name => item.plain.toLowerCase().includes(name));
  const filename = isAnime ? animeLogoFiles[item.plain]
    : isMovie ? movieLogoFiles[item.plain]
      : isManga ? mangaLogoFiles[item.plain]
        : isGame && gameMatch ? gameLogoFiles[gameMatch] : null;
  let logo = card.querySelector('.anime-card-logo');
  if (!filename) {
    logo?.remove();
    card.classList.remove('has-title-logo');
    return;
  }
  if (!logo) {
    logo = document.createElement('img');
    logo.className = 'anime-card-logo';
    card.append(logo);
  }
  const logoFolder = isAnime ? 'anime' : isMovie ? 'movies' : isManga ? 'manga' : 'games';
  logo.src = `logo/${logoFolder}/${filename}`;
  logo.alt = `${item.plain} logo`;
  card.classList.add('has-title-logo');
}

function renderSideCard(card, item) {
  setCardAnimeLogo(card, item);
  setImage(card.querySelector(".card-image"), item.image);
  card.querySelector("h2").innerHTML = item.title;
  card.querySelector(".side-rating span").textContent = item.rating;
  card.querySelector("p").textContent = item.description;
}

function render() {
  const item = sources[current];
  const previous = sources[(current - 1 + sources.length) % sources.length];
  const next = sources[(current + 1) % sources.length];

  setImage(mainCard.querySelector(".card-image"), item.image);
  setCardAnimeLogo(mainCard, item);
  ambientBg.style.backgroundImage = `url("${item.image}")`;
  delete ambientBg.dataset.characterArt;

  titleEl.innerHTML = item.title;
  metaEl.textContent = item.meta;
  genreEl.textContent = item.genre;
  ratingEl.textContent = item.rating;
  descriptionEl.textContent = item.description;
  counterEl.textContent = String(current + 1).padStart(2, "0");

  renderSideCard(leftCard, previous);
  renderSideCard(rightCard, next);

  dots.querySelectorAll("button").forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });

  updateSaveIcon();

  mainCard.classList.remove("entering");
  leftCard.classList.remove("entering");
  rightCard.classList.remove("entering");
  ambientBg.classList.remove("changing");
  requestAnimationFrame(() => {
    mainCard.classList.add("entering");
    leftCard.classList.add("entering");
    rightCard.classList.add("entering");
    ambientBg.classList.add("changing");
  });
}

function goTo(index) {
  current = (index + sources.length) % sources.length;
  render();
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

function buildDots() {
  dots.textContent = "";
  sources.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dots.appendChild(dot);
  });
}
function setActiveLink(key) {
  viewLinks.forEach(link => link.classList.toggle("active", link.dataset.view === key));
  appEl.dataset.view = key;
}

function openList() {
  if (view === "mylist") return;
  clearTimeout(switchTimer);
  switchTimer = 0;
  view = "mylist";
  closeCharacterDetails();
  setActiveLink(view);
  appEl.classList.remove("characters-open");
  charactersView.setAttribute("aria-hidden", "true");
  myListScroll.setAttribute("aria-hidden", "false");
  hoverArt = "";
  document.body.classList.add("mylist-view");
  hero.classList.add("switching");   
  appEl.classList.add("list-open");
  renderList();
  animateIn(listHead, [
    { opacity: 0, transform: "translateY(14px)", filter: "blur(8px)" },
    { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
  ], { duration: 750, delay: 60, fill: "backwards" });
}

function openCharacters() {
  if (view === "characters" && appEl.classList.contains("characters-open")) return;
  clearTimeout(switchTimer);
  switchTimer = 0;
  view = "characters";
  document.body.classList.remove("mylist-view");
  setActiveLink(view);
  appEl.classList.remove("list-open");
  appEl.classList.add("characters-open");
  charactersView.setAttribute("aria-hidden", "false");
  myListScroll.setAttribute("aria-hidden", "true");
  charactersView.querySelector(".characters-scroll").scrollTop = 0;
  renderCharacters();
  if (!reduceMotion) {
    document.getElementById("charactersHead").animate([
      { opacity: 0, transform: "translateY(16px)", filter: "blur(8px)" },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
    ], { duration: 650, easing: EASE });
  }
}

function setView(key, index = 0) {
  if (key !== "new") document.querySelector(".fv-intro")?.remove();
  if (key === "mylist") { openList(); return; }
  if (key === "characters") { openCharacters(); return; }
  document.body.classList.remove("mylist-view");
  if (key === view && !switchTimer) { goTo(index); return; }

  const fromList = view === "mylist" || view === "characters";
  view = key;
  setActiveLink(key);
  clearTimeout(switchTimer);
  hero.classList.add("switching");

  const swap = () => {
    switchTimer = 0;
    sources = collections[key];
    current = index;
    totalEl.textContent = String(sources.length).padStart(2, "0");
    rightLabel.textContent = rightLabels[key];
    document.getElementById('playBtn').innerHTML = '<i class="bi bi-play-fill"></i> ' + playLabels[key];
    buildDots();
    render();
    appEl.classList.remove("list-open");
    appEl.classList.remove("characters-open");
    closeCharacterDetails();
    charactersView.setAttribute("aria-hidden", "true");
    myListScroll.setAttribute("aria-hidden", "true");
    hero.classList.remove("switching");
  };

  if (fromList) swap();
  else switchTimer = setTimeout(swap, 320);
}

viewLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    setView(link.dataset.view);
  });
});

buildDots();

document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", prev);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (characterDetail.classList.contains("show")) closeCharacterDetails();
    else overlay.classList.remove("show");
  }
  else if (view === "mylist" || view === "characters" || overlay.classList.contains("show")) return;
  else if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
});

function finishGesture(dx, dy) {
  if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
  if (dx < 0) next();
  else prev();
  swipeHint.classList.add("hidden");
}

hero.addEventListener("touchstart", e => {
  const touch = e.changedTouches[0];
  startX = touch.clientX;
  startY = touch.clientY;
  dragging = true;
}, { passive: true });

hero.addEventListener("touchend", e => {
  if (!dragging) return;
  const touch = e.changedTouches[0];
  finishGesture(touch.clientX - startX, touch.clientY - startY);
  dragging = false;
}, { passive: true });

hero.addEventListener("mousedown", e => {
  if (e.button !== 0) return;
  startX = e.clientX;
  startY = e.clientY;
  dragging = true;
  hero.classList.add("dragging");
});

window.addEventListener("mouseup", e => {
  if (!dragging) return;
  finishGesture(e.clientX - startX, e.clientY - startY);
  dragging = false;
  hero.classList.remove("dragging");
});
const playModalElement = document.getElementById("playModal");
const playModal = new bootstrap.Modal(playModalElement);
const modalActionLabels = { new: 'START WATCHING', movies: 'START WATCHING', gaming: 'BUY NOW', manga: 'START READING' };
const modalActionButton = playModalElement.querySelector('.modal-watch-btn');
const modalKicker = document.getElementById('modalKicker');
const movieVideo = document.getElementById('modalMovieVideo');
const modalPreview = document.getElementById('modalPreview');
const movieFeedbackIcon = document.getElementById('movieFeedbackIcon');
const mangaReader = document.getElementById('mangaReader');
const mangaBook = document.getElementById('mangaBook');
const mangaReaderTitle = document.getElementById('mangaReaderTitle');
const mangaPageCount = document.getElementById('mangaPageCount');
const mangaReaderDescription = document.getElementById('mangaReaderDescription');
const mangaPageSlugs = {
  'One Piece': 'one-piece',
  'Berserk': 'berserk',
  'Vagabond': 'vagabond',
  'Death Note': 'death-note',
  'Monster': 'monster',
  'Chainsaw Man': 'chainsaw-man'
};
const mangaPageImages = {
  'One Piece': ['manga/one piece/one piece 1.jfif', 'manga/one piece/one piece 2.jpg', 'manga/one piece/one piece 3.jpg', 'manga/one piece/one piece 4.jpg', 'manga/one piece/one piece 5.jpg', 'manga/one piece/one piece 6.jpg'],
  'Berserk': ['manga/Berserk/berserk 1.jfif', 'manga/Berserk/berserk 2.jpg', 'manga/Berserk/berserk 3.jpg', 'manga/Berserk/berserk 4.jpg', 'manga/Berserk/berserk 5.jpg', 'manga/Berserk/berserk 6.jpg'],
  'Vagabond': ['manga/vegabond/vagabond 1.jpg', 'manga/vegabond/vagabond 2.png', 'manga/vegabond/vagabond 3.png', 'manga/vegabond/vagabond 4.png', 'manga/vegabond/vagabond 5.png', 'manga/vegabond/vagabond 6.png'],
  'Death Note': ['manga/Death Note/death note 1.jfif', 'manga/Death Note/death note 2.jpg', 'manga/Death Note/death note 3.jpg', 'manga/Death Note/death note 4.jpg', 'manga/Death Note/death note 5.jpg', 'manga/Death Note/death note 6.jpg'],
  'Monster': ['manga/monster/monster 1.jpg', 'manga/monster/monster 2.jpg', 'manga/monster/monster 3.jpg', 'manga/monster/monster 4.jpg', 'manga/monster/monster 5.jpg', 'manga/monster/monster 6.jpg'],
  'Chainsaw Man': ['manga/chainsaw man/chainsaw man 1.jfif', 'manga/chainsaw man/chainsaw man 2.jpg', 'manga/chainsaw man/chainsaw man 3.jpg', 'manga/chainsaw man/chainsaw man 4.jpg', 'manga/chainsaw man/chainsaw man 5.jpg', 'manga/chainsaw man/chainsaw man 6.jpg']
};
const mangaReadMoreLinks = {
  'One Piece': 'https://www.amazon.com/dp/1569319014',
  'Berserk': 'https://www.amazon.com/dp/1593070209',
  'Vagabond': 'https://www.amazon.com/dp/1421520540',
  'Death Note': 'https://www.amazon.com/dp/1421501686',
  'Monster': 'https://www.amazon.com/dp/142156906X',
  'Chainsaw Man': 'https://www.amazon.com/dp/1974709930'
};
let mangaSpreads = [];
let currentMangaSpread = 0;
let mangaTransitionTimer = 0;
let mangaDragStartX = null;
const animeVideoFiles = {
  'Demon Slayer': 'demon slayer.mp4',
  'Jujutsu Kaisen': 'jujutsu kaisen.mp4',
  'Attack on Titan': 'attack on titan season 4.mp4',
  'Solo Leveling': 'solo leveling.mp4',
  'Dragon Ball Z': 'dragon ball z.mp4',
  'Naruto Shippuden': 'naruto shippuden.mp4'
};
const animeWatchLinks = {
  'Demon Slayer': 'https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba',
  'Jujutsu Kaisen': 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen',
  'Attack on Titan': 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
  'Solo Leveling': 'https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling',
  'Dragon Ball Z': 'https://www.crunchyroll.com/series/G9VHN9PPW/dragon-ball-z',
  'Naruto Shippuden': 'https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden'
};
const movieFiles = {
  'The Dark Knight': 'The Dark Knight.mp4',
  'Inception': 'inception.mp4',
  'Interstellar': 'interstellar.mp4',
  'The Godfather': 'the godfather.mp4',
  'Gladiator': 'gladiator.mp4',
  'The Matrix': 'the matrix.mp4'
};
const movieWatchLinks = {
  'The Dark Knight': 'https://www.netflix.com/pk/title/70079583',
  'Inception': 'https://www.netflix.com/pk/title/70131314',
  'Interstellar': 'https://www.netflix.com/pk/title/70305903',
  'The Godfather': 'https://www.netflix.com/pk/title/60011152',
  'Gladiator': 'https://www.netflix.com/pk/title/60000929',
  'The Matrix': 'https://www.netflix.com/pk/title/20557937'
};
const gameVideoFiles = {
  'cyberpunk 2077': 'cyberpunk 2077.mp4',
  'elden ring': 'elden ring.mp4',
  'witcher 3': 'witcher 3.mp4',
  'grand theft auto v': 'gta V.mp4',
  'god of war': 'god of war ragnarok.mp4',
  'red dead redemption 2': 'rdr 2.mp4'
};
const gameStoreLinks = {
  'cyberpunk 2077': 'https://store.steampowered.com/agecheck/app/1091500/',
  'elden ring': 'https://store.steampowered.com/agecheck/app/1245620/',
  'god of war': 'https://store.steampowered.com/app/2322010/God_of_War_Ragnarok/',
  'grand theft auto v': 'https://store.steampowered.com/agecheck/app/3240220/',
  'witcher 3': 'https://store.steampowered.com/agecheck/app/292030/',
  'red dead redemption 2': 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
};

let lastMovieTap = { time: 0, zone: '' };
let centerTapTimer = 0;
let feedbackTimer = 0;
const movieDialog = document.getElementById('playModalDialog');

function updateMangaReader() {
  mangaSpreads.forEach((spread, index) => {
    const active = index === currentMangaSpread;
    spread.classList.toggle('active', active);
    spread.setAttribute('aria-hidden', String(!active));
  });
  const isCover = currentMangaSpread === 0;
  mangaBook.classList.toggle('is-closed', isCover);
  if (mangaReader.classList.contains('manga-image-only')) {
    mangaPageCount.textContent = '';
    return;
  }
  const isEnd = currentMangaSpread === mangaSpreads.length - 1;
  if (isCover) mangaPageCount.textContent = 'Cover';
  else if (isEnd) mangaPageCount.textContent = 'Read more';
  else if (currentMangaSpread === 3) mangaPageCount.textContent = 'Page 6 of 6';
  else mangaPageCount.textContent = `Pages ${(currentMangaSpread - 1) * 2 + 2}–${currentMangaSpread * 2 + 1} of 6`;
}

function turnMangaPage(direction) {
  const target = currentMangaSpread + direction;
  if (mangaTransitionTimer || target < 0 || target >= mangaSpreads.length) return;
  mangaSpreads[currentMangaSpread].classList.add(direction > 0 ? 'turning-forward' : 'turning-backward');
  mangaBook.classList.add('is-turning');
  mangaTransitionTimer = window.setTimeout(() => {
    mangaSpreads[currentMangaSpread].classList.remove('turning-forward', 'turning-backward');
    mangaBook.classList.remove('is-turning');
    currentMangaSpread = target;
    mangaTransitionTimer = 0;
    updateMangaReader();
  }, 720);
}

function makeMangaLeaf(side, className = '') {
  const leaf = document.createElement('div');
  leaf.className = `manga-leaf manga-${side}-page ${className}`.trim();
  return leaf;
}

function makePaperLeaf(side, kicker, heading, body) {
  const leaf = makeMangaLeaf(side, 'paper-page');
  leaf.innerHTML = `<div class="manga-page-paper-copy"><span class="paper-kicker">${kicker}</span><h3>${heading}</h3><p>${body}</p></div>`;
  return leaf;
}

function makeScanLeaf(item, slug, pageNumber, side) {
  const leaf = makeMangaLeaf(side);
  const image = document.createElement('img');
  image.className = 'manga-page-scan';
  image.src = mangaPageImages[item.plain][pageNumber - 1];
  image.alt = `${item.plain}, preview page ${pageNumber}`;
  image.draggable = false;
  image.onerror = () => {
    leaf.classList.add('paper-page');
    leaf.innerHTML = `<div class="manga-page-paper-copy"><span class="paper-kicker">${item.plain} · Preview</span><h3>${item.plain}</h3><p>${item.description}</p><span class="paper-page-number">Page ${pageNumber}</span></div>`;
  };
  leaf.append(image);
  return leaf;
}

function addMangaSpread(left, right) {
  const spread = document.createElement('div');
  spread.className = 'manga-spread';
  spread.append(left, right);
  mangaBook.append(spread);
  mangaSpreads.push(spread);
}

function buildMangaReader(item) {
  const slug = mangaPageSlugs[item.plain];
  mangaSpreads = [];
  mangaBook.replaceChildren();
  const hasScans = Boolean(mangaPageImages[item.plain]);
  mangaReader.classList.toggle('manga-image-only', hasScans);

  const closedCover = document.createElement('div');
  closedCover.className = 'manga-spread closed-cover-spread';
  const coverButton = document.createElement('button');
  coverButton.type = 'button';
  coverButton.className = 'manga-closed-book';
  coverButton.setAttribute('aria-label', `Open ${item.plain}`);
  const coverImage = document.createElement('img');
  coverImage.src = mangaPageImages[item.plain]?.[0] || `logo/manga/${slug}/1.jpg`;
  coverImage.onerror = () => { coverImage.onerror = null; coverImage.src = item.image; };
  coverImage.alt = `${item.plain} cover`;
  coverImage.draggable = false;
  coverButton.append(coverImage);
  coverButton.addEventListener('click', () => turnMangaPage(1));
  closedCover.append(coverButton);
  mangaBook.append(closedCover);
  mangaSpreads.push(closedCover);

  addMangaSpread(makeScanLeaf(item, slug, 2, 'left'), makeScanLeaf(item, slug, 3, 'right'));
  addMangaSpread(makeScanLeaf(item, slug, 4, 'left'), makeScanLeaf(item, slug, 5, 'right'));
  const readMoreUrl = mangaReadMoreLinks[item.plain];
  const readMoreLeaf = makeMangaLeaf('right', 'paper-page');
  readMoreLeaf.innerHTML = `<div class="manga-page-paper-copy"><span class="paper-kicker">Page 7</span><h3>Want to read more?</h3><p>Continue the story in an official edition.</p><a class="manga-read-more-link" href="${readMoreUrl}" target="_blank" rel="noopener noreferrer">Click here <i class="bi bi-arrow-up-right"></i></a></div>`;
  addMangaSpread(makeScanLeaf(item, slug, 6, 'left'), readMoreLeaf);

  currentMangaSpread = 0;
  mangaReaderTitle.textContent = item.plain;
  mangaReaderDescription.textContent = item.description || '';
  updateMangaReader();
}
mangaBook.addEventListener('pointerdown', event => {
  if (event.target.closest('a')) return;
  mangaDragStartX = event.clientX;
  mangaBook.setPointerCapture(event.pointerId);
});
mangaBook.addEventListener('pointerup', event => {
  if (mangaDragStartX === null) return;
  const distance = event.clientX - mangaDragStartX;
  mangaDragStartX = null;
  if (distance < -70) turnMangaPage(1);
  else if (distance > 70) turnMangaPage(-1);
});
mangaBook.addEventListener('pointercancel', () => { mangaDragStartX = null; });
function showMovieFeedback(playing) {
  movieFeedbackIcon.innerHTML = playing ? '<i class="bi bi-play-fill"></i>' : '<i class="bi bi-pause-fill"></i>';
  movieFeedbackIcon.hidden = false;
  movieFeedbackIcon.classList.remove('is-visible');
  void movieFeedbackIcon.offsetWidth;
  movieFeedbackIcon.classList.add('is-visible');
  clearTimeout(feedbackTimer);
  feedbackTimer = window.setTimeout(() => {
    movieFeedbackIcon.hidden = true;
    movieFeedbackIcon.classList.remove('is-visible');
  }, 3000);
}

function updateMoviePlayState(playing) {
  movieVideo.setAttribute('aria-label', playing ? 'Video playing. Tap the center to pause; double-tap the left or right side to seek.' : 'Video paused. Tap the center to play; double-tap the left or right side to seek.');
  showMovieFeedback(playing);
}

movieVideo.addEventListener('play', () => updateMoviePlayState(true));
movieVideo.addEventListener('pause', () => {
  if (movieVideo.hasAttribute('src')) updateMoviePlayState(false);
});
movieVideo.addEventListener('ended', () => updateMoviePlayState(false));
movieVideo.addEventListener('pointerup', event => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  const bounds = movieVideo.getBoundingClientRect();
  const position = (event.clientX - bounds.left) / bounds.width;
  const zone = position < 0.3 ? 'left' : position > 0.7 ? 'right' : 'center';
  const now = performance.now();
  const isDoubleTap = zone !== 'center' && lastMovieTap.zone === zone && now - lastMovieTap.time < 320;
  if (isDoubleTap) {
    clearTimeout(centerTapTimer);
    movieVideo.currentTime = Math.max(0, Math.min(movieVideo.duration || Infinity, movieVideo.currentTime + (zone === 'left' ? -10 : 10)));
    lastMovieTap = { time: 0, zone: '' };
    return;
  }
  lastMovieTap = { time: now, zone };
  if (zone === 'center') {
    clearTimeout(centerTapTimer);
    centerTapTimer = window.setTimeout(() => {
      if (movieVideo.paused) movieVideo.play().catch(() => {});
      else movieVideo.pause();
    }, 260);
  }
});

playModalElement.addEventListener('hidden.bs.modal', () => {
  clearTimeout(feedbackTimer);
  movieFeedbackIcon.hidden = true;
  movieFeedbackIcon.classList.remove('is-visible');
  movieVideo.pause();
  movieVideo.removeAttribute('src');
  movieVideo.load();
  modalPreview.classList.remove('is-playing-movie');
  movieDialog.classList.remove('movie-modal-dialog');
  movieDialog.classList.remove('manga-modal-dialog');
  mangaReader.hidden = true;
  mangaBook.classList.remove('is-turning');
  clearTimeout(mangaTransitionTimer);
  mangaTransitionTimer = 0;
  mangaDragStartX = null;
});
document.getElementById("playBtn").addEventListener("click", () => {
  const item = sources[current];
  modalTitle.textContent = item.plain;
  const isManga = view === 'manga';
  modalKicker.textContent = isManga ? 'NOW READING' : 'NOW PLAYING';
  mangaReader.hidden = !isManga;
  modalPreview.hidden = isManga;
  modalDescription.hidden = isManga;
  modalMeta.hidden = isManga;
  modalActionButton.hidden = isManga;
  if (isManga) buildMangaReader(item);
  modalImage.src = item.image;
  const gameMatch = Object.keys(gameVideoFiles).find(name => item.plain.toLowerCase().includes(name));
  const videoFile = view === 'new' ? animeVideoFiles[item.plain]
    : view === 'movies' ? movieFiles[item.plain]
      : view === 'gaming' && gameMatch ? gameVideoFiles[gameMatch] : null;
  const hasVideo = Boolean(videoFile);
  modalPreview.classList.toggle('is-playing-movie', hasVideo);
  movieDialog.classList.toggle('movie-modal-dialog', hasVideo);
  movieDialog.classList.toggle('manga-modal-dialog', isManga);
  if (hasVideo) {
    const videoFolder = view === 'new' ? 'anime' : view === 'movies' ? 'movies' : 'games';
    movieVideo.src = `videos/${videoFolder}/${encodeURIComponent(videoFile).replace(/%20/g, ' ')}`;
    movieVideo.load();
    movieVideo.play().catch(() => {});
  } else {
    movieVideo.pause();
    movieVideo.removeAttribute('src');
    movieVideo.load();
  }
  modalImage.alt = item.alt;
  modalDescription.textContent = item.description;
  modalActionButton.innerHTML = '<i class="bi bi-play-fill"></i> ' + modalActionLabels[view];
  modalMeta.innerHTML = `
    <span>${item.meta}</span><span>·</span><span>${item.genre}</span>
    <span><i class="bi bi-star-fill"></i> ${item.rating}</span>`;
  playModal.show();
});

modalActionButton.addEventListener('click', () => {
  if (view === 'new') {
    const watchUrl = animeWatchLinks[sources[current].plain];
    if (watchUrl) window.open(watchUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  if (view === 'movies') {
    const watchUrl = movieWatchLinks[sources[current].plain];
    if (watchUrl) window.open(watchUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  if (view !== 'gaming') return;
  const selectedGame = sources[current].plain.toLowerCase();
  const storeKey = Object.keys(gameStoreLinks).find(title => selectedGame.includes(title));
  if (storeKey) window.open(gameStoreLinks[storeKey], '_blank', 'noopener,noreferrer');
});
function updateSaveIcon() {
  document.getElementById("addBtn").innerHTML = saved.includes(sources[current].plain)
    ? '<i class="bi bi-check-lg"></i>'
    : '<i class="bi bi-plus-lg"></i>';
}

document.getElementById("addBtn").addEventListener("click", () => {
  const title = sources[current].plain;
  const adding = !saved.includes(title);
  if (adding) saved.push(title);
  else saved = saved.filter(item => item !== title);
  persist();
  updateSaveIcon();
  updateListCount(true);
});
document.getElementById("searchBtn").addEventListener("click", () => {
  overlay.classList.add("show");
  searchInput.focus();
});

document.getElementById("closeSearch").addEventListener("click", () => {
  overlay.classList.remove("show");
});

searchInput.addEventListener("input", e => {
  const query = e.target.value.trim().toLowerCase();
  if (!query) {
    results.textContent = "";
    return;
  }
const matches = Object.entries(collections).flatMap(([key, list]) =>
    list.map((item, index) => ({ ...item, key, index }))
      .filter(item => item.plain.toLowerCase().includes(query))
  );
  if (!matches.length) {
    results.textContent = "Nothing found.";
    return;
  }

  results.innerHTML = matches.map(item =>
    `<div class="search-result" role="button" tabindex="0" data-view="${item.key}" data-index="${item.index}">
       ${item.plain} <span class="result-tag">${searchTags[item.key]}</span>
     </div>`).join("");
});

function openResult(el) {
  const row = el.closest(".search-result");
  if (!row) return;
  overlay.classList.remove("show");
  searchInput.value = "";
  results.textContent = "";
  setView(row.dataset.view, Number(row.dataset.index));
}

results.addEventListener("click", e => openResult(e.target));
results.addEventListener("keydown", e => {
  if (e.key === "Enter") openResult(e.target);
});
const allItems = Object.entries(collections).flatMap(([key, list]) =>
  list.map((item, index) => ({ ...item, key, index }))
);
let listFilter = "all";
let hoverArt = "";

function persist() {
  try { localStorage.setItem("animeflixSaved", JSON.stringify(saved)); } catch {}
}

function updateListCount(bump = false) {
  listCount.textContent = saved.length || "";
  if (bump && saved.length) {
    animateIn(listCount, [{ transform: "scale(1)" }, { transform: "scale(1.45)" }, { transform: "scale(1)" }], { duration: 450 });
  }
}
function savedItems() {
  return [...saved].reverse()
    .map(title => allItems.find(item => item.plain === title))
    .filter(Boolean);
}

function renderListMeta() {
  const items = savedItems();
  const counts = { all: items.length, movies: 0, new: 0, gaming: 0, manga: 0 };
  items.forEach(item => counts[item.key]++);
  listSub.textContent = items.length
    ? `${items.length} saved · newest first`
    : "Nothing saved yet";
  listFilters.hidden = !items.length;
  listFilters.querySelectorAll("button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === listFilter);
    btn.querySelector("b").textContent = counts[btn.dataset.filter];
  });
}

function emptyMarkup() {
  const what = listFilter === "movies" ? "movies" : listFilter === "gaming" ? "games" : listFilter === "manga" ? "manga" : listFilter === "new" ? "anime" : "titles";
  return `<div class="list-empty">
    <div class="list-empty-icon"><i class="bi bi-bookmark-heart"></i></div>
    <h3>No ${what} saved yet</h3>
    <p>Press + on any title and it will show up here.</p>
    <div class="list-empty-actions">
      <button type="button" class="list-cta" data-view="movies">Browse movies</button>
      <button type="button" class="list-cta ghost" data-view="gaming">Browse games</button>
      <button type="button" class="list-cta ghost" data-view="manga">Browse manga</button>
      <button type="button" class="list-cta ghost" data-view="new">Browse anime</button>
    </div>
  </div>`;
}

function renderList() {
  const items = savedItems();
  const visible = listFilter === "all" ? items : items.filter(item => item.key === listFilter);
  renderListMeta();
  myListScroll.scrollTop = 0;

  if (!visible.length) {
    listGrid.innerHTML = emptyMarkup();
    return;
  }

  listGrid.innerHTML = visible.map((item, i) => `
    <article class="list-card" style="--i:${i}" tabindex="0"
             data-title="${item.plain}" data-view="${item.key}" data-index="${item.index}" data-image="${item.image}"
             aria-label="Open ${item.plain}">
      <div class="list-art" style="background-image:url('${item.image}')"></div>
      <span class="list-tag">${searchTags[item.key]}</span>
      <button type="button" class="list-remove" aria-label="Remove ${item.plain} from My List">
        <i class="bi bi-x-lg"></i>
      </button>
      <div class="list-info">
        <h3>${item.plain}</h3>
        <div class="list-meta">
          <span>${item.genre.split("/")[0]}</span>
          <span><i class="bi bi-star-fill"></i> ${item.rating}</span>
        </div>
      </div>
  </article>`).join("");
}

function renderCharacters() {
  const totalVotes = characters.reduce((total, character) => total + (Number(characterVoteData.counts[character.id]) || 0), 0);
  const categoryNames = { new: "Anime", movies: "Movie", gaming: "Gaming", manga: "Manga" };
  const visible = characters
    .filter(character => characterFilter === "all" || character.key === characterFilter)
    .map((character, order) => ({ ...character, order, votes: Number(characterVoteData.counts[character.id]) || 0 }))
    .sort((a, b) => b.votes - a.votes || a.order - b.order);

  voteNote.textContent = totalVotes
    ? `${totalVotes} vote${totalVotes === 1 ? "" : "s"} saved on this device · percentages are local.`
    : "Percentages use votes saved on this device.";

  characterGrid.innerHTML = visible.map((character, i) => {
    const characterImage = getCharacterImage(character);
    const percent = totalVotes ? Math.round(character.votes / totalVotes * 100) : 0;
    const voted = characterVoteData.voted.includes(character.id);
    return `<article class="character-card" tabindex="0" role="group" aria-label="${character.name}, ${character.franchise}; open character profile" data-character-id="${character.id}" style="--i:${i}">
      <img class="character-art" src="${characterImage}" alt="" aria-hidden="true">
      ${voted ? `<button class="character-unvote" type="button" data-unvote-id="${character.id}" aria-label="Remove vote for ${character.name}"><i class="bi bi-x-lg"></i></button>` : ""}
      <div class="character-card-content">
        <span class="character-origin">${categoryNames[character.key]}</span>
        <div class="character-name-block">
          <h2>${character.name}</h2>
          <p>${character.franchise}</p>
        </div>
        <div class="character-poll" aria-label="${percent}% of local votes">
          <div class="character-poll-heading"><span>${character.votes} vote${character.votes === 1 ? "" : "s"}</span><b>${percent}%</b></div>
          <div class="character-poll-track"><span style="--vote-width:${percent}%"></span></div>
        </div>
        <button class="character-vote${voted ? " voted" : ""}" type="button" data-vote-id="${character.id}" aria-pressed="${voted}" ${voted ? "disabled" : ""}>
          <i class="bi ${voted ? "bi-check2" : "bi-heart"}"></i>${voted ? "VOTED" : "VOTE FOR CHARACTER"}
        </button>
      </div>
    </article>`;
  }).join("");
}

function renderCharacterDetail(id) {
  const character = characters.find(item => item.id === id);
  if (!character) return;
  const characterImage = getCharacterImage(character);
  const count = Number(characterVoteData.counts[id]) || 0;
  const totalVotes = characters.reduce((total, item) => total + (Number(characterVoteData.counts[item.id]) || 0), 0);
  const percent = totalVotes ? Math.round(count / totalVotes * 100) : 0;
  const voted = characterVoteData.voted.includes(id);
  const categoryNames = { new: "Anime", movies: "Movies", gaming: "Gaming", manga: "Manga" };

  characterDetailArt.style.backgroundImage = `linear-gradient(180deg, rgba(8,14,19,.04), rgba(8,14,19,.72)), url("${characterImage}")`;
  characterDetailBody.innerHTML = `
    <div class="character-detail-kicker"><span>${categoryNames[character.key]}</span><span>${character.franchise}</span></div>
    <h2 id="characterDetailTitle">${character.name}</h2>
    <div class="character-detail-votes"><i class="bi bi-bar-chart-line"></i><b>${percent}%</b><span>${count} local vote${count === 1 ? "" : "s"}</span></div>
    <div class="character-facts">
      <section><h3>ORIGIN</h3><p>${character.origin}</p></section>
      <section><h3>STORY</h3><p>${character.story}</p></section>
      <section><h3>NOTABLE FIGHTS</h3><p>${character.fights}</p></section>
      <section><h3>ABILITIES</h3><p>${character.abilities}</p></section>
    </div>
    <button class="character-detail-vote${voted ? " voted" : ""}" type="button" data-detail-vote="${id}" aria-pressed="${voted}">
      <i class="bi ${voted ? "bi-x-lg" : "bi-heart"}"></i>${voted ? "REMOVE MY VOTE" : "VOTE FOR CHARACTER"}
    </button>`;
}

function showCharacterDetails(id) {
  const character = characters.find(item => item.id === id);
  if (!character) return;
  const characterImage = getCharacterImage(character);
  ambientBg.dataset.characterArt = characterImage;
  ambientBg.style.backgroundImage = `url("${characterImage}")`;
  animateIn(ambientBg, [
    { opacity: .34, filter: "blur(15px) saturate(.58)" },
    { opacity: .72, filter: "blur(10px) saturate(.78)" }
  ], { duration: 850 });
  renderCharacterDetail(id);
  characterDetail.classList.add("show");
  characterDetail.setAttribute("aria-hidden", "false");
  characterDetail.querySelector(".character-detail-close").focus();
}

function closeCharacterDetails() {
  characterDetail.classList.remove("show");
  characterDetail.setAttribute("aria-hidden", "true");
}

function persistCharacterVotes() {
  try { localStorage.setItem("animeflixCharacterVotes", JSON.stringify(characterVoteData)); } catch {}
}

function voteCharacter(id) {
  if (characterVoteData.voted.includes(id)) return;
  characterVoteData.counts[id] = (Number(characterVoteData.counts[id]) || 0) + 1;
  characterVoteData.voted.push(id);
  persistCharacterVotes();
  renderCharacters();
  if (characterDetail.classList.contains("show")) renderCharacterDetail(id);
}

function unvoteCharacter(id) {
  if (!characterVoteData.voted.includes(id)) return;
  characterVoteData.counts[id] = Math.max(0, (Number(characterVoteData.counts[id]) || 0) - 1);
  characterVoteData.voted = characterVoteData.voted.filter(votedId => votedId !== id);
  persistCharacterVotes();
  renderCharacters();
  if (characterDetail.classList.contains("show")) renderCharacterDetail(id);
}

characterGrid.addEventListener("click", e => {
  const voteButton = e.target.closest("[data-vote-id]");
  if (voteButton) { voteCharacter(voteButton.dataset.voteId); return; }
  const removeButton = e.target.closest("[data-unvote-id]");
  if (removeButton) { unvoteCharacter(removeButton.dataset.unvoteId); return; }
  const card = e.target.closest("[data-character-id]");
  if (card) showCharacterDetails(card.dataset.characterId);
});

characterGrid.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-character-id]")) {
    e.preventDefault();
    showCharacterDetails(e.target.dataset.characterId);
  }
});

characterGrid.addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse") return;
  const card = e.target.closest(".character-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  card.style.setProperty("--mx", `${x * 100}%`);
  card.style.setProperty("--my", `${y * 100}%`);
  card.style.setProperty("--rx", `${((.5 - y) * 7).toFixed(2)}deg`);
  card.style.setProperty("--ry", `${((x - .5) * 9).toFixed(2)}deg`);
});

characterGrid.addEventListener("pointerout", e => {
  const card = e.target.closest(".character-card");
  if (!card || card.contains(e.relatedTarget)) return;
  card.style.removeProperty("--rx");
  card.style.removeProperty("--ry");
});

characterGrid.addEventListener("mouseover", e => {
  const card = e.target.closest(".character-card");
  if (!card) return;
  const character = characters.find(item => item.id === card.dataset.characterId);
  if (!character) return;
  const characterImage = getCharacterImage(character);
  if (characterImage === ambientBg.dataset.characterArt) return;
  ambientBg.dataset.characterArt = characterImage;
  ambientBg.style.backgroundImage = `url("${characterImage}")`;
  animateIn(ambientBg, [{ opacity: .4 }, { opacity: .72 }], { duration: 700 });
});

characterDetail.addEventListener("click", e => {
  if (e.target === characterDetail || e.target.closest(".character-detail-close")) {
    closeCharacterDetails();
    return;
  }
  const voteButton = e.target.closest("[data-detail-vote]");
  if (voteButton) {
    const id = voteButton.dataset.detailVote;
    if (characterVoteData.voted.includes(id)) unvoteCharacter(id);
    else voteCharacter(id);
  }
});

characterFilters.addEventListener("click", e => {
  const button = e.target.closest("[data-character-filter]");
  if (!button || button.dataset.characterFilter === characterFilter) return;
  characterFilter = button.dataset.characterFilter;
  characterFilters.querySelectorAll("button").forEach(filter => {
    filter.classList.toggle("active", filter === button);
  });
  renderCharacters();
});
function removeFromList(card) {
  if (card.classList.contains("removing")) return;
  card.classList.add("removing");

  setTimeout(() => {
    saved = saved.filter(title => title !== card.dataset.title);
    persist();
    updateListCount();
    updateSaveIcon();

    const rest = [...listGrid.querySelectorAll(".list-card")].filter(c => c !== card);
    if (!rest.length) { renderList(); return; }

    const before = new Map(rest.map(c => [c, c.getBoundingClientRect()]));
    card.remove();
    rest.forEach(c => {
      const a = before.get(c);
      const b = c.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (dx || dy) {
        animateIn(c, [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }], { duration: 550 });
      }
    });
    renderListMeta();
  }, 380);
}

listGrid.addEventListener("click", e => {
  const remove = e.target.closest(".list-remove");
  if (remove) { removeFromList(remove.closest(".list-card")); return; }
  const target = e.target.closest("[data-view]");
  if (target) setView(target.dataset.view, Number(target.dataset.index || 0));
});

listGrid.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.classList.contains("list-card")) e.target.click();
});

listFilters.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn || btn.dataset.filter === listFilter) return;
  listFilter = btn.dataset.filter;
  renderList();
});
listGrid.addEventListener("pointermove", e => {
  if (e.pointerType !== "mouse") return;
  const card = e.target.closest(".list-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  card.style.setProperty("--mx", `${x * 100}%`);
  card.style.setProperty("--my", `${y * 100}%`);
  card.style.setProperty("--rx", `${((0.5 - y) * 7).toFixed(2)}deg`);
  card.style.setProperty("--ry", `${((x - 0.5) * 9).toFixed(2)}deg`);
});

listGrid.addEventListener("pointerout", e => {
  const card = e.target.closest(".list-card");
  if (!card || card.contains(e.relatedTarget)) return;
  card.style.removeProperty("--rx");
  card.style.removeProperty("--ry");
});
listGrid.addEventListener("mouseover", e => {
  const card = e.target.closest(".list-card");
  if (!card || card.dataset.image === hoverArt) return;
  hoverArt = card.dataset.image;
  ambientBg.style.backgroundImage = `url("${hoverArt}")`;
  animateIn(ambientBg, [{ opacity: .35 }, { opacity: .72 }], { duration: 700 });
});

updateListCount();
render();
if (requestedMyList) openList();
