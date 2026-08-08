/* ==========================================================================
   MAHONEY'S GALLERIES — STANDALONE VANILLA JARS SCRIPT
   Provides 100% offline, zero-dependency rendering for all 6 gallery pages.
   ========================================================================== */

(function () {
  'use strict';

  // GALLERY DATASET
  const GALLERY_INFO = {
    name: "MAHONEY'S GALLERIES",
    tagline: "Contemporary art, thoughtfully curated.",
    locations: [
      {
        id: "ny",
        city: "New York",
        district: "Chelsea Art District",
        address: "524 West 26th Street",
        zip: "NY 10001",
        phone: "+1 (212) 555-0182",
        email: "newyork@mahoneysgalleries.art",
        hours: "Tuesday – Saturday: 10:00 AM – 6:00 PM\nSunday – Monday: By Appointment Only",
        mapEmbedUrl: "https://maps.google.com/maps?q=524%20West%2026th%20Street%20New%20York&t=&z=14&ie=UTF8&iwloc=&output=embed"
      },
      {
        id: "london",
        city: "London",
        district: "Mayfair",
        address: "18 Cork Street",
        zip: "W1S 3LB",
        phone: "+44 (0)20 7946 0912",
        email: "london@mahoneysgalleries.art",
        hours: "Tuesday – Saturday: 10:00 AM – 6:00 PM\nSunday – Monday: Closed",
        mapEmbedUrl: "https://maps.google.com/maps?q=18%20Cork%20Street%20London&t=&z=14&ie=UTF8&iwloc=&output=embed"
      },
      {
        id: "paris",
        city: "Paris",
        district: "Le Marais",
        address: "42 Rue de Turenne",
        zip: "75003 Paris",
        phone: "+33 1 42 68 55 20",
        email: "paris@mahoneysgalleries.art",
        hours: "Tuesday – Saturday: 11:00 AM – 7:00 PM\nSunday – Monday: Closed",
        mapEmbedUrl: "https://maps.google.com/maps?q=42%20Rue%20de%20Turenne%20Paris&t=&z=14&ie=UTF8&iwloc=&output=embed"
      }
    ]
  };

  const ARTISTS = [
    {
      id: "amelia-hart",
      name: "AMELIA HART",
      discipline: "PAINTERS",
      subtitle: "Contemporary Painter",
      portrait: "images/artist_amelia.jpg",
      origin: "London, UK & New York, USA",
      bio: "Amelia Hart (b. 1982) is a British-American contemporary painter whose work explores memory, spatial silence, and the tactile tension between architectural structure and atmospheric abstraction. Working primarily with raw mineral pigments, rabbit-skin glue, and hand-applied gesso on heavy linen, Hart's canvases possess an ethereal stillness reminiscent of weathered plaster facades and ancient stone surfaces.",
      statement: "My practice is a disciplined pursuit of spatial quietude. In a world saturated with digital noise, canvas becomes a site of deceleration—a physical vessel where weight, pigment, and light collapse into singular visual presence.",
      instagram: "https://instagram.com/ameliahart_studio",
      website: "https://ameliahart.art",
      selectedWorks: [
        {
          id: "hart-work-1",
          title: "Silent Topography No. 14",
          year: "2025",
          medium: "Raw mineral pigment, gesso, and marble dust on Belgian linen",
          dimensions: "210 × 160 cm (82.6 × 63 in)",
          image: "images/artwork_amelia_1.jpg",
          provenance: "Mahoney's Galleries Collection"
        },
        {
          id: "hart-work-2",
          title: "Monolith & Resonance",
          year: "2024",
          medium: "Oil, graphite, and rabbit-skin gesso on linen",
          dimensions: "180 × 140 cm (70.8 × 55.1 in)",
          image: "images/hero_artwork.jpg",
          provenance: "Private Collection, Zurich"
        },
        {
          id: "hart-work-3",
          title: "Passage of Light VIII",
          year: "2024",
          medium: "Plaster, gold powder, and charcoal on linen canvas",
          dimensions: "240 × 190 cm (94.5 × 74.8 in)",
          image: "images/gallery_interior.jpg",
          provenance: "Collection of the Artist"
        }
      ],
      selectedExhibitions: [
        { year: "2025", title: "Resonance of Form & Silence", location: "Mahoney's Galleries, New York" },
        { year: "2024", title: "Art Basel Statements", location: "Basel, Switzerland" },
        { year: "2023", title: "Liminal Structures", location: "Tate Modern Project Space, London" },
        { year: "2022", title: "Subtle Geometries", location: "Galerie Thaddaeus Ropac, Paris" }
      ]
    },
    {
      id: "jean-luc-moreau",
      name: "JEAN-LUC MOREAU",
      discipline: "SCULPTORS",
      subtitle: "Architectural Sculptor",
      portrait: "images/artist_jean_luc.jpg",
      origin: "Paris, France",
      bio: "Jean-Luc Moreau (b. 1978, Lyon) creates monumental and tabletop sculptures that probe gravity, mass, and tension. Utilizing patinated bronze, Carara marble, and oxidized steel, Moreau's forms appear to float with impossibly delicate balances, defying their inherent weight.",
      statement: "Bronze retains the gesture of heat and human hands forever. I treat sculpture as frozen choreography—capturing the exact split-second before gravity claims solid matter.",
      instagram: "https://instagram.com/jeanlucmoreau_sculpture",
      website: "https://jeanlucmoreau.fr",
      selectedWorks: [
        {
          id: "moreau-work-1",
          title: "Equilibrium Monolith V",
          year: "2025",
          medium: "Patinated dark bronze and honed alabaster base",
          dimensions: "145 × 42 × 38 cm (57.1 × 16.5 × 15 in)",
          image: "images/artwork_jean_luc_1.jpg",
          provenance: "Mahoney's Galleries, London"
        },
        {
          id: "moreau-work-2",
          title: "Tension & Cantilever",
          year: "2024",
          medium: "Cast bronze, volcanic basalt",
          dimensions: "190 × 60 × 45 cm (74.8 × 23.6 × 17.7 in)",
          image: "images/exhibition_installation.jpg",
          provenance: "Corporate Collection, Frankfurt"
        }
      ],
      selectedExhibitions: [
        { year: "2025", title: "Gravitational Silence", location: "Mahoney's Galleries, Paris" },
        { year: "2024", title: "Frieze Sculpture", location: "Regent's Park, London" },
        { year: "2022", title: "Materials of Memory", location: "Palais de Tokyo, Paris" }
      ]
    },
    {
      id: "elena-vance",
      name: "ELENA VANCE",
      discipline: "PHOTOGRAPHERS",
      subtitle: "Fine Art Photographer",
      portrait: "images/gallery_interior.jpg",
      origin: "Berlin, Germany & Tokyo, Japan",
      bio: "Elena Vance (b. 1986) works at the intersection of analog darkroom photography and spatial installation. Her large-scale silver gelatin prints document vanishing modern architectural spaces, rendered with high contrast and stark minimalism.",
      statement: "A photograph is not a record of what happened; it is an architectural space built from trapped shadow and light.",
      instagram: "https://instagram.com/elenavance_studio",
      website: "https://elenavance.com",
      selectedWorks: [
        {
          id: "vance-work-1",
          title: "Void & Concrete III",
          year: "2024",
          medium: "Hand-printed silver gelatin print, museum shadowbox frame",
          dimensions: "160 × 220 cm (63 × 86.6 in)",
          image: "images/hero_artwork.jpg",
          provenance: "Edition 1 of 3 + 2 AP"
        }
      ],
      selectedExhibitions: [
        { year: "2025", title: "Echoes of Modernism", location: "Mahoney's Galleries, London" },
        { year: "2023", title: "Venice Biennale of Architecture", location: "Venice, Italy" }
      ]
    },
    {
      id: "kaito-tanaka",
      name: "KAITO TANAKA",
      discipline: "MIXED MEDIA",
      subtitle: "Conceptual & Textile Artist",
      portrait: "images/artist_amelia.jpg",
      origin: "Kyoto, Japan",
      bio: "Kaito Tanaka (b. 1980) integrates traditional Japanese hand-woven raw silk, indigo fermentation dyes, and minimalist steel armatures into contemporary spatial installations.",
      statement: "Thread is time made tangible. Each weave is a silent dialogue between historical craft and future space.",
      instagram: "https://instagram.com/kaitotanaka_studio",
      website: "https://kaitotanaka.jp",
      selectedWorks: [
        {
          id: "tanaka-work-1",
          title: "Woven Temporal Fields",
          year: "2025",
          medium: "Hand-dyed raw silk thread, oxidized copper wire, gesso",
          dimensions: "260 × 180 cm (102.3 × 70.8 in)",
          image: "images/artwork_amelia_1.jpg",
          provenance: "Mahoney's Galleries, New York"
        }
      ],
      selectedExhibitions: [
        { year: "2025", title: "Structures of Indigo & Iron", location: "Mahoney's Galleries, New York" },
        { year: "2024", title: "Mori Art Museum Triennial", location: "Tokyo, Japan" }
      ]
    },
    {
      id: "maya-lin-berg",
      name: "MAYA LIN-BERG",
      discipline: "PAINTERS",
      subtitle: "Abstract Expressionist",
      portrait: "images/artist_jean_luc.jpg",
      origin: "Copenhagen, Denmark",
      bio: "Maya Lin-Berg (b. 1989) creates expansive, monochromatic oil canvases that evoke Nordic light, icy textures, and volcanic terrain.",
      statement: "Color in my work is stripped down to tone and weight so that light itself can inhabit the brushstroke.",
      instagram: "https://instagram.com/mayalinberg",
      website: "https://mayalinberg.dk",
      selectedWorks: [
        {
          id: "linberg-work-1",
          title: "Nordic Horizon No. 9",
          year: "2024",
          medium: "Oil and slate dust on primed canvas",
          dimensions: "200 × 200 cm (78.7 × 78.7 in)",
          image: "images/exhibition_installation.jpg",
          provenance: "Mahoney's Galleries, Paris"
        }
      ],
      selectedExhibitions: [
        { year: "2025", title: "Subterranean Light", location: "Mahoney's Galleries, Paris" }
      ]
    },
    {
      id: "marcus-thorne",
      name: "MARCUS THORNE",
      discipline: "SCULPTORS",
      subtitle: "Kinetic Sculptor",
      portrait: "images/gallery_interior.jpg",
      origin: "Chicago, USA",
      bio: "Marcus Thorne (b. 1975) constructs slow-moving kinetic steel installations and floor-standing geometric stone works.",
      statement: "Art should slow down the heartbeat of the room.",
      instagram: "https://instagram.com/marcusthornestudio",
      website: "https://marcusthorne.com",
      selectedWorks: [
        {
          id: "thorne-work-1",
          title: "Rotational Symmetry",
          year: "2025",
          medium: "Brushed stainless steel, counterweights, granite",
          dimensions: "185 × 110 × 90 cm (72.8 × 43.3 × 35.4 in)",
          image: "images/artwork_jean_luc_1.jpg",
          provenance: "Mahoney's Galleries, New York"
        }
      ],
      selectedExhibitions: [
        { year: "2024", title: "Calculated Motion", location: "Mahoney's Galleries, New York" }
      ]
    }
  ];

  const CURRENT_EXHIBITION = {
    id: "exhibition-resonance",
    title: "RESONANCE OF FORM & SILENCE",
    artist: "AMELIA HART & JEAN-LUC MOREAU",
    dates: "OCTOBER 12, 2026 – JANUARY 18, 2027",
    location: "NEW YORK GALLERY — 524 WEST 26TH STREET",
    image: "images/exhibition_installation.jpg",
    description: "A monumental dual exhibition bringing together the textural abstract paintings of Amelia Hart and the gravitational bronzes of Jean-Luc Moreau. Exploring spatial silence, mineral materiality, and the dialogue between canvas and volume.",
    content: "Mahoney's Galleries is pleased to present 'Resonance of Form & Silence', a landmark dual exhibition pairing new large-scale canvases by Amelia Hart with floor-standing bronze and alabaster sculptures by Jean-Luc Moreau. The exhibition investigates the shared vocabulary of architectural reduction, raw earth minerals, and spatial quietude. A hardbound exhibition catalogue with essays by Dr. Clara Vance will be available during the evening."
  };

  const PRESS_EVENTS = [
    CURRENT_EXHIBITION,
    {
      id: "event-2",
      category: "EVENTS",
      date: "NOVEMBER 04, 2026",
      title: "In Conversation: The Architecture of Spatial Quietude",
      subtitle: "Panel Discussion featuring Amelia Hart & Architect David Chipperfield",
      image: "images/artist_amelia.jpg",
      description: "An evening panel discussing the relationship between museum architecture, raw gesso pigments, and contemporary spatial design.",
      content: "Artist Amelia Hart and celebrated architect Sir David Chipperfield convene for a public panel discussion on how architectural light and paint texture transform modern interior environments."
    },
    {
      id: "event-3",
      category: "PRESS",
      date: "SEPTEMBER 28, 2026",
      title: "Frieze Art Fair London 2026 — Gallery Presentation Announcement",
      subtitle: "Solo Presentation of Jean-Luc Moreau Sculptures",
      image: "images/artwork_jean_luc_1.jpg",
      description: "Mahoney's Galleries is delighted to announce its solo booth presentation for Frieze London Booth C14 featuring works by Jean-Luc Moreau.",
      content: "For Frieze London 2026, Mahoney's Galleries will unveil a dedicated suite of five newly cast patinated bronzes by French sculptor Jean-Luc Moreau."
    },
    {
      id: "event-4",
      category: "NEWS",
      date: "AUGUST 15, 2026",
      title: "Representation Announcement: Kaito Tanaka Joins Mahoney's Galleries",
      subtitle: "Global Representation of Kyoto-Based Textile & Conceptual Artist",
      image: "images/hero_artwork.jpg",
      description: "Mahoney's Galleries is honored to announce exclusive global representation of Japanese conceptual textile artist Kaito Tanaka.",
      content: "Kyoto-born artist Kaito Tanaka brings his pioneering practice of hand-dyed raw silk suspensions and copper wire armatures to Mahoney's roster."
    }
  ];

  const GALLERY_VALUES = [
    { id: "01", number: "01", title: "CURATION", description: "Every artwork and artist represented undergoes rigorous curatorial selection, upholding unyielding museum-grade artistic integrity." },
    { id: "02", number: "02", title: "DISCOVERY", description: "Championing singular contemporary voices that challenge spatial boundaries, material conventions, and cultural dialogue." },
    { id: "03", number: "03", title: "CONNECTION", description: "Fostering intimate lifelong relationships between artists, private collectors, public institutions, and international museums." },
    { id: "04", number: "04", title: "CULTURE", description: "Cultivating an open intellectual space where contemporary art, architecture, and editorial thought converge." }
  ];

  // STATE MANAGEMENT
  let state = {
    activeTab: 'home', // 'home', 'artists', 'artist-detail', 'contact', 'press-events', 'about'
    selectedArtistId: 'amelia-hart',
    artistFilter: 'ALL',
    pressFilter: 'ALL',
    contactLocId: 'ny',
    activeModal: null, // { type: 'artwork'|'event', data: {...} }
    mobileMenuOpen: false
  };

  function setState(updater) {
    state = Object.assign({}, state, typeof updater === 'function' ? updater(state) : updater);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  // GLOBAL RENDER FUNCTION
  function render() {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
      <div style="min-height: 100vh; display: flex; flex-direction: column; background-color: #F9F8F6; color: #171716;">
        ${renderHeader()}
        <main style="flex: 1;">
          ${renderPageContent()}
        </main>
        ${renderFooter()}
        ${renderModal()}
      </div>
    `;

    bindEvents();
  }

  // HEADER RENDERER
  function renderHeader() {
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'artists', label: 'Artists' },
      { id: 'press-events', label: 'Press / Events' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ];

    return `
      <header style="position: fixed; top: 0; left: 0; right: 0; z-index: 40; background-color: rgba(249, 248, 246, 0.96); backdrop-filter: blur(8px); border-bottom: 1px solid #E6E4DF; padding: 1.2rem 0; transition: all 0.3s ease;">
        <div className="gallery-container" style="display: flex; align-items: center; justify-content: space-between;">
          <button data-nav="home" style="background: none; border: none; text-align: left; cursor: pointer;">
            <span className="font-serif" style="font-size: 1.5rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 300; display: block; line-height: 1; color: #171716;">
              MAHONEY'S
            </span>
            <span className="font-sans" style="font-size: 0.6rem; letter-spacing: 0.3em; color: #706F6C; text-transform: uppercase; display: block; margin-top: 4px;">
              GALLERIES
            </span>
          </button>

          <nav style="display: flex; align-items: center; gap: 2.2rem;">
            ${navItems.map(item => {
              const isActive = state.activeTab === item.id || (state.activeTab === 'artist-detail' && item.id === 'artists');
              return `
                <button
                  data-nav="${item.id}"
                  className="font-sans"
                  style="background: none; border: none; cursor: pointer; font-size: 0.75rem; letter-spacing: 0.18em; text-transform: uppercase; color: ${isActive ? '#171716' : '#706F6C'}; font-weight: ${isActive ? '600' : '400'}; border-bottom: ${isActive ? '1px solid #171716' : '1px solid transparent'}; padding-bottom: 3px;"
                >
                  ${item.label}
                </button>
              `;
            }).join('')}
          </nav>
        </div>
      </header>
    `;
  }

  // PAGE ROUTER RENDERER
  function renderPageContent() {
    switch (state.activeTab) {
      case 'home': return renderHomePage();
      case 'artists': return renderArtistsPage();
      case 'artist-detail': return renderArtistDetailPage();
      case 'press-events': return renderPressEventsPage();
      case 'about': return renderAboutPage();
      case 'contact': return renderContactPage();
      default: return renderHomePage();
    }
  }

  // 1. HOME PAGE
  function renderHomePage() {
    return `
      <div style="padding-top: 7rem;">
        <!-- HERO -->
        <section className="gallery-container" style="margin-bottom: 7rem;">
          <div style="position: relative;">
            <div className="art-img-container" style="aspect-ratio: 16/9; max-height: 75vh;">
              <img src="images/hero_artwork.jpg" alt="Contemporary Art Hero Canvas" />
            </div>
            <div style="margin-top: 2rem; padding: 2.5rem; background-color: rgba(249, 248, 246, 0.95); border: 1px solid #E6E4DF; max-width: 560px;">
              <span className="section-label" style="display: block; margin-bottom: 0.75rem;">MAHONEY'S GALLERIES</span>
              <h1 className="display-title" style="font-size: 3.2rem; text-transform: uppercase; margin-bottom: 1.5rem;">
                ART THAT<br />INSPIRES
              </h1>
              <p className="font-sans" style="font-size: 0.95rem; color: #706F6C; line-height: 1.6; margin-bottom: 2rem;">
                Contemporary art, thoughtfully curated across New York, London, and Paris. Championing visionary practices in painting, sculpture, and spatial installation.
              </p>
              <button data-nav="artists" className="link-editorial">
                <span>EXPLORE ARTISTS</span> <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        </section>

        <!-- INTRODUCTION -->
        <section className="gallery-container" style="margin-bottom: 7rem;">
          <div style="border-top: 1px solid #E6E4DF; border-bottom: 1px solid #E6E4DF; padding: 5rem 0;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; align-items: center;">
              <div>
                <span className="section-label" style="display: block; margin-bottom: 0.75rem;">THE GALLERY</span>
                <h2 className="display-title" style="font-size: 2.8rem; text-transform: uppercase;">
                  A SPACE FOR<br />CONTEMPORARY<br />ART
                </h2>
              </div>
              <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <p className="font-serif" style="font-size: 1.4rem; font-style: italic; font-weight: 300; line-height: 1.5;">
                  Founded in 1994, Mahoney's Galleries has cultivated an international reputation for quiet luxury, museum-grade curation, and uncompromising artistic integrity.
                </p>
                <p style="font-size: 0.95rem; color: #706F6C; line-height: 1.6;">
                  We present monographic exhibitions, historical surveys, and collaborative public projects that explore spatial stillness, raw pigments, and architectural form.
                </p>
                <div>
                  <button data-nav="about" className="link-editorial">
                    DISCOVER THE GALLERY →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FEATURED ARTISTS -->
        <section className="gallery-container" style="margin-bottom: 7rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem; border-bottom: 1px solid #E6E4DF; padding-bottom: 1.5rem;">
            <div>
              <span className="section-label" style="display: block; margin-bottom: 0.5rem;">ARTISTS</span>
              <h2 className="font-serif" style="font-size: 2.8rem; font-style: italic; font-weight: 300;">Meet the Artists</h2>
            </div>
            <button data-nav="artists" className="link-editorial">VIEW ALL ARTISTS →</button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem;">
            ${ARTISTS.slice(0, 3).map((artist, idx) => `
              <div data-select-artist="${artist.id}" style="cursor: pointer; margin-top: ${idx === 1 ? '3rem' : '0'};">
                <div className="art-img-container" style="aspect-ratio: 3/4; margin-bottom: 1.5rem;">
                  <img src="${artist.portrait}" alt="${artist.name}" />
                </div>
                <h3 className="font-serif" style="font-size: 1.8rem; font-weight: 300; margin-bottom: 0.5rem;">${artist.name}</h3>
                <p className="font-sans" style="font-size: 0.75rem; letter-spacing: 0.15em; color: #706F6C; text-transform: uppercase;">${artist.subtitle}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- CURRENT EXHIBITION -->
        <section style="background-color: #F2F0EC; border-top: 1px solid #E6E4DF; border-bottom: 1px solid #E6E4DF; padding: 6rem 0; margin-bottom: 7rem;">
          <div className="gallery-container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem; align-items: center;">
              <div className="art-img-container" style="aspect-ratio: 16/10;">
                <img src="${CURRENT_EXHIBITION.image}" alt="${CURRENT_EXHIBITION.title}" />
              </div>
              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <span className="section-label">CURRENT EXHIBITION</span>
                <h2 className="display-title" style="font-size: 2.8rem; text-transform: uppercase;">${CURRENT_EXHIBITION.title}</h2>
                <p className="font-sans" style="font-size: 0.75rem; letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase;">${CURRENT_EXHIBITION.artist}</p>
                <p className="font-mono" style="font-size: 0.75rem; color: #706F6C; text-transform: uppercase;">${CURRENT_EXHIBITION.dates}</p>
                <p style="font-size: 0.95rem; color: #706F6C; line-height: 1.6;">${CURRENT_EXHIBITION.description}</p>
                <div style="padding-top: 1rem;">
                  <button data-open-event="exhibition-resonance" className="link-editorial">VIEW EXHIBITION →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FULL-WIDTH ARTWORK MOMENT -->
        <section style="margin-bottom: 7rem;">
          <div style="height: 70vh; position: relative; overflow: hidden; background-color: #171716;">
            <img src="images/gallery_interior.jpg" alt="Gallery Spatial Moment" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;" />
            <div style="position: absolute; bottom: 3rem; left: 3rem; color: #F9F8F6; max-width: 600px;">
              <span className="font-sans" style="font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; display: block; margin-bottom: 0.5rem; color: #D5D2CB;">EXHIBITION VIEW — NEW YORK</span>
              <p className="font-serif" style="font-style: italic; font-size: 2.2rem; font-weight: 300;">"Where architecture fades and pure material presence begins."</p>
            </div>
          </div>
        </section>

        <!-- NEWSLETTER -->
        <section style="max-width: 700px; margin: 0 auto 7rem auto; padding: 0 1.5rem; text-align: center;">
          <span className="section-label" style="display: block; margin-bottom: 0.75rem;">STAY CONNECTED</span>
          <h2 className="font-serif" style="font-size: 2.8rem; font-style: italic; font-weight: 300; margin-bottom: 1rem;">Receive Gallery Announcements</h2>
          <p className="font-sans" style="font-size: 0.9rem; color: #706F6C; margin-bottom: 2rem;">
            Receive private exhibition invitations, press updates, and new artist acquisitions directly to your inbox.
          </p>
          <form id="newsletter-form" style="display: flex; gap: 1rem; max-width: 450px; margin: 0 auto;">
            <input type="email" required placeholder="Enter your email address" className="form-input-minimal" style="flex: 1;" />
            <button type="submit" className="btn-primary-dark">SUBSCRIBE →</button>
          </form>
        </section>
      </div>
    `;
  }

  // 2. ARTISTS DIRECTORY PAGE
  function renderArtistsPage() {
    const filters = ['ALL', 'PAINTERS', 'SCULPTORS', 'PHOTOGRAPHERS', 'MIXED MEDIA'];
    const filtered = state.artistFilter === 'ALL'
      ? ARTISTS
      : ARTISTS.filter(a => a.discipline === state.artistFilter);

    return `
      <div className="gallery-container" style="padding-top: 8rem; padding-bottom: 8rem;">
        <div style="border-bottom: 1px solid #E6E4DF; padding-bottom: 3rem; margin-bottom: 4rem;">
          <span className="section-label" style="display: block; margin-bottom: 0.75rem;">ROSTER</span>
          <h1 className="display-title" style="font-size: 3.8rem; text-transform: uppercase; margin-bottom: 1.5rem;">ARTISTS</h1>
          <p className="font-serif" style="font-size: 1.4rem; color: #706F6C; font-style: italic; max-width: 650px;">
            International contemporary artists represented by Mahoney's Galleries across painting, sculpture, photography, and site-specific installations.
          </p>
        </div>

        <!-- Filter Links -->
        <div style="display: flex; gap: 2rem; border-bottom: 1px solid #E6E4DF; padding-bottom: 1.5rem; margin-bottom: 4rem; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;">
          ${filters.map(f => `
            <button
              data-filter-artist="${f}"
              style="background: none; border: none; cursor: pointer; color: ${state.artistFilter === f ? '#171716' : '#706F6C'}; font-weight: ${state.artistFilter === f ? '600' : '400'}; border-bottom: ${state.artistFilter === f ? '1px solid #171716' : '1px solid transparent'}; padding-bottom: 2px;"
            >
              ${f}
            </button>
          `).join('')}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3.5rem;">
          ${filtered.map(artist => `
            <div data-select-artist="${artist.id}" style="cursor: pointer;">
              <div className="art-img-container" style="aspect-ratio: 3/4; margin-bottom: 1.5rem;">
                <img src="${artist.portrait}" alt="${artist.name}" />
              </div>
              <h2 className="font-serif" style="font-size: 2rem; font-weight: 300; margin-bottom: 0.5rem;">${artist.name}</h2>
              <p className="font-sans" style="font-size: 0.75rem; letter-spacing: 0.15em; color: #706F6C; text-transform: uppercase; margin-bottom: 1rem;">${artist.subtitle} · ${artist.origin}</p>
              <span className="link-editorial" style="font-size: 0.7rem;">VIEW PROFILE →</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 3. INDIVIDUAL ARTIST PROFILE PAGE
  function renderArtistDetailPage() {
    const artist = ARTISTS.find(a => a.id === state.selectedArtistId) || ARTISTS[0];
    const currentIndex = ARTISTS.findIndex(a => a.id === artist.id);
    const nextArtist = ARTISTS[(currentIndex + 1) % ARTISTS.length];

    return `
      <div style="padding-top: 8rem;">
        <div className="gallery-container" style="margin-bottom: 5rem;">
          <button data-nav="artists" style="background: none; border: none; cursor: pointer; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: #706F6C; margin-bottom: 1.5rem;">
            ← BACK TO ARTISTS DIRECTORY
          </button>
          <span className="section-label" style="display: block; margin-bottom: 0.5rem;">${artist.discipline}</span>
          <h1 className="font-serif" style="font-size: 4.5rem; text-transform: uppercase; font-weight: 300; margin-bottom: 1rem;">${artist.name}</h1>
          <p className="font-sans" style="font-size: 0.8rem; letter-spacing: 0.2em; color: #706F6C; text-transform: uppercase;">${artist.subtitle} · ${artist.origin}</p>
        </div>

        <div className="gallery-container" style="margin-bottom: 7rem;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem;">
            <div className="art-img-container" style="aspect-ratio: 3/4;">
              <img src="${artist.portrait}" alt="${artist.name}" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 2.5rem;">
              <div>
                <span className="section-label" style="display: block; margin-bottom: 0.75rem;">BIOGRAPHY</span>
                <p style="font-size: 1.05rem; color: #171716; line-height: 1.7; font-weight: 300;">${artist.bio}</p>
              </div>
              <div style="border-left: 2px solid #171716; padding-left: 1.5rem;">
                <span className="section-label" style="display: block; margin-bottom: 0.75rem;">ARTIST STATEMENT</span>
                <p className="font-serif" style="font-size: 1.4rem; font-style: italic; font-weight: 300; line-height: 1.5;">"${artist.statement}"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- SELECTED WORKS -->
        <section style="background-color: #F2F0EC; border-top: 1px solid #E6E4DF; border-bottom: 1px solid #E6E4DF; padding: 6rem 0; margin-bottom: 7rem;">
          <div className="gallery-container">
            <span className="section-label" style="display: block; margin-bottom: 0.5rem;">CATALOGUE</span>
            <h2 className="font-serif" style="font-size: 2.8rem; font-style: italic; font-weight: 300; margin-bottom: 3rem;">Selected Works</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem;">
              ${artist.selectedWorks.map(work => `
                <div data-open-artwork="${work.id}" style="background-color: #F9F8F6; padding: 1.5rem; border: 1px solid #E6E4DF; cursor: pointer;">
                  <div className="art-img-container" style="aspect-ratio: 4/5; margin-bottom: 1.5rem;">
                    <img src="${work.image}" alt="${work.title}" />
                  </div>
                  <h3 className="font-serif" style="font-size: 1.5rem; font-style: italic; font-weight: 300; margin-bottom: 0.5rem;">${work.title}</h3>
                  <p className="font-sans" style="font-size: 0.75rem; color: #706F6C;">${work.medium} · ${work.year}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- NEXT ARTIST TRANSITION -->
        <section data-select-artist="${nextArtist.id}" style="background-color: #171716; color: #F9F8F6; padding: 5rem 0; cursor: pointer;">
          <div className="gallery-container" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span className="font-sans" style="font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: #9C9A94; display: block; margin-bottom: 0.5rem;">NEXT ARTIST →</span>
              <h3 className="font-serif" style="font-size: 3.5rem; text-transform: uppercase; font-weight: 300;">${nextArtist.name}</h3>
            </div>
            <div style="width: 120px; height: 120px; overflow: hidden;">
              <img src="${nextArtist.portrait}" alt="${nextArtist.name}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // 4. PRESS & EVENTS PAGE
  function renderPressEventsPage() {
    const filters = ['ALL', 'EXHIBITIONS', 'EVENTS', 'PRESS', 'NEWS'];
    const filtered = state.pressFilter === 'ALL'
      ? PRESS_EVENTS
      : PRESS_EVENTS.filter(p => p.category === state.pressFilter);

    return `
      <div className="gallery-container" style="padding-top: 8rem; padding-bottom: 8rem;">
        <div style="border-bottom: 1px solid #E6E4DF; padding-bottom: 3rem; margin-bottom: 4rem;">
          <span className="section-label" style="display: block; margin-bottom: 0.75rem;">NEWSROOM & CHRONICLE</span>
          <h1 className="display-title" style="font-size: 3.8rem; text-transform: uppercase; margin-bottom: 1.5rem;">PRESS & EVENTS</h1>
          <p className="font-serif" style="font-size: 1.4rem; color: #706F6C; font-style: italic; max-width: 650px;">
            Exhibition openings, panel discussions, institutional art fair announcements, and gallery news releases.
          </p>
        </div>

        <div style="display: flex; gap: 2rem; border-bottom: 1px solid #E6E4DF; padding-bottom: 1.5rem; margin-bottom: 4rem; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;">
          ${filters.map(f => `
            <button
              data-filter-press="${f}"
              style="background: none; border: none; cursor: pointer; color: ${state.pressFilter === f ? '#171716' : '#706F6C'}; font-weight: ${state.pressFilter === f ? '600' : '400'}; border-bottom: ${state.pressFilter === f ? '1px solid #171716' : '1px solid transparent'}; padding-bottom: 2px;"
            >
              ${f}
            </button>
          `).join('')}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem;">
          ${filtered.map(item => `
            <div data-open-event="${item.id}" style="background-color: #F9F8F6; border: 1px solid #E6E4DF; padding: 2rem; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                ${item.image ? `
                  <div className="art-img-container" style="aspect-ratio: 16/9; margin-bottom: 1.5rem;">
                    <img src="${item.image}" alt="${item.title}" />
                  </div>
                ` : ''}
                <span className="section-label" style="margin-bottom: 0.5rem; display: block;">${item.category || 'NEWS'} · ${item.date}</span>
                <h3 className="font-serif" style="font-size: 1.8rem; font-weight: 300; margin-bottom: 1rem;">${item.title}</h3>
                <p style="font-size: 0.9rem; color: #706F6C; line-height: 1.6; margin-bottom: 1.5rem;">${item.description}</p>
              </div>
              <span className="link-editorial" style="font-size: 0.7rem;">READ MORE →</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 5. ABOUT THE GALLERY PAGE
  function renderAboutPage() {
    return `
      <div style="padding-top: 8rem;">
        <div className="gallery-container" style="margin-bottom: 5rem;">
          <span className="section-label" style="display: block; margin-bottom: 0.75rem;">INSTITUTION & PHILOSOPHY</span>
          <h1 className="display-title" style="font-size: 4rem; text-transform: uppercase; margin-bottom: 2rem;">
            A CONTEMPORARY SPACE<br />FOR ART, IDEAS &<br />CONNECTION.
          </h1>
          <p className="font-serif" style="font-size: 1.5rem; color: #706F6C; font-style: italic; border-left: 2px solid #171716; padding-left: 1.5rem; max-width: 750px;">
            "The mission of Mahoney's Galleries is to cultivate spatial quietude and present visionary contemporary art that withstands the test of time."
          </p>
        </div>

        <div className="gallery-container" style="margin-bottom: 7rem;">
          <div className="art-img-container" style="aspect-ratio: 16/9;">
            <img src="images/gallery_interior.jpg" alt="Gallery Interior" />
          </div>
        </div>

        <div className="gallery-container" style="margin-bottom: 7rem;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem;">
            <div>
              <span className="section-label" style="display: block; margin-bottom: 0.5rem;">HERITAGE</span>
              <h2 className="font-serif" style="font-size: 3rem; font-style: italic; font-weight: 300;">Our Story</h2>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1.5rem; font-size: 1.05rem; color: #171716; line-height: 1.7; font-weight: 300;">
              <p>Established in New York in 1994, Mahoney's Galleries has grown into an internationally renowned contemporary art institution with exhibition spaces in Chelsea (New York), Mayfair (London), and Le Marais (Paris).</p>
              <p>From its inception, the gallery was built upon a commitment to spatial restraint, rigorous curatorial scholarship, and deep, lasting partnerships with extraordinary contemporary painters, sculptors, and installation artists.</p>
            </div>
          </div>
        </div>

        <section style="background-color: #F2F0EC; border-top: 1px solid #E6E4DF; border-bottom: 1px solid #E6E4DF; padding: 6rem 0; margin-bottom: 7rem;">
          <div className="gallery-container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem;">
              <div>
                <span className="section-label">PURPOSE</span>
                <h3 className="font-serif" style="font-size: 2.5rem; margin-top: 0.5rem; margin-bottom: 1rem;">OUR MISSION</h3>
                <p style="color: #706F6C; line-height: 1.6;">To foster groundbreaking artistic practices and bridge international cultural dialogues between emerging visionaries and established contemporary masters.</p>
              </div>
              <div>
                <span className="section-label">FUTURE</span>
                <h3 className="font-serif" style="font-size: 2.5rem; margin-top: 0.5rem; margin-bottom: 1rem;">OUR VISION</h3>
                <p style="color: #706F6C; line-height: 1.6;">To remain an enduring sanctuary for contemporary art—shaping public appreciation, expanding private collections, and collaborating with world museums.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="gallery-container" style="margin-bottom: 7rem;">
          <span className="section-label" style="display: block; margin-bottom: 0.5rem;">FOUNDATIONAL PRINCIPLES</span>
          <h2 className="font-serif" style="font-size: 3rem; font-style: italic; font-weight: 300; margin-bottom: 3rem;">Gallery Values</h2>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            ${GALLERY_VALUES.map(val => `
              <div style="border-bottom: 1px solid #E6E4DF; padding-bottom: 2rem; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem;">
                <div style="display: flex; align-items: baseline; gap: 1.5rem;">
                  <span className="font-mono" style="font-size: 0.85rem; color: #706F6C;">${val.number}</span>
                  <h3 className="font-serif" style="font-size: 2rem; text-transform: uppercase; font-weight: 300;">— ${val.title}</h3>
                </div>
                <p style="color: #706F6C; max-width: 500px; font-size: 0.9rem; line-height: 1.6;">${val.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // 6. CONTACT & LOCATIONS PAGE
  function renderContactPage() {
    const loc = GALLERY_INFO.locations.find(l => l.id === state.contactLocId) || GALLERY_INFO.locations[0];

    return `
      <div className="gallery-container" style="padding-top: 8rem; padding-bottom: 8rem;">
        <div style="border-bottom: 1px solid #E6E4DF; padding-bottom: 3rem; margin-bottom: 4rem;">
          <span className="section-label" style="display: block; margin-bottom: 0.75rem;">INQUIRIES & VISITS</span>
          <h1 className="display-title" style="font-size: 3.8rem; text-transform: uppercase; margin-bottom: 1.5rem;">CONTACT</h1>
          <p className="font-serif" style="font-size: 1.4rem; color: #706F6C; font-style: italic; max-width: 650px;">
            We welcome inquiries regarding artwork acquisitions, private viewings, institutional loans, and exhibition visits.
          </p>
        </div>

        <!-- Location Switcher Buttons -->
        <div style="display: flex; gap: 2.5rem; border-bottom: 1px solid #E6E4DF; padding-bottom: 1.5rem; margin-bottom: 4rem; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase;">
          ${GALLERY_INFO.locations.map(l => `
            <button
              data-switch-loc="${l.id}"
              style="background: none; border: none; cursor: pointer; color: ${state.contactLocId === l.id ? '#171716' : '#706F6C'}; font-weight: ${state.contactLocId === l.id ? '600' : '400'}; border-bottom: ${state.contactLocId === l.id ? '1px solid #171716' : '1px solid transparent'}; padding-bottom: 2px;"
            >
              ${l.city} (${l.district})
            </button>
          `).join('')}
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem;">
          <div>
            <h2 className="font-serif" style="font-size: 2.2rem; font-style: italic; font-weight: 300; margin-bottom: 2rem;">Send an Inquiry</h2>
            <form id="contact-form" style="display: flex; flex-direction: column; gap: 2rem;">
              <input type="text" required placeholder="Full Name *" className="form-input-minimal" />
              <input type="email" required placeholder="Email Address *" className="form-input-minimal" />
              <textarea rows="4" required placeholder="Message details..." className="form-input-minimal" style="resize: none;"></textarea>
              <button type="submit" className="btn-primary-dark" style="align-self: flex-start;">SEND INQUIRY →</button>
            </form>
          </div>

          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <span className="section-label">GALLERY DETAILS</span>
              <h3 className="font-serif" style="font-size: 2rem; margin: 0.5rem 0 1.5rem 0;">${loc.city} Space</h3>
              <div style="border-top: 1px solid #E6E4DF; padding-top: 1.5rem; line-height: 1.8; color: #706F6C; font-size: 0.9rem;">
                <p><strong style="color: #171716; text-transform: uppercase;">Address:</strong> ${loc.address}, ${loc.zip}</p>
                <p><strong style="color: #171716; text-transform: uppercase;">Telephone:</strong> ${loc.phone}</p>
                <p><strong style="color: #171716; text-transform: uppercase;">Email:</strong> ${loc.email}</p>
                <p><strong style="color: #171716; text-transform: uppercase;">Hours:</strong> ${loc.hours}</p>
              </div>
            </div>
            <div style="aspect-ratio: 4/3; width: 100%; background-color: #F2F0EC; border: 1px solid #E6E4DF; overflow: hidden;">
              <iframe title="Map" src="${loc.mapEmbedUrl}" width="100%" height="100%" style="border: 0;" />
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // FOOTER RENDERER
  function renderFooter() {
    return `
      <footer style="background-color: #F2F0EC; border-top: 1px solid #E6E4DF; color: #171716; padding-top: 5rem; padding-bottom: 3rem;">
        <div className="gallery-container">
          <div style="border-bottom: 1px solid #E6E4DF; padding-bottom: 3rem; margin-bottom: 3rem; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 2rem;">
            <div>
              <span className="font-serif" style="font-size: 2.5rem; letter-spacing: 0.2em; font-weight: 300; text-transform: uppercase; display: block;">
                MAHONEY'S
              </span>
              <span className="font-sans" style="font-size: 0.65rem; letter-spacing: 0.35em; color: #706F6C; text-transform: uppercase; display: block; margin-top: 6px;">
                GALLERIES · EST. 1994
              </span>
            </div>
            <p className="font-serif" style="font-style: italic; font-size: 1.2rem; color: #706F6C; max-width: 420px;">
              "Art is a site of deceleration—a physical vessel where weight, pigment, and light collapse into singular presence."
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2.5rem; margin-bottom: 4rem; font-size: 0.8rem;">
            <div>
              <h4 className="section-label" style="margin-bottom: 1rem; color: #171716;">NAVIGATION</h4>
              <div style="display: flex; flex-direction: column; gap: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C;">
                <button data-nav="home" style="background: none; border: none; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C; text-align: left; cursor: pointer;">Home</button>
                <button data-nav="artists" style="background: none; border: none; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C; text-align: left; cursor: pointer;">Artists</button>
                <button data-nav="press-events" style="background: none; border: none; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C; text-align: left; cursor: pointer;">Press & Events</button>
                <button data-nav="about" style="background: none; border: none; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C; text-align: left; cursor: pointer;">About the Gallery</button>
                <button data-nav="contact" style="background: none; border: none; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C; text-align: left; cursor: pointer;">Contact & Visit</button>
              </div>
            </div>

            <div>
              <h4 className="section-label" style="margin-bottom: 1rem; color: #171716;">GALLERY LOCATIONS</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem; color: #706F6C; line-height: 1.5;">
                ${GALLERY_INFO.locations.map(loc => `
                  <div>
                    <strong style="color: #171716; text-transform: uppercase;">${loc.city} — ${loc.district}</strong>
                    <p>${loc.address}</p>
                    <p className="font-mono" style="font-size: 0.75rem;">${loc.phone}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <h4 className="section-label" style="margin-bottom: 1rem; color: #171716;">DIGITAL & PRESS</h4>
              <div style="display: flex; flex-direction: column; gap: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: #706F6C;">
                <a href="https://instagram.com" target="_blank" style="color: #706F6C; text-decoration: none;">Instagram ↗</a>
                <a href="https://artsy.net" target="_blank" style="color: #706F6C; text-decoration: none;">Artsy ↗</a>
                <a href="https://ocula.com" target="_blank" style="color: #706F6C; text-decoration: none;">Ocula ↗</a>
                <a href="https://linkedin.com" target="_blank" style="color: #706F6C; text-decoration: none;">LinkedIn ↗</a>
              </div>
            </div>

            <div>
              <h4 className="section-label" style="margin-bottom: 1rem; color: #171716;">ACQUISITION INQUIRIES</h4>
              <p style="color: #706F6C; margin-bottom: 1rem; line-height: 1.6;">
                For private sales, museum loans, or artwork acquisition inquiries, please contact our directorate.
              </p>
              <a href="mailto:inquiries@mahoneysgalleries.art" style="color: #171716; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; border-bottom: 1px solid #171716; padding-bottom: 2px; text-decoration: none;">
                inquiries@mahoneysgalleries.art →
              </a>
            </div>
          </div>

          <div style="border-top: 1px solid #E6E4DF; padding-top: 2rem; display: flex; flex-wrap: wrap; justify-content: space-between; font-size: 0.7rem; color: #706F6C; letter-spacing: 0.15em; text-transform: uppercase;">
            <p>© ${new Date().getFullYear()} MAHONEY'S GALLERIES LLC. ALL RIGHTS RESERVED.</p>
            <div style="display: flex; gap: 1.5rem;">
              <span>PRIVACY POLICY</span>
              <span>TERMS OF EXHIBITION</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // MODAL RENDERER
  function renderModal() {
    if (!state.activeModal) return '';

    if (state.activeModal.type === 'artwork') {
      const art = state.activeModal.data;
      return `
        <div style="position: fixed; inset: 0; z-index: 50; background-color: rgba(23, 23, 22, 0.85); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 1.5rem;">
          <div style="position: relative; background-color: #F9F8F6; color: #171716; max-width: 1000px; width: 100%; max-height: 90vh; overflow-y: auto; display: flex; flex-direction: row; flex-wrap: wrap; border: 1px solid #E6E4DF;">
            <button id="close-modal-btn" style="position: absolute; top: 1rem; right: 1rem; background-color: #171716; color: #F9F8F6; border: none; width: 2.5rem; height: 2.5rem; cursor: pointer; font-size: 1rem;">✕</button>
            <div style="width: 100%; flex: 1 1 50%; background-color: #F2F0EC; padding: 2rem; display: flex; align-items: center; justify-content: center;">
              <img src="${art.image}" alt="${art.title}" style="max-width: 100%; max-height: 65vh; object-fit: contain;" />
            </div>
            <div style="width: 100%; flex: 1 1 45%; padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span className="section-label" style="display: block; margin-bottom: 0.5rem;">ARTWORK CATALOGUE</span>
                <h3 className="font-serif" style="font-size: 2.2rem; font-style: italic; font-weight: 300; margin-bottom: 1.5rem;">${art.title}</h3>
                <div style="border-top: 1px solid #E6E4DF; border-bottom: 1px solid #E6E4DF; padding: 1.5rem 0; margin: 1.5rem 0; font-size: 0.8rem; color: #706F6C; display: flex; flex-direction: column; gap: 0.75rem;">
                  <p><strong style="color: #171716; text-transform: uppercase;">Year:</strong> ${art.year}</p>
                  <p><strong style="color: #171716; text-transform: uppercase;">Medium:</strong> ${art.medium}</p>
                  <p><strong style="color: #171716; text-transform: uppercase;">Dimensions:</strong> ${art.dimensions}</p>
                  ${art.provenance ? `<p><strong style="color: #171716; text-transform: uppercase;">Provenance:</strong> ${art.provenance}</p>` : ''}
                </div>
              </div>
              <button id="inquire-modal-btn" className="btn-primary-dark" style="width: 100%;">
                INQUIRE ABOUT THIS ARTWORK →
              </button>
            </div>
          </div>
        </div>
      `;
    }

    if (state.activeModal.type === 'event') {
      const evt = state.activeModal.data;
      return `
        <div style="position: fixed; inset: 0; z-index: 50; background-color: rgba(23, 23, 22, 0.85); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 1.5rem;">
          <div style="position: relative; background-color: #F9F8F6; color: #171716; max-width: 850px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 3rem; border: 1px solid #E6E4DF;">
            <button id="close-modal-btn" style="position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; cursor: pointer; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;">[ CLOSE ]</button>
            <div style="margin-bottom: 2rem;">
              <span className="section-label">${evt.category || 'EXHIBITION'} · ${evt.date}</span>
              <h2 className="font-serif" style="font-size: 2.5rem; font-weight: 300; margin: 1rem 0;">${evt.title}</h2>
              ${evt.subtitle ? `<p className="font-sans" style="font-size: 0.85rem; color: #706F6C; text-transform: uppercase;">${evt.subtitle}</p>` : ''}
            </div>
            ${evt.image ? `
              <div style="margin-bottom: 2rem; max-height: 380px; overflow: hidden;">
                <img src="${evt.image}" alt="${evt.title}" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
            ` : ''}
            <p style="font-size: 1rem; color: #171716; line-height: 1.7; margin-bottom: 2.5rem;">${evt.content || evt.description}</p>
            <div style="border-top: 1px solid #E6E4DF; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
              <button id="inquire-modal-btn" className="link-editorial">ATTEND EVENT / INQUIRE →</button>
            </div>
          </div>
        </div>
      `;
    }

    return '';
  }

  // EVENT BINDINGS
  function bindEvents() {
    // Navigation Buttons
    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-nav');
        setState({ activeTab: tab });
      });
    });

    // Select Artist Buttons
    document.querySelectorAll('[data-select-artist]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const artistId = btn.getAttribute('data-select-artist');
        setState({ selectedArtistId: artistId, activeTab: 'artist-detail' });
      });
    });

    // Artist Filter Buttons
    document.querySelectorAll('[data-filter-artist]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.getAttribute('data-filter-artist');
        setState({ artistFilter: filter });
      });
    });

    // Press Filter Buttons
    document.querySelectorAll('[data-filter-press]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = btn.getAttribute('data-filter-press');
        setState({ pressFilter: filter });
      });
    });

    // Contact Location Switcher
    document.querySelectorAll('[data-switch-loc]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const locId = btn.getAttribute('data-switch-loc');
        setState({ contactLocId: locId });
      });
    });

    // Open Artwork Modal
    document.querySelectorAll('[data-open-artwork]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const workId = btn.getAttribute('data-open-artwork');
        const artist = ARTISTS.find(a => a.id === state.selectedArtistId) || ARTISTS[0];
        const work = artist.selectedWorks.find(w => w.id === workId) || artist.selectedWorks[0];
        setState({ activeModal: { type: 'artwork', data: work } });
      });
    });

    // Open Event Modal
    document.querySelectorAll('[data-open-event]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const evtId = btn.getAttribute('data-open-event');
        const evt = PRESS_EVENTS.find(p => p.id === evtId) || PRESS_EVENTS[0];
        setState({ activeModal: { type: 'event', data: evt } });
      });
    });

    // Close Modal
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        setState({ activeModal: null });
      });
    }

    // Inquire Button inside Modal
    const inquireBtn = document.getElementById('inquire-modal-btn');
    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        setState({ activeModal: null, activeTab: 'contact' });
      });
    }

    // Forms
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to Mahoney\'s Galleries bulletins.');
        newsletterForm.reset();
      });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your inquiry has been submitted. Our directors will respond within 24 hours.');
        contactForm.reset();
      });
    }
  }

  // DOM READY INITIALIZATION
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
