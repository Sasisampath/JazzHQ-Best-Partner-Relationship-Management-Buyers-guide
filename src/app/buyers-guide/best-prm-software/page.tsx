import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Clock3 } from "lucide-react";
import { Footer } from "@/components/shared/footer";
import { GridBackground } from "@/components/layout/grid-background";
import { Header } from "@/components/layout/header";
import { pageSeo } from "@/lib/seo";
import { description, intro, method, products, route, title } from "@/data/guide";
import { criteria, faqs, maturity, recommendations, strategy } from "@/data/evaluation";
import { ReadingProgress } from "./reading-progress";
import styles from "./guide.module.css";

export const metadata = {
  ...pageSeo({ title: "10 Best PRM Software Platforms in 2026 | JazzHQ", description, path: route, indexable: false }),
  openGraph: { ...pageSeo({ title, description, path: route, indexable: false }).openGraph, type: "article" as const },
};

const sections = [
  ["maturity", "Partner maturity"], ["at-a-glance", "At a glance"], ["platforms", "The platforms"],
  ["compare", "Compare"], ["checklist", "Buyer checklist"], ["strategy", "Program strategy"],
  ["recommendations", "Recommendations"], ["faq", "FAQs"],
];
const closing = "Building or scaling your partner program? See how JazzHQ brings partner software and program support together.";
const readingTime = Math.ceil([
  title, intro, method, closing, sections, maturity, criteria, faqs, recommendations, strategy,
  products.map(({ name, fit, position, intro, features, pros, consider, price, priceDetail }) =>
    [name, fit, position, intro, features, pros, consider, price, priceDetail]),
].flat(Infinity).join(" ").trim().split(/\s+/u).length / 230);

const visuals: Record<string, [alt: string, height: number]> = {
  jazzhq: ["JazzHQ’s marketplace listing and partner activation options", 989],
  partnerstack: ["PartnerStack’s B2B partnerships platform overview", 1055],
  kiflo: ["Kiflo’s partner management product overview", 1005],
  "salesforce-prm": ["Salesforce Partner Cloud product overview", 1027],
  channelscaler: ["Channelscaler’s PRM and program automation overview", 993],
  mindmatrix: ["Mindmatrix Bridge’s channel, alliance and partner marketing modules", 1043],
  euler: ["Euler’s product website showing a preview of the partner dashboard", 1009],
  introw: ["Introw’s product website showing a preview of its assistant", 1064],
  impartner: ["Impartner’s product website with a portal and analytics preview", 972],
  channeltivity: ["Channeltivity’s product overview with its CRM integration logos", 1064],
};

