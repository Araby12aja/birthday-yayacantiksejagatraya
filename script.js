/* ============================================================
   SCRIPT.JS

   Untuk penggunaan sehari-hari, kamu HANYA perlu mengedit
   objek "config" di bawah ini. Jangan ubah bagian di bawah
   "JANGAN DIUBAH" kecuali kamu memang paham JavaScript.
   ============================================================ */

const config = {

  // =========================
  // GANTI DATA DI SINI SAJA
  // =========================

  nama: "Talia Ragilia Putri",

  // teks di slide pertama (ucapan)
  eyebrowUcapan: "a little something for you",
  judulUcapan: "Happy Birthday",
  subUcapan: "i hope today is full of smiles and happiness",

  judul: "Choose the Surprise",

  eyebrow: "a little something for you",

  catatanMemory: "Sedikit potongan momen yang selalu ingin aku simpan.",

  foto: [
    { src: "assets/images/photo1.jpg", caption: "the moment. kamis, 18 juni 2026" },
    { src: "assets/images/photo2.jpg", caption: "Momen kecil. selasa, 13 januari 2026" },
    { src: "assets/images/photo3.jpg", caption: "Our memory. jumat, 17 juli 2026" },
    { src: "assets/images/photo4.jpg", caption: "That day. senin, 17 agustus 2026" },
    { src: "assets/images/photo5.jpg", caption: "At the time. selasa, 13 januari 2026" },
    { src: "assets/images/photo6.jpg", caption: "That day. selasa, 21 juli 2026" },
    { src: "assets/images/photo7.jpg", caption: "That day. rabu, 22 juli 2026" },
    { src: "assets/images/photo8.jpg", caption: "That day. sabtu, 22 agustus 2026" },
    { src: "assets/images/photo9.jpg", caption: "That day. sabtu 22 agustus 2026" },
    { src: "assets/images/photo10.jpg", caption: "That day. sabtu 22 agustus 2026" },
    { src: "assets/images/photo11.jpg", caption: "That day. sabtu, 22 agustus 2026" },
    { src: "assets/images/photo12.jpg", caption: "That day. sabtu 15 agustus 2026" },
    { src: "assets/images/photo13.jpg", caption: "That day. rabu, 29 juli 2026" },
    { src: "assets/images/photo14.jpg", caption: "That day. minggu, 16 agustus 2026" },
    { src: "assets/images/photo15.jpg", caption: "That day. kamis, 15 januari 2026" },
    { src: "assets/images/photo16.jpg", caption: "That day. 2024" },
    { src: "assets/images/photo17.jpg", caption: "That day. rabu, 29 juli 2026" },
    { src: "assets/images/photo18.jpg", caption: "That day. sabtu, 11 juli 2026" },
    { src: "assets/images/photo19.jpg", caption: "That day. sabtu, 11 juli 2026" },
    { src: "assets/images/photo20.jpg", caption: "That day. rabu, 8 juli 2026" },
    { src: "assets/images/photo21.jpg", caption: "That day. rabu, 22 juli 2026" },
    { src: "assets/images/photo22.jpg", caption: "That day. selasa, 28 juli 2026" },
    { src: "assets/images/photo23.jpg", caption: "That day. minggu, 16 agustus 2026" },
    { src: "assets/images/photo24.jpg", caption: "That day. selasa, 14 juli 2026 " },
    { src: "assets/images/photo25.jpg", caption: "That day. senin, 26 januari 2026" }
    // tinggal copy baris di atas untuk menambah foto, contoh:
    // { src: "assets/images/photo5.jpg", caption: "Momen kelima" }
  ],

  lagu: "Count on Me",
  penyanyi: "Bruno Mars",
  fileLagu: "assets/audio/count-on-me.mp3",

  pesan: `
Selamat ulang tahun sayanggggg...

semoga di hari yang indah ini selalu menjadi pribadi yang lebih baik lagi,
semoga apo yang ndut impikan dan apo yang ndut harapkan bisa di kabulkan tahun ini,
tetap menjadi pribadi yang baik yaa... 1 always support you
kami dk tau lagi nk ngomong apo tapi kalo ndut tahu kami dh nyiapin ini smuo dari h-1bulan
kami pingin orng yang kami sayang bisa bahagia senang selalu, makasih yo ndut dah jadi tempat cerito kami 
maksih ndutt dah biso nerimo kami apo adonyo walopun kami banyk kurangnyo, tapi kami
janji sebisa mungkin buat ndut bahggia truss
maksih yaa sayanggg...
I LOVE YOU IN EVERITHING🤎🤎🤎.
`,

  judulAmplop: "Press the Envelope",

  pesanRahasia: `
LOVE YOU MOREEE🤎🤎🤎.

Pesan ini akan muncul
ketika amplop dibuka.
`
};


