export interface ProjectSectionTranslation {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface ProjectEnglishTranslation {
  name: string;
  tagline: string;
  summary: string;
  role?: string;
  year: string;
  stack: string[];
  highlights: string[];
  metrics?: { label: string }[];
  caseStudy: Record<string, ProjectSectionTranslation>;
  gallery: { alt: string; caption: string }[];
  imageAlt: string;
}

export const projectEnglishTranslations: Record<string, ProjectEnglishTranslation> = {
  "morocco-franchise-exhibition": {
    name: "Morocco Franchise Exhibition",
    tagline: "Visual identity and graphic rollout for the BILL APP stand",
    summary: "An exhibition space designed with the stand designer to make BILL's universe and solutions readable at a large scale.",
    role: "Graphic Designer",
    year: "2026",
    stack: ["Illustrator", "Photoshop", "Figma", "Signage", "Print"],
    highlights: ["Stand graphic system", "Large-format visual materials", "BILL brand rollout", "Collaboration with the stand designer"],
    caseStudy: {
      context: { heading: "Context", body: ["BILL APP took part in the Morocco Franchise Exhibition with a stand designed to present its universe and digital solutions for the restaurant industry."] },
      problem: { heading: "The challenge", body: ["In a busy exhibition, the stand had to attract attention, explain BILL's offer quickly and stay coherent across every format, from a distance and up close."] },
      contribution: { heading: "My contribution", body: ["I worked on the visual design of the space with the stand designer: composing visuals, setting message hierarchy, rolling out the BILL identity and preparing large-format materials."], bullets: ["Created and adapted the stand visuals", "Laid out messages and product modules", "Connected the brand identity with the physical space"] },
      outcome: { heading: "Outcome", body: ["A coherent and immediately recognisable brand space able to present several BILL solutions while keeping the visitor experience clear."] },
    },
    gallery: [
      { alt: "Hamza Boufass and a colleague in front of the BILL APP stand", caption: "The BILL APP stand during the Morocco Franchise Exhibition." },
      { alt: "Ordering screen on the exhibition stand", caption: "A demonstration of BILL products inside the exhibition space." },
      { alt: "BILL APP team at the stand", caption: "The BILL APP team gathered at the stand." },
    ],
    imageAlt: "BILL APP stand at the Morocco Franchise Exhibition",
  },
  "export-pdf-slides": {
    name: "Export PDF Slides",
    tagline: "A Figma plugin for exporting lighter PDF presentations",
    summary: "A native plugin that automates export, compression and slide merging to produce PDFs that are easy to send after every revision.",
    role: "Product Designer & Plugin Developer",
    year: "October 2025",
    stack: ["Figma Plugin API", "JavaScript", "PDF", "Image compression", "UX/UI"],
    highlights: ["Problem identified during an internship at BILL APP", "Automated export and compression in Figma", "Built for frequently revised sales presentations", "Published on Figma Community"],
    metrics: [{ label: "slides in the observed case" }, { label: "initial PDF" }, { label: "target file size" }],
    caseStudy: {
      context: { heading: "Context", body: ["In October 2025, shortly after Figma Slides launched, I discovered an urgent problem for BILL APP's sales presentations during my internship.", "A 15-slide presentation could generate a PDF of around 360 MB, while managers and sales teams needed a lightweight 5–10 MB file that could be sent easily to clients on WhatsApp."] },
      problem: { heading: "The problem", body: ["The first idea was a platform where someone could paste a Figma link and receive an optimised PDF. That quickly became problematic: sales presentations are confidential, and an external platform would have needed to handle links, permissions and APIs for every export."] },
      contribution: { heading: "The solution I designed", body: ["I chose to create a Figma plugin integrated directly into the workflow. It takes the manual method used by the team and automates it: export slides as images, compress them and merge them into an optimised PDF."], bullets: ["Framed the problem and chose a native Figma solution", "Designed the export interface and quality settings", "Automated export, compression and PDF merging", "Published the plugin on Figma Community"] },
      challenges: { heading: "Why the plugin was needed", body: ["For very large presentations, especially around 70 slides, the manual method became slow and fragile. Every manager-requested change meant starting over. The plugin makes the operation repeatable, direct and compatible with frequent revisions."] },
      outcome: { heading: "Outcome", body: ["The plugin was used directly in BILL APP's workflow and then shared publicly. Feedback from other Figma users confirmed the value of quickly exporting presentations that are easier to send."] },
    },
    gallery: [
      { alt: "Export PDF Slides in the Figma plugin search", caption: "The plugin visible in Figma search." },
      { alt: "Figma Community page for the Export PDF Slides plugin", caption: "The public plugin page on Figma Community." },
      { alt: "Export PDF Slides plugin interface", caption: "The export interface with quality and compression controls." },
    ],
    imageAlt: "Export PDF Slides Figma plugin published on Figma Community",
  },
  "bill-design": {
    name: "BILL Design",
    tagline: "An AI agent and automation tools directly inside Figma",
    summary: "A modular plugin that centralises templates, mockups, automations and an AI agent able to work on a presentation.",
    role: "Product Designer & Plugin Developer",
    year: "Evolving",
    stack: ["Figma Plugin API", "Vite", "JavaScript", "Gemini API", "Supabase"],
    highlights: ["Templates and mockups injected into Figma", "Automated contents, headings, spelling and emphasis", "AI chat connected to presentation context", "Changes applied directly in the Figma file"],
    caseStudy: {
      context: { heading: "Context", body: ["At BILL APP, Figma is where sales presentations are produced. Repetitive actions, refinements and resource discovery slowed down everyday work.", "I therefore designed BILL Design as a work tool integrated into Figma: not an isolated assistant, but an environment that helps the team produce, correct and evolve slides without leaving its usual workflow."] },
      problem: { heading: "The challenge", body: ["The tool needed to gather the actions that recur in every presentation: choosing a template, adding a mockup, maintaining headings and contents, correcting text, emphasising the right words and staying consistent with BILL's context.", "AI also had to be useful inside the file itself. It needed to understand the brief, company resources and slide content before suggesting or applying a change."] },
      contribution: { heading: "The plugin I built", body: ["I structured the plugin into four tabs, each designed around a concrete step in the Figma workflow."], bullets: ["Templates: select and inject slides ready to adapt", "Mockups: find and import the visuals needed in the right place", "AI tools: sync headings, update contents, check spelling, emphasise keywords and replace icons", "AI chat: analyse the brief and selected slides, then apply approved actions in the presentation"] },
      challenges: { heading: "An agent adapted to BILL's context", body: ["Before answering, the AI chat uses the brief and dynamic resources that define BILL's offers, vocabulary and rules. Conversations are saved in Supabase to preserve a work history.", "To analyse large presentations, the plugin sends numbered JPEG slide batches. The user's personal Gemini key is stored in Figma storage, and the model can be selected in settings according to available limits."] },
      outcome: { heading: "Outcome", body: ["BILL Design became an evolving production toolbox: it gathers the automations the team needs and introduces an AI agent able to reason about a presentation before acting directly in Figma."] },
    },
    gallery: [
      { alt: "Mockups tab of the BILL Design Figma plugin", caption: "Searching for and injecting mockups directly into Figma." },
      { alt: "BILL Design AI tools in Figma", caption: "Automated headings, contents, spelling, emphasis and icons." },
      { alt: "AI chat sessions in BILL Design", caption: "The AI chat keeps work discussions connected to presentations." },
      { alt: "BILL Design AI chat applying a change", caption: "The agent analyses context and applies an action to the selected slide." },
      { alt: "BILL Design Gemini settings", caption: "The API key and model choice stay in the user's Figma storage." },
    ],
    imageAlt: "BILL Design Figma plugin interface",
  },
  "bill-app-website": {
    name: "BILL APP — Website",
    tagline: "From WordPress V1 to a Next.js SSR and Sanity V2",
    summary: "Work started on V1 with my internship supervisor, then continued on a more flexible V2 whose components are currently being validated.",
    role: "UI Designer & Front-end Contributor",
    year: "2026",
    stack: ["WordPress", "Elementor", "Next.js", "SSR", "Sanity"],
    highlights: ["V1 delivered with my internship supervisor", "WordPress site built with Elementor", "Transition toward Next.js SSR and Sanity", "V2 components designed and currently being validated"],
    caseStudy: {
      context: { heading: "Context", body: ["I contributed to BILL APP's V1 website with my internship supervisor. The project was built with WordPress and Elementor to present digitalisation solutions for the restaurant industry."] },
      problem: { heading: "Why evolve the website", body: ["As we explored new AI-assisted ways of working, we found that Elementor could limit the speed of iteration, component quality and long-term product flexibility."] },
      contribution: { heading: "My contribution", body: ["I contributed interface work on V1, then helped design the components for V2. This new foundation uses Next.js with SSR and Sanity to make the site more modular and better suited to the team's pace."], bullets: ["Collaborated on the WordPress V1 with my internship supervisor", "Designed interface components for V2", "Contributed to a more modular approach with Next.js SSR and Sanity"] },
      outcome: { heading: "Current status", body: ["V1 remains publicly viewable. V2 is in a component validation phase."] },
    },
    gallery: [
      { alt: "Client testimonials on the BILL APP website", caption: "A testimonial section designed to strengthen social proof." },
      { alt: "BILL APP website reassurance components", caption: "Reassurance and solution-presentation components for BILL." },
    ],
    imageAlt: "BILL APP website logo",
  },
};
