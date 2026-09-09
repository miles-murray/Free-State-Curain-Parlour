import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { teamPeople } from "../content";

export const metadata: Metadata = {
  title: "Team & Roles | Free State Curtain Parlour",
  description:
    "Meet the customer-facing, financial, installation and specialist support roles behind Free State Curtain Parlour in Bloemfontein.",
};

export default function TeamPage() {
  return (
      <InteriorPage
      eyebrow="Team & roles"
      title="The people behind the finished room."
      image="/team/team-hero-ai.png"
    >
      <section className="page-section page-section-light team-page-section">
        <div className="team-page-intro">
          <h2>Meet the team.</h2>
          <p>
            The people who help guide each room from first conversation to
            finished detail.
          </p>
        </div>
        <div className="team-page-grid">
          {teamPeople.map((person) => (
            <article className="role-card team-role-card" key={person.name}>
              <span className="team-role-label">{person.role}</span>
              <img className="team-role-media" src={person.image} alt={person.alt} />
              <div className="team-role-body">
                <h2>{person.name}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  );
}
