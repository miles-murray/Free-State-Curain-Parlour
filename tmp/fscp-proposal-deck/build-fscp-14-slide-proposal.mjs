import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = "/Users/Miles/Documents/Free State Curtain Parlour";
const TMP = path.join(ROOT, "tmp/fscp-proposal-deck-14");
const OUT = path.join(ROOT, "output/Free State Curtain Parlour 14 Slide Digital Proposal.pptx");
const RENDERS = path.join(TMP, "renders");
const W = 1280;
const H = 720;

const C = {
  ink: "#111111",
  charcoal: "#171918",
  graphite: "#252422",
  paper: "#f4f1ea",
  warm: "#dfd8cd",
  soft: "#d8d8d2",
  muted: "#625e58",
  gold: "#d7bd92",
  goldBright: "#f0d8ab",
  line: "#a98a60",
  white: "#fbfaf6",
};

const FONT_DISPLAY = "Georgia";
const FONT_BODY = "Aptos";

const img = {
  hero: path.join(ROOT, "public/showroom/hero-interior.jpeg"),
  whole: path.join(ROOT, "public/showroom/whole-room-approach-desktop.jpeg"),
  wholeMobile: path.join(ROOT, "public/showroom/whole-room-approach.jpeg"),
  curtains: path.join(ROOT, "public/showroom/service-curtains-fabrics.jpeg"),
  blinds: path.join(ROOT, "public/showroom/service-blinds.jpeg"),
  wallpaper: path.join(ROOT, "public/showroom/service-wallpaper-decor.jpeg"),
  furniture: path.join(ROOT, "public/showroom/service-furniture-room-settings.jpeg"),
  entry: path.join(ROOT, "public/showroom/showroom-entry.jpg"),
  lounge: path.join(ROOT, "public/showroom/curtain-lounge.jpg"),
  bedroom: path.join(ROOT, "public/showroom/bedroom-setting.jpg"),
  decor: path.join(ROOT, "public/showroom/decor-display.jpg"),
  logo: path.join(ROOT, "public/fscp-logo-transparent.png"),
};

async function bytes(file) {
  return new Uint8Array(await fs.readFile(file));
}

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  return "image/jpeg";
}

