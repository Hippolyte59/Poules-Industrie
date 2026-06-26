const IMAGES = {
  chicken1: 'https://images.unsplash.com/photo-1725477905503-cb1090e013e0?w=64&h=64&fit=crop',
  chicken2: 'https://images.unsplash.com/photo-1771160014674-2fb716459edb?w=64&h=64&fit=crop',
  chicken3: 'https://images.unsplash.com/photo-1800221409870-376aedf8789a?w=64&h=64&fit=crop',
  chicken4: 'https://images.unsplash.com/photo-1800221409896-6a458d8c3957?w=64&h=64&fit=crop',
  chicken5: 'https://images.unsplash.com/photo-1800221409918-3c5be7e75f5a?w=64&h=64&fit=crop',
  rooster1: 'https://images.unsplash.com/photo-1741070132482-b3e64d37c4fe?w=64&h=64&fit=crop',
  rooster2: 'https://images.unsplash.com/photo-1741070132665-b7f92c12c5f5?w=64&h=64&fit=crop',
  rooster3: 'https://images.unsplash.com/photo-1741070132469-8f7f4a5b5d5d?w=64&h=64&fit=crop',
  speckled: 'https://images.unsplash.com/photo-1776269192666-cfb2c2a1f7e3?w=64&h=64&fit=crop',
  speckled2: 'https://images.unsplash.com/photo-1776269192666-cfb2c2a1f7e4?w=64&h=64&fit=crop',
  chick1: 'https://images.unsplash.com/photo-1647577373760-7ae14a28c07b?w=64&h=64&fit=crop',
  chick2: 'https://images.unsplash.com/photo-1506357997910-c76d3e4d3ecf?w=64&h=64&fit=crop',
  chick3: 'https://images.unsplash.com/photo-1735342854584-0ecebfe66c46?w=64&h=64&fit=crop',
  chick4: 'https://images.unsplash.com/photo-1735342854584-0ecebfe66c47?w=64&h=64&fit=crop',
  chickenSmall: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c5?w=48&h=48&fit=crop',
  chickenLarge: 'https://images.unsplash.com/photo-1800221409900-9999f5f5f5f5?w=128&h=128&fit=crop',
  drumstick: 'https://images.unsplash.com/photo-1775039983787-3fe9b416c545?w=64&h=64&fit=crop',
  drumstick2: 'https://images.unsplash.com/photo-1775039983787-3fe9b416c546?w=64&h=64&fit=crop',
  grilled: 'https://images.unsplash.com/photo-1757715378233-9c849d3416ea?w=64&h=64&fit=crop',
  grilled2: 'https://images.unsplash.com/photo-1757715378233-9c849d3416eb?w=64&h=64&fit=crop',
  hen: 'https://images.unsplash.com/photo-1751226993209-82c0aef9ef6e?w=64&h=64&fit=crop',
  hen2: 'https://images.unsplash.com/photo-1751226993209-82c0aef9ef6f?w=64&h=64&fit=crop',
  chickenOnTable: 'https://images.unsplash.com/photo-1718860407818-c1e7f1b32cfc?w=64&h=64&fit=crop',
  chickenOnTable2: 'https://images.unsplash.com/photo-1718860407818-c1e7f1b32cfd?w=64&h=64&fit=crop',
  chicken6: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c6?w=64&h=64&fit=crop',
  chicken7: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c7?w=64&h=64&fit=crop',
  chicken8: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c8?w=64&h=64&fit=crop',
  chicken9: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c9?w=64&h=64&fit=crop',
  chicken10: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c10?w=64&h=64&fit=crop',
  chicken11: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c11?w=64&h=64&fit=crop',
  chicken12: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c12?w=64&h=64&fit=crop',
  chicken13: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c13?w=64&h=64&fit=crop',
  chicken14: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c14?w=64&h=64&fit=crop',
  chicken15: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c15?w=64&h=64&fit=crop',
  chicken16: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c16?w=64&h=64&fit=crop',
  chicken17: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c17?w=64&h=64&fit=crop',
  chicken18: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c18?w=64&h=64&fit=crop',
  chicken19: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c19?w=64&h=64&fit=crop',
  chicken20: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c20?w=64&h=64&fit=crop',
  chicken21: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c21?w=64&h=64&fit=crop',
  chicken22: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c22?w=64&h=64&fit=crop',
  chicken23: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c23?w=64&h=64&fit=crop',
  chicken24: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c24?w=64&h=64&fit=crop',
  chicken25: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c25?w=64&h=64&fit=crop',
  chicken26: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c26?w=64&h=64&fit=crop',
  chicken27: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c27?w=64&h=64&fit=crop',
  chicken28: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c28?w=64&h=64&fit=crop',
  chicken29: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c29?w=64&h=64&fit=crop',
  chicken30: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c30?w=64&h=64&fit=crop',
  chicken31: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c31?w=64&h=64&fit=crop',
  chicken32: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c32?w=64&h=64&fit=crop',
  chicken33: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c33?w=64&h=64&fit=crop',
  chicken34: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c34?w=64&h=64&fit=crop',
  chicken35: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c35?w=64&h=64&fit=crop',
  chicken36: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c36?w=64&h=64&fit=crop',
  chicken37: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c37?w=64&h=64&fit=crop',
  chicken38: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c38?w=64&h=64&fit=crop',
  chicken39: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c39?w=64&h=64&fit=crop',
  chicken40: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c40?w=64&h=64&fit=crop',
  chicken41: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c41?w=64&h=64&fit=crop',
  chicken42: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c42?w=64&h=64&fit=crop',
  chicken43: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c43?w=64&h=64&fit=crop',
  chicken44: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c44?w=64&h=64&fit=crop',
  chicken45: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c45?w=64&h=64&fit=crop',
  chicken46: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c46?w=64&h=64&fit=crop',
  chicken47: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c47?w=64&h=64&fit=crop',
  chicken48: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c48?w=64&h=64&fit=crop',
  chicken49: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c49?w=64&h=64&fit=crop',
  chicken50: 'https://images.unsplash.com/photo-1800221409871-91b3f5f5b5c50?w=64&h=64&fit=crop'
};

