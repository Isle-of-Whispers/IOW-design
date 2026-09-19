const MOODBOARD = [
  { titre: "Zone 1",
    images: ["https://i.pinimg.com/1200x/c4/3e/a4/c43ea4a193d533c1c1d767c8562e9e91.jpg",
             "https://i.pinimg.com/736x/99/47/c2/9947c200726a178c059ef9135d8814ec.jpg",
             "https://i.pinimg.com/1200x/b7/25/d2/b725d2ecb40c003604921e492898351e.jpg"] },

  { titre: "Zone 2",
    images: ["https://i.pinimg.com/1200x/6d/b7/37/6db7376352216fb1f4a4e3cc8e3533ae.jpg",
             "https://i.pinimg.com/1200x/f1/82/f9/f182f953b8badfe41d53302d8c6472c3.jpg",
             "https://i.pinimg.com/1200x/ec/b9/ff/ecb9fff0b612ba2b80208f1b1a6e03ed.jpg"] },

  { titre: "Zone 3",
    images: ["https://i.pinimg.com/736x/a9/0d/65/a90d6511362366978e092ec18e6ea3b3.jpg",
             "https://i.pinimg.com/736x/15/20/9c/15209c7f5709ca3690efe0eb8294a7d5.jpg",
             "https://i.pinimg.com/736x/f9/70/0c/f9700ced9c4c938baf148d833b6a30c2.jpg"] },
];

/* ===== chapitres : id, onglet, titre, phrase ===== */

const CHAPITRES = [
  ["reglement",  "Le règlement",          "Le règlement",          "à lire avant de s'inscrire",                     "Introduction"],
  ["arcanes",    "Les groupes",           "Les groupes",           "six arcanes majeures",                           "Introduction"],
  ["synopsis",   "Synopsis",              "Synopsis",              "l'île en quelques lignes",                       "Introduction"],
  ["mj",         "Le Maître du Jeu",      "Le Maître du Jeu",      "quand et comment le staff intervient",           "Introduction"],
  ["vie",        "Vivre sur Virey",       "Vivre sur Virey",       "le quotidien",                                   "Annexes sur l'île"],
  ["histoire",   "L'histoire de Virey",   "L'histoire de Virey",   "des origines à aujourd'hui",                     "Annexes sur l'île"],
  ["festival",   "Festival de l'occulte", "Festival de l'occulte", "fin octobre, chaque année",                      "Annexes sur l'île"],
  ["voyante",    "La Voyante",            "La Voyante",            "le tirage",                                      "Annexes sur l'île"],
  ["paranormal", "Le paranormal",         "Le paranormal",         "ce qui ne s'explique pas",                       "Annexes sur l'île"],
  ["carte",      "Carte de l'île",        "Carte de l'île",        "survolez un point, ou choisissez dans la liste", "Annexes sur l'île"]
];


/* ===== lieux : nom, cat, x, y, images, texte, lien =====
   coordonnées : ouvrir la page avec #placer, cliquer sur la carte s'il faut en rajouter des nouveaux */

