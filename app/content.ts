export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Showroom", href: "/showroom" },
  { label: "Process", href: "/workshop" },
  { label: "Projects", href: "/projects" },
  { label: "Team & roles", href: "/team" },
  { label: "History", href: "/history" },
];

export const sitePages = [
  { label: "Home", href: "/" },
  ...primaryNav,
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: "01",
    title: "Curtains",
    slug: "curtains-fabrics",
    description:
      "Custom curtains made around the room, from fabric and lining choices to curtain tracks, rods, rails, measuring, installation and final dressing.",
    cta: "Learn about curtains",
    href: "/services#curtains-fabrics",
    image: "/showroom/service-curtains-fabrics.jpeg",
    position: "34% center",
  },
  {
    number: "02",
    title: "Blinds",
    slug: "blinds",
    description:
      "Choose blinds that suit the room's privacy, light and everyday use. We help you compare finishes and make sure the blinds work with the rest of the space.",
    cta: "Learn about blinds",
    href: "/services#blinds",
    image: "/showroom/service-blinds-generated.png",
    position: "center center",
  },
  {
    number: "03",
    title: "Wallpaper & interior finishes",
    slug: "wallpaper",
    description:
      "Choose wallpaper, texture, pattern and interior finishes with the curtains, upholstery, furniture and overall room direction in mind.",
    cta: "Learn about wallpaper",
    href: "/services#wallpaper",
    image: "/showroom/service-wallpaper-decor.jpeg",
    position: "center center",
  },
  {
    number: "04",
    title: "Upholstery & soft furnishings",
    slug: "upholstery-soft-furnishings",
    description:
      "Refresh existing furniture or plan soft details with fabric advice, reupholstery, headboards, ottomans and trimmings considered around the room.",
    cta: "Learn about upholstery",
    href: "/services#upholstery-soft-furnishings",
    image: "/showroom/furniture-decor-example-02.jpeg",
    position: "center center",
  },
  {
    number: "05",
    title: "Rugs, lighting & decor",
    slug: "rugs-lighting-decor",
    description:
      "Choose rugs, lamps, LED touches, mirrors and decor pieces as the final layers that bring the room together.",
    cta: "Explore finishing pieces",
    href: "/services#rugs-lighting-decor",
    image: "/showroom/service-furniture-room-settings.jpeg",
    position: "center center",
  },
  {
    number: "06",
    title: "Interior guidance",
    slug: "interior-guidance",
    description:
      "Use the showroom and on-site advice to choose fabrics, finishes, layouts and the right next step for the full interior.",
    cta: "Learn about guidance",
    href: "/services#interior-guidance",
    image: "/showroom/bedroom-setting.jpg",
    position: "center center",
  },
  {
    number: "07",
    title: "Wall units & custom pieces",
    slug: "wall-units",
    description:
      "Plan wall units, sourced custom pieces and practical built-in ideas around the room's scale, finish, storage and display needs.",
    cta: "Learn about custom pieces",
    href: "/services#wall-units",
    image: "/showroom/decor-display.jpg",
    position: "center center",
  },
];

export const homepageServices = [
  {
    title: "Curtains & blinds",
    description:
      "Custom curtains, curtain tracks, electric tracks, all types of blinds, measuring and installation for windows that need privacy, light control and a finished look.",
    cta: "View service details",
    href: "/services",
    image: "/showroom/service-curtains-fabrics.jpeg",
    position: "34% center",
  },
  {
    title: "Upholstery & soft furnishings",
    description:
      "Reupholstery, furniture revamps, leather products, scatter cushions, headboards, ottomans, trimmings and soft details that help the room feel layered and complete.",
    cta: "View service details",
    href: "/services",
    image: "/showroom/furniture-decor-example-02.jpeg",
    position: "center center",
  },
  {
    title: "Wallpaper & interior finishes",
    description:
      "Wallpaper, textures, pattern choices and room finishes selected around the curtains, furniture and overall interior direction.",
    cta: "View service details",
    href: "/services",
    image: "/showroom/service-wallpaper-decor.jpeg",
    position: "center center",
  },
  {
    title: "Rugs, lighting & decor",
    description:
      "Rugs, LED lighting touches, lamps, mirrors, quilts, decor pieces and final details chosen to bring the whole room together.",
    cta: "View service details",
    href: "/services",
    image: "/showroom/service-furniture-room-settings.jpeg",
    position: "center center",
  },
  {
    title: "Interior guidance",
    description:
      "Practical showroom and on-site advice for fabric choices, wood finishes, furniture painting, layouts and the right next step for the room.",
    cta: "View service details",
    href: "/services",
    image: "/showroom/bedroom-setting.jpg",
    position: "center center",
  },
  {
    title: "Wall units",
    description:
      "Wall units for storage, display or media use, planned around the scale, wood finish, colour and practical needs of the room.",
    cta: "View service details",
    href: "/services",
    image: "/showroom/decor-display.jpg",
    position: "center center",
  },
];