const CHICKEN_IMG = IMAGES.chicken1;
const CHICK_IMG = IMAGES.chick1;
const EGG_IMG = IMAGES.chick1;
const DRUMSTICK_IMG = IMAGES.drumstick;

const TRANSLATIONS = {
  fr: {
    nav: { accueil: 'Accueil', pourquoi: 'Pourquoi manger du poulet ?', maison: 'Poulet a la maison', deals: 'Meilleures offres', recettes: 'Recettes', galerie: 'Galerie', flappy: 'Flappy Chicken', communaute: 'Communaute', roi: 'Roi Poulet', contact: 'Contact' },
    hero: { subtitle: 'Le poulet, c\'est bon, c\'est sain, c\'est pas cher, et ca se garde a la maison !', welcome: 'Bienvenue dans l\'univers du poulet.' },
    home: { whyBest: 'Pourquoi le poulet est le meilleur', didYouKnow: 'Le saviez-vous ?', bestDeals: 'Les meilleures offres de poulet', cheapest: 'Quel poulet est le moins cher ?', loading: 'Chargement...', priceUpdated: 'Prix mis a jour regulierement par notre equipe de poulets experts' },
    cards: [
      { title: 'Riche en proteines', text: 'Le poulet contient plus de proteines que le boeuf pour 100g. Ideal pour les sportifs et toute la famille !' },
      { title: 'Pas cher', text: 'Avec des prix a partir de 5.49EUR/kg, le poulet est la viande la plus abordable du marche.' },
      { title: 'Polyvalent', text: 'Roti, grille, en sauce, en salade, en sandwich... Le poulet s\'adapte a toutes les recettes !' },
      { title: 'Bon pour la sante', text: 'Faible en matieres grasses, riche en vitamines B6 et B12. Le poulet est bon pour le coeur.' },
      { title: 'Facile a elever', text: 'Vous pouvez avoir des poulets chez vous, meme avec un petit jardin. Ils sont faciles a elever !' },
      { title: 'Ecologique', text: 'Le poulet a une empreinte carbone plus faible que le boeuf ou le porc. Manger du poulet, c\'est bon pour la planete.' }
    ],
    cookie: 'Ce site utilise des cookies... euh, on veut dire des poulets ! En continuant, vous acceptez nos',
    cookieBtn: 'Accepter les Poulets',
    privacy: 'Poulets de Confidentialite',
    terms: "Conditions d'Utilisation",
    cookieLink: 'En savoir plus',
    factTitle: 'Factule Poulet',
    footer: 'Poulet Industrie - Le poulet c\'est la vie !',
    rights: 'Tous droits reserves (surtout le droit de manger du poulet)',
    deleteMsg: 'Supprimer',
    noMessages: 'Aucun message pour le moment. Soyez le premier a caqueter !',
    postBtn: 'Poster mon message poulet',
    authorPlaceholder: 'Votre pseudo (ex: PouletMaster)',
    msgPlaceholder: 'Votre message sur le poulet...',
    lastMessages: 'Derniers messages du poulailler',
    startGame: 'Commencer a jouer !',
    replay: 'Rejouer !',
    score: 'Score',
    best: 'Meilleur',
    gameDesc: 'Cliquez ou appuyez sur espace pour faire voler le poulet !',
    galleryTitle: 'Galerie Poulet',
    galleryDesc: 'Toutes les plus belles photos de poulets, poussins et coqs',
    statsTitle: 'Statistiques du Poulailler',
    recettesDesc: 'Les meilleures recettes pour cuisiner le poulet.',
    contactDesc: 'Une question, une suggestion ? Envoyez-nous un message !',
    contactName: 'Votre nom',
    contactNamePlaceholder: 'Entrez votre nom',
    contactEmail: 'Votre email',
    contactEmailPlaceholder: 'Entrez votre email',
    contactMsg: 'Votre message',
    contactMsgPlaceholder: 'Ecrivez votre message ici...',
    contactSend: 'Envoyer',
    contactSuccess: 'Message envoye avec succes !',
    contactError: 'Erreur lors de l\'envoi. Verifiez votre saisie.',
    newsletterPlaceholder: 'Votre email pour la newsletter',
    newsletterBtn: 'Newsletter',
    newsletterSuccess: 'Inscription reussie !',
    newsletterError: 'Email invalide ou deja inscrit.',
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair'
  },
  en: {
    nav: { accueil: 'Home', pourquoi: 'Why eat chicken?', maison: 'Chicken at home', deals: 'Best deals', recettes: 'Recipes', galerie: 'Gallery', flappy: 'Flappy Chicken', communaute: 'Community', roi: 'Chicken King', contact: 'Contact' },
    hero: { subtitle: 'Chicken is good, healthy, cheap, and you can keep them at home!', welcome: 'Welcome to the world of chicken.' },
    home: { whyBest: 'Why chicken is the best', didYouKnow: 'Did you know?', bestDeals: 'Best chicken deals', cheapest: 'Which chicken is cheapest?', loading: 'Loading...', priceUpdated: 'Prices regularly updated by our expert chicken team' },
    cards: [
      { title: 'Rich in protein', text: 'Chicken contains more protein than beef per 100g. Ideal for athletes and the whole family!' },
      { title: 'Cheap', text: 'With prices from 5.49EUR/kg, chicken is the most affordable meat on the market.' },
      { title: 'Versatile', text: 'Roasted, grilled, in sauce, in salad, in sandwich... Chicken adapts to all recipes!' },
      { title: 'Healthy', text: 'Low in fat, rich in vitamins B6 and B12. Chicken is good for the heart.' },
      { title: 'Easy to raise', text: 'You can have chickens at home, even with a small garden. They are easy to raise!' },
      { title: 'Eco-friendly', text: 'Chicken has a lower carbon footprint than beef or pork. Eating chicken is good for the planet.' }
    ],
    cookie: 'This site uses cookies... er, we mean chickens! By continuing, you accept our',
    cookieBtn: 'Accept the Chickens',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookieLink: 'Learn more',
    factTitle: 'Chicken Fact',
    footer: 'Chicken Industry - Chicken is life!',
    rights: 'All rights reserved (especially the right to eat chicken)',
    deleteMsg: 'Delete',
    noMessages: 'No messages yet. Be the first to cluck!',
    postBtn: 'Post my chicken message',
    authorPlaceholder: 'Your nickname (e.g. ChickenMaster)',
    msgPlaceholder: 'Your message about chicken...',
    lastMessages: 'Latest messages from the coop',
    startGame: 'Start playing!',
    replay: 'Play again!',
    score: 'Score',
    best: 'Best',
    gameDesc: 'Click or press space to make the chicken fly!',
    galleryTitle: 'Chicken Gallery',
    galleryDesc: 'All the best photos of chickens, chicks and roosters',
    statsTitle: 'Coop Statistics',
    recettesDesc: 'The best recipes for cooking chicken.',
    contactDesc: 'A question, a suggestion? Send us a message!',
    contactName: 'Your name',
    contactNamePlaceholder: 'Enter your name',
    contactEmail: 'Your email',
    contactEmailPlaceholder: 'Enter your email',
    contactMsg: 'Your message',
    contactMsgPlaceholder: 'Write your message here...',
    contactSend: 'Send',
    contactSuccess: 'Message sent successfully!',
    contactError: 'Error sending. Check your input.',
    newsletterPlaceholder: 'Your email for the newsletter',
    newsletterBtn: 'Newsletter',
    newsletterSuccess: 'Subscription successful!',
    newsletterError: 'Invalid email or already subscribed.',
    darkMode: 'Dark mode',
    lightMode: 'Light mode'
  }
};