const LIEUX = [
/* Old Creek */
 { nom: "Workman's club", cat: "Boîte de nuit", x: 27.9, y: 48.4,
    images: ["https://i.pinimg.com/1200x/91/b1/8b/91b18b3b446072eac4546cf29d58c239.jpg",
"https://i.pinimg.com/736x/ca/67/05/ca6705159560ab1153b5db6dec53d659.jpg"], texte: "Aménagé dans d'anciens ateliers portuaires en granit sombre, ce club nocturne a conservé ses hauts volumes et ses dalles de pierre polies pour devenir la boîte de nuit la plus populaire de l'île.", lien: "https://isle-of-whispers.forumactif.com/f30-workman-s-club" },
  { nom: "Shakespaw", cat: "Café à chats", x: 27.7, y: 46.7,
    images: ["https://i.pinimg.com/1200x/55/17/3c/55173c7e6e7dd94014cf64485f34b0af.jpg",
"https://i.pinimg.com/736x/5d/47/fc/5d47fcdd00d1f7627894d93185712ba0.jpg"], texte: "Ce salon de thé douillet est le refuge exclusif d'une dizaine de chats trouvés dans les ruelles, qui dorment en boule sur les banquettes en velours ou se faufilent entre les tables basses.", lien: "https://isle-of-whispers.forumactif.com/f31-shakespaw" },
  { nom: "Cercle des Citoyens", cat: "Maison associative", x: 30.2, y: 42.0,
    images: ["https://i.pinimg.com/736x/f6/a4/17/f6a417b37755af39c174941e24b9f25b.jpg",
"https://i.pinimg.com/736x/20/f3/db/20f3dbc2ffded2fba762a851ac24e0b2.jpg"], texte: "Aménagé dans un ancien entrepôt de stockage maritime en pierre, ce grand bâtiment communal a été réhabilité en maison associative de quartier.", lien: "https://isle-of-whispers.forumactif.com/f32-le-cercle-des-citoyens" },
  { nom: "L'Officine des Sorcières", cat: "Boutique hybride", x: 27.5, y: 44.3,
    images: ["https://i.pinimg.com/736x/e1/a6/a9/e1a6a984f8103e91e7fda47d401f0041.jpg",
"https://i.pinimg.com/1200x/92/db/19/92db19a5268d7defcc173eb63efa1d00.jpg"], texte: "Boutique hybride à la façade de bois sombre, ce commerce réunit une épicerie de produits du quotidien et une herboristerie traditionnelle. Entre deux rayons d'alimentation, les étagères proposent du matériel pour les initiés comme pour les curieux. C'est aussi là que la Voyante laisse aussi ses prédictions pour qui s'y intéresse.", lien: "https://isle-of-whispers.forumactif.com/f33-l-officine-des-sorcieres" },
  { nom: "Manoir de Ravencrag", cat: "Musée de curiosités", x: 33.6, y: 46.2,
    images: ["https://i.pinimg.com/736x/4f/4f/cc/4f4fccc6fcd843a26d40fec5ea293dab.jpg",
"https://i.pinimg.com/736x/54/68/7b/54687ba680832875112ecfca7a3d9e39.jpg"], texte: "Ce vieux manoir austère en granit noirci abrite le musée officieux des curiosités et des légendes de l'île, né de la collection personnelle d'un vieil érudit passionné du folklore de l'île aux murmures.", lien: "https://isle-of-whispers.forumactif.com/f34-le-manoir-de-ravencrag" },

/*Front de mer */
  { nom: "North Cove Marina", cat: "Marina modernisée", x: 22.5, y: 45.7,
    images: ["https://i.pinimg.com/736x/3c/d6/1e/3cd61e02c46f4ce90d6ee457bc9f4fc8.jpg",
"https://i.pinimg.com/1200x/1b/60/c6/1b60c65d5875e03b12951b9ee39956f1.jpg"], texte: "Pôle d'attraction balnéaire et vitrine commerciale de la côte, cette marina modernisée est le point de départ incontournable des sorties en mer : kiosques de réservation pour observer les colonies de phoques ou pontons d'embarquement pour les vedettes d'excursion vers les îlots rocheux.", lien: null },
  { nom: "Ye Old Sailor", cat: "Pub", x: 25.3, y: 46.0,
    images: ["https://i.pinimg.com/736x/7c/10/80/7c1080a65d2ab209d3416c4ea9f7f334.jpg",
"https://i.pinimg.com/736x/22/29/42/2229426156dcf23f1ea9bbbcebd0e1f4.jpg"], texte: "Plus vieux pub-brasserie de la côte, cette bâtisse aux lambris imprégnés de fumée de tourbe sert de repaire à tous les habitués ou touristes de passage.", lien: null },
  { nom: "Pôle Nautique", cat: "Activités aquatiques", x: 22.2, y: 48.8,
    images: ["https://i.pinimg.com/1200x/e2/33/ab/e233ab6ddb832f5f34bb5b7f8a4b9edb.jpg",
 "https://i.pinimg.com/736x/3b/c8/aa/3bc8aa8f40a0f4322c68dfde31a00085.jpg"], texte: "Installé dans un grand bâtiment en bois avec ponton flottant sur les flots, ce club concentre l'ensemble des loisirs nautiques de la côte.", lien: null },
  { nom: "Bazar du Fond de Cale", cat: "Brocante", x: 24.6, y: 47.2,
    images: ["https://i.pinimg.com/1200x/19/3b/fa/193bfa759c50d21c474427e02e79cc76.jpg",
  "https://i.pinimg.com/1200x/11/e5/b6/11e5b6563e00d6683721ba648da1c5bc.jpg"], texte: "Véritable institution ouverte depuis plusieurs décennies. Initialement une casse maritime, c'est un capharnaüm monumental où s'entassent maintenant des montagnes de bric-à-brac. Bricoleurs du dimanche et chineurs viennent y fouiller des heures dans l'espoir de dégoter une pièce rare ou de négocier un meuble en chêne à prix dérisoire.", lien: null },

/* Nord de la ville */
  { nom: "Highcliff", cat: "Quartier huppé", x: 37.3, y: 27.7,
    images: ["https://i.pinimg.com/736x/c0/6f/0b/c06f0bca0f0ca7f348da896ec52ac68b.jpg",
"https://i.pinimg.com/736x/10/bd/39/10bd391983d8b2622a09d6ffc17d8200.jpg"], texte: "Bâti à flanc de corniche face à la mer, ce quartier bourgeois avec ses imposants manoirs anglo-normands en pierre de taille. Cachées derrière de hauts murets de granit envahis d'hortensias, ces villas bourgeoises disposent souvent d'allées en gravier privées où dorment de vieilles berlines.", lien: null },
  { nom: "Bellecombe", cat: "Quartier résidentiel", x: 29.7, y: 33.8,
    images: ["https://i.pinimg.com/1200x/52/23/94/52239475d79d464a91824158aa9511fd.jpg",
"https://i.pinimg.com/736x/c0/11/07/c011077922639a628ad7f2f23bb04485.jpg"], texte: "Niché dans un repli plus abrité en contrebas des falaises, ce quartier résidentiel populaire et familial se compose de petites maisons de ville mitoyennes en crépi clair et de pavillons de bord de mer. L'ambiance y est conviviale.", lien: null },
  { nom: "Vision's equestrian center", cat: "Centre équestre", x: 45.6, y: 33.5,
    images: ["https://i.pinimg.com/736x/70/7a/d7/707ad71b40ed3a504e45564e07f72f36.jpg",
"https://i.pinimg.com/736x/53/c6/28/53c628c68f3481052bdcad18a30889a5.jpg"], texte: "Cœur battant de la culture équine de l'île, cet immense complexe dispose d'infrastructures professionnelles : un grand manège, ses carrières de sable, les écuries ou les grandes pâtures à perte de vue. L'établissement gère à la fois l'élevage sur place, l'école d'équitation, les pensions pour propriétaires et le départ des randonnées côtières.", lien: null },
  { nom: "Sables des sirènes", cat: "Plage", x: 24.8, y: 37.6,
    images: ["https://i.pinimg.com/1200x/c4/f1/14/c4f1146db42eef79e8353240f368166f.jpg",
"https://i.pinimg.com/1200x/f6/88/9e/f6889e42381f3e226ba23a3559da9ab1.jpg"], texte: "Plus vaste étendue de sable fin de l'île, cette grande plage ouverte est à la fois le spot de baignade le plus prisé des familles locales et une grève élégante bordée par les terrasses basses du secteur Nord.", lien: null },
  { nom: "Salt & Buns", cat: "Fast food", x: 36.5, y: 37.4,
    images: ["https://i.pinimg.com/736x/31/47/c6/3147c6512aca960e2cfa8f1d628620ad.jpg",
"https://i.pinimg.com/736x/57/5f/72/575f72e771661765b18f82c700f300bb.jpg"], texte: "Fast-food de quartier logé dans un ancien atelier d'angle, cette enseigne locale n'a rien à envier aux grandes chaines.", lien: null },

/* Sud de la ville */
  { nom: "Services publics", cat: "Secours & institution", x: 25.0, y: 55.3,
    images: ["https://i.pinimg.com/736x/f3/4b/02/f34b0277bb8f3bf71f13d9f4a21c16b3.jpg",
"https://i.pinimg.com/736x/b1/a3/0e/b1a30e0e5a7abbaa2a13179b32c65b59.jpg"], texte: "Installé sur une vaste esplanade fonctionnelle du Sud, ce complexe contemporain regroupe l'ensemble des secours et institutions de l'île.", lien: null },
  { nom: "Kervenez", cat: "Résidences", x: 22.8, y: 54.2,
    images: ["https://i.pinimg.com/736x/fc/76/95/fc76958bbd3cb12c1e77c2e3832f8b02.jpg",
"https://i.pinimg.com/736x/1d/34/d0/1d34d064310a8b179bf69ce53dc9ffeb.jpg"], texte: "Vaste ensemble d'habitations calmes, ce secteur réunit des pavillons récents, ainsi que de petits immeubles contemporains. Très prisé des soignants de l'hôpital et des familles d'actifs, l'endroit offre des trottoirs larges bordés de haies soignées.", lien: null },
  { nom: "Montvale Retail Park", cat: "Centre commercial", x: 30.2, y: 53.0,
    images: ["https://i.pinimg.com/1200x/7f/35/89/7f358977da4212a1a4fb0078d5209bf8.jpg",
"https://i.pinimg.com/236x/4d/d6/4e/4dd64e251221877fa9f274cdc3f73e50.jpg"], texte: "Grande zone marchande périphérique déployée autour de vastes parkings, elle réunit la galerie couverte des enseignes nationales, l'hypermarché de l'île et les fast-foods franchisés comme McDonald's ou Burger King. ", lien: null },

/* nord de l'île */
  { nom: "L'îlot aux fées", cat: "Petite île", x: 32.7, y: 15.0,
    images: ["https://i.pinimg.com/1200x/b1/39/48/b139486dac765bf60e7f0a43d3d04d2b.jpg",
"https://i.pinimg.com/1200x/03/04/26/030426ec5cb6e6977ba653b7835948fd.jpg"], texte: "Bien que difficile d'accès en dehors des marées basses ou d'une traversée en kayak, le site attire les curieux pour son atmosphère féerique : des lièvres peu farouches y gambadent sans craindre l'humain, tandis que des oiseaux aux plumages rares viennent s'y abriter du vent. Le folklore local affirme que l'îlot est le refuge des fées.", lien: null },
  { nom: "Phare Sirius", cat: "Nord de l'île", x: 46.4, y: 10.3,
    images: ["https://i.pinimg.com/1200x/bb/21/42/bb2142ba856ea24b6a3a8dd49de2809a.jpg",
"https://i.pinimg.com/736x/fc/5c/e5/fc5ce5a2373bbdb9777a7ec0542cfd09.jpg"], texte: "Tour massive en granit blanc juchée à la pointe septentrionale de l'île, ce phare centenaire est aujourd'hui désaffecté. Réputé très lourdement hanté par harpies et sirènes selon les histoires locales. Ses quartiers de gardien restent condamnés par des grilles rouillées et personne n'ose y passer la nuit.", lien: null },
  { nom: "Lac Feufollet", cat: "Lac", x: 78.6, y: 20.0,
    images: ["https://i.pinimg.com/1200x/7c/be/46/7cbe467cb9b4c74818e1ec932039f04c.jpg",
"https://i.pinimg.com/1200x/d4/22/07/d42207e27b787b41671cef781de9b2a0.jpg"], texte: "lac avec petite cascade qui vient de la montagne", lien: null },
  { nom: "Hameau", cat: "Hameau", x: 51.2, y: 20.5,
    images: ["https://i.pinimg.com/1200x/51/36/e7/5136e7e1dd7a376f9a434009a956c302.jpg",
"https://i.pinimg.com/736x/68/94/43/6894433f6171586f8b83d56a547aea43.jpg"], texte: "j'aurais pu écrire chameau.", lien: null },
  { nom: "Plage des Amants", cat: "Coin secret", x: 89.9, y: 26.0,
    images: ["https://i.pinimg.com/1200x/44/ba/3a/44ba3ad4e5337fea4b6b5ea6246c9648.jpg",
"https://i.pinimg.com/736x/5a/fe/37/5afe37b3fac59a7ff2d640e8949178a6.jpg"], texte: "On y accède que par un petit chemin et un court passage sous la roche mais c'est toujours calme et désertique.", lien: null },

/* coeur de l'île */
  { nom: "Forêt de Morcant", cat: "Nature", x: 57.2, y: 36.6,
    images: ["https://i.pinimg.com/736x/ab/21/88/ab2188a2bd2f1427a0aa916a5ec84b84.jpg",
  "https://i.pinimg.com/736x/7a/9b/f1/7a9bf15f55ae7a5d6b22b3a688840a56.jpg"], texte: "Toute la nature étalée sur l'île.", lien: null },
  { nom: "Abbaye abandonnée", cat: "Vestige hanté", x: 47.9, y: 47.3,
    images: ["https://i.pinimg.com/1200x/ec/b9/ff/ecb9fff0b612ba2b80208f1b1a6e03ed.jpg",
"https://i.pinimg.com/736x/07/3c/0e/073c0e5bbaa7a6f43c39d937a768623d.jpg"], texte: "Des ruines aahhh des fantôôôômes et des rituels bizaaaaarrrrrres", lien: null },
  { nom: "Le Gardien", cat: "Arbre ancien", x: 63.4, y: 29.1,
    images: ["https://i.pinimg.com/1200x/05/22/48/05224808f0ee28ca812ab2f6473d325e.jpg",
"https://i.pinimg.com/1200x/08/cd/d1/08cdd1dbc8b3e59e9a44c3b882963e3d.jpg"], texte: "Il est dit que ce vieux chêne immense est la source de toute magie sur l'île, et plus que de le craindre, la population l'admire et le protège. C'est un endroit de recueil, et la route pour s'y rendre est souvent propice aux manifestations.", lien: null },


/* sud de l'île */
  { nom: "Port commercial", cat: "Gros bateaux", x: 20.5, y: 85.7,
    images: ["https://i.pinimg.com/736x/6e/e2/a4/6ee2a47a9f6238d54d794ab5b993a3e3.jpg",
"https://i.pinimg.com/736x/c9/fb/e1/c9fbe1adf79627be56382d5f4e419244.jpg"], texte: "Ce secteur utilitaire regroupe les activités logistiques et le stockage de l'île. Les terre-pleins accueillent les dépôts de matières premières du BTP, ainsi qu'un atelier de mécanique et réparation navale pour caréner les coques.", lien: null },
  { nom: "Phare Liberté", cat: "Phare hanté", x: 7.0, y: 96.6,
    images: ["https://i.pinimg.com/1200x/ed/1b/70/ed1b706189e81667f8910790ee2d1c39.jpg",
  "https://i.pinimg.com/1200x/f8/37/59/f83759305ac9bac715a9eabeb6617268.jpg"], texte: "Dressée à la pointe méridionale face aux récifs du grand chenal, cette imposante tour blanche en pierre de taille reste en activité manuelle permanente.", lien: null },
  { nom: "Judgement Bay", cat: "Lieu historique", x: 35.6, y: 68.0,
    images: ["https://i.pinimg.com/1200x/92/e7/d1/92e7d11e61a39535573317db6c6c5c23.jpg",
"https://i.pinimg.com/1200x/c2/d2/15/c2d215618bf35446660b806b6ead5a6a.jpg"], texte: "Bordée de falaises sombres et de galets noirs, cette vaste anse de marée est le site historique où furent suppliciés les insulaires accusés d'hérésie lors de la purge de 1400. Autrefois crainte et évitée par les pêcheurs, la crique est aujourd'hui une étape incontournable du tourisme local.", lien: null },


/* est de l'île */
  { nom: "Gueule des étoiles", cat: "Merveille naturelle", x: 73.0, y: 45.1,
    images: ["https://i.pinimg.com/736x/0c/12/02/0c1202916e2de64428e2ac4dc881a47b.jpg",
  "https://i.pinimg.com/1200x/15/f2/6a/15f26a438dcef970e4ca4c60dbac38f1.jpg"], texte: "Aucun scientifique n'a su expliquer pourquoi le pic de cette montagne s'achève en trous béants dans sa roche. Ces puits de lumière naturels ont donné vie à tout un écosystème propre à ces grottes.", lien: null },
  { nom: "Sanatorium abandonné", cat: "Vestiges", x: 50.0, y: 57.9,
    images: ["https://i.pinimg.com/1200x/f8/2e/d5/f82ed537d4e07c78828bef030d2bfa8d.jpg",
  "https://i.pinimg.com/1200x/1c/71/2b/1c712b50d8e4e5f65b8281725eace21a.jpg"], texte: "Description à écrire.", lien: null },
  { nom: "Village militaire abandonné", cat: "Vestige de guerre", x: 69.6, y: 49.0,
    images: ["https://i.pinimg.com/736x/89/d0/7b/89d07baf73343539da43e8b855ae1010.jpg",
"https://i.pinimg.com/736x/0a/37/0d/0a370d79d6587537c6d8227f7d37a907.jpg"], texte: "C'était ici qu'ils vivaient tous et ça a été abandonné juste après la guerre.", lien: null },
  { nom: "Bunker", cat: "Vestige de guerre", x: 68.7, y: 52.2,
    images: ["https://i.pinimg.com/736x/b4/ef/50/b4ef500b3e1d5216249ad0a12aad2ef8.jpg",
"https://i.pinimg.com/736x/77/1a/b5/771ab55ac1d10915afe43d1b8173785c.jpg"], texte: "Blockhaus", lien: null },
  { nom: "Plage Mémorial", cat: "Cimetière", x: 76.8, y: 49.7,
    images: ["https://i.pinimg.com/736x/5a/d9/9b/5ad99bbbe0511207585058c2c07e49ad.jpg",
"https://i.pinimg.com/1200x/bc/29/d3/bc29d3df54f9424bb839d673fdc62430.jpg"], texte: "Les abords de cette plage sont décorés de stèles funéraires en l'honneur des soldats et de leurs familles qui ont défendu l'île et les intérêts des alliés.", lien: null }
];

