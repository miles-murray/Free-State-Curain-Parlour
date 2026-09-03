export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Showroom", href: "/showroom" },
  { label: "Workshop", href: "/workshop" },
  { label: "Team & roles", href: "/team" },
  { label: "History", href: "/history" },
];

export const sitePages = [
  { label: "Home", href: "/" },
  ...primaryNav,
  { label: "Testimonials", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: "01",
    title: "Curtains & fabrics",
    slug: "curtains-fabrics",
    description:
      "Choose curtain fabrics, textures, linings, rods and rails with the whole room in mind. We help with measuring, making, installation and dressing so the final result feels finished.",
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
    title: "Wallpaper",
    slug: "wallpaper",
    description:
      "Choose wallpaper for feature walls or full rooms, with guidance on pattern, colour, texture and scale so it works with the curtains, furniture and overall room direction.",
    cta: "Learn about wallpaper",
    href: "/services#wallpaper",
    image: "/showroom/service-wallpaper-decor.jpeg",
    position: "center center",
  },
  {
    number: "04",
    title: "Furniture & decor",
    slug: "furniture-decor",
    description:
      "Choose furniture, soft furnishings and decor pieces together so the room feels layered, comfortable and complete instead of built from separate choices.",
    cta: "Explore furniture & decor",
    href: "/services#furniture-decor",
    image: "/showroom/service-furniture-room-settings.jpeg",
    position: "center center",
  },
  {
    number: "05",
    title: "Bespoke custom furniture",
    slug: "bespoke-furniture",
    description:
      "Plan custom furniture pieces around the room's size, use, finishes and style, with support on materials, proportions and how the piece fits into the full interior.",
    cta: "Learn about custom furniture",
    href: "/services#bespoke-furniture",
    image: "/showroom/bedroom-setting.jpg",
    position: "center center",
  },
  {
    number: "06",
    title: "Wall units",
    slug: "wall-units",
    description:
      "Plan built-in wall units for storage, display or media use, with scale, finish, colour and practical layout considered as part of the full room.",
    cta: "Learn about wall units",
    href: "/services#wall-units",
    image: "/showroom/decor-display.jpg",
    position: "center center",
  },
];

export const serviceDetails = {
  "curtains-fabrics": {
    title: "Curtains & fabrics",
    eyebrow: "Custom curtains",
    summary:
      "Curtain work starts with the room: how much light comes in, how private it needs to feel, where the furniture sits and what finish will suit the space.",
    image: "/showroom/service-curtains-fabrics.jpeg",
    points: [
      "Choose fabric weight, texture, colour, lining, fullness and heading style",
      "Decide on rods, rails, brackets, drops and how the curtain should hang",
      "Measure the windows and check wall space, floor length and fitting details",
      "Make, install and dress the curtains so the final fall looks finished",
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
      "Match the finish to curtains, furniture, flooring and the rest of the room",
      "Measure, order, install and test the blind so it works neatly every day",
    ],
  },
  wallpaper: {
    title: "Wallpaper",
    eyebrow: "Wall finishes",
    summary:
      "Wallpaper starts with the wall and the room around it: whether it should be a feature, a full-room finish or a quiet texture behind the furniture.",
    image: "/showroom/service-wallpaper-decor.jpeg",
    points: [
      "Choose pattern scale, colour, texture, repeat and surface finish",
      "Consider natural light, wall size, furniture placement and room proportions",
      "Coordinate wallpaper with curtains, blinds, upholstery and decor pieces",
      "Plan quantities, joins and installation direction before the final decision",
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
  "bespoke-furniture": {
    title: "Bespoke custom furniture",
    eyebrow: "Made around the room",
    summary:
      "Custom furniture starts with a specific need in the room: a size that does not exist off the floor, a finish that must match or a piece that needs to solve a practical problem.",
    image: "/showroom/bedroom-setting.jpg",
    points: [
      "Measure the space and define the purpose, proportions and everyday use",
      "Choose upholstery, timber, painted finishes, handles and material details",
      "Plan the piece alongside curtains, wallpaper, furniture and decor choices",
      "Work through making, finishing, delivery and placement with the team",
    ],
  },
  "wall-units": {
    title: "Wall units",
    eyebrow: "Storage and display",
    summary:
      "Wall units start with what the wall needs to hold or hide: storage, display, media equipment, books, decor pieces or a cleaner finish for the room.",
    image: "/showroom/decor-display.jpg",
    points: [
      "Plan built-in or freestanding units around storage, display and media needs",
      "Measure wall width, height, depth, plug points, skirtings and clearances",
      "Choose shelves, doors, drawers, finishes, colours and handle details",
      "Coordinate making, fitting and final placement so the unit belongs in the room",
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

export const workshopSteps = [
  "Discuss how the room is used, what needs to be measured, and where the practical problems sit.",
  "Choose the fabrics, finishes, storage details and furniture direction that suit the space.",
  "Prepare the making, fitting and finishing details with the showroom team.",
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