function addText(slide, text, position, options = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: options.size ?? 22,
    color: options.color ?? C.ink,
    bold: options.bold ?? false,
    typeface: options.font ?? FONT_BODY,
    alignment: options.align ?? "left",
    verticalAlignment: options.valign ?? "top",
    lineSpacing: options.leading ?? 1.12,
    wrap: "square",
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function addRect(slide, position, fill, lineFill = "none", width = 0) {
  return slide.shapes.add({
    geometry: "rect",
    position,
    fill,
    line: { style: "solid", fill: lineFill, width },
  });
}

function addRule(slide, x, y, w, color = C.line, weight = 1) {
  slide.shapes.add({
    geometry: "line",
    position: { left: x, top: y, width: w, height: 0 },
    fill: "none",
    line: { style: "solid", fill: color, width: weight },
  });
}

async function addImage(slide, file, position, alt, opts = {}) {
  return slide.images.add({
    blob: await bytes(file),
    contentType: contentType(file),
    alt,
    fit: opts.fit ?? "cover",
    position,
    crop: opts.crop,
    geometry: opts.geometry ?? "rect",
    borderRadius: opts.borderRadius,
  });
}

function addEyebrow(slide, text, x = 72, y = 58, color = C.line, centered = false) {
  if (centered) {
    addRule(slide, x + 170, y, 64, color, 1);
    return addText(slide, text.toUpperCase(), { left: x, top: y + 20, width: 404, height: 24 }, {
      size: 12,
      color,
      bold: true,
      align: "center",
      leading: 1,
    });
  }
  addRule(slide, x, y + 8, 48, color, 1);
  return addText(slide, text.toUpperCase(), { left: x + 64, top: y, width: 470, height: 24 }, {
    size: 12,
    color,
    bold: true,
    leading: 1,
  });
}

function addFooter(slide, index, dark = false) {
  addText(slide, "Free State Curtain Parlour digital proposal", { left: 72, top: 674, width: 460, height: 18 }, {
    size: 11,
    color: dark ? "#c8c0b4" : C.muted,
    bold: true,
  });
  addText(slide, String(index).padStart(2, "0"), { left: 1166, top: 664, width: 42, height: 28 }, {
    size: 16,
    color: dark ? C.goldBright : C.line,
    font: FONT_DISPLAY,
    align: "right",
  });
}

function addBullets(slide, items, position, opts = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text.set(items.map((item) => ({
    bulletCharacter: "-",
    marginLeft: 18,
    indent: -10,
    runs: [item],
    spaceAfter: opts.spaceAfter ?? 8,
  })));
  shape.text.style = {
    fontSize: opts.size ?? 19,
    color: opts.color ?? C.muted,
    typeface: opts.font ?? FONT_BODY,
    lineSpacing: opts.leading ?? 1.15,
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function note(slide, lines, sources) {
  slide.speakerNotes.textFrame.setText([
    ...lines,
    "",
    "[Sources]",
    ...sources,
  ]);
  slide.speakerNotes.setVisible(true);
}

async function slide01(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  await addImage(s, img.hero, { left: 470, top: 0, width: 810, height: 720 }, "Free State Curtain Parlour showroom interior");
  addRect(s, { left: 470, top: 0, width: 810, height: 720 }, "#000000/42");
  addRect(s, { left: 0, top: 0, width: 575, height: 720 }, C.charcoal);
  await addImage(s, img.logo, { left: 72, top: 54, width: 240, height: 92 }, "Free State Curtain Parlour logo", { fit: "contain" });
  addEyebrow(s, "Digital proposal", 72, 190, C.goldBright);
  addText(s, "A digital presence that reflects 67 years of trust.", { left: 72, top: 238, width: 520, height: 240 }, {
    size: 55,
    bold: true,
    color: C.white,
    leading: 0.98,
    font: FONT_DISPLAY,
  });
  addText(s, "Website concept and Google Business Profile optimization", { left: 76, top: 526, width: 440, height: 58 }, {
    size: 21,
    color: "#ded8cd",
    leading: 1.22,
  });
  addRule(s, 72, 622, 170, C.goldBright, 1);
  addText(s, "Prepared for Free State Curtain Parlour", { left: 72, top: 640, width: 430, height: 24 }, {
    size: 14,
    color: C.goldBright,
    bold: true,
  });
  note(s, [
    "Open by framing the presentation as a business proposal, not simply a website showcase.",
    "Mention that the homepage concept demonstrates the proposed direction before the client commits to the full project.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local asset: public/showroom/hero-interior.jpeg.",
    "Local asset: public/fscp-logo-transparent.png.",
  ]);
}

function slide02(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Current stage");
  addText(s, "This is a concept, not the completed website.", { left: 72, top: 124, width: 820, height: 105 }, {
    size: 46,
    bold: true,
    leading: 1.03,
    font: FONT_DISPLAY,
  });
  addText(s, "The current homepage shows the visual direction, messaging approach and proposed customer journey. Full production work begins only once the project is approved.", { left: 74, top: 258, width: 650, height: 96 }, {
    size: 21,
    color: C.muted,
    leading: 1.28,
  });
  const items = [
    ["Now", "Homepage concept and direction"],
    ["After approval", "Complete multi-page React website"],
    ["Before launch", "Optimization, testing, Google profile work and final QA"],
  ];
  items.forEach(([label, value], i) => {
    const y = 432 + i * 70;
    addRule(s, 80, y - 16, 940, "#c9beb0", 1);
    addText(s, label, { left: 80, top: y, width: 210, height: 30 }, { size: 24, bold: true, color: C.line });
    addText(s, value, { left: 314, top: y + 2, width: 660, height: 30 }, { size: 22, bold: true, color: C.ink });
  });
  addRect(s, { left: 930, top: 114, width: 198, height: 198 }, C.charcoal, C.gold, 1);
  addText(s, "Direction first", { left: 956, top: 168, width: 146, height: 36 }, { size: 25, bold: true, color: C.goldBright, align: "center" });
  addText(s, "Production after approval", { left: 960, top: 222, width: 136, height: 52 }, { size: 17, color: C.white, align: "center", leading: 1.18 });
  addFooter(s, 2);
  note(s, [
    "This slide protects the sales context. Do not imply the full technical build is already complete.",
    "The client should understand that the concept is intentionally pre-sale and the full production website is the deliverable if they proceed.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

async function slide03(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  await addImage(s, img.entry, { left: 0, top: 0, width: 500, height: 720 }, "Free State Curtain Parlour showroom");
  addRect(s, { left: 0, top: 0, width: 500, height: 720 }, "#000000/16");
  addEyebrow(s, "Business understanding", 570, 58);
  addText(s, "Not simply a curtain shop.", { left: 570, top: 120, width: 570, height: 72 }, {
    size: 44,
    bold: true,
    font: FONT_DISPLAY,
  });
  addText(s, "Free State Curtain Parlour helps homeowners complete interiors through curtains, blinds, fabrics, wallpaper, furniture, decor and personalised showroom guidance.", { left: 572, top: 224, width: 562, height: 118 }, {
    size: 21,
    color: C.muted,
    leading: 1.3,
  });
  addBullets(s, [
    "Approximately 67 years of history.",
    "A reputation supported by word of mouth and referrals.",
    "A physical showroom where customers can compare materials in person.",
    "A complete-room approach that brings separate choices together.",
  ], { left: 590, top: 382, width: 560, height: 180 }, { size: 19, leading: 1.18, spaceAfter: 9 });
  addText(s, "Strategic takeaway", { left: 570, top: 602, width: 170, height: 22 }, { size: 12, bold: true, color: C.line });
  addText(s, "The website should represent the credibility that already exists offline.", { left: 570, top: 628, width: 550, height: 42 }, { size: 23, bold: true, color: C.ink });
  addFooter(s, 3);
  note(s, [
    "This is where you prove you listened. The positioning is broader than curtains and is anchored in the showroom and complete-room advice.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local asset: public/showroom/showroom-entry.jpg.",
  ]);
}

function slide04(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Digital opportunity", 72, 58, C.goldBright);
  addText(s, "The online presence should catch up with the offline reputation.", { left: 72, top: 122, width: 780, height: 120 }, {
    size: 45,
    bold: true,
    color: C.white,
    leading: 1.03,
    font: FONT_DISPLAY,
  });
  addText(s, "The goal is not to manufacture credibility from nothing. It is to make the established business easier to discover, understand, trust and visit.", { left: 76, top: 276, width: 620, height: 98 }, {
    size: 21,
    color: "#d7d0c6",
    leading: 1.28,
  });
  const steps = [
    ["Google Search / Maps", "Discovery"],
    ["Optimized Business Profile", "Clarity and relevance"],
    ["New website", "Depth, trust and style"],
    ["Visit or contact", "Commercial action"],
  ];
  steps.forEach(([title, label], i) => {
    const x = 80 + i * 292;
    addText(s, String(i + 1).padStart(2, "0"), { left: x, top: 438, width: 72, height: 42 }, {
      size: 34,
      font: FONT_DISPLAY,
      color: C.goldBright,
    });
    addText(s, title, { left: x, top: 498, width: 214, height: 48 }, { size: 22, bold: true, color: C.white, leading: 1.1 });
    addText(s, label, { left: x, top: 558, width: 220, height: 30 }, { size: 16, color: "#c8c1b7" });
    if (i < 3) addRule(s, x + 210, 458, 62, C.goldBright, 1);
  });
  addFooter(s, 4, true);
  note(s, [
    "Use this as the joined-up digital presence story: Google profile and website are connected, not separate random services.",
    "Avoid promising rankings or enquiry numbers.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

function slide05(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Website objective");
  addText(s, "The homepage follows a commercial journey.", { left: 72, top: 118, width: 680, height: 84 }, {
    size: 45,
    bold: true,
    font: FONT_DISPLAY,
  });
  addText(s, "Every section should move a residential homeowner from interest toward a showroom visit or enquiry.", { left: 74, top: 230, width: 560, height: 62 }, {
    size: 21,
    color: C.muted,
    leading: 1.25,
  });
  const journey = [
    ["Attention", "Strong photography and confident typography."],
    ["Understanding", "A broad interior offer, not only curtains."],
    ["Interest", "Products, rooms and showroom details."],
    ["Trust", "History, physical presence and helpful guidance."],
    ["Action", "Visit, call or enquire about a room."],
  ];
  journey.forEach(([title, body], i) => {
    const y = 366 + i * 56;
    addRule(s, 80, y - 12, 980, "#c9beb0", 1);
    addText(s, title, { left: 80, top: y, width: 210, height: 28 }, { size: 23, bold: true, color: C.ink });
    addText(s, body, { left: 330, top: y + 2, width: 620, height: 28 }, { size: 18, color: C.muted });
  });
  addText(s, "A website with a job", { left: 860, top: 132, width: 250, height: 40 }, { size: 28, bold: true, color: C.line, align: "center" });
  addRect(s, { left: 904, top: 188, width: 160, height: 160 }, C.charcoal, C.gold, 1);
  addText(s, "Trust\n+\naction", { left: 930, top: 222, width: 108, height: 94 }, { size: 30, bold: true, color: C.goldBright, align: "center", leading: 1.08, font: FONT_DISPLAY });
  addFooter(s, 5);
  note(s, [
    "This gives the client a simple mental model for the site. It is not decorative; it guides visitor behaviour.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

async function slide06(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  await addImage(s, img.decor, { left: 792, top: 0, width: 488, height: 720 }, "Decor and lighting display");
  addRect(s, { left: 792, top: 0, width: 488, height: 720 }, "#000000/18");
  addEyebrow(s, "Design reasoning");
  addText(s, "The design supports the interiors, not the other way around.", { left: 72, top: 114, width: 680, height: 124 }, {
    size: 44,
    bold: true,
    leading: 1.03,
    font: FONT_DISPLAY,
  });
  const items = [
    ["Photography", "Lets visitors feel the character of the showroom quickly."],
    ["Editorial type", "Gives the business presence beyond a generic local template."],
    ["Dark + warm neutrals", "Works with the existing showroom mood and product materials."],
    ["Whitespace", "Prevents the offer from feeling like a crowded catalogue."],
    ["Asymmetry", "Creates a more custom, considered visual rhythm."],
  ];
  items.forEach(([title, body], i) => {
    const y = 278 + i * 66;
    addRule(s, 72, y - 12, 615, "#c8bdae", 1);
    addText(s, title, { left: 72, top: y, width: 210, height: 26 }, { size: 22, bold: true, color: C.ink });
    addText(s, body, { left: 310, top: y + 1, width: 390, height: 42 }, { size: 17, color: C.muted, leading: 1.14 });
  });
  addFooter(s, 6);
  note(s, [
    "For every visual choice, use the pattern: decision, reasoning, business benefit.",
    "The website should feel premium while letting the showroom photography do the selling.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local asset: public/showroom/decor-display.jpg.",
  ]);
}

async function slide07(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  await addImage(s, img.hero, { left: 0, top: 0, width: 1280, height: 720 }, "Homepage hero showroom image");
  addRect(s, { left: 0, top: 0, width: 1280, height: 720 }, "#000000/58");
  await addImage(s, img.logo, { left: 72, top: 50, width: 210, height: 78 }, "Free State Curtain Parlour logo", { fit: "contain" });
  addText(s, "Where furniture, fabric, and finishing meet.", { left: 72, top: 184, width: 600, height: 220 }, {
    size: 52,
    bold: true,
    color: C.white,
    leading: 0.98,
    font: FONT_DISPLAY,
  });
  addText(s, "The hero establishes the broader positioning immediately: this is about complete interiors, not only a single product category.", { left: 76, top: 438, width: 540, height: 72 }, {
    size: 20,
    color: "#e2dbd1",
    leading: 1.25,
  });
  addRect(s, { left: 764, top: 142, width: 374, height: 372 }, "#171918/78", C.goldBright, 1);
  addText(s, "What it communicates", { left: 804, top: 186, width: 260, height: 34 }, { size: 26, bold: true, color: C.goldBright });
  addBullets(s, [
    "The showroom has depth and character.",
    "The business offers a complete-room point of view.",
    "The next action is simple: explore or contact.",
  ], { left: 806, top: 252, width: 292, height: 160 }, { size: 18, color: "#ece5da", leading: 1.18, spaceAfter: 9 });
  addFooter(s, 7, true);
  note(s, [
    "This is the first homepage walkthrough slide. The message is about positioning and first impression.",
    "Use the actual hero wording from the concept.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local implementation: app/page.tsx hero section.",
    "Local asset: public/showroom/hero-interior.jpeg.",
  ]);
}

async function slide08(p) {
  const s = p.slides.add();
  s.background.fill = C.warm;
  addEyebrow(s, "Homepage structure");
  addText(s, "Each section has a specific role in the sales story.", { left: 72, top: 112, width: 720, height: 104 }, {
    size: 43,
    bold: true,
    leading: 1.04,
    font: FONT_DISPLAY,
  });
  const cards = [
    ["Whole-room approach", img.whole, "Explains the bigger idea behind the products."],
    ["Service range", img.curtains, "Shows the breadth without becoming a catalogue."],
    ["Showroom proof", img.lounge, "Turns the physical space into a conversion asset."],
  ];
  for (let i = 0; i < cards.length; i++) {
    const [title, file, caption] = cards[i];
    const x = 72 + i * 382;
    await addImage(s, file, { left: x, top: 294, width: 332, height: 222 }, title);
    addRect(s, { left: x, top: 294, width: 332, height: 222 }, "#000000/34");
    addText(s, title, { left: x + 22, top: 392, width: 260, height: 34 }, { size: 25, bold: true, color: C.white });
    addText(s, caption, { left: x, top: 540, width: 320, height: 58 }, { size: 18, color: C.muted, leading: 1.2 });
  }
  addText(s, "The result is a guided path from inspiration to action.", { left: 72, top: 626, width: 700, height: 30 }, {
    size: 21,
    bold: true,
    color: C.ink,
  });
  addFooter(s, 8);
  note(s, [
    "Do not just describe the visible sections. Explain the job each section performs in moving the visitor forward.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local implementation: app/page.tsx intro, services and showroom sections.",
    "Local assets: whole-room-approach-desktop.jpeg, service-curtains-fabrics.jpeg, curtain-lounge.jpg.",
  ]);
}

async function slide09(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  await addImage(s, img.whole, { left: 640, top: 0, width: 640, height: 720 }, "Showroom interior and decor display");
  addRect(s, { left: 640, top: 0, width: 640, height: 720 }, "#000000/22");
  addEyebrow(s, "Showroom strategy");
  addText(s, "A showroom visit is a conversion.", { left: 72, top: 118, width: 560, height: 104 }, {
    size: 46,
    bold: true,
    leading: 1.03,
    font: FONT_DISPLAY,
  });
  addText(s, "For this business, the website does not need to complete the entire buying journey online. It should make people want to visit, compare materials and speak to the team.", { left: 74, top: 258, width: 500, height: 120 }, {
    size: 21,
    color: C.muted,
    leading: 1.3,
  });
  addRule(s, 74, 456, 430, C.line, 1);
  addText(s, "Website role", { left: 74, top: 492, width: 160, height: 22 }, { size: 12, bold: true, color: C.line });
  addText(s, "Discover -> understand -> trust -> visit or contact.", { left: 74, top: 524, width: 500, height: 72 }, {
    size: 29,
    bold: true,
    color: C.ink,
    leading: 1.12,
  });
  addFooter(s, 9);
  note(s, [
    "This is one of the strongest strategic points: the showroom is part of the funnel, not just a contact detail.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local asset: public/showroom/whole-room-approach-desktop.jpeg.",
  ]);
}

async function slide10(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Mobile experience", 72, 58, C.goldBright);
  addText(s, "Mobile is designed deliberately, not just reduced.", { left: 72, top: 118, width: 600, height: 120 }, {
    size: 45,
    bold: true,
    color: C.white,
    leading: 1.04,
    font: FONT_DISPLAY,
  });
  addText(s, "The same brand feeling needs to survive on a narrow screen while remaining practical to browse and contact from a phone.", { left: 74, top: 270, width: 500, height: 80 }, {
    size: 20,
    color: "#d7d0c6",
    leading: 1.27,
  });
  addBullets(s, [
    "Typography adjusted for readability.",
    "Images cropped for vertical viewing.",
    "Sections stacked with clearer spacing.",
    "Calls to action remain easy to find.",
  ], { left: 78, top: 408, width: 420, height: 142 }, { size: 18, color: "#d7d0c6", leading: 1.18, spaceAfter: 7 });
  addRect(s, { left: 700, top: 62, width: 246, height: 590 }, "#0b0c0b", C.gold, 1);
  await addImage(s, img.wholeMobile, { left: 714, top: 82, width: 218, height: 548 }, "Mobile-oriented showroom image", { borderRadius: "rounded-xl" });
  addRect(s, { left: 714, top: 82, width: 218, height: 548 }, "#000000/16");
  addRect(s, { left: 988, top: 174, width: 174, height: 320 }, C.paper, C.gold, 1);
  addText(s, "Phone-first decisions", { left: 1012, top: 222, width: 126, height: 70 }, { size: 24, bold: true, color: C.ink, align: "center", leading: 1.08 });
  addText(s, "Preserve the style.\nImprove the scan.", { left: 1016, top: 332, width: 118, height: 68 }, { size: 17, color: C.muted, align: "center", leading: 1.22 });
  addFooter(s, 10, true);
  note(s, [
    "Do not claim a specific share of visitors use mobile unless analytics later confirms it.",
    "The point is that phone users need an experience designed for the device.",
  ], [
    "User-provided project brief in this Codex thread.",
    "Local asset: public/showroom/whole-room-approach.jpeg.",
  ]);
}

function slide11(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Final website scope");
  addText(s, "The approved project becomes a custom multi-page React website.", { left: 72, top: 114, width: 760, height: 118 }, {
    size: 43,
    bold: true,
    leading: 1.04,
    font: FONT_DISPLAY,
  });
  addText(s, "The exact page structure can be refined once final content is confirmed, but the current direction supports a practical marketing and lead-generation website.", { left: 74, top: 264, width: 650, height: 84 }, {
    size: 20,
    color: C.muted,
    leading: 1.28,
  });
  const pages = ["Home", "About Us", "Our History", "Services", "Showroom", "Showroom Guide", "Contact Us"];
  pages.forEach((page, i) => {
    const x = 96 + (i % 4) * 260;
    const y = 424 + Math.floor(i / 4) * 86;
    addText(s, page, { left: x, top: y, width: 208, height: 34 }, { size: 24, bold: true, color: C.ink });
    addRule(s, x, y + 48, 190, "#c5b9aa", 1);
  });
  addText(s, "Not e-commerce", { left: 930, top: 150, width: 160, height: 30 }, { size: 24, bold: true, color: C.line, align: "center" });
  addText(s, "The site is built to explain, build trust and generate visits or enquiries.", { left: 900, top: 202, width: 220, height: 90 }, { size: 18, color: C.muted, align: "center", leading: 1.2 });
  addFooter(s, 11);
  note(s, [
    "The client is not buying only the homepage concept. They are buying a complete multi-page React website after approval.",
    "Make clear this is a marketing and lead-generation website, not an online store.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

function slide12(p) {
  const s = p.slides.add();
  s.background.fill = C.warm;
  addEyebrow(s, "Google Business Profile");
  addText(s, "The existing Google profile should reflect the full offering.", { left: 72, top: 114, width: 760, height: 118 }, {
    size: 43,
    bold: true,
    leading: 1.04,
    font: FONT_DISPLAY,
  });
  addText(s, "This is not profile creation from scratch. It is an audit, clean-up and optimization of the existing profile so Google and potential customers better understand the business.", { left: 74, top: 264, width: 650, height: 95 }, {
    size: 20,
    color: C.muted,
    leading: 1.28,
  });
  const work = [
    ["Information", "Check business details, categories and services."],
    ["Messaging", "Improve description and service representation."],
    ["Photography", "Use strong showroom imagery where appropriate."],
    ["Activity", "Create several initial Google Business Profile posts."],
    ["Connection", "Link the finished website clearly."],
  ];
  work.forEach(([title, body], i) => {
    const y = 420 + i * 46;
    addRule(s, 84, y - 10, 860, "#c0b4a4", 1);
    addText(s, title, { left: 84, top: y, width: 180, height: 26 }, { size: 21, bold: true, color: C.ink });
    addText(s, body, { left: 300, top: y + 2, width: 610, height: 26 }, { size: 17, color: C.muted });
  });
  addRect(s, { left: 982, top: 208, width: 170, height: 170 }, C.charcoal, C.gold, 1);
  addText(s, "No ranking\npromises", { left: 1002, top: 258, width: 130, height: 58 }, { size: 23, bold: true, color: C.goldBright, align: "center", leading: 1.05 });
  addFooter(s, 12);
  note(s, [
    "Explain that the Google profile and website work together: search visibility, business clarity, trust, then a visit or enquiry.",
    "Avoid keyword stuffing language and avoid promising first place rankings.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

function slide13(p) {
  const s = p.slides.add();
  s.background.fill = C.charcoal;
  addEyebrow(s, "Production quality", 72, 58, C.goldBright);
  addText(s, "The finished build should be technically strong and measurable.", { left: 72, top: 116, width: 700, height: 126 }, {
    size: 44,
    bold: true,
    color: C.white,
    leading: 1.04,
    font: FONT_DISPLAY,
  });
  const columns = [
    ["Performance", "Image compression, responsive image sizes and efficient loading."],
    ["SEO foundation", "Page titles, metadata, headings, alt text, sitemap and local relevance."],
    ["Accessibility", "Readable contrast, clear navigation and proper page structure."],
    ["Analytics", "Measure visitors, traffic sources, pages viewed and key contact actions."],
  ];
  columns.forEach(([title, body], i) => {
    const x = 76 + i * 292;
    addText(s, title, { left: x, top: 322, width: 230, height: 34 }, { size: 24, bold: true, color: C.goldBright });
    addText(s, body, { left: x, top: 380, width: 222, height: 112 }, { size: 17, color: "#d6d1c8", leading: 1.2 });
    addRule(s, x, 532, 220, "#5d574f", 1);
  });
  addRect(s, { left: 842, top: 146, width: 318, height: 100 }, "#252422", C.gold, 1);
  addText(s, "Previous project proof", { left: 870, top: 168, width: 262, height: 28 }, { size: 23, bold: true, color: C.goldBright, align: "center" });
  addText(s, "Insert a real Lighthouse screenshot here if useful.", { left: 876, top: 206, width: 250, height: 28 }, { size: 14, color: "#d6d1c8", align: "center", leading: 1.1 });
  addFooter(s, 13, true);
  note(s, [
    "This slide brings out the technical side without making the client responsible for web development jargon.",
    "Use actual previous Lighthouse results only if you have the screenshot available. Do not invent scores and do not imply those scores belong to FSCP.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

function slide14(p) {
  const s = p.slides.add();
  s.background.fill = C.paper;
  addEyebrow(s, "Investment and next steps");
  addText(s, "Clear scope, clear cost, clear path forward.", { left: 72, top: 112, width: 760, height: 92 }, {
    size: 45,
    bold: true,
    leading: 1.04,
    font: FONT_DISPLAY,
  });
  const prices = [
    ["Custom multi-page React website", "R8,500"],
    ["Google Business Profile optimization", "R2,000"],
    ["Domain", "R268"],
  ];
  prices.forEach(([label, price], i) => {
    const y = 258 + i * 58;
    addRule(s, 80, y - 13, 560, "#c3b7a8", 1);
    addText(s, label, { left: 80, top: y, width: 390, height: 28 }, { size: 20, bold: true, color: C.ink });
    addText(s, price, { left: 504, top: y - 2, width: 140, height: 32 }, { size: 24, bold: true, color: C.line, align: "right" });
  });
  addRect(s, { left: 80, top: 454, width: 560, height: 70 }, C.charcoal, C.charcoal, 1);
  addText(s, "Total project cost", { left: 108, top: 476, width: 280, height: 30 }, { size: 23, bold: true, color: C.white });
  addText(s, "R10,768", { left: 456, top: 468, width: 150, height: 42 }, { size: 31, bold: true, color: C.goldBright, align: "right", font: FONT_DISPLAY });
  addText(s, "Payment structure", { left: 744, top: 254, width: 270, height: 34 }, { size: 27, bold: true, color: C.ink });
  addText(s, "Initial payment with domain: R5,518\nFinal service payment: R5,250\nTimeline: two weeks or less after official start", { left: 746, top: 310, width: 430, height: 114 }, {
    size: 20,
    color: C.muted,
    leading: 1.28,
  });
  addRule(s, 746, 470, 360, C.line, 1);
  addText(s, "Next steps", { left: 746, top: 500, width: 180, height: 28 }, { size: 24, bold: true, color: C.ink });
  addText(s, "Approve direction -> confirm project -> initial payment -> full build + Google profile optimization -> review -> final payment -> launch", { left: 746, top: 542, width: 420, height: 70 }, {
    size: 18,
    color: C.muted,
    leading: 1.18,
  });
  addFooter(s, 14);
  note(s, [
    "Do not sound defensive about price. Present it as a clear professional service package.",
    "Clarify that the professional service fees are R10,500 split 50/50, and the R268 domain is an additional external project cost.",
    "The two-week timeline assumes timely client information, feedback and approval.",
  ], [
    "User-provided project brief in this Codex thread.",
  ]);
}

async function main() {
  await fs.mkdir(RENDERS, { recursive: true });
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  const sourceNotes = [
    "Free State Curtain Parlour 14-slide proposal source notes.",
    "All business claims, pricing, timeline, payment structure and GBP scope are from the user-provided master brief in this Codex thread.",
    "Homepage concept content and images are from local project files under /Users/Miles/Documents/Free State Curtain Parlour.",
    "No Google ranking guarantees, sales guarantees, invented statistics or invented Lighthouse scores are included.",
  ].join("\n");
  await fs.writeFile(path.join(TMP, "source-notes.txt"), sourceNotes);

  const presentation = Presentation.create({
    slideSize: { width: W, height: H },
  });

  await slide01(presentation);
  slide02(presentation);
  await slide03(presentation);
  slide04(presentation);
  slide05(presentation);
  await slide06(presentation);
  await slide07(presentation);
  await slide08(presentation);
  await slide09(presentation);
  await slide10(presentation);
  slide11(presentation);
  slide12(presentation);
  slide13(presentation);
  slide14(presentation);

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    const png = await presentation.export({ slide, format: "png", scale: 1 });
    await fs.writeFile(path.join(RENDERS, `${stem}.png`), new Uint8Array(await png.arrayBuffer()));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(RENDERS, `${stem}.layout.json`), await layout.text());
  }

  const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
  await fs.writeFile(path.join(TMP, "deck-montage.webp"), new Uint8Array(await montage.arrayBuffer()));
  const inspection = await presentation.inspect({ kind: "slide,textbox,shape,image,notes", maxChars: 20000 });
  await fs.writeFile(path.join(TMP, "inspection.ndjson"), inspection.ndjson);
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(OUT);
  console.log(OUT);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
