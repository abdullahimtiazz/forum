"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

type Speaker = {
  name: string;
  role: string;
  image: string;
};

type Theme = {
  id: string;
  number: string;
  label: string;
  title: string;
  kicker: string;
  time: string;
  summary: string;
  className: string;
  speakers: Speaker[];
};

const themes: Theme[] = [
  {
    id: "landscape",
    number: "01",
    label: "Talk",
    title: "Frontier Legal AI Landscape",
    kicker: "What is possible now?",
    time: "13:40–14:20",
    summary:
      "Frontier legal AI applications, the technical perspective, and adoption limits in Hong Kong.",
    className: "themeBlue",
    speakers: [
      { name: "Jamie Tso", role: "Founder, LegalQuants", image: "/jamie-tso.jpeg" },
      { name: "Troy Song", role: "International Arbitration Lawyer", image: "/troy-song.jpg" },
      { name: "Rocky Li", role: "Founder, Terracotta", image: "/rocky-li.jpeg" },
    ],
  },
  {
    id: "education",
    number: "02",
    label: "Panel",
    title: "Legal AI in Education",
    kicker: "How should we learn?",
    time: "14:25–15:15",
    summary:
      "How law students can use AI responsibly, what academic integrity requires, and where legal education is already experimenting.",
    className: "themeGreen",
    speakers: [
      {
        name: "Benjamin Chen",
        role: "Associate Professor of Law; Director, Law and Technology Centre, The University of Hong Kong",
        image: "/benjamin-chen.jpeg",
      },
      {
        name: "Stuart Hargreaves",
        role: "Associate Professor of Law, The Chinese University of Hong Kong",
        image: "/stuart-hargreaves.jpeg",
      },
      {
        name: "Wang Jiangyu",
        role: "Professor of Law; Director, Centre for Chinese and Comparative Law, City University of Hong Kong",
        image: "/wang-jiangyu.jpeg",
      },
      { name: "Brian Tang", role: "Executive Director, LITE Lab@HKU", image: "/brian-tang.jpg" },
    ],
  },
  {
    id: "build",
    number: "03",
    label: "Demo session",
    title: "Don’t Wait for Legal Tech: Build Your Own",
    kicker: "What can you make?",
    time: "16:00–16:20",
    summary:
      "Short demonstrations of practical legal AI tools built for legal research, drafting, and workflow support.",
    className: "themeLilac",
    speakers: [
      {
        name: "Anissa Ng",
        role: "Sidley Austin corporate associate turned product manager",
        image: "/anissa-ng.jpeg",
      },
      { name: "Gallant Guo", role: "Builder | Lawyer in One-Year Gap", image: "/gallant-guo.png" },
      { name: "Leona Zhang", role: "Co-Founder, Terracotta", image: "/leona-zhang.jpeg" },
    ],
  },
  {
    id: "skills",
    number: "04",
    label: "Panel",
    title: "Essential AI Skills for Young Lawyers",
    kicker: "How will practice change?",
    time: "16:20–17:20",
    summary:
      "How AI changes day-to-day legal work and what skills young lawyers should build for the AI era.",
    className: "themeOrange",
    speakers: [
      {
        name: "Chandy Ye",
        role: "Founder, Beyond Change Advisory; IAPP KnowledgeNet Hong Kong Co-Chair",
        image: "/chandy-ye.jpg",
      },
      { name: "Wilfred Kwong", role: "Head of Group Legal, HAECO Group", image: "/wilfred-kwong.jpg" },
      {
        name: "Ian Ernst Chai",
        role: "CEO & Co-Founder, Elefant; Affiliate Faculty, SMU",
        image: "/ian-chai.png",
      },
    ],
  },
];

