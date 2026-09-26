ANIMEFLIX V3 — SMOOTH MANUAL CINEMATIC CAROUSEL
=================================================

Technologies:
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- Vanilla JavaScript

NO Python
NO React
NO Vite
NO Node.js

NEW IN V3
---------
- Removed the automatic slide timer completely.
- Cards change ONLY when the user:
  * clicks the left/right arrow
  * swipes left/right
  * drags left/right with a mouse
  * presses keyboard arrow keys
  * clicks a slide indicator
- Subtle hover zoom on the main card.
- Subtle hover zoom on side cards.
- Smooth image zoom animation when changing slides.
- Smooth text/content entrance.
- Smooth arrow hover/press animation.
- Full-page blurred background always uses the SAME image as the centered card.
- Glass/cinematic overlays.
- Added subtle grain and vignette for a more premium look.
- Short anime description.
- Search overlay.
- My List with localStorage.
- Responsive mobile design.

RUN
---
Extract the ZIP and open index.html in Chrome.

IMAGE NOTE
----------
The sample uses remote image URLs. Replace the URLs in js/script.js
with your own licensed anime artwork for a real project.


V4 VISUAL CHANGES
------------------
- Background opacity reduced for a cleaner image presence.
- Background blur reduced from heavy blur to a softer cinematic blur.
- Movies, New/My List, and Subscriptions are presented inside a floating glass navbar.
- Search has its own glass icon button.
- Sign In has a glass pill with a person icon and notification dot.
- Navbar has subtle border, glow, shadow, and backdrop blur.


V5 — MOVIES SECTION
-------------------
- "Movies" in the navbar now opens a second collection (6 famous movies) in the
  same cinematic carousel. "New" returns to the anime collection.
- Same animations: side/main card glide, hero image zoom, glass sweep, blurred
  ambient background, hover zoom, dots, counter, swipe/drag/arrow keys.
- Switching sections fades the cards out, swaps the content, then replays the
  entrance animation.
- Search now looks through both collections and jumps to the result when clicked.
- My List, Play modal and keyboard controls work for movies too.

ADDING / EDITING MOVIES
-----------------------
Movies live in index.html inside <section id="movieLibrary">. Copy an
<article class="anime-source"> block and edit it. Cards show automatically and
the counter updates by itself.

IMAGE NOTE
----------
Movie artwork in images/movies/ is original illustrated backdrops (SVG), not
official posters. Replace the <img src> in each article with your own licensed
poster or still (JPG/WebP, about 1200x800) for a real project.


V6 — MY LIST SECTION
--------------------
- "My List" in the navbar opens a frosted glass grid of every anime and movie
  you saved with the + button (shows a ✓ when saved). Newest first.
- Filter chips: All / Movies / Anime, each with a live count.
- Nav badge shows how many titles are saved and pops when it changes.
- Animations: hero dissolves while the panel blurs into focus, cards rise in
  with a staggered blur-to-sharp entrance, cursor-following light + gentle
  3D tilt, glass sweep on hover, artwork zoom, frosted caption.
- Hovering a card shifts the blurred page background to that title's artwork.
- Remove (x on hover): the card melts away and the others glide into place.
- Click a card to open that title in the main carousel.
- Friendly empty state with Browse movies / Browse anime buttons.
- Saved titles persist in localStorage (key: animeflixSaved).
- On phones the nav now shows New / Movies / My List (Subscriptions hidden).
