import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Coffee,
  Handshake,
  MapPin,
  UsersRound,
} from "lucide-react";

const guests = [
  {
    name: "Benjamin Chen",
    role: "Professor of Law; Director, Law and Technology Centre",
    org: "The University of Hong Kong",
  },
  {
    name: "Stuart Hargreaves",
    role: "Associate Dean (External Engagement) and Associate Professor",
    org: "CUHK Faculty of Law",
  },
  {
    name: "Wang Jiangyu",
    role: "Professor of Law; Director, Centre for Chinese and Comparative Law",
    org: "City University of Hong Kong",
  },
  {
    name: "Carl Li",
    role: "Lead Innovation Lawyer - Asia",
    org: "Linklaters",
  },
  {
    name: "Alan Chiu",
    role: "Founding Partner",
    org: "ELLALAN",
  },
  {
    name: "Anissa Ng",
    role: "Proposed demo speaker",
    org: "LegalQuants / Sidley Austin wording TBC",
  },
  {
    name: "Chandy Ye",
    role: "Founder",
    org: "Beyond Change Advisory",
  },
  {
    name: "Du Jinsong",
    role: "Proposed speaker",
    org: "Profile wording TBC",
  },
];

const panels = [
  {
    time: "13:40",
    title: "Frontier Legal AI Landscape",
    summary:
      "Frontier legal AI applications, the technical perspective, and adoption limits in Hong Kong.",
    moderator: "Rocky Li, Founder, Terracotta Cyber Solutions Limited",
    panelists: [
      "Jamie Tso, Founder, LegalQuants",
      "Troy Song, Senior Associate, Disputes, Herbert Smith Freehills Kramer",
    ],
  },
  {
    time: "14:25",
    title: "How to Study Law Effectively with AI",
    summary:
      "How law students can use AI responsibly, what academic integrity requires, and where legal education is already experimenting.",
    moderator: "Moderator TBC",
    panelists: [
      "Prof Benjamin Chen, HKU Law",
      "Prof Stuart Hargreaves, CUHK Faculty of Law",
      "Prof Wang Jiangyu, City University of Hong Kong",
      "Law student representative TBC",
    ],
  },
  {
    time: "16:10",
    title: "Essential AI Skills for Young Lawyers",
    summary:
      "How AI changes day-to-day legal work and what skills young lawyers should build for the AI era.",
    moderator: "Chandy Ye, Founder, Beyond Change Advisory",
    panelists: [
      "Carl Li, Lead Innovation Lawyer - Asia, Linklaters",
      "Linklaters associate TBC",
      "Alan Chiu, Founding Partner, ELLALAN",
      "Anissa Ng, profile wording TBC",
      "Du Jinsong, profile wording TBC",
    ],
  },
];

const partners = [
  {
    name: "Terracotta Cyber Solutions Limited",
    role: "Lead Organiser",
    note: "Terracotta",
    logo: "/terracotta-logo-clean.png",
    logoClassName: "terracottaLogo",
  },
  {
    name: "HKU Law and Technology Centre",
    role: "Co-organiser",
    note: "HKU Law and Technology Centre",
    logo: "/hku-lawtech-logo.svg",
    logoClassName: "hkuLogo",
  },
];

