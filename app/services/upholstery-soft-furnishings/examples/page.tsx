import type { Metadata } from "next";
import { InteriorPage } from "../../../components/InteriorPage";

export const metadata: Metadata = {
  title: "Upholstery & Soft Furnishing Options | Free State Curtain Parlour",
  description:
    "Explore custom upholstery, reupholstery, furniture revamps, furniture painting, leather products, headboards, ottomans, trimmings, scatter cushions and quilts.",
};

const upholsteryOptions = [
  {
    src: "/showroom/furniture-decor-example-02.jpeg",
    title: "Custom upholstery",
    description:
      "Upholstery choices planned around the furniture shape, fabric direction and how the room should feel.",
  },
  {
    src: "/showroom/furniture-decor-example-01.jpeg",
    title: "Reupholstery",
    description:
      "Existing pieces refreshed with new fabric, trims and finish choices where the frame still has life.",
  },
  {
    src: "/showroom/furniture-decor-example-03.jpeg",
    title: "Furniture revamps",
    description:
      "Furniture updates that can include upholstery direction, finish choices and practical repair coordination.",
  },
  {
    src: "/showroom/wall-units-example-04.jpeg",
    title: "Furniture painting",
    description:
      "Paint and finish direction for furniture pieces that need a refreshed or better-coordinated look.",
  },
  {
    src: "/showroom/installation-fabric-display.jpg",
    title: "Minor repairs",
    description:
      "Selected repair support where a chair or upholstered piece needs practical attention before it is finished.",
  },
  {
    src: "/showroom/bedroom-setting.jpg",
    title: "Headboards",
    description:
      "Fabric-led headboards planned around bedroom scale, colour, comfort and the full room direction.",
  },
  {
    src: "/showroom/furniture-decor-example-04.jpeg",
    title: "Ottomans",
    description:
      "Ottomans planned as practical soft pieces for bedrooms, lounges and layered room settings.",
  },
  {
    src: "/showroom/showroom-real-room-setting.jpeg",
    title: "Scatter cushions",
    description:
      "Custom soft furnishing details used to pull fabric, colour and texture together in the room.",
  },
  {
    src: "/showroom/furniture-decor-example-01.jpeg",
    title: "Quilts",
    description:
      "Bedroom soft layers chosen around fabric, comfort, colour and the rest of the room.",
  },
  {
    src: "/showroom/curtains-fabrics-example-08.jpeg",
    title: "Trimmings",
    description:
      "Decorative trims and finishing details selected to complete curtains, upholstery and soft furnishings.",
  },
  {
    src: "/showroom/furniture-decor-example-05.jpeg",
    title: "Leather products",
    description:
      "Leather product and specialist upholstery work coordinated where the piece needs that finish.",
  },
];

export default function UpholsteryOptionsPage() {
  return (
    <InteriorPage
      eyebrow="Upholstery"
      title="Upholstery and soft furnishing options."
      intro="Explore custom upholstery, reupholstery, furniture revamps, furniture painting, minor repairs, leather products, headboards, ottomans, trimmings, scatter cushions and quilts."
      image="/showroom/furniture-decor-example-02.jpeg"
    >
      <section className="page-section page-section-light service-examples-section">
        <div className="service-examples-inner">
          <div className="service-examples-heading">
            <p className="eyebrow light">Soft furnishings</p>
            <h2>Refresh the piece, then connect it back to the room.</h2>
          </div>
          <div className="service-examples-gallery">
            {upholsteryOptions.map((option) => (
              <figure className="service-example-card" key={option.title}>
                <div className="curtain-type-image">
                  <img src={option.src} alt="" />
                  <strong>{option.title}</strong>
                </div>
                <figcaption>
                  <span>{option.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="service-examples-actions">
            <a className="button button-primary" href="/services">
              <span>Back to services</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