/* ============================================================
   JANGAN DIUBAH — LOGIC WEBSITE
   (kecuali kamu memang ingin mengubah cara kerjanya)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  buildScrapbook();
  setupNavigation();
  setupMusicPlayer();
  setupNote();
  setupEnvelope();
  buildBackgroundSparkles();
});

/* ---------- isi teks dari config ke halaman ---------- */
function applyConfig(){
  document.getElementById('greetingEyebrow').textContent = config.eyebrowUcapan;
  document.getElementById('greetingTitle').textContent = config.judulUcapan;
  document.getElementById('greetingName').textContent = config.nama;
  document.getElementById('greetingSub').textContent = config.subUcapan;

  document.getElementById('eyebrowText').textContent = config.eyebrow;
  document.getElementById('homeTitle').textContent = config.judul;
  document.getElementById('memoryNote').textContent = config.catatanMemory;
  document.getElementById('trackTitle').textContent = config.lagu;
  document.getElementById('trackArtist').textContent = config.penyanyi;
  document.getElementById('envelopeTitle').textContent = config.judulAmplop;
  document.title = config.nama ? `A Surprise for ${config.nama}` : 'A Little Surprise';
}

/* ---------- navigasi antar screen ---------- */
const navStack = ['greeting'];

function setupNavigation(){
  document.getElementById('continueBtn').addEventListener('click', ()=> showScreen('home', true));

  document.querySelectorAll('.menu-card').forEach(card=>{
    card.addEventListener('click', ()=> showScreen(card.dataset.target, true));
  });
  updateBackButton();
}

function showScreen(name, pushToStack){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const target = document.querySelector(`.screen[data-screen="${name}"]`);
  if(target) target.classList.add('active');

  if(pushToStack) navStack.push(name);
  updateBackButton();

  // reset animasi khusus tiap screen saat dibuka
  if(name === 'note') startTyping();
  if(name === 'envelope') resetEnvelope();
}

function goBack(){
  if(navStack.length > 1) navStack.pop();
  const prev = navStack[navStack.length - 1] || 'home';
  showScreen(prev, false);
}

function updateBackButton(){
  const btn = document.getElementById('backBtn');
  const onRoot = navStack[navStack.length - 1] === 'greeting';
  btn.classList.toggle('show', !onRoot);
}

/* ---------- MEMORY: bangun scrapbook dari config.foto ---------- */
function buildScrapbook(){
  const grid = document.getElementById('scrapbookGrid');
  grid.innerHTML = '';

  config.foto.forEach((item, i)=>{
    const rot = (i % 2 === 0 ? -1 : 1) * (3 + (i % 3) * 2);

    const card = document.createElement('div');
    card.className = 'polaroid';
    card.style.setProperty('--rot', rot + 'deg');
    card.style.animationDelay = (i * 0.08) + 's';

    const frame = document.createElement('div');
    frame.className = 'frame';

    const img = new Image();
    img.alt = item.caption || '';
    img.onload = () => { frame.appendChild(img); };
    img.onerror = () => { showPlaceholder(frame); };
    img.src = item.src;

    // tampilkan placeholder dulu selagi menunggu, lalu diganti saat onload/onerror
    showPlaceholder(frame);
    img.onload = () => { frame.innerHTML=''; frame.appendChild(img); };

    const cap = document.createElement('div');
    cap.className = 'cap';
    cap.textContent = item.caption || '';

    card.appendChild(frame);
    card.appendChild(cap);
    grid.appendChild(card);
  });
}

function showPlaceholder(frame){
  frame.innerHTML = '';
  frame.classList.add('placeholder');
  frame.innerHTML = '<span>🖼</span><span class="ph-hint">belum ada foto</span>';
}