export const serviceDetails = {
  "curtains-fabrics": {
    title: "Curtains",
    eyebrow: "Custom curtains",
    summary:
      "Curtain work starts with the room: how much light comes in, how private it needs to feel, where the furniture sits and what finish will suit the space.",
    image: "/showroom/service-curtains-fabrics.jpeg",
    points: [
      "Choose fabric weight, texture, colour, lining, fullness and heading style",
      "Decide on rods, rails, curtain tracks, electric tracks, brackets, drops and how the curtain should hang",
      "Measure the windows and check wall space, floor length and fitting details",
      "Make, install and dress custom, hall, stage, electric and Wi-Fi operated curtains where needed",
    ],
    includes: [
      "Custom curtains",
      "Hall curtains",
      "Stage curtains",
      "Electric curtains",
      "Wi-Fi operated curtains",
      "Curtain tracks",
      "Electric tracks",
      "Curtain rods and rails",
      "Measuring",
      "Installation",
    ],
  },
  blinds: {
    title: "Blinds",
    eyebrow: "Window treatments",
    summary:
      "Blind work starts with how the room is used each day: privacy, glare, heat, window shape and how much control the client wants over the light.",
    image: "/showroom/service-blinds-generated.png",
    points: [
      "Compare blind types, fabrics, colours, textures and light-filtering options",
      "Check recess depth, wall space, window handles and how the blind will operate",
      "Plan manual, electric or automated blind options around the way the room is used",
      "Measure, order, install and test the blinds so they work neatly every day",
    ],
    includes: [
      "All types of blinds",
      "Electric blinds",
      "Manual blinds",
      "Supplier-made blinds",
      "Measuring",
      "Installation",
    ],
  },
  wallpaper: {
    title: "Wallpaper & interior finishes",
    eyebrow: "Wall and room finishes",
    summary:
      "Wallpaper starts with the wall and the room around it: whether it should be a feature, a full-room finish or a quiet texture behind the furniture.",
    image: "/showroom/service-wallpaper-decor.jpeg",
    points: [
      "Choose pattern scale, colour, texture, repeat and surface finish",
      "Consider natural light, wall size, furniture placement and room proportions",
      "Coordinate wallpaper with curtains, blinds, upholstery and decor pieces",
      "Plan quantities, joins and installation direction before the final decision",
    ],
    includes: [
      "Wallpaper",
      "Custom wallpaper",
      "Feature walls",
      "Wall textures",
      "Interior finishes",
      "Wallpaper installation",
    ],
  },
  "furniture-decor": {
    title: "Furniture & decor",
    eyebrow: "Complete rooms",
    summary:
      "Furniture and decor work best when they are chosen with the room already in mind: scale, comfort, colour, texture and how each piece sits with the rest.",
    image: "/showroom/service-furniture-room-settings.jpeg",
    points: [
      "Choose chairs, tables, soft furnishings, lamps, mirrors, rugs and decor pieces",
      "Check scale, layout, movement through the room and everyday comfort",
      "Coordinate upholstery, finishes, cushions, throws and objects with the scheme",
      "Bring the final layers together so the room feels complete, not overfilled",
    ],
  },
  "upholstery-soft-furnishings": {
    title: "Upholstery & soft furnishings",
    eyebrow: "Fabric and comfort",
    summary:
      "Upholstery and soft furnishings start with what should be refreshed, softened or made more comfortable, then move into the fabric, finish and practical details.",
    image: "/showroom/furniture-decor-example-02.jpeg",
    points: [
      "Choose fabrics, textures, trims, colours and finishes with the full room in mind",
      "Plan reupholstery, furniture revamps, headboards, ottomans and soft furnishing details",
      "Coordinate specialist upholstery, leather product and repair work where an outsourced upholsterer is needed",
      "Check the finished result against the agreed fabric direction and room plan",
    ],
    includes: [
      "Custom upholstery",
      "Reupholstery",
      "Minor repairs",
      "Furniture revamps",
      "Leather products",
      "Headboards",
      "Ottomans",
      "Trimmings",
      "Scatter cushions",
      "Fabric advice",
    ],
  },
  "rugs-lighting-decor": {
    title: "Rugs, lighting & decor",
    eyebrow: "Finishing layers",
    summary:
      "Finishing pieces are chosen after the bigger room decisions are clear, so rugs, lamps, LED details, mirrors and decor feel connected instead of added at random.",
    image: "/showroom/service-furniture-room-settings.jpeg",
    points: [
      "Choose rugs, lamps, mirrors, objects, scatter cushions, quilts and decor pieces for the room",
      "Consider LED touches and lighting direction with the right electrical support when needed",
      "Match scale, colour, texture and placement to the curtains, blinds and furniture",
      "Layer the final pieces so the room feels finished without feeling overfilled",
    ],
    includes: [
      "Rugs",
      "LED lighting",
      "Lamps",
      "Normal lighting",
      "Mirrors",
      "Decor pieces",
      "Scatter cushions",
      "Quilts",
      "Finishing accessories",
    ],
  },
  "interior-guidance": {
    title: "Interior guidance",
    eyebrow: "Whole-room advice",
    summary:
      "Interior guidance helps clients move from many separate choices to one practical direction for the room, whether they start in the showroom or need on-site advice.",
    image: "/showroom/bedroom-setting.jpg",
    points: [
      "Discuss how the room is used, what feels unfinished and what needs to change",
      "Compare fabrics, wallpaper, blinds, rugs, lighting, wood finishes and decor in one direction",
      "Measure or review the space before quotes, sourcing and installation are confirmed",
      "Travel for selected projects where the room needs on-site interior design support",
    ],
    includes: [
      "Showroom advice",
      "On-site visits",
      "Fabric choices",
      "Finish choices",
      "Wood finishes",
      "Furniture painting",
      "Room planning",
      "Interior design guidance",
      "Selected travel projects",
    ],
  },
  "wall-units": {
    title: "Wall units & custom pieces",
    eyebrow: "Storage, display and sourced pieces",
    summary:
      "Wall units and custom pieces start with what the room needs to hold, hide or solve, then move into the right proportions, finish and practical coordination.",
    image: "/showroom/decor-display.jpg",
    points: [
      "Plan built-in or freestanding wall units around storage, display and media needs",
      "Measure wall width, height, depth, plug points, skirtings and clearances",
      "Choose shelves, doors, drawers, wood finishes, colours, handles and custom piece details",
      "Coordinate sourcing, making, fitting and final placement so the piece belongs in the room",
    ],
    includes: [
      "Wall units",
      "Display shelving",
      "Fitted storage",
      "Media units",
      "Custom pieces",
      "Sourced furniture",
      "Wood finishes",
      "Furniture painting",
      "Measuring",
      "Fitting coordination",
    ],
  },
} as const;

