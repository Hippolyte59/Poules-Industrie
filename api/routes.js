const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const chickenFacts = [
  "Le poulet est la viande la plus consommee au monde!",
  "Un poulet peut courir jusqu'a 14 km/h.",
  "Les poules pondent environ 300 oeufs par an.",
  "Il existe plus de 500 races de poulets differentes.",
  "Le poulet contient plus de proteines que le boeuf pour 100g.",
  "Les poules peuvent reconnaitre plus de 100 visages differents.",
  "Un oeuf de poule met 21 jours a eclore.",
  "Le poulet est riche en vitamines B6 et B12.",
  "La Chine est le plus grand producteur de poulet au monde.",
  "Les poules dorment avec un oeil ouvert pour surveiller les predateurs."
];

const chickenFactsEN = [
  "Chicken is the most consumed meat in the world!",
  "A chicken can run up to 14 km/h.",
  "Hens lay about 300 eggs per year.",
  "There are more than 500 different chicken breeds.",
  "Chicken contains more protein than beef per 100g.",
  "Hens can recognize more than 100 different faces.",
  "A chicken egg takes 21 days to hatch.",
  "Chicken is rich in vitamins B6 and B12.",
  "China is the largest chicken producer in the world.",
  "Hens sleep with one eye open to watch for predators."
];

