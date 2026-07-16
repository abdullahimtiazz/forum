const siteUrl = "https://aiforyounglawyers.com";

export const llmsText = `# AI for Young Lawyers Forum

> A free in-person Hong Kong forum for law students and young practitioners exploring how AI is changing legal education, legal work, and future careers.

The forum takes place on 15 August 2026 from 13:30 to 18:00 at Philip K. H. Wong Theatre, 2/F Cheng Yu Tung Tower, The University of Hong Kong. Registration is free.

## Event

- [Complete event information](${siteUrl}/index.md): Dates, venue, programme, speakers, supporting organisations, registration, and contact details in Markdown.
- [Event website](${siteUrl}/): The official interactive website.
- [Register](https://luma.com/3attxu5x): Free registration through Luma.

## Supporting organisations

- [HKU Law and Technology Centre](https://lawtech.hku.hk): Supporting organisation.
- [Casebyte](https://casebyte.ai/): Supporting organisation.
`;

export const eventMarkdown = `---
title: AI for Young Lawyers Forum 2026 | Hong Kong
description: A free forum for law students and young practitioners on AI, legal education, and future careers, held 15 August 2026 at The University of Hong Kong.
image: ${siteUrl}/aiyl-og.png
---

# AI for Young Lawyers Forum 2026

Law, technology, judgment and the next generation of practice.

An afternoon forum for law students and young practitioners to explore how AI is changing legal education and their future careers.

## Event details

- **Date:** Saturday, 15 August 2026
- **Time:** 13:30–18:00 (Hong Kong time, UTC+8)
- **Venue:** Philip K. H. Wong Theatre, 2/F Cheng Yu Tung Tower, The University of Hong Kong
- **Format:** In-person
- **Admission:** Free
- **Registration:** [Register through Luma](https://luma.com/3attxu5x)

## Programme

- **13:00–13:30 — Registration**
- **13:30–13:40 — Opening remarks**
- **13:40–14:20 — Frontier Legal AI Landscape.** A talk on frontier legal AI applications, the technical perspective, and adoption limits in Hong Kong. Speakers: Jamie Tso, Troy Song, and Rocky Li.
- **14:20–14:25 — Session changeover**
- **14:25–15:15 — Legal AI in Education.** A panel on responsible student use of AI, academic integrity, and experimentation in legal education. Speakers: Benjamin Chen, Stuart Hargreaves, Wang Jiangyu, and Brian Tang.
- **15:20–15:50 — Tea break**
- **16:00–16:20 — Don’t Wait for Legal Tech: Build Your Own.** Demonstrations of practical legal AI tools for research, drafting, and workflow support. Speakers: Anissa Ng, Gallant Guo, Leona Zhang, and Wyatt Zhang.
- **16:20–17:20 — Essential AI Skills for Young Lawyers.** A panel on how AI changes day-to-day legal work and the skills young lawyers should build. Speakers: Chandy Ye, Wilfred Kwong, Ian Ernst Chai, Horace Wong SC, JP, and Wilfred Ng.
- **17:20 onwards — Networking session**

## Speakers

- **Jamie Tso** — Founder, LegalQuants
- **Troy Song** — International Arbitration Lawyer
- **Rocky Li** — Founder, Terracotta
- **Benjamin Chen** — Associate Professor of Law; Director, Law and Technology Centre, The University of Hong Kong
- **Stuart Hargreaves** — Associate Professor of Law, The Chinese University of Hong Kong
- **Wang Jiangyu** — Professor of Law; Director, Centre for Chinese and Comparative Law, City University of Hong Kong
- **Brian Tang** — Executive Director, LITE Lab@HKU
- **Anissa Ng** — Sidley Austin corporate associate turned product manager
- **Gallant Guo** — Builder and lawyer in a one-year gap
- **Leona Zhang** — Co-Founder, Terracotta
- **Wyatt Zhang** — Corporate Associate, Fangda Partners
- **Chandy Ye** — Founder, Beyond Change Advisory; IAPP KnowledgeNet Hong Kong Co-Chair
- **Wilfred Kwong** — Head of Group Legal, HAECO Group
- **Ian Ernst Chai** — CEO and Co-Founder, Elefant; Affiliate Faculty, SMU
- **Horace Wong SC, JP** — Barrister & Co-Head of Rede Chambers
- **Wilfred Ng** — Partner, TMT at Bird & Bird

## Supporting organisations

- [HKU Law and Technology Centre](https://lawtech.hku.hk)
- [Casebyte](https://casebyte.ai/)

## Contact

For sponsorship enquiries, email [aiyl@aiforyounglawyers.com](mailto:aiyl@aiforyounglawyers.com).

## Structured event data

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "AI for Young Lawyers Forum 2026",
  "startDate": "2026-08-15T13:30:00+08:00",
  "endDate": "2026-08-15T18:00:00+08:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "isAccessibleForFree": true,
  "url": "${siteUrl}/",
  "location": {
    "@type": "Place",
    "name": "Philip K. H. Wong Theatre",
    "address": "2/F Cheng Yu Tung Tower, The University of Hong Kong, Hong Kong"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "HKD",
    "url": "https://luma.com/3attxu5x"
  }
}
\`\`\`
`;

export const markdownHeaders = {
  "Cache-Control": "public, max-age=3600",
  "Content-Signal": "ai-train=yes, search=yes, ai-input=yes",
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept",
};