let currentLang = localStorage.getItem('pouletLang') || 'fr';

function t(key) {
  const keys = key.split('.');
  let val = TRANSLATIONS[currentLang];
  for (const k of keys) { if (val) val = val[k]; }
  return val || key;
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('pouletLang', lang);
  document.querySelectorAll('.lang-fr, .lang-en').forEach(el => {
    el.style.display = el.classList.contains('lang-' + lang) ? '' : 'none';
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
  document.title = lang === 'fr' ? 'Poulet Industrie - Le Poulet c\'est la Vie !' : 'Chicken Industry - Chicken is Life!';
  translatePage();
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  initLangSwitcher();
  initDarkMode();
  initChickenRain();
  initChickenFacts();
  initDeals();
  initBreeds();
  initMessages();
  initCookieBanner();
  initWalkingChicken();
  initGalleryLightbox();
  initStats();
  initTabs();
  initRecipes();
  initContact();
  initNewsletter();
  switchLang(currentLang);
});

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });
}

function initMenuToggle() {
  const btn = document.querySelector('.menu-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  }
}

function initChickenRain() {
  const container = document.querySelector('.chicken-rain');
  if (!container) return;
  const imgs = [IMAGES.chicken1, IMAGES.chicken2, IMAGES.rooster1, IMAGES.speckled, IMAGES.chick1, IMAGES.hen];
  for (let i = 0; i < 20; i++) {
    const img = document.createElement('img');
    img.src = imgs[Math.floor(Math.random() * imgs.length)];
    img.className = 'rain-chicken';
    img.alt = '';
    img.style.left = Math.random() * 100 + '%';
    img.style.animationDuration = (Math.random() * 6 + 5) + 's';
    img.style.animationDelay = (Math.random() * 12) + 's';
    img.style.width = (Math.random() * 24 + 20) + 'px';
    img.style.height = img.style.width;
    container.appendChild(img);
  }
}

function initWalkingChicken() {
  const existing = document.querySelector('.walking-chicken');
  if (existing) {
    const imgs = [IMAGES.chicken1, IMAGES.chicken2, IMAGES.rooster1, IMAGES.speckled];
    existing.src = imgs[Math.floor(Math.random() * imgs.length)];
    setInterval(() => {
      existing.src = imgs[Math.floor(Math.random() * imgs.length)];
    }, 12000);
  }
}

function initChickenFacts() {
  const box = document.getElementById('chicken-fact');
  if (!box) return;
  const loadFact = () => {
    fetch('/api/facts?lang=' + currentLang)
      .then(r => r.json())
      .then(data => {
        const p = box.querySelector('p');
        if (p) p.textContent = data.fact;
      });
  };
  loadFact();
  setInterval(loadFact, 8000);
}

function initDeals() {
  const tbody = document.getElementById('deals-body');
  if (!tbody) return;
  fetch('/api/deals')
    .then(r => r.json())
    .then(data => {
      tbody.innerHTML = data.map(d => `
        <tr>
          <td><img src="${d.logo}" class="store-logo" alt="${d.enseigne}" onerror="this.src='${IMAGES.chicken2}'"> ${d.enseigne}</td>
          <td>${d.produit}</td>
          <td><strong>${d.prix}</strong></td>
          <td>${d.note}</td>
        </tr>
      `).join('');
    });
}

function initBreeds() {
  const container = document.getElementById('breed-list');
  if (!container) return;
  const loadBreeds = () => {
    fetch('/api/breeds?lang=' + currentLang)
      .then(r => r.json())
      .then(data => {
        container.innerHTML = data.map(b => `
          <div class="breed-item">
            <h4><img src="${IMAGES.rooster1}" class="emoji-img" alt=""> ${b.nom}</h4>
            <div class="price">${b.prix}</div>
            <p>${b.description}</p>
          </div>
        `).join('');
      });
  };
  loadBreeds();
}

function initMessages() {
  const form = document.getElementById('message-form');
  const list = document.getElementById('message-list');
  if (!form || !list) return;

  function loadMessages() {
    fetch('/api/messages')
      .then(r => r.json())
      .then(data => {
        if (data.length === 0) {
          list.innerHTML = '<p style="color:#999;">' + t('noMessages') + '</p>';
          return;
        }
        list.innerHTML = data.map(m => `
          <div class="message">
            <button class="delete-btn" data-id="${m.id}" title="${t('deleteMsg')}">x</button>
            <div class="author">${m.author} <span class="date">${new Date(m.date).toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US')}</span></div>
            <div class="text">${m.text}</div>
          </div>
        `).join('');
        document.querySelectorAll('.delete-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            fetch('/api/messages/' + btn.dataset.id, { method: 'DELETE' })
              .then(() => loadMessages());
          });
        });
      });
  }

  loadMessages();
  setInterval(loadMessages, 15000);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('msg-author').value;
    const text = document.getElementById('msg-text').value;
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, text, lang: currentLang })
    }).then(() => {
      form.reset();
      loadMessages();
    });
  });
}

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  const btn = document.getElementById('accept-cookies');
  if (!btn) return;
  if (localStorage.getItem('cookiesAccepted')) return;
  banner.style.display = 'flex';
  btn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });
}

