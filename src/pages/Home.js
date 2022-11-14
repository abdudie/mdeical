import React from "react";
import "./home.css";
import { myObject } from "./store/HomeSupport";

const Home = () => {
  return (
    <>
      <br></br>
      <div className="container">
        <div className="contact-jumbo jumbotron">
          <h1 className="text-center">Home</h1>
        </div>
      </div>
      <div className="jumbotron main-jumbo container">
        <div className="container">
          <h1>World-class services for life-changing products</h1>
          <h6 className="text-secondary">
            We partner with you from discovery to commercial manufacturing,
            integrating broad capabilities for the API life cycle.
          </h6>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="text-center font-weight-bold">
            Your partner on the journey
          </h2>
          <h2
            className="text-center font-weight-bold"
            style={{ color: "rgb(250, 164, 178)" }}
          >
            from curiosity to cure
          </h2>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="my-accord accordion ">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-1">
                <button
                  className="acc-btn accordion-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#detail-1"
                >
                  REGULATORY COMPLIANCE
                </button>
              </h2>
              <div id="detail-1" className="container">
                <h3>
                  Offering supply security, globally, Santoprene® TPV medical
                  (MED) grades strictly comply with rigorous regulatory and
                  testing rules and procedures:
                </h3>
                <ul>
                  <li>Biocompatibility testing ISO 10993-10</li>
                  <li>US Pharmacopeia (USP) Class VI</li>
                  <li>Drug Master Files are maintained with the FDA</li>
                  <li>
                    Production takes place at Good Manufacturing Practices (GMP)
                    sites
                  </li>
                </ul>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-2">
                <button
                  className="acc-btn accordion-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#detail-2"
                >
                  APPLICATIONS
                </button>
              </h2>
              <div id="detail-2" className="container">
                <h3>Drug Delivery Syringes</h3>
                <p>
                  For single-use and pre-filled syringes, Santoprene® TPV
                  provides a leak-proof seal with the syringe barrel, while
                  optimizing plunger movement for accurate dosage control, ease
                  of injection, and patient comfort.
                </p>
                <h3>Medical Devices and Equipment</h3>
                <p>
                  Requiring long-term sealing performance, flexibility, or soft
                  touch for human contact, are best served with Santoprene® TPV
                  as the material of choice for:
                </p>
                <ul>
                  <li>
                    Wearables and device grips, seals, and other components
                  </li>
                  <li>Peristaltic pump tubes and tubing</li>
                  <li>
                    Electrical cable jacketing, insulation, and connectors
                  </li>
                  <li>
                    Grips and seals - soft-touch grips, seals, gaskets, and
                    diaphragms
                  </li>
                </ul>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-3">
                <button
                  className="acc-btn accordion-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#detail-3"
                >
                  BRING SCIENCE TO LIFE
                </button>
              </h2>
              <div id="detail-3" className="container">
                <p>
                  Through value chain collaboration, Santoprene® TPV has been
                  meeting the needs of the global medical, healthcare and
                  pharmaceutical industries for decades. With support ranging
                  from material selection and medical device, drug delivery and
                  packaging design assistance to tooling recommendations and
                  local processing support, Celanese can help elevate your
                  medical device, drug delivery and packaging applications to
                  the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row">
          {myObject.map((e) => {
            return (
              <>
                <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                  <div className="home-card card mb-4">
                    <img
                      className="card-image"
                      style={{ height: "15vw" }}
                      src={e.url}
                    ></img>
                    <h2 className="card-title text-center text-primary">
                      {e.name}
                    </h2>
                    <p className="card-text text-center">{e.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
