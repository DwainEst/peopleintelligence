// JSON-LD structured data (schema.org) added to each pre-rendered page.
// Tells Google who People Intelligence is, who Danelle is, what is offered and where.
// Edit the facts below; check changes at https://search.google.com/test/rich-results

export const SITE = "https://www.peopleintelligence.co.za";

const ORG = `${SITE}/#organization`;
const PERSON = `${SITE}/#danelle`;
const WEBSITE = `${SITE}/#website`;

const serviceArea = [
  { "@type": "City", name: "Cape Town" },
  { "@type": "Country", name: "South Africa" },
];

const offer = (name, description, extra = {}) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Service",
    name,
    description,
    provider: { "@id": ORG },
    areaServed: serviceArea,
    ...extra,
  },
});

const organization = {
  "@type": "ProfessionalService",
  "@id": ORG,
  name: "People Intelligence",
  slogan: "Pathways to Potential",
  description:
    "Executive leadership coaching, EQ (emotional intelligence) coaching, team coaching, facilitation and training. Online via Zoom or Teams, face to face in Cape Town, and across South Africa by arrangement.",
  url: `${SITE}/`,
  logo: `${SITE}/logo.webp`,
  image: `${SITE}/people-intelligence-og.webp`,
  email: "danelle@peopleintelligence.co.za",
  telephone: "+27767394114",
  founder: { "@id": PERSON },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  areaServed: serviceArea,
  knowsLanguage: "en",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching and leadership development services",
    itemListElement: [
      offer(
        "One-on-One Executive & Leadership Coaching",
        "Confidential, personalised coaching around your professional goals: career transitions, performance, new capabilities and resilience.",
        { serviceType: "Executive coaching" }
      ),
      offer(
        "Team Coaching & Group Coaching",
        "Improves how intact teams collaborate and perform, and accelerates individual development through peer learning in groups.",
        { serviceType: "Team coaching" }
      ),
      offer(
        "Facilitation & Training",
        "Facilitated learning and structured, instructor-led training programmes in emotional intelligence and leadership.",
        { serviceType: "Leadership training" }
      ),
      offer(
        "Christian Leadership Coaching",
        "Faith-based leadership coaching, ministry team development and Christian leadership workshops that integrate Biblical wisdom with leadership development.",
        { serviceType: "Christian coaching", url: `${SITE}/christian-coaching` }
      ),
    ],
  },
};

const person = {
  "@type": "Person",
  "@id": PERSON,
  name: "Danelle Esterhuizen",
  jobTitle: "Executive & Leadership Coach, Facilitator",
  worksFor: { "@id": ORG },
  url: `${SITE}/`,
  email: "danelle@peopleintelligence.co.za",
  knowsAbout: [
    "Executive coaching",
    "Leadership development",
    "Emotional intelligence",
    "Team coaching",
    "Facilitation",
    "Resilience",
    "Neuroscience of habits",
    "Insights Discovery",
    "Enneagram",
    "Neurozone",
    "Getting Things Done (GTD)",
    "Christian leadership",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "B.A. (Hons.) in Psychology", credentialCategory: "degree" },
    { "@type": "EducationalOccupationalCredential", name: "Insights Discovery accreditation", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "Enneagram accreditation", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "Neurozone accreditation", credentialCategory: "certification" },
    { "@type": "EducationalOccupationalCredential", name: "Getting Things Done (GTD) accreditation", credentialCategory: "certification" },
  ],
  memberOf: {
    "@type": "Organization",
    name: "COMENSA - Coaches and Mentors of South Africa",
    url: "https://www.comensa.org.za/",
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE,
  name: "People Intelligence",
  url: `${SITE}/`,
  publisher: { "@id": ORG },
  inLanguage: "en-ZA",
};

const webPage = (route, name, description, extra = {}) => ({
  "@type": "WebPage",
  "@id": `${SITE}${route}#webpage`,
  url: `${SITE}${route}`,
  name,
  description,
  isPartOf: { "@id": WEBSITE },
  about: { "@id": ORG },
  inLanguage: "en-ZA",
  ...extra,
});

/** Returns the JSON-LD object for a page, or null for pages that should have none. */
export function buildSchema(pg, { title, description }) {
  if (pg.noindex) return null;
  const graph = [organization, person, website];

  if (pg.route === "/") {
    graph.push(webPage("/", title, description, { primaryImageOfPage: `${SITE}/people-intelligence-og.webp` }));
  } else {
    graph.push(
      webPage(pg.route, title, description, {
        breadcrumb: { "@id": `${SITE}${pg.route}#breadcrumb` },
      }),
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}${pg.route}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: title.split(" | ")[0], item: `${SITE}${pg.route}` },
        ],
      }
    );
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
