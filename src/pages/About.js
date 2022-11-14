import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <br></br>
      <div className="container">
        <div className="about-jumbo jumbotron ">
          <h2 className="text-center">About Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="carousel slide" id="myslider" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="car-img img-fluid"
                src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?cs=srgb&dl=pexels-pixabay-247786.jpg&fm=jpg"
                alt="img1"
              />
              <div className="carousel-caption">
                <h2 className="text-dark">ICU</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="car-img img-fluid"
                src="https://wallpapercave.com/wp/wp6250256.png"
                alt="img2"
              />
              <div className="carousel-caption">
                <h2 className="text-dark">Hospitals</h2>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="car-img img-fluid"
                src="https://wallpaperaccess.com/full/4112903.jpg"
                alt="img3"
              />
              <div className="carousel-caption">
                <h2 className="text-dark">Lab Area</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="car-img img-fluid"
                src="https://wallpapercave.com/wp/wp1848585.jpg"
                alt="img4"
              />
              <div className="carousel-caption">
                <h2 className="text-dark">Luxury Rooms</h2>
              </div>
            </div>
          </div>
          <ul className="carousel-indicators">
            <li
              data-target="#myslider"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myslider" data-slide-to="1" className=""></li>
            <li data-target="#myslider" data-slide-to="2" className=""></li>
            <li data-target="#myslider" data-slide-to="3" className=""></li>
          </ul>
          <a
            href="#myslider"
            data-slide="prev"
            className="carousel-control-prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            href="#myslider"
            data-slide="next"
            className="carousel-control-next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>

      <div className="container">
        <div className="about-card card mt-5 d-flex justify-content-center">
          <h2 className="cart-title text-center mt-5">
            3 Reasons why xyz emergency services are so effective
          </h2>
          <p className="card-text text-center">
            When some one experiences a serious injury or requires emergency
            surgery, the first thing you do is call an ambulance. But getting to
            the hospital is not all thats essential to ensure the patients
            survival and recovery. Whats's needed is constant care during
            evacuation, exceptional medical expertise, and comprehensive trauma
            care resources - all available immediately and round the clock.
            Here's how Medanta's emergency and Trauma care services are equipped
            to deliver all of it and more
          </p>
          <hr className="hr-tag m-auto"></hr>
          <div className="level-num container mt-5">
            <h2 className="num text-center">1</h2>
          </div>
          <h3 className="text-center">We are a Level 1 trauma facility</h3>
          <p className="card-text text-center">
            Trauma Facility Centres are broadly classified into 5 levels on the
            basis of the quality of care they offer. Medanta is Level 1 Trauma
            Facility, the highest of all levels, as it has in-house surgical
            specialists and sub-specialists (surgeons, neurosurgeons, orthopedic
            surgeons, plastic surgeons, anesthesiologists) available to treat
            even the most severe cases.
          </p>
          <div className="container row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data1"
              >
                Team of Specialized Doctors
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data1">
                    <div className="card card-body">
                      <p>
                        Medanta has a team of specialized doctors who are
                        available 24x7x365 in the hospital. This team includes
                        the best trauma surgeons, anesthesiologists, physicians
                        and other specialists. Our dedicated on-site team
                        ensures no valuable time is lost in ensuring the best
                        possible treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data2"
              >
                Infrastructural Proximity
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data2">
                    <div className="card card-body">
                      <p>
                        All diagnostics and labs are located close to the
                        Emergency and Trauma Care to allow timely dispatch of
                        samples from the trauma unit as well as prevent any
                        delays in collection of test results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data3"
              >
                Tier-Triage System
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data3">
                    <div className="card card-body">
                      <h6>
                        Triage is the process of determining the priority of
                        patients' treatments based on the severity of their
                        condition. It includes the following steps:
                      </h6>
                      <ul>
                        <li>
                          <b>Patient assessment</b>: As soon as the patient
                          arrives, our first level medical staff, comprising of
                          doctors as well as nurses, analyze the severity of the
                          trauma.
                        </li>
                        <li>
                          <b>Detailed diagnosis</b>: Our specialized paramedics
                          conduct scans and tests including blood test, CT Scan,
                          MRI, etc., to assess the condition more precisely.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-tag m-auto mt-4"></hr>
          <div className="level-num container mt-5">
            <h2 className="num text-center">2</h2>
          </div>
          <h3 className="text-center">
            We stabilize patients through specialized emergency care programmes
          </h3>
          <p className="card-text text-center">
            After evaluating the nature of an emergency, we treat patients
            through specialized care programmes. Through quick intervention by
            our experts, we are able to identify the patient’s condition and
            immediately begin treatment.
          </p>
          <div className="container row ">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data4"
              >
                Heart Emergency Care Program
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data4">
                    <div className="card card-body">
                      <h6>Stroke Emergency Care Program</h6>
                      <ul>
                        <li>
                          <b>Stroke code</b>: Medanta has established a
                          dedicated stroke hotline and stroke protocol. As soon
                          as a patient with a brain emergency arrives, a stroke
                          code is activated. This code alerts the team of eight
                          specialists, especially trained to handle such
                          emergencies. The patient is given highest priority on
                          casualty and appropriate treatment, depending on the
                          nature of the stroke, is provided.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data5"
              >
                Stroke Emergency Care Program
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data5">
                    <div className="card card-body">
                      <p>
                        All diagnostics and labs are located close to the
                        Emergency and Trauma Care to allow timely dispatch of
                        samples from the trauma unit as well as prevent any
                        delays in collection of test results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data6"
              >
                Trauma Care Center
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data6">
                    <div className="card card-body">
                      <h6>
                        Triage is the process of determining the priority of
                        patients' treatments based on the severity of their
                        condition. It includes the following steps:
                      </h6>
                      <ul>
                        <li>
                          <b>Patient assessment</b>: As soon as the patient
                          arrives, our first level medical staff, comprising of
                          doctors as well as nurses, analyze the severity of the
                          trauma.
                        </li>
                        <li>
                          <b>Detailed diagnosis</b>: Our specialized paramedics
                          conduct scans and tests including blood test, CT Scan,
                          MRI, etc., to assess the condition more precisely.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-tag m-auto mt-4"></hr>
          <div className="level-num container mt-5">
            <h2 className="num text-center">3</h2>
          </div>
          <h3 className="text-center">
            We're equipped to handle any kind of emergency
          </h3>
          <p className="card-text text-center">
            Our emergency units are assembled in a manner to have experts from
            various departments work collaboratively on each patient.
          </p>
          <div className="container row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data7"
              >
                24x7 Emergency Rescue Team
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data7">
                    <div className="card card-body">
                      <h6>Stroke Emergency Care Program</h6>
                      <ul>
                        <li>
                          <b>Stroke code</b>: Medanta has established a
                          dedicated stroke hotline and stroke protocol. As soon
                          as a patient with a brain emergency arrives, a stroke
                          code is activated. This code alerts the team of eight
                          specialists, especially trained to handle such
                          emergencies. The patient is given highest priority on
                          casualty and appropriate treatment, depending on the
                          nature of the stroke, is provided.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data8"
              >
                Specialized Infrastructure
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data8">
                    <div className="card card-body">
                      <p>
                        All diagnostics and labs are located close to the
                        Emergency and Trauma Care to allow timely dispatch of
                        samples from the trauma unit as well as prevent any
                        delays in collection of test results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <button
                className="btn container"
                data-toggle="collapse"
                data-target="#data9"
              >
                Standard Operating System(SOP's)
              </button>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="data9">
                    <div className="card card-body">
                      <h6>
                        Triage is the process of determining the priority of
                        patients' treatments based on the severity of their
                        condition. It includes the following steps:
                      </h6>
                      <ul>
                        <li>
                          <b>Patient assessment</b>: As soon as the patient
                          arrives, our first level medical staff, comprising of
                          doctors as well as nurses, analyze the severity of the
                          trauma.
                        </li>
                        <li>
                          <b>Detailed diagnosis</b>: Our specialized paramedics
                          conduct scans and tests including blood test, CT Scan,
                          MRI, etc., to assess the condition more precisely.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="jumbotron mt-10 bg-dark"></div>
    </>
  );
};

export default About;
