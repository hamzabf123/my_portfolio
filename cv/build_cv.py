"""Generate Hamza Boufass' CV (two A4 pages) in 4 variants, then print them to PDF.

Page 1: profile, experience, education. Page 2: key projects as short case
studies (problem -> what I did -> result), detailed skills and tools.

Usage:  python cv/build_cv.py [--portfolio https://...]
Outputs:
  cv/out/*.html                       editable HTML sources
  cv/pdf/*.pdf                        the 4 PDFs to send to schools
  public/Hamza_Boufass_CV_2026.pdf    the main version, linked from the site
  public/cv/*.pdf                     all variants, online at <site>/cv/<file>
"""
import argparse
import html
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "cv" / "out"
PDF = ROOT / "cv" / "pdf"
PHOTO = (ROOT / "public" / "profile.jpg").as_uri()

BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]

# --------------------------------------------------------------------------- content

CONTACT = [
    ("phone", "+212 722 890 405"),
    ("mail", "hamzaboufass17@gmail.com"),
    ("pin", "Casablanca · mobile à Lyon dès sept. 2027"),
    ("link", "{portfolio}"),
]

SKILLS = {
    "product": ("Produit & gestion de projet", ["Cadrage, PRD, personas", "KPI et indicateurs de succès", "Benchmark concurrentiel", "Travail en sprints, priorisation"]),
    "ux": ("UX/UI design", ["Figma : wireframes, prototypes", "Design systems et composants", "Parcours orientés conversion", "Accessibilité"]),
    "data": ("Données & web", ["SQL, modélisation de données", "Supabase", "React, Next.js, TypeScript", "HTML/CSS, Tailwind CSS"]),
    "ai": ("IA appliquée", ["Claude Code, Codex", "Gemini API (agent dans Figma)", "Automatisation de workflows", "Vidéo programmée (Remotion)"]),
    "graphic": ("Design graphique", ["Illustrator, Photoshop", "Print et grand format", "Contenus réseaux sociaux"]),
}

TOOLS = ["Figma", "Claude Code", "Codex", "Supabase", "Next.js", "React", "WordPress", "Sanity", "Remotion", "Illustrator", "Photoshop", "Canva"]

LANGS = [("Français", "courant · DELF B2 en décembre 2026"), ("Anglais", "intermédiaire (B1/B2)"), ("Arabe", "langue maternelle")]
QUALITIES = ["Autonomie et sens des priorités", "Curiosité, apprentissage rapide", "Communication avec les équipes métier", "Rigueur sur ce qui est livré"]

BILL_BULLETS = {
    "rush": "<b>Lancement de RU$H</b>, nouvelle marque de caisse pour cafés et snacks : PRD, personas, KPI, benchmark concurrentiel et grille tarifaire validée par la direction.",
    "rush_design": "<b>Lancement de RU$H</b> : charte, design system Figma (103 variables, composants maîtres), landing page orientée conversion et contenus sociaux.",
    "plugins": "Conception et livraison de <b>2 plugins Figma utilisés en production</b>, dont un agent IA (Gemini API, Supabase).",
    "content": "Design system, landing page, posts et vidéo produit codée avec Remotion, avec Claude Code comme outil de production.",
    "site": "Site BILL APP : V1 sous WordPress, puis composants V2 en Next.js SSR et Sanity.",
    "research": "Recherche marché : analyse des vidéos concurrentes, étude des bornes et de l'affichage dynamique.",
    "decks": "Pitch decks et supports commerciaux pour les rendez-vous clients.",
}