const chickenDeals = [
  { enseigne: "Leclerc", produit: "Poulet fermier label rouge", prix: "8.90EUR/kg", note: "5/5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/E._Leclerc_logo.png/320px-E._Leclerc_logo.png", logoAlt: "Leclerc" },
  { enseigne: "Carrefour", produit: "Poulet standard", prix: "6.50EUR/kg", note: "4/5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Carrefour_logo.svg/120px-Carrefour_logo.svg.png", logoAlt: "Carrefour" },
  { enseigne: "Intermarché", produit: "Poulet bio eleve en plein air", prix: "10.90EUR/kg", note: "5/5", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Intermarch%C3%A9.png/120px-Intermarch%C3%A9.png", logoAlt: "Intermarché" },
  { enseigne: "Lidl", produit: "Poulet roti", prix: "5.99EUR/kg", note: "4/5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lidl_logo.png/120px-Lidl_logo.png", logoAlt: "Lidl" },
  { enseigne: "Aldi", produit: "Poulet frais", prix: "5.49EUR/kg", note: "3/5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Aldi_logo.svg/120px-Aldi_logo.svg.png", logoAlt: "Aldi" },
  { enseigne: "Super U", produit: "Poulet pic", prix: "7.20EUR/kg", note: "4/5", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f0/Super_U_logo.svg/120px-Super_U_logo.svg.png", logoAlt: "Super U" },
  { enseigne: "Auchan", produit: "Poulet label rouge", prix: "9.50EUR/kg", note: "5/5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Auchan_logo.svg/120px-Auchan_logo.svg.png", logoAlt: "Auchan" }
];

const chickenBreeds = [
  { nom: "Poulet de Bresse", nomEN: "Bresse Chicken", prix: "15-25EUR", description: "Le roi des poulets, AOC francaise", descriptionEN: "The king of chickens, French AOC" },
  { nom: "Poulet Noir de Janze", nomEN: "Black Chicken of Janze", prix: "12-18EUR", description: "Race ancienne, chair savoureuse", descriptionEN: "Ancient breed, tasty meat" },
  { nom: "Poulet Cou Nu", nomEN: "Naked Neck Chicken", prix: "8-12EUR", description: "Race rustique, ideale pour debutants", descriptionEN: "Hardy breed, ideal for beginners" },
  { nom: "Poulet Sussex", nomEN: "Sussex Chicken", prix: "5-10EUR", description: "Bon pondoir, viande tendre", descriptionEN: "Good layer, tender meat" },
  { nom: "Poulet Wyandotte", nomEN: "Wyandotte Chicken", prix: "8-15EUR", description: "Race decorative et bonne pondeuse", descriptionEN: "Ornamental breed, good layer" },
  { nom: "Poulet Leghorn", nomEN: "Leghorn Chicken", prix: "5-8EUR", description: "Excellente pondeuse, viande correcte", descriptionEN: "Excellent layer, decent meat" },
  { nom: "Poulet Plymouth Rock", nomEN: "Plymouth Rock Chicken", prix: "6-10EUR", description: "Race americaine, viande juteuse", descriptionEN: "American breed, juicy meat" }
];

const chickenTips = [
  { fr: "Conservez le poulet au frigo entre 0 et 4C", en: "Store chicken in the fridge between 0 and 4C" },
  { fr: "Ne lavez pas le poulet cru, cela propage les bacteries", en: "Do not wash raw chicken, it spreads bacteria" },
  { fr: "Cuisez le poulet a coeur (75C minimum)", en: "Cook chicken thoroughly (75C minimum)" },
  { fr: "Les restes de poulet se conservent 3 jours au frigo", en: "Chicken leftovers keep 3 days in the fridge" },
  { fr: "Le poulet surgele se conserve jusqu'a 6 mois", en: "Frozen chicken keeps up to 6 months" }
];

let messages = [
  { id: 1, author: "Roi Poulet", text: "Bienvenue sur Poulet Industrie !", date: new Date().toISOString(), lang: "fr" },
  { id: 2, author: "ChickenKing", text: "Welcome to Chicken Industry!", date: new Date().toISOString(), lang: "en" }
];

let nextId = 3;

const chickenRecipes = [
  { id: 1, nom: "Poulet roti au four", nomEN: "Roast Chicken", temps: "1h30", difficulte: "Facile", difficulteEN: "Easy", ingredients: ["1 poulet fermier", "4 gousses d'ail", "2 branches de romarin", "Sel, poivre", "2 cuil. d'huile d'olive"], ingredientsEN: ["1 free-range chicken", "4 garlic cloves", "2 rosemary sprigs", "Salt, pepper", "2 tbsp olive oil"], instructions: "Prechauffez le four a 200C. Badigeonnez le poulet d'huile d'olive. Salez, poivrez. Ajoutez l'ail et le romarin. Enfournez 1h15. Arrosez toutes les 20 min. Laissez reposer 10 min avant de servir.", instructionsEN: "Preheat oven to 200C. Brush chicken with olive oil. Season with salt and pepper. Add garlic and rosemary. Roast for 1h15. Baste every 20 min. Rest 10 min before serving." },
  { id: 2, nom: "Poulet curry coco", nomEN: "Coconut Curry Chicken", temps: "40 min", difficulte: "Moyen", difficulteEN: "Medium", ingredients: ["4 filets de poulet", "400ml lait de coco", "2 cuil. de curry en poudre", "1 oignon", "2 gousses d'ail", "Riz basmati"], ingredientsEN: ["4 chicken breasts", "400ml coconut milk", "2 tbsp curry powder", "1 onion", "2 garlic cloves", "Basmati rice"], instructions: "Faites revenir l'oignon et l'ail. Ajoutez le poulet coupe en des et le curry. Versez le lait de coco. Laissez mijoter 20 min. Servez avec du riz.", instructionsEN: "Saute onion and garlic. Add diced chicken and curry powder. Pour coconut milk. Simmer 20 min. Serve with rice." },
  { id: 3, nom: "Salade de poulet grille", nomEN: "Grilled Chicken Salad", temps: "20 min", difficulte: "Facile", difficulteEN: "Easy", ingredients: ["2 filets de poulet", "Salade verte", "Tomates cerises", "1 avocat", "Vinaigrette", "Pignons de pin"], ingredientsEN: ["2 chicken breasts", "Green salad", "Cherry tomatoes", "1 avocado", "Vinaigrette dressing", "Pine nuts"], instructions: "Grillez les filets de poulet 6 min par face. Laissez refroidir et coupez en lamelles. Melangez avec la salade, les tomates, l'avocat. Ajoutez la vinaigrette et les pignons.", instructionsEN: "Grill chicken breasts 6 min each side. Cool and slice. Mix with salad, tomatoes, avocado. Add dressing and pine nuts." },
  { id: 4, nom: "Poulet basquaise", nomEN: "Basque Chicken", temps: "1h", difficulte: "Moyen", difficulteEN: "Medium", ingredients: ["4 cuisses de poulet", "2 poivrons (rouge, vert)", "3 tomates", "1 oignon", "2 gousses d'ail", "Piment d'Espelette"], ingredientsEN: ["4 chicken thighs", "2 bell peppers (red, green)", "3 tomatoes", "1 onion", "2 garlic cloves", "Espelette pepper"], instructions: "Faites dorer les cuisses. Reservez. Faites revenir l'oignon, l'ail, les poivrons. Ajoutez les tomates et le piment. Remettez le poulet. Laissez mijoter 40 min.", instructionsEN: "Brown chicken thighs. Set aside. Saute onion, garlic, peppers. Add tomatoes and Espelette pepper. Return chicken. Simmer 40 min." }
];

let contactMessages = [];
let newsletterEmails = [];

router.get('/facts', (req, res) => {
  const lang = req.query.lang || 'fr';
  const facts = lang === 'en' ? chickenFactsEN : chickenFacts;
  const random = facts[Math.floor(Math.random() * facts.length)];
  res.json({ fact: random, all: facts, lang });
});

router.get('/deals', (req, res) => {
  const sortBy = req.query.sort || 'prix';
  let sorted = [...chickenDeals];
  if (sortBy === 'prix') {
    sorted.sort((a, b) => parseFloat(a.prix) - parseFloat(b.prix));
  } else if (sortBy === 'note') {
    sorted.sort((a, b) => b.note.localeCompare(a.note));
  }
  res.json(sorted);
});

router.get('/breeds', (req, res) => {
  const lang = req.query.lang || 'fr';
  const sorted = [...chickenBreeds].sort((a, b) => {
    const priceA = parseFloat(a.prix.replace(/[^0-9.]/g, ''));
    const priceB = parseFloat(b.prix.replace(/[^0-9.]/g, ''));
    return priceA - priceB;
  });
  const mapped = sorted.map(b => ({
    nom: lang === 'en' ? b.nomEN : b.nom,
    prix: b.prix,
    description: lang === 'en' ? b.descriptionEN : b.description
  }));
  res.json(mapped);
});

router.get('/tips', (req, res) => {
  const lang = req.query.lang || 'fr';
  const tips = lang === 'en' ? chickenTips.map(t => t.en) : chickenTips.map(t => t.fr);
  res.json({ tips, lang });
});

router.get('/messages', (req, res) => {
  const lang = req.query.lang || 'all';
  let filtered = [...messages];
  if (lang !== 'all') filtered = filtered.filter(m => m.lang === lang);
  res.json(filtered.sort((a, b) => new Date(b.date) - new Date(a.date)));
});

router.post('/messages', [
  body('author').trim().isLength({ min: 1, max: 50 }).escape(),
  body('text').trim().isLength({ min: 1, max: 500 }).escape(),
  body('lang').optional().isIn(['fr', 'en'])
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Donnees invalides. Pseudo (1-50 car.) et message (1-500 car.) requis.' });
  }
  const message = {
    id: nextId++,
    author: req.body.author,
    text: req.body.text,
    date: new Date().toISOString(),
    lang: req.body.lang || 'fr'
  };
  messages.push(message);
  if (messages.length > 100) messages.shift();
  res.status(201).json(message);
});

router.delete('/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = messages.findIndex(m => m.id === id);
  if (index === -1) return res.status(404).json({ error: 'Message non trouve' });
  messages.splice(index, 1);
  res.json({ success: true });
});