export const guidanceSteps = [
  {
    title: "Start with your room",
    text: "Bring photos, measurements, ideas or problem areas so we can understand what you are changing and how the room needs to work.",
  },
  {
    title: "Compare in person",
    text: "See window treatments, fabrics, wallpaper, furniture and decor together in the showroom before making a decision.",
  },
  {
    title: "Bring it together",
    text: "Choose colours, textures, finishes and practical details with one clear direction, so everything works together in the room.",
  },
];

export const gallery = [
  {
    src: "/showroom/showroom-real-main.jpeg",
    alt: "Free State Curtain Parlour showroom entrance with a console table, rug, lighting and decor displays",
    label: "The Westdene showroom",
    className: "gallery-wide",
  },
  {
    src: "/showroom/showroom-real-room-setting.jpeg",
    alt: "Styled showroom room setting with curtains, a sofa, bedding, rugs and lighting",
    label: "Curtains & soft furnishings",
    className: "gallery-tall",
  },
  {
    src: "/showroom/showroom-real-lighting.jpeg",
    alt: "Showroom display with lamps, pendant lights, mirrors, rugs and decor pieces",
    label: "Objects & finishing pieces",
    className: "gallery-small",
  },
  {
    src: "/showroom/showroom-real-vignette.jpeg",
    alt: "Showroom corner with wallpaper, chairs, lighting and large decorative vases",
    label: "Furniture & decor",
    className: "gallery-small",
  },
];

