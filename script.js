// ===== OPEN =====
function openInvite() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  startConfettiReal();
}

// ===== COUNTDOWN =====
const eventDate = new Date("Dec 25, 2026 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const d = eventDate - now;
  if (d < 0) return;

  days.innerText = Math.floor(d / (1000*60*60*24));
  hours.innerText = Math.floor((d/(1000*60*60))%24);
  minutes.innerText = Math.floor((d/(1000*60))%60);
  seconds.innerText = Math.floor((d/1000)%60);
}, 1000);

// ===== SLIDER =====
const images = [
  "https://picsum.photos/400/250?1",
  "https://picsum.photos/400/250?2",
  "https://picsum.photos/400/250?3"
];

let i = 0;
setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slideImage").src = images[i];
}, 3000);

// ===== RSVP =====
function kirimRSVP() {
  const nama = guestName.value;
  notif.innerText = nama ? "✅ Terima kasih, " + nama : "⚠️ Isi nama dulu!";
}

// ===== CONFETTI REAL =====
function startConfettiReal() {
  for (let i = 0; i < 120; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.width = "6px";
    conf.style.height = "6px";
    conf.style.background = ["#ff4081","#ffd54f","#7c4dff"][Math.floor(Math.random()*3)];
    conf.style.left = Math.random()*window.innerWidth + "px";
    conf.style.top = "-10px";
    conf.style.zIndex = "9999";
    document.body.appendChild(conf);

    let pos = 0;
    const fall = setInterval(() => {
      pos += 4;
      conf.style.top = pos + "px";
      if (pos > window.innerHeight) {
        clearInterval(fall);
        conf.remove();
      }
    }, 16);
  }
}
