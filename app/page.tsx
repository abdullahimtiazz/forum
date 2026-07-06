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
    role: "Professor of Law",
    org: "The Chinese University of Hong Kong",
  },
  {
    name: "Wang Jiangyu",
    role: "Professor of Law; Director, Centre for Chinese and Comparative Law",
    org: "City University of Hong Kong",
  },
  {
    name: "Jamie Tso",
    role: "Founder",
    org: "LegalQuants",
  },
  {
    name: "Troy Song",
    role: "International Arbitration Lawyer",
    org: "",
    image: "/troy-song.jpg",
  },
  {
    name: "Chandy Ye",
    role: "Founder",
    org: "Beyond Change Advisory",
  },
  {
    name: "Wilfred Kwong",
    role: "Head of Group Legal",
    org: "HAECO",
  },
  {
    name: "Rocky Li",
    role: "Founder",
    org: "Terracotta",
  },
  {
    name: "Anissa Ng",
    role: "Legal AI Demo Speaker",
    org: "",
  },
  {
    name: "Gallant Guo",
    role: "Legal AI Demo Speaker",
    org: "",
  },
  {
    name: "Leona Zhang",
    role: "Legal AI Demo Speaker",
    org: "",
  },
];

const panels = [
  {
    time: "13:40",
    kind: "Talk",
    title: "Frontier Legal AI Landscape",
    summary:
      "Frontier legal AI applications, the technical perspective, and adoption limits in Hong Kong.",
    participantsLabel: "Speakers",
    panelists: [
      "Jamie Tso, Founder, LegalQuants",
      "Troy Song, Senior Associate, Disputes",
      "Rocky Li, Founder, Terracotta",
    ],
  },
  {
    time: "14:35",
    title: "How to Study Law Effectively with AI",
    summary:
      "How law students can use AI responsibly, what academic integrity requires, and where legal education is already experimenting.",
    participantsLabel: "Speakers",
    panelists: [
      "Prof Benjamin Chen, HKU",
      "Prof Stuart Hargreaves, CUHK",
      "Prof Wang Jiangyu, CityU",
      "Panelist TBC",
    ],
  },
  {
    time: "16:30",
    title: "Essential AI Skills for Young Lawyers",
    summary:
      "How AI changes day-to-day legal work and what skills young lawyers should build for the AI era.",
    moderator: "Chandy Ye, Founder, Beyond Change Advisory",
    panelists: [
      "Wilfred Kwong, Head of Group Legal, HAECO",
      "I-firm panelist TBC",
      "Barrister panelist TBC",
      "Industry panelist TBC",
    ],
  },
];

const demoSession = {
  time: "16:00",
  kind: "Demo session",
  title: "5-min demos of Legal AI tools",
  summary:
    "Short demonstrations of practical legal AI tools built for legal research, drafting, and workflow support.",
  participantsLabel: "Speakers",
  panelists: ["Anissa Ng", "Gallant Guo", "Leona Zhang"],
};

type Partner = {
  name: string;
  href: string;
  logo: string;
  logoClassName: string;
};

const partners: Partner[] = [
  {
    name: "HKU Law and Technology Centre",
    href: "https://lawtech.hku.hk",
    logo: "/hku-lawtech-logo.svg",
    logoClassName: "hkuLogo",
  },
  {
    name: "Casebyte",
    href: "https://casebyte.ai/?utm_source=ai_young_lawyers_forum&utm_medium=referral&utm_campaign=supporting_organizations",
    logo: "/casebyte-black-logo.svg",
    logoClassName: "casebyteLogo",
  },
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
            <strong>Aug 15, Sat</strong>
          </div>
          <div>
            <span>Time</span>
            <strong>13:30-18:00</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>Philip K.H. Wong Theatre, HKU</strong>
          </div>
        </div>
      </section>

      <section className="guestList" id="guests" aria-labelledby="guests-title">
        <div className="sectionHeader">
          <p className="eyebrow dark">Confirmed roster</p>
          <h2 id="guests-title">Speakers</h2>
        </div>
        <div className="guestGrid">
          {guests.map((guest) => (
            <article className="guestCard" key={guest.name}>
              <img src={guest.image ?? "/portrait-placeholder.svg"} alt="" />
              <div>
                <h3>{guest.name}</h3>
                <p>{guest.role}</p>
                {guest.org && <span>{guest.org}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rundown" id="rundown" aria-labelledby="rundown-title">
        <div className="rundownLead">
          <p className="eyebrow dark">Rundown</p>
          <h2 id="rundown-title">Programme</h2>
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
                    <span>{panel.kind ?? "Panel"}</span>
                    <h3>{panel.title}</h3>
                    <p>{panel.summary}</p>
                  </div>
                  <ChevronDown size={22} strokeWidth={1.7} aria-hidden="true" />
                </summary>
                <div
                  className={`panelPeople ${
                    panel.moderator ? "withModerator" : "speakerOnly"
                  }`}
                >
                  {panel.moderator && (
                    <div>
                      <strong>Moderator</strong>
                      <p>{panel.moderator}</p>
                    </div>
                  )}
                  <div>
                    <strong>{panel.participantsLabel ?? "Panelists"}</strong>
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
                  <span>{index === 0 ? "14:25" : "15:30"}</span>
                  <strong>{index === 0 ? "Session changeover" : "Tea break"}</strong>
                </div>
              )}

              {index === 1 && (
                <details className="panelDetail">
                  <summary>
                    <time>{demoSession.time}</time>
                    <div>
                      <span>{demoSession.kind}</span>
                      <h3>{demoSession.title}</h3>
                      <p>{demoSession.summary}</p>
                    </div>
                    <ChevronDown size={22} strokeWidth={1.7} aria-hidden="true" />
                  </summary>
                  <div className="panelPeople speakerOnly">
                    <div>
                      <strong>{demoSession.participantsLabel}</strong>
                      <ul>
                        {demoSession.panelists.map((panelist) => (
                          <li key={panelist}>{panelist}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              )}
            </div>
          ))}

          <div className="networkingBlock">
            <Handshake size={28} strokeWidth={1.6} />
            <time>17:20</time>
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
          <p className="eyebrow" id="sponsors-title">Supporting organizations</p>
        </div>
        <div className="teamGrid">
          {partners.map((partner) => (
            <a
              className="teamCard logoTeamCard"
              href={partner.href}
              key={partner.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name}`}
            >
              <div className="teamLogoPanel">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={partner.logoClassName}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>AI for Young Lawyers Forum</strong>
          <span>Law, technology, judgment, and the next generation of practice.</span>
        </div>

      </footer>
    </main>
  );
}