/* ---------- MUSIC: vinyl player ---------- */
function setupMusicPlayer(){
  const audio = document.getElementById('audioEl');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const seekBar = document.getElementById('seekBar');
  const timeCurrent = document.getElementById('timeCurrent');
  const timeTotal = document.getElementById('timeTotal');
  const vinyl = document.getElementById('vinyl');
  const tonearm = document.getElementById('tonearm');
  const warning = document.getElementById('musicWarning');

  let hasSource = false;

  if(config.fileLagu){
    audio.src = config.fileLagu;
    hasSource = true;
  }

  audio.addEventListener('error', () => {
    warning.hidden = false;
    playBtn.disabled = true;
    playBtn.style.opacity = .5;
  });

  audio.addEventListener('loadedmetadata', () => {
    seekBar.max = audio.duration || 100;
    timeTotal.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    seekBar.value = audio.currentTime;
    timeCurrent.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('ended', () => {
    setPlayingState(false);
  });

  function formatTime(sec){
    if(!isFinite(sec) || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }

  function setPlayingState(isPlaying){
    vinyl.classList.toggle('spin', isPlaying);
    tonearm.classList.toggle('playing', isPlaying);
    playBtn.textContent = isPlaying ? '❚❚' : '▶';
    if(isPlaying) spawnMusicNote();
  }

  playBtn.addEventListener('click', () => {
    if(!hasSource){
      warning.hidden = false;
      return;
    }
    if(audio.paused){
      audio.play().catch(()=>{ warning.hidden = false; });
      setPlayingState(true);
    } else {
      audio.pause();
      setPlayingState(false);
    }
  });

  // ---- coba autoplay begitu halaman dibuka ----
  if(hasSource){
    attemptAutoplay(audio, setPlayingState);
  }

  prevBtn.addEventListener('click', () => {
    if(!hasSource) return;
    audio.currentTime = 0;
  });

  nextBtn.addEventListener('click', () => {
    if(!hasSource) return;
    audio.currentTime = 0;
    audio.pause();
    setPlayingState(false);
  });

  seekBar.addEventListener('input', () => {
    if(!hasSource) return;
    audio.currentTime = seekBar.value;
  });

  let noteInterval = null;
  function spawnMusicNote(){
    if(noteInterval) clearInterval(noteInterval);
    noteInterval = setInterval(()=>{
      if(audio.paused){ clearInterval(noteInterval); return; }
      createFloatingSymbol('🎵', 'note-fx');
    }, 900);
  }
}

/* ---------- autoplay musik saat halaman dibuka ---------- */
function attemptAutoplay(audio, setPlayingState){
  const tryPlay = () => audio.play().then(() => setPlayingState(true));

  tryPlay().catch(() => {
    // banyak browser memblokir autoplay bersuara sebelum ada interaksi pengguna
    // jadi musik akan otomatis mulai begitu pengguna menyentuh/klik halaman pertama kali
    const startOnInteraction = () => {
      tryPlay().catch(()=>{});
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('touchstart', startOnInteraction);
    };
    document.addEventListener('click', startOnInteraction, { once:true });
    document.addEventListener('touchstart', startOnInteraction, { once:true });
  });
}

/* ---------- A LITTLE NOTE: efek mengetik ---------- */
let typingTimer = null;

function setupNote(){
  document.getElementById('skipBtn').addEventListener('click', () => {
    clearTimeout(typingTimer);
    document.getElementById('noteText').textContent = config.pesan.trim();
    document.getElementById('noteCursor').style.display = 'none';
  });
}

function startTyping(){
  const el = document.getElementById('noteText');
  const cursor = document.getElementById('noteCursor');
  const full = config.pesan.trim();
  el.textContent = '';
  cursor.style.display = 'inline-block';
  clearTimeout(typingTimer);

  let i = 0;
  function tick(){
    if(i <= full.length){
      el.textContent = full.slice(0, i);
      i++;
      typingTimer = setTimeout(tick, 28);
    } else {
      cursor.style.display = 'none';
    }
  }
  tick();
}

/* ---------- ENVELOPE ---------- */
function setupEnvelope(){
  const envelope = document.getElementById('envelope');
  document.getElementById('secretText').textContent = config.pesanRahasia.trim();

  envelope.addEventListener('click', () => {
    if(envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    burstConfetti();
  });
}

function resetEnvelope(){
  document.getElementById('envelope').classList.remove('open');
}

function burstConfetti(){
  const symbols = ['💗','✨','💌','🌸'];
  for(let i=0;i<18;i++){
    setTimeout(()=>{
      const s = symbols[Math.floor(Math.random()*symbols.length)];
      createFloatingSymbol(s, 'heart-fx', true);
    }, i * 60);
  }
}

function createFloatingSymbol(symbol, className, randomX){
  const layer = document.getElementById('fxLayer');
  const el = document.createElement('span');
  el.className = className;
  el.textContent = symbol;
  const x = randomX ? (10 + Math.random()*80) : (40 + Math.random()*20);
  el.style.left = x + '%';
  el.style.bottom = '18%';
  layer.appendChild(el);
  setTimeout(()=> el.remove(), 2700);
}

/* ---------- sparkle background ---------- */
function buildBackgroundSparkles(){
  const layer = document.getElementById('sparkleLayer');
  const count = 22;
  for(let i=0;i<count;i++){
    const s = document.createElement('div');
    s.className = 'sparkle';
    const size = 3 + Math.random()*5;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random()*100 + '%';
    s.style.top = Math.random()*100 + '%';
    s.style.animationDelay = (Math.random()*3.5) + 's';
    layer.appendChild(s);
  }
}