/* ===== NE RIEN MODIFIER APRES CETTE LIGNE ===== */

(function(){

  const onglets     = document.getElementById('onglets');
  const carte       = document.getElementById('carte-bloc');
  const fond        = document.getElementById('fond');
  const pan         = document.getElementById('panneau');
  const liste       = document.getElementById('liste');
  const lieuxBoites = document.getElementById('liste-lieux');
  const coord       = document.getElementById('coord');
  const bascule     = document.getElementById('bascule');

  const tactile = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if(tactile) document.body.classList.add('tactile');

  let courant  = null;
  let minuteur = null;


  /* bascule jour / nuit */

  function theme(v){
    document.documentElement.setAttribute('data-color-scheme', v);
    bascule.textContent = v === 'dark' ? '☀' : '☾';
    try{ localStorage.setItem('ctl-theme', v); }catch(e){}
  }

  let choix = 'light';
  try{ choix = localStorage.getItem('ctl-theme') || 'light'; }catch(e){}
  theme(choix);

  bascule.addEventListener('click', () => {
    theme(document.documentElement.getAttribute('data-color-scheme') === 'dark' ? 'light' : 'dark');
  });


  /* image de pied */

  requestAnimationFrame(() => document.body.classList.add('page-chargee'));

  /* onglets */

  function montrer(id){
    const ch = CHAPITRES.find(c => c[0] === id) || CHAPITRES[0];

    document.querySelectorAll('.chapitre').forEach(s => {
      s.classList.toggle('visible', s.id === ch[0]);
    });
    onglets.querySelectorAll('button').forEach(b => {
      b.classList.toggle('actif', b.dataset.id === ch[0]);
    });

    document.getElementById('titre-section').textContent  = ch[2];
    document.getElementById('phrase-section').textContent = ch[3];

    fermer();
    if(ch[0] === 'carte') dimensionner();
  }

  let groupePose = '';

  CHAPITRES.forEach(([id, nom, , , groupe]) => {

    if(groupe !== groupePose){
      groupePose = groupe;
      const t = document.createElement('div');
      t.className   = 'groupe';
      t.textContent = groupe;
      onglets.appendChild(t);
    }

    const b = document.createElement('button');
    b.type        = 'button';
    b.dataset.id  = id;
    b.textContent = nom;
    b.addEventListener('click', () => {
      montrer(id);
      history.replaceState(null, '', '#' + id);
    });
    onglets.appendChild(b);
  });

  const reste = document.createElement('div');
  reste.className = 'reste';
  onglets.appendChild(reste);

  const depart = location.hash.replace('#', '');
  montrer(CHAPITRES.some(c => c[0] === depart) ? depart : CHAPITRES[0][0]);


  /* dimensions de la carte */

  function dimensionner(){
    if(!fond.naturalWidth) return;
    const l = fond.naturalWidth;
    const h = fond.naturalHeight;
    carte.style.aspectRatio = l + '/' + h;
    carte.style.maxWidth = 'min(' + l + 'px, calc((100vh - 300px) * ' + (l/h).toFixed(4) + '))';
  }

  fond.addEventListener('load', dimensionner);
  fond.src = getComputedStyle(document.documentElement)
               .getPropertyValue('--carte').trim().replace(/^url\(["']?|["']?\)$/g, '');


  /* panneau */

  function remplir(lieu){
    const photos = document.getElementById('p-photos');
    const imgs   = (lieu.images && lieu.images.length) ? lieu.images.slice(0,2) : [];

    photos.className     = 'photos' + (imgs.length === 2 ? ' deux' : '');
    photos.innerHTML     = imgs.map(u => `<img src="${u}" alt="">`).join('');
    photos.style.display = imgs.length ? 'grid' : 'none';

    const cat = document.getElementById('p-cat');
    cat.textContent   = lieu.cat || '';
    cat.style.display = lieu.cat ? 'block' : 'none';

    document.getElementById('p-nom').textContent = lieu.nom;
    document.getElementById('p-txt').textContent = lieu.texte || '';

    const a = document.getElementById('p-lien');
    if(lieu.lien && lieu.lien.url){
      a.href          = lieu.lien.url;
      a.textContent   = lieu.lien.texte || 'En savoir plus';
      a.style.display = 'inline-block';
    } else {
      a.style.display = 'none';
    }
  }

  function placer(pt){
    if(tactile) return;

    const c = carte.getBoundingClientRect();
    const p = pt.getBoundingClientRect();

    const x = p.left - c.left + p.width/2;
    const y = p.top  - c.top;
    const l = pan.offsetWidth  || 250;
    const h = pan.offsetHeight || 180;

    let gx = x - l/2;
    let gy = y - h - 14;

    if(gy < 8) gy = y + p.height + 14;

    gx = Math.max(8, Math.min(gx, c.width  - l - 8));
    gy = Math.max(8, Math.min(gy, c.height - h - 8));

    pan.style.left = gx + 'px';
    pan.style.top  = gy + 'px';
  }

  function ouvrir(i){
    const pt = carte.querySelector('.pt[data-i="' + i + '"]');
    if(!pt) return;

    document.querySelectorAll('.pt.actif, .liste button.actif')
            .forEach(e => e.classList.remove('actif'));

    pt.classList.add('actif');
    const item = liste.querySelector('button[data-i="' + i + '"]');
    if(item) item.classList.add('actif');

    remplir(LIEUX[i]);
    pan.classList.add('ouvert');
    placer(pt);
    courant = i;
  }

  function fermer(){
    pan.classList.remove('ouvert');
    courant = null;
    document.querySelectorAll('.pt.actif, .liste button.actif')
            .forEach(e => e.classList.remove('actif'));
  }


  /* points et liste */

  LIEUX.forEach((lieu, i) => {

    const pt = document.createElement('button');
    pt.className = 'pt';
    pt.type      = 'button';
    pt.dataset.i = i;
    pt.style.setProperty('--x', lieu.x + '%');
    pt.style.setProperty('--y', lieu.y + '%');
    pt.setAttribute('aria-label', lieu.nom);
    carte.appendChild(pt);

    const item = document.createElement('button');
    item.type      = 'button';
    item.dataset.i = i;
    item.innerHTML = (lieu.cat ? '<small>' + lieu.cat + '</small>' : '') + lieu.nom;
    lieuxBoites.appendChild(item);

    if(!tactile){
      pt.addEventListener('mouseenter',   () => { clearTimeout(minuteur); ouvrir(i); });
      pt.addEventListener('mouseleave',   () => { minuteur = setTimeout(fermer, 220); });
      pt.addEventListener('focus',        () => ouvrir(i));
      item.addEventListener('mouseenter', () => { clearTimeout(minuteur); ouvrir(i); });
      item.addEventListener('mouseleave', () => { minuteur = setTimeout(fermer, 220); });
    }

    pt.addEventListener('click',   e => { e.preventDefault(); courant === i ? fermer() : ouvrir(i); });
    item.addEventListener('click', e => { e.preventDefault(); ouvrir(i); });
  });


  /* délai de 220ms */

  pan.addEventListener('mouseenter', () => clearTimeout(minuteur));
  pan.addEventListener('mouseleave', () => { if(!tactile) minuteur = setTimeout(fermer, 220); });

  document.getElementById('fermer').addEventListener('click', fermer);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') fermer(); });

  if(tactile){
    document.addEventListener('click', e => {
      if(!e.target.closest('.pt') && !e.target.closest('.panneau') && !e.target.closest('.liste')) fermer();
    });
  }

  window.addEventListener('resize', () => {
    dimensionner();
    if(courant !== null) placer(carte.querySelector('.pt[data-i="' + courant + '"]'));
  });


  /* moodboard */

  const grille = document.getElementById('grille-mood');
  grille.innerHTML = MOODBOARD.length
    ? MOODBOARD.map(z =>
        '<h3>' + z.titre + '</h3><div class="moodboard">' +
        (z.images || []).map(u => `<img src="${u}" alt="" loading="lazy">`).join('') +
        '</div>').join('')
    : '<div class="moodboard">' +
      Array.from({length: 8}, () => '<div class="case">image</div>').join('') + '</div>';

  /* relevé de coordonnées */

  if(location.hash === '#placer'){
    montrer('carte');
    coord.style.display = 'block';
    coord.textContent   = 'Clique sur la carte pour relever une position.';
    carte.style.cursor  = 'crosshair';

    carte.addEventListener('click', e => {
      if(e.target.closest('.pt') || e.target.closest('.panneau')) return;

      const c = carte.getBoundingClientRect();
      const x = ((e.clientX - c.left) / c.width  * 100).toFixed(1);
      const y = ((e.clientY - c.top)  / c.height * 100).toFixed(1);
      const t = 'x: ' + x + ', y: ' + y;

      coord.textContent = t + '   (copié)';
      if(navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {});
    });
  }

  /* gestion des tw au clic / tactile */
  document.addEventListener('click', e => {
    const tw = e.target.closest('tw');
    if(tw) {
      tw.classList.toggle('actif');
    }
  });
/* gestion des tw au clic / tactile */
  document.addEventListener('click', e => {
    const tw = e.target.closest('tw');
    if(tw) {
      tw.classList.toggle('actif');
    }
  });

  /* défilement fluide vers les ancres internes (sommaires) */
  document.addEventListener('click', e => {
    const lien = e.target.closest('a[href^="#"]');
    if (!lien) return;

    const href = lien.getAttribute('href');
    if (href === '#' || href === '#placer') return;

    const cibleId = decodeURIComponent(href.slice(1));
    const cible = document.getElementById(cibleId);

    if (cible) {
      e.preventDefault();

      const parentChapitre = cible.closest('.chapitre');
      if (parentChapitre && !parentChapitre.classList.contains('visible')) {
        montrer(parentChapitre.id);
        requestAnimationFrame(() => {
          cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else {
        cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

})();