function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src.replace('w=200&h=180', 'w=800&h=600');
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
}

function initStats() {
  const el = document.getElementById('stats');
  if (!el) return;
  fetch('/api/stats')
    .then(r => r.json())
    .then(data => {
      el.innerHTML = `
        <div class="card-grid" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))">
          <div class="card" style="text-align:center;padding:1rem;"><strong style="font-size:2rem;color:var(--chicken-red);">${data.totalBreeds}</strong><br>Races de poulets</div>
          <div class="card" style="text-align:center;padding:1rem;"><strong style="font-size:2rem;color:var(--chicken-red);">${data.totalDeals}</strong><br>Offres</div>
          <div class="card" style="text-align:center;padding:1rem;"><strong style="font-size:2rem;color:var(--chicken-red);">${data.totalFacts}</strong><br>Facts</div>
          <div class="card" style="text-align:center;padding:1rem;"><strong style="font-size:2rem;color:var(--chicken-red);">${data.totalMessages}</strong><br>Messages</div>
        </div>
      `;
    });
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.style.display = 'block';
    });
  });
}

function initDarkMode() {
  const toggle = document.getElementById('dark-toggle');
  if (!toggle) return;
  const stored = localStorage.getItem('pouletDark');
  if (stored === 'true') document.body.classList.add('dark');
  toggle.textContent = stored === 'true' ? t('lightMode') : t('darkMode');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('pouletDark', isDark);
    toggle.textContent = isDark ? t('lightMode') : t('darkMode');
  });
}