const supportNotes = [
  "Proposed corporate sponsor: Linklaters (Hong Kong)",
  "Free admission for students and young practitioners",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image
          src="/forum-hero.png"
          alt="Hong Kong harbour blended with legal papers and an artificial intelligence knowledge network"
          fill
          priority
          className="heroImage"
          sizes="100vw"
        />
        <div className="heroShade" />

        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="AI for Young Lawyers Forum home">
            <span className="brandMark">AIYL</span>
            <span>AI for Young Lawyers Forum</span>
          </a>
          <div className="navLinks">
            <a href="#guests">Speakers</a>
            <a href="#rundown">Rundown</a>
            <a href="#sponsors">Partners</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Legal technology / young lawyers / Hong Kong</p>
          <h1>AI for Young Lawyers Forum</h1>
          <p className="heroLead">
            A free afternoon forum for law students and young practitioners on how
            AI is changing legal education, legal work, and early-career planning.
          </p>

          <div className="heroActions" aria-label="Forum actions">
            <a className="primaryButton" href="#rundown">
              View rundown
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>
            <a className="secondaryButton" href="#guests">
              Meet the speakers
            </a>
          </div>
        </div>

        <div className="eventStrip" aria-label="Forum overview">
          <div>
            <span>Date</span>
            <strong>Aug 8, Sat, 13:30-18:00</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>HKU, venue TBC</strong>
          </div>
          <div>
            <span>Format</span>
            <strong>Panels, demos, tea break, networking</strong>
          </div>
        </div>
      </section>

      <section className="guestList" id="guests" aria-labelledby="guests-title">
        <div className="sectionHeader">
          <p className="eyebrow dark">Proposed roster</p>
          <h2 id="guests-title">Academics, practitioners, and legal-tech builders shaping the programme.</h2>
        </div>
        <div className="guestGrid">
          {guests.map((guest) => (
            <article className="guestCard" key={guest.name}>
              <img src="/portrait-placeholder.svg" alt="" />
              <div>
                <h3>{guest.name}</h3>
                <p>{guest.role}</p>
                <span>{guest.org}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rundown" id="rundown" aria-labelledby="rundown-title">
        <div className="rundownLead">
          <p className="eyebrow dark">Rundown</p>
          <h2 id="rundown-title">An afternoon of practical AI education for future lawyers.</h2>
          <p>
            The programme is built around responsible AI use, legal education,
            changing workflows, and skills that young lawyers can put to work.
          </p>
        </div>

        <div className="schedule" aria-label="Forum schedule">
          <div className="scheduleMoment">
            <time>13:00</time>
            <div>
              <span>Arrival</span>
              <h3>Registration</h3>
            </div>
          </div>

          <div className="scheduleMoment">
            <time>13:30</time>
            <div>
              <span>Opening</span>
              <h3>Opening remarks</h3>
            </div>
          </div>

          {panels.map((panel, index) => (
            <div className="scheduleGroup" key={panel.title}>
              <details className="panelDetail">
                <summary>
                  <time>{panel.time}</time>
                  <div>
                    <span>Click to expand</span>
                    <h3>{panel.title}</h3>
                    <p>{panel.summary}</p>
                  </div>
                  <ChevronDown size={22} strokeWidth={1.7} aria-hidden="true" />
                </summary>
                <div className="panelPeople">
                  <div>
                    <strong>Moderator</strong>
                    <p>{panel.moderator}</p>
                  </div>
                  <div>
                    <strong>Panelists</strong>
                    <ul>
                      {panel.panelists.map((panelist) => (
                        <li key={panelist}>{panelist}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>

              {index < panels.length - 1 && (
                <div className="scheduleBreak">
                  <Coffee size={20} strokeWidth={1.7} />
                  <span>{index === 0 ? "14:20" : "15:10"}</span>
                  <strong>{index === 0 ? "Session changeover" : "Tea break"}</strong>
                </div>
              )}

              {index === 1 && (
                <div className="scheduleMoment">
                  <time>15:40</time>
                  <div>
                    <span>Demo session</span>
                    <h3>Five-minute legal AI demos</h3>
                    <p>Anissa Ng and Jamie Tso proposed.</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="networkingBlock">
            <Handshake size={28} strokeWidth={1.6} />
            <time>16:50</time>
            <div>
              <span>Networking</span>
              <h3>Networking session</h3>
              <p>
                A relaxed end-of-day session for students, trainees, associates,
                academics, sponsors, and speakers to continue the discussion
                downstairs in the hall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="organizers" id="sponsors" aria-labelledby="sponsors-title">
        <div className="teamIntro">
          <p className="eyebrow">Partners</p>
          <h2 id="sponsors-title">Built with academic, legal, and industry partners in Hong Kong.</h2>
        </div>
        <div className="teamGrid">
          {partners.map((partner) => (
            <article className="teamCard logoTeamCard" key={partner.name}>
              <div className="teamLogoPanel">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={partner.logoClassName}
                />
              </div>
              <div>
                <h3>{partner.role}</h3>
                <p>{partner.note}</p>
              </div>
            </article>
          ))}
          {supportNotes.map((note) => (
            <article className="teamCard" key={note}>
              <img src="/portrait-placeholder.svg" alt="" />
              <div>
                <h3>{note.split(":")[0]}</h3>
                <p>{note.includes(":") ? note.split(":").slice(1).join(":").trim() : note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>AI for Young Lawyers Forum</strong>
          <span>Law, technology, judgment, and the next generation of practice.</span>
        </div>
        <div className="footerMeta">
          <span>
            <CalendarDays size={16} strokeWidth={1.8} />
            Aug 8, Sat
          </span>
          <span>
            <MapPin size={16} strokeWidth={1.8} />
            HKU, Hong Kong
          </span>
          <span>
            <Clock3 size={16} strokeWidth={1.8} />
            Half-day programme
          </span>
          <span>
            <UsersRound size={16} strokeWidth={1.8} />
            Young legal community
          </span>
        </div>
      </footer>
    </main>
  );
}
