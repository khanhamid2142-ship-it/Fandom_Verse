(() => {
  const titles = {
    anime: [
      { title: "Demon Slayer", category: "ANIME · FANTASY", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80", description: "You connect with brave hearts, loyalty, and the courage to keep going when the odds feel impossible.", alt: "Illustrated anime inspired artwork" },
      { title: "Jujutsu Kaisen", category: "ANIME · SUPERNATURAL", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80", description: "You like bold energy, tight friendships, and stories that turn the ordinary into something extraordinary.", alt: "Illustrated anime inspired artwork" },
      { title: "Attack on Titan", category: "ANIME · EPIC DRAMA", image: "images/pics/Aot.jfif", description: "You are drawn to huge stakes, difficult truths, and characters who keep questioning the world around them.", alt: "Attack on Titan artwork" },
      { title: "Solo Leveling", category: "ANIME · ACTION", image: "https://img.youtube.com/vi/irVNGjRFZGk/hqdefault.jpg", description: "You admire ambition, personal growth, and the thrill of watching an underdog become unstoppable.", alt: "Solo Leveling anime artwork" },
      { title: "Dragon Ball Z", category: "ANIME · ADVENTURE", image: "images/pics/dragon%20ball%20z.jpg", description: "You love big-hearted heroes, fierce rivalries, and the determination to keep reaching for a new level.", alt: "Dragon Ball Z artwork" },
      { title: "Naruto Shippuden", category: "ANIME · ADVENTURE", image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&w=1200&q=80", description: "You believe in loyalty, second chances, and proving that your past does not decide your future.", alt: "Illustrated anime inspired artwork" },
      { title: "One Piece", category: "ANIME · ADVENTURE", image: "https://images.unsplash.com/photo-1614583225154-5fcen8d2a8d0?auto=format&fit=crop&w=1200&q=80", description: "You chase freedom, big dreams, and the kind of friendships that turn every journey into an adventure.", alt: "Illustrated adventure artwork" },
      { title: "Death Note", category: "ANIME · THRILLER", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80", description: "You enjoy psychological games, clever rivals, and stories that make you question right and wrong.", alt: "Moody illustrated artwork" },
      { title: "My Hero Academia", category: "ANIME · SUPERHERO", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80", description: "You find inspiration in courage, hard work, and people who grow into the heroes they admire.", alt: "Illustrated superhero inspired artwork" },
      { title: "Fullmetal Alchemist: Brotherhood", category: "ANIME · FANTASY", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80", description: "You value heart, clever world building, and stories about the price of choices and the bonds that endure.", alt: "Illustrated fantasy artwork" },
      { title: "Hunter x Hunter", category: "ANIME · ADVENTURE", image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=1200&q=80", description: "You are curious, adaptable, and ready for an adventure that keeps surprising you at every turn.", alt: "Illustrated adventure artwork" }
    ],
    movies: [
      { title: "The Dark Knight", category: "MOVIE · CRIME / ACTION", image: "images/dna/movies/dark-knight.svg", description: "You value sharp minds, complex choices, and a little darkness wrapped around a story with real stakes.", alt: "Gotham city at night" },
      { title: "Inception", category: "MOVIE · SCI-FI / THRILLER", image: "images/dna/movies/inception.svg", description: "You love clever puzzles, layered ideas, and films that stay in your head long after the credits.", alt: "A cinematic cityscape" },
      { title: "Interstellar", category: "MOVIE · SCI-FI / ADVENTURE", image: "images/dna/movies/interstellar.svg", description: "You are a hopeful explorer at heart, pulled toward big questions, deep feelings, and the unknown.", alt: "A cinematic space scene" },
      { title: "The Godfather", category: "MOVIE · CRIME / DRAMA", image: "images/dna/movies/godfather.svg", description: "You are drawn to character-driven sagas, family loyalties, and the slow shifts of power.", alt: "A cinematic crime drama scene" },
      { title: "Gladiator", category: "MOVIE · ACTION / DRAMA", image: "images/dna/movies/gladiator.svg", description: "You stand for courage and honor, and love a hard-won triumph against the odds.", alt: "A cinematic arena scene" },
      { title: "The Matrix", category: "MOVIE · SCI-FI / ACTION", image: "images/dna/movies/matrix.svg", description: "You question the rules, think for yourself, and enjoy a reality-bending story with style.", alt: "A cinematic science fiction scene" },
      { title: "The Lord of the Rings: The Fellowship of the Ring", category: "MOVIE · FANTASY / ADVENTURE", image: "images/dna/movies1/lord%20of%20the%20rings.jfif", description: "You believe ordinary people can do extraordinary things when they stand by one another.", alt: "The Lord of the Rings" },
      { title: "Jurassic Park", category: "MOVIE · ADVENTURE / SCI-FI", image: "images/dna/movies1/jurassic%20park.jfif", description: "You are curious about the impossible and love an adventure where wonder comes with a little danger.", alt: "Jurassic Park" },
      { title: "The Shawshank Redemption", category: "MOVIE · DRAMA", image: "images/dna/movies1/The%20Shawshank%20Redemption.jfif", description: "You hold on to hope, value quiet resilience, and believe patience can change everything.", alt: "The Shawshank Redemption" },
      { title: "Pulp Fiction", category: "MOVIE · CRIME / DRAMA", image: "images/dna/movies1/pulp%20fiction.jfif", description: "You like sharp dialogue, bold style, and stories that take their own unexpected route.", alt: "Pulp Fiction" },
      { title: "Avatar", category: "MOVIE · SCI-FI / ADVENTURE", image: "images/dna/movies1/avatar.jfif", description: "You are drawn to vivid new worlds, discovery, and the idea of finding where you belong.", alt: "Avatar" }
    ],
    characters: [
      { title: "Arthur Morgan", category: "CHARACTER · OUTLAW", image: "images/characters/ARTHUR%20MORGAN.jpg", description: "You value loyalty, reflection, and doing what is right when life gives you difficult choices.", alt: "Arthur Morgan character artwork" },
      { title: "Bruce Wayne", category: "CHARACTER · HERO", image: "images/characters/BRUCE%20WAYNE.jpg", description: "You are disciplined, resourceful, and determined to protect the people around you.", alt: "Bruce Wayne character artwork" },
      { title: "Denji", category: "CHARACTER · DEVIL HUNTER", image: "images/characters/DENJI.jpg", description: "You keep things honest, live in the moment, and find joy in the little things.", alt: "Denji character artwork" },
      { title: "Dom Cobb", category: "CHARACTER · DREAMER", image: "images/characters/DOM%20COBB.jpg", description: "You are inventive and focused, always searching for a way through complicated problems.", alt: "Dom Cobb character artwork" },
      { title: "Eren Yeager", category: "CHARACTER · REBEL", image: "images/characters/EREN%20YEAGER.jpg", description: "You are driven by conviction and keep pushing toward the future you believe in.", alt: "Eren Yeager character artwork" },
      { title: "Geralt of Rivia", category: "CHARACTER · WITCHER", image: "images/characters/GERALT%20OF%20RIVIA.jpg", description: "You are independent, observant, and guided by a personal code of honor.", alt: "Geralt of Rivia character artwork" },
      { title: "Goku", category: "CHARACTER · SAIYAN", image: "images/characters/GOKU.jpg", description: "You meet every challenge with optimism, curiosity, and a desire to grow stronger.", alt: "Goku character artwork" },
      { title: "Guts", category: "CHARACTER · WANDERER", image: "images/characters/Guts.jpg", description: "You are resilient and courageous, facing hard roads without giving up your own path.", alt: "Guts character artwork" },
      { title: "Yuji Itadori", category: "CHARACTER · SORCERER", image: "images/characters/Itadori%20Yuji.jpg", description: "You care deeply about others and try to make every choice count.", alt: "Yuji Itadori character artwork" },
      { title: "Joseph Cooper", category: "CHARACTER · EXPLORER", image: "images/characters/Joseph%20Copper.jpg", description: "You are brave, curious, and willing to cross great distances for the people you love.", alt: "Joseph Cooper character artwork" },
      { title: "Kratos", category: "CHARACTER · WARRIOR", image: "images/characters/KRATOS.jpg", description: "You are powerful and determined, learning to temper strength with patience and care.", alt: "Kratos character artwork" },
      { title: "Light Yagami", category: "CHARACTER · STRATEGIST", image: "images/characters/Light%20Yagami.jpg", description: "You are analytical and ambitious, always thinking several moves ahead.", alt: "Light Yagami character artwork" },
      { title: "Monkey D. Luffy", category: "CHARACTER · CAPTAIN", image: "images/characters/Luffy%20JoyBoy.jpg", description: "You value freedom, friendship, and chasing the dream that matters most to you.", alt: "Monkey D. Luffy character artwork" },
      { title: "Maximus Decimus", category: "CHARACTER · GLADIATOR", image: "images/characters/MAXIMUS%20DCIMUS.jpg", description: "You are honorable and steadfast, meeting hardship with courage and dignity.", alt: "Maximus Decimus character artwork" },
      { title: "Michael Corleone", category: "CHARACTER · LEADER", image: "images/characters/michael%20corleone.jpg", description: "You are composed and strategic, with a strong sense of responsibility to your family.", alt: "Michael Corleone character artwork" },
      { title: "Michael De Santa", category: "CHARACTER · HEIST PLANNER", image: "images/characters/MICHAEL.jpg", description: "You are clever and adaptable, balancing big ambitions with the people closest to you.", alt: "Michael De Santa character artwork" },
      { title: "Miyamoto Musashi", category: "CHARACTER · SWORDSMAN", image: "images/characters/MIYAMOTO%20MUSHASHI%20.jpg", description: "You are disciplined and thoughtful, always working toward mastery.", alt: "Miyamoto Musashi character artwork" },
      { title: "Johan Liebert", category: "CHARACTER · MYSTERY", image: "images/characters/Monster%20Wallpaper.jpg", description: "You are perceptive and enigmatic, drawn to the hidden motives behind every story.", alt: "Johan Liebert character artwork" },
      { title: "Naruto Uzumaki", category: "CHARACTER · NINJA", image: "images/characters/NARUTO%20UZUMAKI.jpg", description: "You are persistent, warm-hearted, and believe people can change for the better.", alt: "Naruto Uzumaki character artwork" },
      { title: "Neo", category: "CHARACTER · THE ONE", image: "images/characters/NEO.jpg", description: "You question assumptions and have the courage to choose your own reality.", alt: "Neo character artwork" },
      { title: "Sung Jinwoo", category: "CHARACTER · HUNTER", image: "images/characters/Solo%20Leveling.jpg", description: "You are ambitious and self-reliant, turning every setback into a reason to improve.", alt: "Sung Jinwoo character artwork" },
      { title: "Tanjiro Kamado", category: "CHARACTER · SWORDSMAN", image: "images/characters/TANJIRO.jpg", description: "You are compassionate and courageous, protecting others while staying true to yourself.", alt: "Tanjiro Kamado character artwork" },
      { title: "The Tarnished", category: "CHARACTER · ADVENTURER", image: "images/characters/THE%20TARNISHED.jpg", description: "You are persistent and curious, ready to make your own way through an unknown world.", alt: "The Tarnished character artwork" },
      { title: "V", category: "CHARACTER · MERCENARY", image: "images/characters/V.jpg", description: "You are bold and independent, determined to leave your own mark on the world.", alt: "V character artwork" }
    ]
  };
  const localAnimeImages = {
    "Demon Slayer": "images/pics/demon%20slayer.jfif",
    "Jujutsu Kaisen": "images/pics/jjk.jfif",
    "Solo Leveling": "images/pics/solo%20leveling.jpg",
    "Naruto Shippuden": "images/pics/naruto.jpg",
    "One Piece": "images/pics/one%20piece.jfif",
    "Death Note": "images/pics/death%20note.jpg",
    "My Hero Academia": "images/pics/my%20hero%20academia.jpg",
    "Fullmetal Alchemist: Brotherhood": "images/pics/full%20metal%20alcemist.jfif",
    "Hunter x Hunter": "images/pics/hunter%20x%20hunter.jfif"
  };
  const localMovieImages = {
    "The Dark Knight": "images/movies/THE%20DARK%20KNIGHT.jpg",
    "Inception": "images/movies/INCEPTION.jpg",
    "Interstellar": "images/movies/INTERSTELLAR.jpg",
    "The Godfather": "images/movies/THE%20GODFATHER.jpg",
    "Gladiator": "images/movies/GLADIATOR.jpg",
    "The Matrix": "images/movies/THE%20MATRIX.jpg",
    "The Lord of the Rings: The Fellowship of the Ring": "images/movies/lord%20of%20the%20rings.jfif",
    "Jurassic Park": "images/movies/jurassic%20park.jfif",
    "The Shawshank Redemption": "images/movies/The%20Shawshank%20Redemption.jfif",
    "Pulp Fiction": "images/movies/pulp%20fiction.jfif",
    "Avatar": "images/movies/avatar.jfif"
  };
  titles.anime.forEach(item => { if (localAnimeImages[item.title]) item.image = localAnimeImages[item.title]; });
  titles.movies.forEach(item => { item.image = localMovieImages[item.title] || item.image; });
  const buttons = [document.getElementById("choiceA"), document.getElementById("choiceB")];
  const modeButtons = [...document.querySelectorAll(".mode-button")];
  const progress = document.querySelector(".battle-progress");
  const progressBar = document.querySelector(".progress-track");
  const fill = document.getElementById("progressFill");
  const roundLabel = document.getElementById("roundLabel");
  const progressMessage = document.getElementById("progressMessage");
  const duel = document.getElementById("duel");
  const hint = document.querySelector(".battle-hint");
  const result = document.getElementById("resultPanel");
  const shareStatus = document.getElementById("shareStatus");
  let mode = "anime", champion = 0, challenger = 1, completed = 0, order = [], championSide = 0;

  function randomIndex(excluded) {
    const choices = titles[mode].map((_, index) => index).filter(index => !excluded.includes(index));
    return choices[Math.floor(Math.random() * choices.length)];
  }
  function paintCard(button, entry) {
    button.querySelector("img").src = entry.image;
    button.querySelector("img").alt = entry.alt;
    button.querySelector(".card-category").textContent = entry.category;
    button.querySelector(".card-title").textContent = entry.title;
    button.setAttribute("aria-label", `Choose ${entry.title}`);
  }
  function render() {
    const collection = titles[mode];
    paintCard(buttons[championSide], collection[champion]);
    paintCard(buttons[1 - championSide], collection[challenger]);
    roundLabel.innerHTML = `BATTLE ${String(completed + 1).padStart(2, "0")} <i>/ 10</i>`;
    progressMessage.textContent = completed === 9 ? "Choose your DNA" : "Pick your favorite";
    progressBar.setAttribute("aria-valuenow", String(completed));
    fill.style.width = `${completed * 10}%`;
  }
  function showResult() {
    const winner = titles[mode][champion];
    document.getElementById("winnerImage").src = winner.image;
    document.getElementById("winnerImage").alt = winner.alt;
    document.getElementById("winnerTitle").textContent = winner.title;
    document.getElementById("winnerDescription").textContent = winner.description;
    result.hidden = false;
  }
  function choose(buttonIndex) {
    if (buttonIndex !== championSide) {
      champion = challenger;
      championSide = buttonIndex;
    }
    completed++;
    if (completed === 10) {
      progressBar.setAttribute("aria-valuenow", "10");
      fill.style.width = "100%";
      progress.hidden = true;
      duel.hidden = true;
      hint.hidden = true;
      showResult();
      return;
    }
    challenger = order[completed + 1];
    render();
  }
  function startGame(nextMode = mode) {
    mode = nextMode;
    modeButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.mode === mode)));
    order = titles[mode].map((_, index) => index);
    for (let index = order.length - 1; index > 0; index--) {
      const swap = Math.floor(Math.random() * (index + 1));
      [order[index], order[swap]] = [order[swap], order[index]];
    }
    champion = order[0];
    challenger = order[1];
    championSide = 0;
    completed = 0;
    shareStatus.textContent = "";
    progress.hidden = false;
    duel.hidden = false;
    hint.hidden = false;
    result.hidden = true;
    progressBar.setAttribute("aria-valuenow", "0");
    render();
  }
  modeButtons.forEach(button => button.addEventListener("click", () => startGame(button.dataset.mode)));
  buttons.forEach((button, index) => button.addEventListener("click", () => choose(index)));
  document.getElementById("restartButton").addEventListener("click", () => startGame(mode));
  document.getElementById("shareButton").addEventListener("click", async () => {
    const winner = titles[mode][champion];
    const modeLabel = { anime: "Anime", movies: "Movie", characters: "Character" }[mode];
    const shareData = { title: `My ${modeLabel} DNA`, text: `My ${modeLabel.toLowerCase()} DNA is ${winner.title}! Find yours in the AnimeFlix DNA Battle.`, url: location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        shareStatus.textContent = "Result copied. Share it with your friends!";
      } else shareStatus.textContent = `${shareData.text} ${shareData.url}`;
    } catch (error) {
      if (error.name !== "AbortError") shareStatus.textContent = "Sharing is unavailable right now.";
    }
  });
})();