function initRecipes() {
  const container = document.getElementById('recipe-list');
  if (!container) return;
  fetch('/api/recettes?lang=' + currentLang)
    .then(r => r.json())
    .then(data => {
      container.innerHTML = data.map(r => `
        <div class="recipe-card">
          <h3><img src="${IMAGES.grilled}" class="recipe-img" alt=""> ${r.nom}</h3>
          <div class="recipe-meta"><span>${r.temps}</span> | <span>${r.difficulte}</span></div>
          <h4 data-i18n="ingredientsLabel">Ingredients:</h4>
          <ul>${r.ingredients.map(i => '<li>' + i + '</li>').join('')}</ul>
          <h4 data-i18n="instructionsLabel">Instructions:</h4>
          <p>${r.instructions}</p>
        </div>
      `).join('');
    });
}

function initContact() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form || !status) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    }).then(r => {
      if (r.ok) {
        status.textContent = t('contactSuccess');
        status.style.color = 'var(--chicken-green)';
        form.reset();
      } else {
        status.textContent = t('contactError');
        status.style.color = 'var(--chicken-red)';
      }
    }).catch(() => {
      status.textContent = t('contactError');
      status.style.color = 'var(--chicken-red)';
    });
  });
}

function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const status = form.querySelector('.newsletter-status');
      const email = input.value;
      fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }).then(r => {
        if (r.ok) {
          if (status) status.textContent = t('newsletterSuccess');
          input.value = '';
        } else {
          if (status) status.textContent = t('newsletterError');
        }
      }).catch(() => {
        if (status) status.textContent = t('newsletterError');
      });
    });
  });
}
