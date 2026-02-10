
import { useNavigate } from "react-router";
import "./Home.css";

function Home() {


  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Mindtrace</p>
          <h1>Build your personal development map.</h1>
          <p className="lead">
            Capture every interview, question set, practice session, and contact
            in one place. Trace improvement over time and generate personalized
            question packs for each role.
          </p>
          <div className="cta-row">
            <button className="btn btn--primary">Start tracking today</button>
            <button className="btn btn--ghost">Explore features</button>
          </div>
          <div className="mini-proof">
            <div>
              <span className="metric">412+</span>
              <span className="label">Question sets tagged</span>
            </div>
            <div>
              <span className="metric">96%</span>
              <span className="label">Practice completion</span>
            </div>
            <div>
              <span className="metric">28</span>
              <span className="label">Active companies tracked</span>
            </div>
          </div>
        </div>
        <div className="hero__card">
          <div className="card">
            <div className="card__header">
              <div>
                <h3>Interview Trace</h3>
                <p>Feb 03, 2026 · Product Analyst</p>
              </div>
              <span className="pill">Upcoming</span>
            </div>
            <ul className="card__list">
              <li>
                <span>Company</span>
                <strong>Northbridge Labs</strong>
              </li>
              <li>
                <span>Focus Areas</span>
                <strong>SQL, Metrics, Case Studies</strong>
              </li>
              <li>
                <span>Question Set</span>
                <strong>Growth Analytics v2</strong>
              </li>
              <li>
                <span>People</span>
                <strong>3 interviewers · 2 contacts saved</strong>
              </li>
            </ul>
            <div className="card__footer">
              <button className="btn btn--small">Review prep plan</button>
              <button className="btn btn--link">See full history</button>
            </div>
          </div>
          <div className="pulse">
            <div className="pulse__dot"></div>
            <span>Improvement streak: 14 days</span>
          </div>
        </div>
      </header>

      <section className="section features">
        <div className="section__header">
          <h2>Everything you need to trace growth.</h2>
          <p>
            Personal development is more than notes. Mindtrace connects the
            details so your next interview feels intentional.
          </p>
        </div>
        <div className="grid">
          <article className="feature-card">
            <h3>Interview Library</h3>
            <p>
              Log every company, role, date, and outcome. Attach prep notes and
              follow-ups automatically.
            </p>
          </article>
          <article className="feature-card">
            <h3>Question Intelligence</h3>
            <p>
              Save every question, tag by skill, and generate personalized
              practice sets in seconds.
            </p>
          </article>
          <article className="feature-card">
            <h3>Progress Timeline</h3>
            <p>
              Visualize improvement with streaks, reflections, and milestones
              connected to real outcomes.
            </p>
          </article>
          <article className="feature-card">
            <h3>People & Contacts</h3>
            <p>
              Track interviewers, mentors, and recruiters with notes, follow-up
              reminders, and relationship history.
            </p>
          </article>
          <article className="feature-card feature-card--accent">
            <h3>Personalized Note Memory</h3>
            <p>
              Create your own personalized note memory and pull it up whenever
              you need it during prep or follow-ups.
            </p>
          </article>
        </div>
      </section>

      <section className="section workflow">
        <div className="workflow__content">
          <h2>From scattered notes to confident prep.</h2>
          <p>
            Bring everything into one workflow. Mindtrace transforms every
            interview into a data-backed coaching session.
          </p>
          <ul className="workflow__list">
            <li>Capture company + role details in seconds</li>
            <li>Auto-build a question set from your tags</li>
            <li>Track progress with weekly reflection prompts</li>
          </ul>
          <button className="btn btn--primary">Build your first trace</button>
        </div>
        <div className="workflow__panel">
          <div className="panel">
            <h4>Personalized Practice Set</h4>
            <p>Generated for: Growth Analyst · Mid-level</p>
            <div className="chips">
              <span>SQL Joins</span>
              <span>Experiment Design</span>
              <span>Metrics Definition</span>
              <span>Behavioral STAR</span>
            </div>
            <div className="panel__footer">
              <div>
                <strong>12 questions</strong>
                <span>Estimated time: 45 min</span>
              </div>
              <button className="btn btn--small">Open set</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section__header">
          <h2>Designed for real momentum.</h2>
          <p>
            Whether you are switching careers or leveling up, Mindtrace keeps
            your progress visible.
          </p>
        </div>
        <div className="quote-grid">
          <div className="quote">
            <p>
              “I finally have a clear view of which questions trip me up and
              why.”
            </p>
            <span>— Priya, Data Analyst</span>
          </div>
          <div className="quote">
            <p>
              “The personalized question packs saved me hours of prep and
              boosted my confidence.”
            </p>
            <span>— Mateo, Product Manager</span>
          </div>
          <div className="quote">
            <p>
              “Keeping contacts and follow-ups in one place changed how I
              network.”
            </p>
            <span>— Jordan, UX Researcher</span>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta__box">
          <div>
            <h2>Start tracing your improvement today.</h2>
            <p>
              Build your first interview trace in under 5 minutes. Your future
              self will thank you.
            </p>
          </div>
          <div className="cta__actions">
            <button className="btn btn--primary">Get started free</button>
            <button className="btn btn--ghost">Talk to us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
