"""Generate Hamza Boufass' CV (one A4 page) in 4 variants, then print them to PDF.

Usage:  python cv/build_cv.py [--portfolio https://...]
Outputs:
  cv/out/*.html                       editable HTML sources
  cv/pdf/*.pdf                        the 4 PDFs to send to schools
  public/Hamza_Boufass_CV_2026.pdf    the main version, linked from the site
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
    "product": ("Produit & projet", "Cadrage, PRD, personas, KPI, benchmark concurrentiel, sprints"),
    "ux": ("UX/UI design", "Figma, wireframes, prototypes, design systems, accessibilité"),
    "data": ("Données & web", "SQL, modélisation de données, Supabase, React, Next.js, TypeScript"),
    "ai": ("IA appliquée", "Claude Code, Codex, Gemini API, automatisation, Remotion"),
    "graphic": ("Design graphique", "Illustrator, Photoshop, print, contenus réseaux sociaux"),
}

LANGS = ["Français · courant (C1)", "Anglais · courant", "Arabe · langue maternelle"]
QUALITIES = ["Autonomie et sens des priorités", "Curiosité, apprentissage rapide", "Communication avec les équipes métier"]

BILL_BULLETS = {
    "rush": "<b>Lancement de RU$H</b>, nouvelle marque de caisse pour cafés et snacks : PRD, personas, KPI, benchmark concurrentiel et grille tarifaire validée par la direction.",
    "rush_design": "<b>Lancement de RU$H</b> : charte, design system Figma (103 variables, composants maîtres), landing page orientée conversion et contenus sociaux.",
    "plugins": "Conception et livraison de <b>2 plugins Figma utilisés en production</b>, dont un agent IA (Gemini API, Supabase).",
    "content": "Design system, landing page, posts et vidéo produit codée avec Remotion, avec Claude Code comme outil de production.",
    "site": "Site BILL APP : V1 sous WordPress, puis composants V2 en Next.js SSR et Sanity.",
    "research": "Recherche marché : 80 instants de vidéos concurrentes codés, étude des bornes et de l'affichage dynamique au Maroc.",
}

PROJECTS = {
    "rush": ("RU$H · lancement produit", "Du problème marché à l'offre, au site et aux contenus de lancement."),
    "billdesign": ("BILL Design · agent IA", "Plugin Figma : gabarits, automatisations et chat IA qui agit sur les slides."),
    "export": ("Export PDF Slides", "Plugin Figma qui allège les PDF de présentation, publié sur Figma Community."),
    "site": ("Site web BILL APP", "V1 WordPress, puis design system V2 en Next.js SSR et Sanity."),
    "mfe": ("Morocco Franchise Exhibition", "Système graphique du stand BILL APP, avec le designer du stand."),
}

VARIANTS = {
    "principal": {
        "file": "Hamza_Boufass_CV_Product.pdf",
        "title": "Product Designer & Product Builder IA",
        "sub": "Futur apprenti Product Owner / Chef de projet digital · Master en alternance · Lyon · sept. 2027",
        "profile": "Licencié en informatique (bases de données) et designer produit chez BILL APP depuis 2025. Je cadre un besoin, je le rends visible avec des maquettes et je le livre avec l'équipe, en code ou avec l'IA. Je cherche un master en alternance pour devenir Product Owner ; une entreprise lyonnaise est prête à m'accueillir en apprentissage.",
        "skills": ["product", "ux", "data", "ai", "graphic"],
        "bill": ["rush", "plugins", "content", "site"],
        "projects": ["rush", "billdesign", "export", "site"],
    },
    "miage": {
        "file": "Hamza_Boufass_CV_MIAGE_Informatique.pdf",
        "title": "Futur apprenti Chef de projet IA / Product Owner",
        "sub": "Licence Informatique (bases de données) · MIAGE ou Master informatique en alternance · sept. 2027",
        "profile": "Licencié en informatique, spécialité bases de données, avec plus d'un an d'expérience en entreprise chez BILL APP. J'y conçois et livre des outils utilisés en production (plugins, agent IA connecté à une base Supabase) et je pilote le lancement d'un produit. Je veux renforcer les systèmes d'information, la gestion de projet et l'IA en MIAGE ou en master informatique, en contrat d'apprentissage à Lyon.",
        "skills": ["data", "product", "ai", "ux", "graphic"],
        "bill": ["plugins", "rush", "site", "content"],
        "projects": ["billdesign", "rush", "export", "site"],
    },
    "innovation": {
        "file": "Hamza_Boufass_CV_Innovation_Produit.pdf",
        "title": "Futur apprenti Product Manager / Chef de projet innovation",
        "sub": "Licence Informatique · Master innovation, produit ou management de projet en alternance · sept. 2027",
        "profile": "Profil hybride produit, design et tech. Chez BILL APP, j'ai mené le lancement de RU$H, une nouvelle marque pour les petits commerces : analyse du marché, construction de l'offre et des prix, puis site et contenus de lancement. Je cherche un master en innovation ou en management de produit, en alternance à Lyon, pour consolider la stratégie et le pilotage de projet.",
        "skills": ["product", "ux", "ai", "data", "graphic"],
        "bill": ["rush", "research", "plugins", "content"],
        "projects": ["rush", "export", "billdesign", "mfe"],
    },
    "design": {
        "file": "Hamza_Boufass_CV_Design_UX.pdf",
        "title": "Futur apprenti UX/UI & Product Designer",
        "sub": "Licence Informatique · Master design numérique, innovation et médiation en alternance · sept. 2027",
        "profile": "Designer produit chez BILL APP, avec une formation d'informaticien. Je conçois des interfaces, des design systems et des contenus, du besoin utilisateur jusqu'à la mise en ligne. Je cherche un master en design numérique et innovation, en alternance à Lyon, pour approfondir la recherche UX, la médiation et l'innovation par le design.",
        "skills": ["ux", "graphic", "product", "ai", "data"],
        "bill": ["rush_design", "plugins", "research", "site"],
        "projects": ["rush", "billdesign", "export", "mfe"],
    },
}

OTHER_JOBS = [
    ("UI Designer & Infographiste · Stage", "OLFACTIVE · Casablanca", "Juil. — oct. 2025",
     ["Premières maquettes Figma et évolutions du site pour le client Orange ; visuels print pour Déco Bec."]),
    ("Fondateur & responsable", "CASA STICKERS · Freelance", "2021 — juin 2025",
     ["Création et vente d'autocollants et d'affiches personnalisés : branding, boutique en ligne, relation client."]),
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
html, body { width: 210mm; height: 297mm; }
body { font: 8.7pt/1.42 Inter, Arial, sans-serif; color: var(--ink); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3 { font-family: 'Plus Jakarta Sans', Inter, Arial, sans-serif; }
.page { width: 210mm; height: 297mm; display: grid; grid-template-rows: auto 1fr; overflow: hidden; }

header { background: var(--slate); color: #fff; display: grid; grid-template-columns: 30mm 1fr; gap: 7mm; align-items: center; padding: 6mm 12mm 6.5mm 12mm; position: relative; }
header::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1.4mm; background: linear-gradient(90deg, var(--accent), var(--accent2)); }
.photo { width: 30mm; height: 30mm; border-radius: 50%; overflow: hidden; border: 1.2mm solid #fff; background: #fff; }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 22%; }
header h1 { font-size: 25pt; font-weight: 800; letter-spacing: .02em; line-height: 1; }
header .title { margin-top: 2.6mm; font-size: 12.5pt; font-weight: 600; color: #FCD34D; }
header .sub { margin-top: 2mm; font-size: 8.6pt; color: #CBD5E1; }
.badge { display: inline-block; margin-top: 3mm; font-size: 7.6pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--slate); background: #FCD34D; border-radius: 99px; padding: .9mm 3mm; }

.body { display: grid; grid-template-columns: 62mm 1fr; }
aside { background: var(--side); padding: 6mm 6mm 5mm 9mm; display: flex; flex-direction: column; gap: 5mm; }
main { padding: 6mm 10mm 5mm 8mm; display: flex; flex-direction: column; gap: 3.4mm; }

h2 { font-size: 9pt; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: var(--slate); padding-bottom: 1.4mm; border-bottom: .5mm solid var(--slate); margin-bottom: 2mm; display: flex; align-items: center; gap: 2mm; }
h2::before { content: ""; width: 2mm; height: 2mm; border-radius: 50%; background: var(--accent); }

.contact li { list-style: none; display: flex; align-items: center; gap: 2.2mm; margin-bottom: 1.6mm; font-size: 8.2pt; word-break: break-word; }
.contact svg { width: 3.4mm; height: 3.4mm; flex: none; color: var(--accent); }
.skill { margin-bottom: 2.2mm; }
.skill b { display: block; font-size: 8.6pt; }
.skill span { color: var(--muted); font-size: 8.1pt; }
.plain li { list-style: none; position: relative; padding-left: 3mm; margin-bottom: 1.1mm; font-size: 8.2pt; }
.plain li::before { content: ""; position: absolute; left: 0; top: 1.9mm; width: 1.2mm; height: 1.2mm; border-radius: 50%; background: var(--accent); }
.goal { background: #fff; border: .3mm solid var(--line); border-left: 1mm solid var(--accent); border-radius: 1.5mm; padding: 2.6mm 3mm; font-size: 8.1pt; }
.goal b { display: block; font-size: 8.6pt; margin-bottom: .6mm; }

.profile { font-size: 8.8pt; color: #334155; }
.job { margin-bottom: 2mm; }
.job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 3mm; }
.job-head h3 { font-size: 9.6pt; font-weight: 800; }
.job-head .date { font-size: 7.6pt; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--slate); white-space: nowrap; }
.company { font-size: 8.2pt; color: var(--muted); margin: .2mm 0 1mm; }
.job ul { padding-left: 3.6mm; }
.job li { margin-bottom: .7mm; }
.job li::marker { color: var(--accent); }
.tag { display: inline-block; font-size: 7.2pt; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--accent2); background: #EEF2FF; border-radius: 1mm; padding: .3mm 1.8mm; margin: .6mm 0 1mm; }

.projects { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm; }
.project { border: .3mm solid var(--line); border-top: .9mm solid var(--accent); border-radius: 1.2mm; padding: 1.8mm 2.6mm; }
.project:nth-child(even) { border-top-color: var(--accent2); }
.project b { display: block; font-size: 8.7pt; }
.project span { font-size: 8pt; color: var(--muted); }

.edu-head { display: flex; justify-content: space-between; align-items: baseline; }
.edu-head b { font-size: 9.4pt; }
.edu-head span { font-size: 8pt; color: var(--muted); }
.certs { margin-top: 1.6mm; display: flex; flex-wrap: wrap; gap: 1.6mm; }
.certs span { font-size: 7.8pt; border: .3mm solid #CBD5E1; border-radius: 1mm; padding: .5mm 2mm; }
"""