export const projects = [
  {
    title: "Curtain projects",
    summary:
      "A placeholder set for finished curtain work, including custom curtains, hall curtains, stage curtains and electric curtain projects.",
    images: [
      "/showroom/curtains-fabrics-example-01.jpeg",
      "/showroom/curtains-fabrics-example-03.jpeg",
      "/showroom/curtains-fabrics-example-06.jpeg",
    ],
    testimonial:
      "If you're looking for decorating advice this is the place to go. Thank you Johan for all your help.",
    testimonialName: "Matthew Cockcroft",
  },
  {
    title: "Blind installations",
    summary:
      "A mock grouping for blind projects, from practical light control to supplier-made and electric blind installations.",
    images: [
      "/showroom/service-blinds.jpeg",
      "/showroom/service-blinds-generated.png",
      "/showroom/installation-fabric-display.jpg",
    ],
    testimonial: "Best place to visit when you want to update your home",
    testimonialName: "SR",
  },
  {
    title: "Wallpaper & interior finishes",
    summary:
      "A temporary project set for wallpaper, feature walls, textured finishes and room details that support the full interior direction.",
    images: [
      "/showroom/service-wallpaper-decor.jpeg",
      "/showroom/showroom-real-vignette.jpeg",
      "/showroom/showroom-gallery-07.jpeg",
    ],
    testimonial:
      "You will find the most creative, friendly and assertive staff here.",
    testimonialName: "Jacques Groenewald",
  },
  {
    title: "Upholstery & soft furnishings",
    summary:
      "A placeholder group for reupholstery, headboards, ottomans, trimmings and fabric-led soft furnishing projects.",
    images: [
      "/showroom/furniture-decor-example-01.jpeg",
      "/showroom/furniture-decor-example-02.jpeg",
      "/showroom/furniture-decor-example-05.jpeg",
    ],
    testimonial:
      "If you're looking for decorating advice this is the place to go. Thank you Johan for all your help.",
    testimonialName: "Matthew Cockcroft",
  },
  {
    title: "Rugs, lighting & decor",
    summary:
      "A mock category for the finishing layers: rugs, lamps, mirrors, lighting touches, decor pieces and final room details.",
    images: [
      "/showroom/service-furniture-room-settings.jpeg",
      "/showroom/showroom-real-lighting.jpeg",
      "/showroom/decor-display.jpg",
    ],
    testimonial: "Best service ever",
    testimonialName: "Doreen Dikobo",
  },
  {
    title: "Wall units & custom pieces",
    summary:
      "A temporary project area for wall units, display shelving, fitted storage, media units and sourced custom pieces.",
    images: [
      "/showroom/wall-units-example-01.jpeg",
      "/showroom/wall-units-example-02.jpeg",
      "/showroom/wall-units-example-05.jpeg",
    ],
    testimonial: "Best place to visit when you want to update your home",
    testimonialName: "SR",
  },
  {
    title: "Full-room guidance",
    summary:
      "A mock section for larger room-led projects where fabrics, finishes, wallpaper, rugs, lighting and installation all come together.",
    images: [
      "/showroom/showroom-real-room-setting.jpeg",
      "/showroom/bedroom-setting.jpg",
      "/showroom/whole-room-approach.jpeg",
    ],
    testimonial:
      "You will find the most creative, friendly and assertive staff here.",
    testimonialName: "Jacques Groenewald",
  },
];

export const reviews = [
  {
    quote: "Best place to visit when you want to update your home",
    name: "SR",
    detail: "Local Guide · 82 reviews",
    date: "9 months ago",
    rating: 5,
    avatar: "/reviewers/sr.png",
  },
  {
    quote:
      "This picture is not related to FS Curtain Parlour, but you will find the most creative, friendly and assertive staff here.",
    name: "Jacques Groenewald",
    detail: "Local Guide · 128 reviews",
    date: "5 years ago",
    rating: 4,
    avatar: "/reviewers/jacques-groenewald.png",
  },
  {
    quote:
      "If you're looking for decorating advice this is the place to go. Thank you Johan for all your help.",
    name: "Matthew Cockcroft",
    detail: "Local Guide · 153 reviews",
    date: "6 years ago",
    rating: 5,
    avatar: "/reviewers/matthew-cockcroft.png",
  },
  {
    quote: "Best service ever",
    name: "Doreen Dikobo",
    detail: "Local Guide · 31 reviews",
    date: "5 years ago",
    rating: 5,
    avatar: "/reviewers/doreen-dikobo.png",
  },
];