function SectionHeading({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className={styles.sectionHeading}><p className={styles.eyebrow}>{label}</p><h2 id={id}>{children}</h2></div>;
}

function Comparison({ overview }: { overview: boolean }) {
  const id = overview ? "glance-title" : "compare-title";
  return <div className={styles.tableWrap} tabIndex={0} role="region" aria-labelledby={id}>
    <table className={styles.table} aria-labelledby={id}>
      <thead><tr><th scope="col">{overview ? "Platform" : "Tool"}</th><th scope="col">Best for</th><th scope="col">{overview ? "Core positioning" : "Features"}</th><th scope="col">Pricing</th></tr></thead>
      <tbody>{products.map(product => <tr key={product.id}>
        <th scope="row"><a href={`#${product.id}`}>{product.name}</a></th>
        <td>{product.fit}</td><td>{overview ? product.position : product.features.map(([label]) => label).join(" · ")}</td>
        <td>{product.price}</td>
      </tr>)}</tbody>
    </table>
  </div>;
}

function ProductBreakdown({ product, index }: { product: (typeof products)[number]; index: number }) {
  return <section id={product.id} aria-labelledby={`title-${product.id}`} className={styles.product}>
    <header className={styles.productHeading}>
      <span className={styles.productIndex}>{String(index + 1).padStart(2, "0")}</span>
      <div><h3 id={`title-${product.id}`}>{product.name}</h3><p><strong>Best for:</strong> {product.fit}</p></div>
    </header>
    <div className={styles.productBody}>
      <div><p className={styles.productIntro}>{product.intro}</p>
        <h4>Key features</h4>
        <ul className={styles.featureList}>{product.features.map(([label, detail]) =>
          <li key={label}><Check size={16} aria-hidden="true" /><span><strong>{label}.</strong> {detail}</span></li>
        )}</ul>
      </div>
      <div>
        <figure className={styles.visual}>
          <Image src={`/buyers-guide/best-prm-software/${product.id}.webp`} alt={visuals[product.id][0]} width={2048} height={visuals[product.id][1]} sizes="(max-width: 720px) 95vw, (max-width: 1200px) 44vw, 540px" />
          <figcaption>{product.name} · Vendor website capture</figcaption>
        </figure>
        <div className={styles.price}><h4>Pricing</h4><p><strong>{product.price}.</strong> {product.priceDetail}</p></div>
      </div>
    </div>
    <div className={styles.tradeoffs}>
      <div><h4>Pros</h4><p>{product.pros}</p></div><div><h4>Things to consider</h4><p>{product.consider}</p></div>
    </div>
    <ul className={styles.sources} aria-label={`${product.name} sources`}>{product.sources.map(([label, url]) => <li key={url}><a href={url}>{label}</a></li>)}</ul>
  </section>;
}

export default function BestPrmSoftwarePage() {
  return <GridBackground>
    <a href="#guide-content" className={styles.skip}>Skip to guide</a>
    <Header />
    <ReadingProgress />
    <main id="guide-content" tabIndex={-1} className={styles.guide}>
      <article>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>BUYER’S GUIDE <span aria-hidden="true">·</span> 2026</p>
            <h1>10 Best Partner Relationship Management Software in 2026 <span>(Compared for Price, Features &amp; Fit)</span></h1>
            <p className={styles.intro}>{intro}</p>
            <div className={styles.heroActions}>
              <a className={styles.primary} href="#at-a-glance">Compare platforms <ArrowDown size={16} aria-hidden="true" /></a>
              <span className={styles.readTime}><Clock3 size={17} aria-hidden="true" /> {readingTime} min read</span>
            </div>
          </div>
          <aside className={styles.research} aria-label="How we compared platforms">
            <p className={styles.eyebrow}>About this comparison</p>
            <dl><div><dt>10</dt><dd>PRM platforms</dd></div><div><dt>06</dt><dd>Buying criteria</dd></div></dl>
            <p>{method}</p>
          </aside>
        </div>
        <nav className={styles.contents} aria-label="In this guide">
          <span>In this guide</span><ul>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>
        <section className={styles.section} id="maturity" aria-labelledby="maturity-title">
          <SectionHeading id="maturity-title" label="01 / Partner maturity">What does your partner program need next?</SectionHeading>
          <p className={styles.lede}>JazzHQ uses these three stages to match software and support to the work your program needs to do next. Use the framework to identify your priorities before comparing platforms.</p>
          <ol className={styles.maturity}>{maturity.map(([label, need, result], index) => <li key={label}>
            <div className={styles.stageNumber}><span>Stage 0{index + 1}</span>{index < 2 && <ArrowRight size={19} aria-hidden="true" />}</div>
            <h3>{label}</h3><p>{need}</p><strong>{result}</strong>
          </li>)}</ol>
        </section>
        <section className={styles.section} id="at-a-glance" aria-labelledby="glance-title">
          <SectionHeading id="glance-title" label="02 / Key takeaways">Best PRM Software at a Glance</SectionHeading>
          <p className={styles.lede}>Find the platforms that fit your program, then jump to the details. Contact sales or request a quote wherever there’s no public starting price.</p>
          <p className={styles.scrollHint}>Swipe or scroll to see all columns.</p>
          <Comparison overview />
        </section>
        <section className={styles.section} id="platforms" aria-labelledby="platforms-title">
          <SectionHeading id="platforms-title" label="03 / Product breakdown">The 10 Best PRM Software Platforms</SectionHeading>
          <p className={styles.lede}>Here’s what each platform supports, where it fits, and what to confirm before booking a demo or signing a contract.</p>
          <div className={styles.products}>{products.map((product, index) => <ProductBreakdown key={product.id} product={product} index={index} />)}</div>
        </section>
        <section className={styles.section} id="compare" aria-labelledby="compare-title">
          <SectionHeading id="compare-title" label="04 / Side by side">Compare the 10 Best PRM Software Platforms</SectionHeading>
          <p className={styles.lede}>Use this table to line up feature priorities and pricing. Check plan availability for any feature your shortlist depends on.</p>
          <p className={styles.scrollHint}>Swipe or scroll to see all columns.</p>
          <Comparison overview={false} />
        </section>
        <section className={styles.section} id="checklist" aria-labelledby="checklist-title">
          <SectionHeading id="checklist-title" label="05 / Buyer checklist">How to Choose PRM Software</SectionHeading>
          <p className={styles.lede}>Take the same six questions to each demo and ask vendors to show the workflow with your rules and roles.</p>
          <ol className={styles.checklist}>{criteria.map(([label, explanation, why, question], i) =>
            <li key={label}><span className={styles.checkNumber}>0{i + 1}</span><div><h3>{label}</h3><p>{explanation}</p><p><strong>Why it matters:</strong> {why}</p><p className={styles.question}><strong>Ask:</strong> {question}</p></div></li>
          )}</ol>
        </section>
        <section className={styles.section} id="strategy" aria-labelledby="strategy-title">
          <SectionHeading id="strategy-title" label="06 / Program strategy">Do You Need a Partner Program Strategy Before Buying PRM Software?</SectionHeading>
          <p className={styles.lede}>Yes. Start with enough of a plan to know what the software needs to do and where you might need help.</p>
          <div className={styles.strategy}>{strategy.map(([label, detail, action]) =>
            <div key={label}><h3>{label}</h3><p>{detail}</p><p>{action}</p></div>
          )}</div>
        </section>
        <section className={styles.section} id="recommendations" aria-labelledby="rec-title">
          <SectionHeading id="rec-title" label="07 / Shortlist">Which PRM Software Is Right for Your Team?</SectionHeading>
          <p className={styles.lede}>Choose based on the work you need to do well in the next six months. Then test that work with a partner before you commit.</p>
          <dl className={styles.recommendations}>{recommendations.map(([label, detail]) =>
            <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>
          )}</dl>
        </section>
        <section className={styles.section} id="faq" aria-labelledby="faq-title">
          <SectionHeading id="faq-title" label="08 / FAQs">Frequently Asked Questions</SectionHeading>
          <div className={styles.faqList}>{faqs.map(([question, answer], i) =>
            <details key={question} className={styles.faqItem} open={i === 0}>
              <summary><span>{i + 1}. {question}</span><b aria-hidden="true">+</b></summary><p>{answer}</p>
            </details>
          )}</div>
        </section>
        <section className={styles.cta} aria-labelledby="cta-title">
          <div><h2 id="cta-title">Building or scaling your partner program?</h2><p>See how JazzHQ brings partner software and program support together.</p></div>
          <a className={styles.primary} href="https://www.jazzhq.ai/">Explore JazzHQ <ArrowRight size={16} aria-hidden="true" /></a>
        </section>
      </article>
    </main>
    <Footer />
  </GridBackground>;
}
