import type { Metadata } from "next";
import { InteriorPage } from "../components/InteriorPage";
import { teamRoles } from "../content";

export const metadata: Metadata = {
  title: "Team & Roles | Free State Curtain Parlour",
  description:
    "Meet the customer-facing, installation and workshop roles behind Free State Curtain Parlour in Bloemfontein.",
};

export default function TeamPage() {
  return (
    <InteriorPage
      eyebrow="Team & roles"
      title="The people behind the finished room."
      intro="A customer does not only choose a product. They speak to people, invite people into the practical details of their home, and trust people to carry the work through. This page explains the roles behind that experience."
      image="/showroom/showroom-entry.jpg"
    >
      <section className="page-section page-section-light">
        <div className="team-page-grid">
          {teamRoles.map((role) => (
            <article className="role-card team-role-card" key={role.title}>
              <img className="team-role-media" src={role.image} alt={role.alt} />
              <div className="team-role-body">
                <h2>{role.title}</h2>
                <p>{role.detail}</p>
                <p className="team-role-benefit">{role.benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </InteriorPage>
  );
}