def render(key, v, portfolio):
    e = html.escape
    contact = "".join(
        f'<li>{icon(i)}<span>{e(t.format(portfolio=portfolio))}</span></li>' for i, t in CONTACT
    )
    skills = "".join(f'<div class="skill"><b>{e(SKILLS[s][0])}</b><span>{e(SKILLS[s][1])}</span></div>' for s in v["skills"])
    langs = "".join(f"<li>{e(x)}</li>" for x in LANGS)
    quals = "".join(f"<li>{e(x)}</li>" for x in QUALITIES)
    bill = "".join(f"<li>{BILL_BULLETS[b]}</li>" for b in v["bill"])
    others = "".join(
        f'<div class="job"><div class="job-head"><h3>{e(t)}</h3><span class="date">{e(d)}</span></div>'
        f'<p class="company">{e(c)}</p><ul>{"".join(f"<li>{e(x)}</li>" for x in bl)}</ul></div>'
        for t, c, d, bl in OTHER_JOBS
    )
    projects = "".join(f'<div class="project"><b>{e(PROJECTS[p][0])}</b><span>{e(PROJECTS[p][1])}</span></div>' for p in v["projects"])

    return f"""<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><title>CV Hamza Boufass · {e(v['title'])}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style></head>
<body><div class="page">
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
    <section><h2>Compétences</h2>{skills}</section>
    <section><h2>Langues</h2><ul class="plain">{langs}</ul></section>
    <section><h2>Atouts</h2><ul class="plain">{quals}</ul></section>
    <div class="goal"><b>Objectif alternance</b>Master Bac+5 en 2 ans, contrat d'apprentissage dès la 1re année. Entreprise d'accueil identifiée à Lyon.</div>
  </aside>
  <main>
    <section><h2>Profil</h2><p class="profile">{e(v['profile'])}</p></section>
    <section><h2>Expérience</h2>
      <div class="job">
        <div class="job-head"><h3>Digital Designer</h3><span class="date">CDI · depuis avril 2026</span></div>
        <p class="company">BILL APP · Casablanca · digitalisation de la restauration</p>
        <span class="tag">Stage oct. 2025 — avr. 2026, puis CDI</span>
        <ul>{bill}</ul>
      </div>
      {others}
    </section>
    <section><h2>Projets clés</h2><div class="projects">{projects}</div></section>
    <section><h2>Formation &amp; certifications</h2>
      <div class="edu-head"><b>Licence en informatique · spécialité bases de données</b><span>2022 — 2025</span></div>
      <p class="company">Faculté des Sciences Ben M'Sik · Université Hassan II · Casablanca</p>
      <div class="certs"><span>Google · Foundations of User Experience (UX) Design · 2025</span><span>Cisco Networking Academy · Computer Hardware Basics · 2025</span></div>
    </section>
  </main>
</div>
</div></body></html>"""


def find_browser():
    for path in BROWSERS:
        if Path(path).exists():
            return path
    raise SystemExit("Chrome or Edge not found")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--portfolio", default="hamza-boufass.vercel.app")
    args = parser.parse_args()
    portfolio = args.portfolio.replace("https://", "").replace("http://", "").rstrip("/")

    OUT.mkdir(parents=True, exist_ok=True)
    PDF.mkdir(parents=True, exist_ok=True)
    browser = find_browser()

    for key, v in VARIANTS.items():
        page = OUT / f"cv-{key}.html"
        page.write_text(render(key, v, portfolio), encoding="utf-8")
        pdf = PDF / v["file"]
        subprocess.run(
            [browser, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
             "--allow-file-access-from-files", "--virtual-time-budget=8000",
             f"--print-to-pdf={pdf}", page.as_uri()],
            check=True, capture_output=True,
        )
        print("ok", pdf.name)

    shutil.copyfile(PDF / VARIANTS["principal"]["file"], ROOT / "public" / "Hamza_Boufass_CV_2026.pdf")
    print("ok public/Hamza_Boufass_CV_2026.pdf")


if __name__ == "__main__":
    main()
