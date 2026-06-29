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
    name: "Alicia Wong",
    role: "Technology disputes associate",
    org: "Harbour Chambers",
  },
  {
    name: "Marcus Lee",
    role: "M&A lawyer",
    org: "Jade & Co.",
  },
  {
    name: "Priya Chan",
    role: "Legal innovation counsel",
    org: "North Point Bank",
  },
  {
    name: "Daniel Ho",
    role: "Assistant professor",
    org: "HK Law School",
  },
  {
    name: "Natalie Fong",
    role: "Regulatory policy manager",
    org: "Digital Markets Office",
  },
  {
    name: "James Lau",
    role: "Trainee solicitor",
    org: "Central Legal",
  },
  {
    name: "Mei Tan",
    role: "JD student",
    org: "Hong Kong University",
  },
  {
    name: "Ryan Cheng",
    role: "Legal operations lead",
    org: "Vertex Technologies",
  },
];

const panels = [
  {
    time: "10:00",
    title: "Panel 1: The AI-augmented first five years",
    summary:
      "How junior lawyers can use AI tools responsibly while still building judgment, drafting instincts, and client confidence.",
    moderator: "Elaine Yu, Senior Associate, Placeholder LLP",
    panelists: [
      "Adrian Ng, Barrister, Placeholder Chambers",
      "Sophia Leung, Legal Product Lead, Example AI",
      "Michael Tam, Professional Support Lawyer, Sample & Co.",
    ],
  },
  {
    time: "11:30",
    title: "Panel 2: Training, supervision, and professional duties",
    summary:
      "What firms, chambers, universities, and supervisors should change as legal research and drafting become more automated.",
    moderator: "Jonathan Cheung, Lecturer, City Law Faculty",
    panelists: [
      "Rachel Lam, Partner, Demo Legal",
      "Iris Ho, General Counsel, Fictional FinTech",
      "Kevin Ma, Trainee Solicitor, Placeholder Partners",
    ],
  },
  {
    time: "14:00",
    title: "Panel 3: Building a Hong Kong legal-tech career",
    summary:
      "Routes into legal technology, policy, product, legal operations, and AI-enabled practice for students and young lawyers.",
    moderator: "Carmen Li, Founder, Young Lawyers Lab",
    panelists: [
      "Terence Kwok, Legal Engineer, Atlas LegalTech",
      "Maya Shah, JD Candidate, Placeholder University",
      "Oscar Pang, Counsel, Innovation & Policy Unit",
    ],
  },
];

const sponsors = [
  "Lead Knowledge Partner",
  "Technology Partner",
  "Student Access Sponsor",
  "Networking Sponsor",
];

const organizers = [
  {
    name: "Grace Hui",
    role: "Forum chair",
  },
  {
    name: "Thomas Yip",
    role: "Programme lead",
  },
  {
    name: "Vivian Law",
    role: "Partnerships lead",
  },
  {
    name: "Owen Mak",
    role: "Student engagement",
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
          <a className="brand" href="#top" aria-label="AI for Young Lawyers forum home">
            <span className="brandMark">AIYL</span>
            <span>AI for Young Lawyers forum</span>
          </a>
          <div className="navLinks">
            <a href="#guests">Guests</a>
            <a href="#rundown">Rundown</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Legal technology / young lawyers / Hong Kong</p>
          <h1>AI for Young Lawyers forum</h1>
          <p className="heroLead">
            A focused forum for students, trainees, pupils, associates, and the
            legal leaders shaping how artificial intelligence changes early-career
            legal knowledge work.
          </p>

          <div className="heroActions" aria-label="Forum actions">
            <a className="primaryButton" href="#rundown">
              View rundown
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>
            <a className="secondaryButton" href="#guests">
              Meet the guests
            </a>
          </div>
        </div>

        <div className="eventStrip" aria-label="Forum overview">
          <div>
            <span>Date</span>
            <strong>2026, TBA</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>Hong Kong, TBA</strong>
          </div>
          <div>
            <span>Format</span>
            <strong>3 panels, breaks, networking</strong>
          </div>
        </div>
      </section>

      <section className="guestList" id="guests" aria-labelledby="guests-title">
        <div className="sectionHeader">
          <p className="eyebrow dark">Guest list</p>
          <h2 id="guests-title">People building the next legal workflow.</h2>
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
          <h2 id="rundown-title">Three panels, deliberate pauses, and one room that keeps talking.</h2>
          <p>
            The day is designed for early-career lawyers: practical, candid, and
            paced with breaks so conversations can continue between sessions.
          </p>
        </div>

        <div className="schedule" aria-label="Forum schedule">
          <div className="scheduleMoment">
            <time>09:30</time>
            <div>
              <span>Arrival</span>
              <h3>Registration and morning coffee</h3>
            </div>
          </div>

          {panels.map((panel, index) => (
            <div className="scheduleGroup" key={panel.title}>
              <details className="panelDetail" open={index === 0}>
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
                  <span>{index === 0 ? "11:00" : "13:00"}</span>
                  <strong>{index === 0 ? "Coffee break" : "Lunch break"}</strong>
                </div>
              )}
            </div>
          ))}

          <div className="networkingBlock">
            <Handshake size={28} strokeWidth={1.6} />
            <time>15:30</time>
            <div>
              <span>Closing session</span>
              <h3>Networking reception</h3>
              <p>
                A relaxed end-of-day session for students, trainees, associates,
                academics, sponsors, and speakers to continue the discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors" id="sponsors" aria-labelledby="sponsors-title">
        <div className="sectionHeader">
          <p className="eyebrow dark">Sponsors</p>
          <h2 id="sponsors-title">Supported by legal, academic, and technology partners.</h2>
        </div>
        <div className="sponsorGrid">
          {sponsors.map((sponsor) => (
            <article className="sponsorCard" key={sponsor}>
              <img src="/sponsor-placeholder.svg" alt="" />
              <span>{sponsor}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="organizers" id="team" aria-labelledby="team-title">
        <div className="teamIntro">
          <p className="eyebrow">Organizing team</p>
          <h2 id="team-title">Designed by a working group of young lawyers and legal-tech builders.</h2>
        </div>
        <div className="teamGrid">
          {organizers.map((person) => (
            <article className="teamCard" key={person.name}>
              <img src="/portrait-placeholder.svg" alt="" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>AI for Young Lawyers forum</strong>
          <span>Law, technology, judgment, and the next generation of practice.</span>
        </div>
        <div className="footerMeta">
          <span>
            <CalendarDays size={16} strokeWidth={1.8} />
            2026 forum
          </span>
          <span>
            <MapPin size={16} strokeWidth={1.8} />
            Hong Kong
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