router.get('/king', (req, res) => {
  res.json({
    title: "Le Roi Poulet",
    titleEN: "The Chicken King",
    quote: "Le poulet n'est pas juste un repas, c'est un mode de vie.",
    quoteEN: "Chicken is not just a meal, it's a way of life.",
    royalDecree: "Que tous les poulets du monde soient celebres chaque jour !",
    royalDecreeEN: "May all chickens of the world be celebrated every day!"
  });
});

router.get('/stats', (req, res) => {
  res.json({
    totalFacts: chickenFacts.length,
    totalDeals: chickenDeals.length,
    totalBreeds: chickenBreeds.length,
    totalMessages: messages.length,
    messagesToday: messages.filter(m => new Date(m.date).toDateString() === new Date().toDateString()).length,
    totalRecipes: chickenRecipes.length,
    totalContact: contactMessages.length,
    totalNewsletter: newsletterEmails.length
  });
});

router.get('/recipes', (req, res) => {
  const lang = req.query.lang || 'fr';
  const mapped = chickenRecipes.map(r => ({
    id: r.id,
    nom: lang === 'en' ? r.nomEN : r.nom,
    temps: r.temps,
    difficulte: lang === 'en' ? r.difficulteEN : r.difficulte,
    ingredients: lang === 'en' ? r.ingredientsEN : r.ingredients,
    instructions: lang === 'en' ? r.instructionsEN : r.instructions
  }));
  res.json(mapped);
});

router.get('/recettes', (req, res) => {
  const lang = req.query.lang || 'fr';
  const mapped = chickenRecipes.map(r => ({
    id: r.id,
    nom: lang === 'en' ? r.nomEN : r.nom,
    temps: r.temps,
    difficulte: lang === 'en' ? r.difficulteEN : r.difficulte,
    ingredients: lang === 'en' ? r.ingredientsEN : r.ingredients,
    instructions: lang === 'en' ? r.instructionsEN : r.instructions
  }));
  res.json(mapped);
});

router.post('/contact', [
  body('name').trim().isLength({ min: 1, max: 100 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 1, max: 2000 }).escape()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Donnees invalides. Verifiez votre saisie.' });
  }
  const entry = {
    id: contactMessages.length + 1,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    date: new Date().toISOString()
  };
  contactMessages.push(entry);
  if (contactMessages.length > 200) contactMessages.shift();
  res.status(201).json({ success: true, message: 'Message envoye avec succes !' });
});

router.post('/newsletter', [
  body('email').isEmail().normalizeEmail()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Email invalide.' });
  }
  if (newsletterEmails.includes(req.body.email)) {
    return res.status(409).json({ error: 'Cet email est deja inscrit.' });
  }
  newsletterEmails.push(req.body.email);
  if (newsletterEmails.length > 1000) newsletterEmails.shift();
  res.status(201).json({ success: true, message: 'Inscription reussie !' });
});

module.exports = router;