PROJECTS = {
    "rush": {
        "name": "RU$H · lancement d'une marque de caisse",
        "meta": "BILL APP · nov. 2026 · Product Designer & Product Builder",
        "problem": "Les cafés et snacks au Maroc n'avaient le choix qu'entre des solutions trop lourdes et des outils sans accompagnement.",
        "actions": [
            "Cadrage : PRD, personas, KPI ; benchmark de Caisse Manager, Lacaisse.ma, Inyad, Tabesto et BILL",
            "Construction de l'offre et d'une grille tarifaire comparée au marché",
            "Design system Figma (103 variables), landing page V2, posts et Reel animé avec Remotion",
        ],
        "result": "Grille tarifaire validée par la direction ; landing V2 et contenus de lancement prêts pour la revue.",
    },
    "billdesign": {
        "name": "BILL Design · plugin Figma avec agent IA",
        "meta": "BILL APP · 2026 · conception et développement",
        "problem": "Les présentations commerciales demandaient beaucoup de retouches répétitives dans Figma.",
        "actions": [
            "Plugin en 4 onglets : gabarits, mockups, outils IA, chat IA",
            "Agent IA (Gemini API) qui lit le brief et les slides avant d'agir dans le fichier",
            "Historique des conversations enregistré dans Supabase",
        ],
        "result": "En production chez BILL APP, enrichi au fil des besoins de l'équipe.",
    },
    "export": {
        "name": "Export PDF Slides · plugin Figma",
        "meta": "BILL APP · oct. 2025 · conception et développement",
        "problem": "Une présentation de 15 slides donnait un PDF d'environ 360 Mo, impossible à envoyer aux clients sur WhatsApp.",
        "actions": [
            "Choix d'une solution intégrée à Figma plutôt qu'une plateforme externe, pour la confidentialité",
            "Automatisation de l'export, de la compression et de la fusion en PDF",
        ],
        "result": "Utilisé par l'équipe commerciale, puis publié sur Figma Community.",
    },
    "site": {
        "name": "Site web BILL APP",
        "meta": "BILL APP · 2025–2026 · UI design et intégration",
        "problem": "Le site WordPress / Elementor freinait la vitesse d'évolution et la qualité des composants.",
        "actions": [
            "Contribution aux interfaces de la V1 avec mon responsable de stage",
            "Conception des composants de la V2 en Next.js SSR et Sanity",
        ],
        "result": "V1 en ligne (bill-app.fr), V2 en cours de validation.",
    },
    "mfe": {
        "name": "Morocco Franchise Exhibition · stand BILL APP",
        "meta": "BILL APP · 2026 · design graphique",
        "problem": "Rendre l'offre BILL lisible en quelques secondes dans un salon très dense.",
        "actions": [
            "Système graphique du stand, conçu avec le designer de l'espace",
            "Visuels grand format et hiérarchie des messages",
        ],
        "result": "Un stand cohérent et identifiable, présenté pendant le salon.",
    },
}