export const teamRoles = [
  {
    title: "Showroom team",
    text: "The people who listen first, ask what the room needs to do, and help customers feel less overwhelmed before choices are made.",
    detail:
      "This role is about understanding the customer before talking products. A client may arrive with a photo, a colour, a problem window or a room that feels unfinished. The showroom team helps translate that into a clear direction and introduces the right next step.",
    benefit:
      "Customers feel known and guided, not pushed toward a quick sale.",
    image: "/team/showroom-advice-temp.png",
    alt: "Hands comparing curtain fabric and interior finish samples in a showroom",
  },
  {
    title: "Measuring & installation team",
    text: "The people who connect the showroom decision to the real room, checking measurements, fitting details and practical use.",
    detail:
      "This role gives the customer confidence that the chosen solution can work where it will live. The team checks scale, access, mounting points, drops, rails, blinds and installation conditions before the final result is fitted.",
    benefit:
      "Customers know there is responsibility beyond the sale: someone is thinking about fit, finish and everyday function.",
    image: "/team/measuring-installation-temp.png",
    alt: "Hands measuring beside a curtain rail and window in a finished room",
  },
  {
    title: "Workshop & support team",
    text: "The people who prepare, coordinate and finish the custom details after the customer has made a direction clear.",
    detail:
      "This role keeps the work moving after the appointment. It supports made-to-measure curtains, soft furnishings, bespoke pieces, wall units and the practical coordination needed to turn a decision into finished work.",
    benefit:
      "Customers can trust that their project is not just an idea in the showroom; it has people behind it who help carry it through.",
    image: "/team/workshop-custom-temp.png",
    alt: "Hands choosing fabric and timber finishes beside a custom furniture unit",
  },
];

export const teamPeople = [
  {
    name: "Johan Lampnrecht",
    role: "Front-of-house designer",
    text: "Helps customers understand the room, choose fabrics and finishes, take or confirm measurements where needed, and confirm quotes.",
    image: "/team/showroom-advice-temp.png",
    alt: "Hands comparing curtain fabric and interior finish samples in a showroom",
  },
  {
    name: "Tania Smith",
    role: "Front-of-house designer",
    text: "Guides customers through showroom choices, fabric direction, measuring details and quote confirmation.",
    image: "/team/showroom-advice-temp.png",
    alt: "Hands comparing curtain fabric and interior finish samples in a showroom",
  },
  {
    name: "Bonita du Toit",
    role: "Financial director",
    text: "Supports the financial side of the business and helps keep the work organised behind the scenes.",
    image: "/team/workshop-custom-temp.png",
    alt: "Hands choosing fabric and timber finishes beside a custom furniture unit",
  },
  {
    name: "Veli Vermeulen & Anton Beukes",
    role: "Installation team",
    text: "Handle measuring, practical fitting and installation work in the client's space, from site details to the final fit.",
    image: "/team/measuring-installation-temp.png",
    alt: "Hands measuring beside a curtain rail and window in a finished room",
  },
  {
    name: "Seamstresses",
    role: "Workshop team",
    text: "Make and finish the curtain work in the workshop, including fabric preparation, sewing, lining and heading details.",
    image: "/team/workshop-custom-temp.png",
    alt: "Hands choosing fabric and timber finishes beside a custom furniture unit",
  },
  {
    name: "General workers & specialist support",
    role: "Workshop and outsourced support",
    text: "Support the practical work behind custom pieces, upholstery, repairs, preparation, delivery and finishing details where needed.",
    image: "/team/workshop-custom-temp.png",
    alt: "Hands choosing fabric and timber finishes beside a custom furniture unit",
  },
];

export const workshopSteps = [
  "Advise on the room, fabric choices, finishes and the practical details that need to be measured.",
  "Measure, quote and confirm what will be made in-house, supplier-made or coordinated with a specialist.",
  "Check the finished work before installation, fitting or final handover.",
];

export const historyItems = [
  {
    title: "Established in 1959",
    text: "Free State Curtain Parlour has been part of Bloemfontein homes for generations, with a story built around curtains, fabrics, wallpaper and practical interior advice.",
  },
  {
    title: "Curtains to carpets",
    text: "An early newspaper feature records how Mrs S. S. Jackson began the curtaining business in 1965 and how the Jackson family grew the work beyond a sideline.",
  },
  {
    title: "Westdene showroom",
    text: "Later newspaper coverage and local adverts mark the move into Westdene, showing a business known locally for fabrics, finishes and personal service.",
  },
  {
    title: "Still room-led",
    text: "The same story continues today through showroom guidance, measuring, installation, bespoke furniture, wall units and decor chosen around the whole room.",
  },
];