const schedule = [
  { time: "13:00–13:30", type: "Arrival", title: "Registration" },
  { time: "13:30–13:40", type: "Opening", title: "Opening remarks" },
  { time: "13:40–14:20", type: "Talk", title: "Frontier Legal AI Landscape", theme: "blue" },
  { time: "14:20–14:25", type: "Pause", title: "Session changeover", minor: true },
  { time: "14:25–15:15", type: "Panel", title: "Legal AI in Education", theme: "green" },
  { time: "15:20–15:50", type: "Break", title: "Tea break", minor: true },
  { time: "16:00–16:20", type: "Demo session", title: "Don’t Wait for Legal Tech: Build Your Own", theme: "lilac" },
  { time: "16:20–17:20", type: "Panel", title: "Essential AI Skills for Young Lawyers", theme: "orange" },
  { time: "17:20 onwards", type: "Networking", title: "Networking session" },
];

const navItems = [
  { href: "#themes", label: "Four sessions" },
  { href: "#programme", label: "Programme" },
  { href: "#supporters", label: "Supporters" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brandMark ${compact ? "brandMarkCompact" : ""}`} aria-label="AI for Young Lawyers">
      <Image
        className="brandLogoImage"
        src={compact ? "/aiyl.svg" : "/aiyltext.svg"}
        alt=""
        width={compact ? 1356 : 991}
        height={compact ? 938 : 449}
        priority
      />
    </span>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobileMenu"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="mobileMenuTop">
            <BrandMark compact />
            <button onClick={onClose} aria-label="Close menu"><X size={28} /></button>
          </div>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.href}
                onClick={onClose}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12 + index * 0.08 }}
              >
                <span>0{index + 1}</span>{item.label}<ArrowUpRight />
              </motion.a>
            ))}
          </nav>
          <div className="mobileMenuMeta">
            <span>15 AUG 2026</span>
            <span>THE UNIVERSITY OF HONG KONG</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.article
      className="speakerCard"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="speakerPortrait">
        <Image src={speaker.image} alt={speaker.name} fill sizes="(max-width: 760px) 78vw, 28vw" />
      </div>
      <div className="speakerCopy">
        <h3>{speaker.name}</h3>
        <p>{speaker.role}</p>
      </div>
    </motion.article>
  );
}

function ThemeSection({ theme }: { theme: Theme }) {
  return (
    <section className={`themeSection ${theme.className}`} id={theme.id}>
      <div className="themeWord" aria-hidden="true">
        <Image src="/aiyl.svg" alt="" width={1356} height={938} />
      </div>
      <div className="themeIntro">
        <div className="themeMeta">
          <span>{theme.number}</span>
          <span>{theme.label}</span>
          <span>{theme.time}</span>
        </div>
        <motion.p
          className="themeKicker"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >{theme.kicker}</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >{theme.title}</motion.h2>
        <p className="themeSummary">{theme.summary}</p>
      </div>
      <div className="speakerRail">
        {theme.speakers.map((speaker, index) => (
          <SpeakerCard speaker={speaker} index={index} key={speaker.name} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroWordY = useTransform(scrollYProgress, [0, 0.18], [0, 240]);
  const heroWordRotate = useTransform(scrollYProgress, [0, 0.18], [0, -7]);

  return (
    <main>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <section className="hero" id="top">
        <header className="siteHeader">
          <a href="#top" aria-label="AI for Young Lawyers Forum home"><BrandMark /></a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <button className="menuButton" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
        </header>

        <motion.div className="heroWord" style={{ y: heroWordY, rotate: heroWordRotate }} aria-hidden="true">
          <Image src="/aiyl.svg" alt="" width={1356} height={938} priority loading="eager" />
        </motion.div>
        <div className="heroGrid" aria-hidden="true">
          <span className="blue" /><span className="green" /><span className="lilac" /><span className="orange" />
        </div>
        <div className="heroContent">
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
            Hong Kong · 2026
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            Law, technology,<br />judgment &amp; the next<br />generation of practice.
          </motion.h1>
          <motion.a className="heroCta" href="#themes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            Explore the programme <ArrowDown size={18} />
          </motion.a>
        </div>
        <div className="heroDetails">
          <span>Sat, Aug 15</span>
          <span>13:30–18:00</span>
          <span>Philip K. H. Wong Theatre<br />The University of Hong Kong</span>
        </div>
      </section>

      <section className="statement" id="themes">
        <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.9 }}>
          An afternoon forum for law students and young practitioners to explore how AI is changing legal education and their future careers
        </motion.p>
        <div className="statementFoot"><span>Four questions.</span><span>One evolving profession.</span></div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>LEARN · BUILD · QUESTION · PRACTISE · LEARN · BUILD · QUESTION · PRACTISE ·&nbsp;</div>
        <div>LEARN · BUILD · QUESTION · PRACTISE · LEARN · BUILD · QUESTION · PRACTISE ·&nbsp;</div>
      </div>

      {themes.map((theme) => <ThemeSection theme={theme} key={theme.id} />)}

      <section className="programme" id="programme">
        <div className="programmeHeading">
          <h2>Programme</h2>
          <div className="programmeMeta">
            <span>15 AUG 2026</span>
            <span>Philip K. H. Wong Theatre · 2/F Cheng Yu Tung Tower</span>
          </div>
        </div>
        <div className="schedule">
          {schedule.map((item) => (
              <div
                className={`scheduleRow ${item.theme ? `schedule-${item.theme}` : ""} ${item.minor ? "scheduleMinor" : ""}`}
                key={`${item.time}-${item.title}`}
              >
                <span className="scheduleTime">{item.time}</span>
                <span className="scheduleType">{item.type}</span>
                <span className="scheduleTitle">{item.title}</span>
              </div>
          ))}
        </div>
      </section>

      <section className="registerCta" aria-labelledby="register-heading">
        <div className="registerCtaStripes" aria-hidden="true">
          <span className="blue" />
          <span className="green" />
          <span className="lilac" />
          <span className="orange" />
        </div>
        <motion.div
          className="registerCtaContent"
          initial={{ opacity: 0, y: 54 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="registerCtaMeta">
            <span>15 August 2026</span>
            <span>Hong Kong</span>
          </div>
          <h2 id="register-heading">Join the forum.</h2>
          <a
            className="registerButton"
            href="https://luma.com/3attxu5x"
            target="_blank"
            rel="noreferrer"
          >
            Register now
            <ArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
      </section>

      <section className="supporters" id="supporters">
        <div className="supportersHeader">
          <span>Supporting organisations</span>
        </div>
        <div className="supporterGrid">
          <a href="https://www.law.hku.hk/" target="_blank" rel="noreferrer" aria-label="Visit HKU Faculty of Law">
            <Image src="/hku-law-logo.png" alt="HKU Faculty of Law" width={487} height={205} />
            <ArrowUpRight />
          </a>
          <a href="https://lawtech.hku.hk" target="_blank" rel="noreferrer" aria-label="Visit HKU Law and Technology Centre">
            <Image src="/hku-lawtech-logo.svg" alt="HKU Law and Technology Centre" width={280} height={130} />
            <ArrowUpRight />
          </a>
          <a href="https://casebyte.ai/?utm_source=ai_young_lawyers_forum&utm_medium=referral&utm_campaign=supporting_organizations" target="_blank" rel="noreferrer" aria-label="Visit Casebyte">
            <Image src="/casebyte-black-logo.svg" alt="Casebyte" width={260} height={100} />
            <ArrowUpRight />
          </a>
        </div>
        <p className="supporterContact">
          <span>Interested in sponsoring?</span>
          <a href="mailto:aiyl@aiforyounglawyers.com">aiyl@aiforyounglawyers.com <ArrowUpRight aria-hidden="true" size={18} /></a>
        </p>
      </section>

      <footer className="footer">
        <div className="footerWord" aria-hidden="true">
          <Image src="/aiyl.svg" alt="" width={1356} height={938} />
        </div>
        <div className="footerTop">
          <BrandMark />
          <p>Law, technology, judgment,<br />and the next generation of practice.</p>
        </div>
        <div className="footerBottom"><span>HONG KONG · 2026</span><a href="#top">BACK TO TOP <ArrowUpRight size={16} /></a></div>
      </footer>
    </main>
  );
}