VARIANTS = {
    "principal": {
        "file": "Hamza_Boufass_CV_Product.pdf",
        "title": "Product Designer & Product Builder IA",
        "sub": "Futur apprenti Product Owner / Chef de projet digital · Master en alternance · Lyon · sept. 2027",
        "profile": "Licencié en informatique (bases de données) et designer produit chez BILL APP depuis 2025. Je cadre un besoin, je le rends visible avec des maquettes et je le livre avec l'équipe, en code ou avec l'IA. Je cherche un master en alternance pour devenir Product Owner, avec un projet d'apprentissage à Lyon.",
        "skills": ["product", "ux", "data", "ai", "graphic"],
        "bill": ["rush", "plugins", "content", "site"],
        "projects": ["rush", "billdesign", "export", "site"],
    },
    "miage": {
        "file": "Hamza_Boufass_CV_MIAGE_Informatique.pdf",
        "title": "Futur apprenti Chef de projet IA / Product Owner",
        "sub": "Licence Informatique (BDD) · MIAGE / Master informatique en alternance · sept. 2027",
        "profile": "Licencié en informatique, spécialité bases de données, avec plus d'un an d'expérience en entreprise chez BILL APP. J'y conçois et livre des outils utilisés en production (plugins, agent IA connecté à une base Supabase) et je pilote le lancement d'un produit. Je veux renforcer les systèmes d'information, la gestion de projet et l'IA en MIAGE ou en master informatique, en contrat d'apprentissage à Lyon.",
        "skills": ["data", "product", "ai", "ux", "graphic"],
        "bill": ["plugins", "rush", "site", "content"],
        "projects": ["billdesign", "rush", "export", "site"],
    },
    "innovation": {
        "file": "Hamza_Boufass_CV_Innovation_Produit.pdf",
        "title": "Futur apprenti Product Manager / Chef de projet innovation",
        "sub": "Licence Informatique · Master innovation & produit en alternance · sept. 2027",
        "profile": "Chez BILL APP, j'ai mené le lancement de RU$H, une nouvelle marque pour les petits commerces : analyse du marché, construction de l'offre et des prix, puis site et contenus de lancement. Je cherche un master en innovation ou en management de produit, en alternance à Lyon, pour consolider la stratégie et le pilotage de projet.",
        "skills": ["product", "ux", "ai", "data", "graphic"],
        "bill": ["rush", "research", "plugins", "content"],
        "projects": ["rush", "export", "billdesign", "mfe"],
    },
    "design": {
        "file": "Hamza_Boufass_CV_Design_UX.pdf",
        "title": "Futur apprenti UX/UI & Product Designer",
        "sub": "Licence Informatique · Master design numérique & innovation en alternance · sept. 2027",
        "profile": "Designer produit chez BILL APP, avec une formation d'informaticien. Je conçois des interfaces, des design systems et des contenus, du besoin utilisateur jusqu'à la mise en ligne. Je cherche un master en design numérique et innovation, en alternance à Lyon, pour approfondir la recherche UX, la médiation et l'innovation par le design.",
        "skills": ["ux", "graphic", "product", "ai", "data"],
        "bill": ["rush_design", "plugins", "research", "site"],
        "projects": ["rush", "billdesign", "export", "mfe"],
    },
}

OTHER_JOBS = [
    ("UI Designer & Infographiste · Stage", "OLFACTIVE · Casablanca", "Juil. — oct. 2025",
     ["Maquettes Figma et évolutions du site pour le client Orange ; visuels print pour Déco Bec."]),
    ("Fondateur & responsable", "CASA STICKERS · Freelance", "2021 — juin 2025",
     ["Création et vente d'autocollants et d'affiches : branding, boutique en ligne, relation client."]),
    ("Télévendeur", "CAPITAL HUMAIN CALL", "Juin — nov. 2021",
     ["Conseil aux clients sur le choix de formations adaptées à leur solde CPF."]),
]

# --------------------------------------------------------------------------- icons

ICONS = {
    "phone": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    "pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    "link": '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
}


def icon(name):
    return f'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{ICONS[name]}</svg>'


# --------------------------------------------------------------------------- template

CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --ink:#0F172A; --slate:#1E293B; --muted:#55627A; --line:#E2E8F0; --side:#F1F4F8; --accent:#D97706; --accent2:#4F46E5; }
html, body { width: 210mm; }
body { font: 9.1pt/1.5 Inter, Arial, sans-serif; color: var(--ink); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3 { font-family: 'Plus Jakarta Sans', Inter, Arial, sans-serif; }
.page { width: 210mm; height: 297mm; display: grid; grid-template-rows: auto 1fr auto; overflow: hidden; page-break-after: always; break-after: page; }
.page:last-child { page-break-after: auto; break-after: auto; }

header { background: var(--slate); color: #fff; display: grid; grid-template-columns: 32mm 1fr; gap: 8mm; align-items: center; padding: 7mm 14mm 7.5mm; position: relative; }
header::after, .mini::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1.4mm; background: linear-gradient(90deg, var(--accent), var(--accent2)); }
.photo { width: 32mm; height: 32mm; border-radius: 50%; overflow: hidden; border: 1.2mm solid #fff; background: #fff; }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 22%; }
header h1 { font-size: 27pt; font-weight: 800; letter-spacing: .02em; line-height: 1; }
header .title { margin-top: 3mm; font-size: 13.5pt; font-weight: 600; color: #FCD34D; }
header .sub { margin-top: 2mm; font-size: 9pt; color: #CBD5E1; }
.badge { display: inline-block; margin-top: 3.5mm; font-size: 7.8pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--slate); background: #FCD34D; border-radius: 99px; padding: 1mm 3.2mm; }

.mini { background: var(--slate); color: #fff; padding: 6mm 14mm 7mm; position: relative; display: flex; justify-content: space-between; align-items: baseline; }
.mini b { font: 800 14pt 'Plus Jakarta Sans', Inter, sans-serif; letter-spacing: .04em; }
.mini span { font-size: 9pt; color: #FCD34D; font-weight: 600; }

.body { display: grid; grid-template-columns: 67mm 1fr; }
aside { background: var(--side); padding: 8mm 7mm 6mm 10mm; display: flex; flex-direction: column; gap: 6mm; }
main { padding: 8mm 12mm 4mm 9mm; display: flex; flex-direction: column; gap: 5mm; }
footer { display: flex; justify-content: space-between; font-size: 7.4pt; color: #94A3B8; padding: 2mm 12mm 4mm 76mm; letter-spacing: .06em; text-transform: uppercase; }

h2 { font-size: 10pt; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: var(--slate); padding-bottom: 1.8mm; border-bottom: .5mm solid var(--slate); margin-bottom: 2.8mm; display: flex; align-items: center; gap: 2.2mm; }
h2::before { content: ""; width: 2.2mm; height: 2.2mm; border-radius: 50%; background: var(--accent); }

.contact li { list-style: none; display: flex; align-items: center; gap: 2.4mm; margin-bottom: 2mm; font-size: 8.5pt; word-break: break-word; }
.contact a { color: inherit; text-decoration: none; }
.contact .url { font-size: 7.6pt; white-space: nowrap; letter-spacing: -.01em; }
.contact svg { width: 3.8mm; height: 3.8mm; flex: none; color: var(--accent); }
.plain li { list-style: none; position: relative; padding-left: 3.4mm; margin-bottom: 1.8mm; font-size: 8.9pt; }
.plain li::before { content: ""; position: absolute; left: 0; top: 2.1mm; width: 1.3mm; height: 1.3mm; border-radius: 50%; background: var(--accent); }
.lang { margin-bottom: 2.2mm; font-size: 8.9pt; }
.lang b { display: block; }
.lang span { color: var(--muted); font-size: 8.4pt; }
.goal { background: #fff; border: .3mm solid var(--line); border-left: 1.2mm solid var(--accent); border-radius: 1.5mm; padding: 3.4mm 3.6mm; font-size: 8.8pt; }
.goal b { display: block; font-size: 9.4pt; margin-bottom: 1mm; }
.goal li { list-style: none; margin-top: 1.2mm; }
.skill { margin-bottom: 3mm; }
.skill b { display: block; font-size: 9.2pt; margin-bottom: .8mm; }
.skill li { list-style: none; position: relative; padding-left: 3.2mm; font-size: 8.6pt; color: #334155; margin-bottom: .5mm; }
.skill li::before { content: "–"; position: absolute; left: 0; color: var(--accent); }
.tools { display: flex; flex-wrap: wrap; gap: 1.6mm; }
.tools span { font-size: 8.2pt; background: #fff; border: .3mm solid #CBD5E1; border-radius: 1mm; padding: .6mm 2mm; }

.profile { font-size: 9.4pt; color: #334155; }
.job { margin-bottom: 2.2mm; }
.job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 3mm; }
.job-head h3 { font-size: 10.4pt; font-weight: 800; }
.job-head .date { font-size: 7.9pt; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--slate); white-space: nowrap; }
.company { font-size: 8.8pt; color: var(--muted); margin: .4mm 0 1.4mm; }
.job ul { padding-left: 4mm; }
.job li { margin-bottom: .6mm; }
.job li::marker { color: var(--accent); }
.tag { display: inline-block; font-size: 7.6pt; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--accent2); background: #EEF2FF; border-radius: 1mm; padding: .4mm 2mm; margin: .4mm 0 1.6mm; }

.edu-head { display: flex; justify-content: space-between; align-items: baseline; }
.edu-head b { font-size: 10pt; }
.mini-edu b { font-size: 9pt; font-weight: 600; }
.edu-head span { font-size: 8.6pt; color: var(--muted); }
.certs { margin-top: 2.4mm; display: flex; flex-direction: column; gap: 1.4mm; }
.certs span { font-size: 8.4pt; }
.certs span::before { content: "✓ "; color: var(--accent); font-weight: 700; }

.case { border: .3mm solid var(--line); border-left: 1.2mm solid var(--accent); border-radius: 1.6mm; padding: 3mm 4mm; margin-bottom: 3.2mm; }
.case:nth-child(even) { border-left-color: var(--accent2); }
.case h3 { font-size: 10.6pt; font-weight: 800; }
.case .meta { font-size: 8.2pt; color: var(--muted); margin: .4mm 0 2mm; }
.case dl { display: grid; grid-template-columns: 18mm 1fr; gap: .9mm 3mm; font-size: 8.8pt; line-height: 1.45; }
.case dt { font-size: 7.6pt; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--slate); padding-top: .6mm; }
.case dd ul { padding-left: 3.6mm; }
.case dd li { margin-bottom: .3mm; }
.case dd li::marker { color: var(--accent); }
"""


def render(v, portfolio):
    e = html.escape
    def contact_item(i, t):
        text = e(t.format(portfolio=portfolio))
        if i == "link":
            return f'<li class="url">{icon(i)}<a href="https://{text}">{text}</a></li>'
        if i == "mail":
            return f'<li>{icon(i)}<a href="mailto:{text}">{text}</a></li>'
        return f'<li>{icon(i)}<span>{text}</span></li>'

    contact = "".join(contact_item(i, t) for i, t in CONTACT)
    langs = "".join(f'<div class="lang"><b>{e(n)}</b><span>{e(l)}</span></div>' for n, l in LANGS)
    quals = "".join(f"<li>{e(x)}</li>" for x in QUALITIES)
    bill = "".join(f"<li>{BILL_BULLETS[b]}</li>" for b in v["bill"])
    others = "".join(
        f'<div class="job"><div class="job-head"><h3>{e(t)}</h3><span class="date">{e(d)}</span></div>'
        f'<p class="company">{e(c)}</p><ul>{"".join(f"<li>{e(x)}</li>" for x in bl)}</ul></div>'
        for t, c, d, bl in OTHER_JOBS
    )
    skills = "".join(
        f'<div class="skill"><b>{e(SKILLS[s][0])}</b><ul>{"".join(f"<li>{e(x)}</li>" for x in SKILLS[s][1])}</ul></div>'
        for s in v["skills"]
    )
    tools = "".join(f"<span>{e(t)}</span>" for t in TOOLS)
    cases = "".join(
        f'<article class="case"><h3>{e(p["name"])}</h3><p class="meta">{e(p["meta"])}</p><dl>'
        f'<dt>Problème</dt><dd>{e(p["problem"])}</dd>'
        f'<dt>Ma part</dt><dd><ul>{"".join(f"<li>{e(a)}</li>" for a in p["actions"])}</ul></dd>'
        f'<dt>Résultat</dt><dd>{e(p["result"])}</dd></dl></article>'
        for p in (PROJECTS[k] for k in v["projects"])
    )

    return f"""<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><title>CV Hamza Boufass · {e(v['title'])}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style></head>
<body>
<section class="page">
  <header>
    <div class="photo"><img src="{PHOTO}" alt="Hamza Boufass"></div>
    <div>
      <h1>HAMZA BOUFASS</h1>
      <p class="title">{e(v['title'])}</p>
      <p class="sub">{e(v['sub'])}</p>
      <span class="badge">Recherche un contrat d'apprentissage · Lyon · sept. 2027</span>
    </div>
  </header>
  <div class="body">
    <aside>
      <section><h2>Contact</h2><ul class="contact">{contact}</ul></section>
      <div class="goal"><b>Objectif alternance</b>
        <ul><li>Master Bac+5 en 2 ans</li><li>Contrat d'apprentissage dès la 1re année</li><li>Lyon ou à 1h30 maximum</li><li>Promesse d'embauche visée après l'admission</li></ul></div>
      <section><h2>Langues</h2>{langs}</section>
      <section><h2>Atouts</h2><ul class="plain">{quals}</ul></section>
    </aside>
    <main>
      <section><h2>Profil</h2><p class="profile">{e(v['profile'])}</p></section>
      <section><h2>Expérience</h2>
        <div class="job">
          <div class="job-head"><h3>Junior Digital Designer</h3><span class="date">CDI · depuis mai 2026</span></div>
          <p class="company">BILL APP (Universal Tech Ventures) · Casablanca · digitalisation de la restauration</p>
          <span class="tag">Stage oct. 2025 — avr. 2026, puis CDI</span>
          <ul>{bill}</ul>
        </div>
        {others}
      </section>
      <section><h2>Formation</h2>
        <div class="edu-head"><b>Licence en informatique · spécialité bases de données</b><span>2022 — 2025</span></div>
        <p class="company">Faculté des Sciences Ben M'Sik · Université Hassan II · Casablanca</p>
        <div class="edu-head mini-edu"><b>CPGE filière TSI · Lycée Technique de Mohammedia</b><span>2019 — 2021</span></div>
        <div class="edu-head mini-edu"><b>Bac Sciences et Technologies Mécaniques · mention Bien</b><span>2019</span></div>
      </section>
    </main>
  </div>
  <footer><span>CV · Hamza Boufass</span><span>1 / 2</span></footer>
</section>
<section class="page">
  <div class="mini"><b>HAMZA BOUFASS</b><span>{e(v['title'])}</span></div>
  <div class="body">
    <aside>
      <section><h2>Compétences</h2>{skills}</section>
      <section><h2>Outils</h2><div class="tools">{tools}</div></section>
      <section><h2>Certifications</h2>
        <div class="certs"><span>Google · Foundations of User Experience (UX) Design · 2025</span><span>Cisco Networking Academy · Computer Hardware Basics · 2025</span></div>
      </section>
    </aside>
    <main>
      <section><h2>Projets clés</h2>{cases}</section>
    </main>
  </div>
  <footer><span>Portfolio · {e(portfolio)}</span><span>2 / 2</span></footer>
</section>
</body></html>"""


def find_browser():
    for path in BROWSERS:
        if Path(path).exists():
            return path
    raise SystemExit("Chrome or Edge not found")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--portfolio", default="my-portfolio-six-chi-15.vercel.app")
    args = parser.parse_args()
    portfolio = args.portfolio.replace("https://", "").replace("http://", "").rstrip("/")

    OUT.mkdir(parents=True, exist_ok=True)
    PDF.mkdir(parents=True, exist_ok=True)
    browser = find_browser()

    for key, v in VARIANTS.items():
        page = OUT / f"cv-{key}.html"
        page.write_text(render(v, portfolio), encoding="utf-8")
        pdf = PDF / v["file"]
        subprocess.run(
            [browser, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
             "--allow-file-access-from-files", "--virtual-time-budget=8000",
             f"--print-to-pdf={pdf}", page.as_uri()],
            check=True, capture_output=True,
        )
        print("ok", pdf.name)

    shutil.copyfile(PDF / VARIANTS["principal"]["file"], ROOT / "public" / "Hamza_Boufass_CV_2026.pdf")
    # All variants are also served by the site, so they can be opened from any device.
    (ROOT / "public" / "cv").mkdir(exist_ok=True)
    for v in VARIANTS.values():
        shutil.copyfile(PDF / v["file"], ROOT / "public" / "cv" / v["file"])
    print("ok public/Hamza_Boufass_CV_2026.pdf")


if __name__ == "__main__":
    main()
