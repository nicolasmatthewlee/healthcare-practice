import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

import "./overide.css";

import PROFILE_IMG2 from "./assets/profile2.jpg";
import PROFILE_IMG3 from "./assets/profile3.jpg";
import PROFILE_IMG4 from "./assets/profile4.jpg";
import PROFILE_IMG5 from "./assets/profile5.jpg";

import MAIN_IMG from "./assets/main.png";
import SERVICES_IMG from "./assets/services.png";
import AREAS_IMG from "./assets/areas.png";
import CONTACT_IMG from "./assets/contact.png";

export const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [availability, setAvailability] = useState("");
  const [morningAvailability, setMorningAvailability] = useState(false);
  const [afternoonAvailability, setAfternoonAvailability] = useState(false);
  const [eveningAvailability, setEveningAvailability] = useState(false);
  const [emailPreference, setEmailPreference] = useState(false);

  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    let availabilityList = [];
    if (morningAvailability) availabilityList.push("morning");
    if (afternoonAvailability) availabilityList.push("afternoon");
    if (eveningAvailability) availabilityList.push("evening");
    if (emailPreference) availabilityList.push("email");

    setAvailability(availabilityList.join(", "));
  }, [
    morningAvailability,
    afternoonAvailability,
    eveningAvailability,
    emailPreference,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone,
          availability,
          message,
        }),
      });

      const responseJSON = await response.json();
      if (responseJSON.succeeded === true) {
        // success
        // get email and save to email
        setEmail(responseJSON.email);
        setSubmissionSuccess(true);
      } else if (responseJSON.succeeded === false) {
        // form validation failed
        setFormErrors(responseJSON.errors);
      } else {
        throw Error;
      }
    } catch (error) {
      setFormErrors([
        {
          msg: "An error occurred. Please try again or contact us directly at 310-456-1234.",
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="App">
      <div className="container-fluid p-0">
        <a href="#contact">
          <button
            className="btn btn-warning w-100 p-0 rounded-0"
            style={{ height: "30px" }}
          >
            <b>SCHEDULE AN APPOINTMENT</b>
          </button>
        </a>
      </div>

      <nav
        className="navbar navbar-expand-sm shadow px-3"
        style={{ zIndex: 1 }}
      >
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <i className="bi-capsule"></i> <b>PsychCorp</b>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <i className="navbar-toggler-icon"></i>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="#expertise" className="nav-item nav-link">
                Expertise
              </a>
              <a href="#services" className="nav-item nav-link">
                Services
              </a>
              <a href="#team" className="nav-item nav-link">
                Team
              </a>
              <a href="#contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-sm-6">
            <div className="card border-0">
              <div className="card-body">
                <h1 className="card-title">
                  Getting the right help should be easy.
                </h1>
                <p className="card-text">
                  Welcome to our practice! Our team of dedicated therapists are
                  here to provide you with the support and guidance you need to
                  overcome life's challenges. We look forward to working with
                  you.
                </p>
                <div className="row mb-3">
                  <div className="col-12">
                    <a href="#contact">
                      <button className="d-md-none btn btn-warning btn-sm me-3">
                        Get started
                      </button>
                      <button className="d-none d-md-inline-flex d-xl-none btn btn-warning me-3">
                        Get started
                      </button>
                      <button className="d-none d-xl-inline-flex btn btn-lg btn-warning me-3">
                        Get started
                      </button>
                    </a>

                    <a href="#expertise">
                      <button className="d-md-none btn btn-light btn-sm">
                        Learn more<i className="bi-arrow-right ps-1"></i>
                      </button>
                      <button className="d-none d-md-inline-flex d-xl-none btn btn-light me-3">
                        Learn more <i className="bi-arrow-right ps-1"></i>
                      </button>
                      <button className="d-none d-xl-inline-flex btn btn-lg btn-light me-3">
                        Learn more <i className="bi-arrow-right ps-1"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex align-items-center mb-3 pe-2 ps-0">
            <img
              className="img-fluid"
              src={MAIN_IMG}
              alt="therapists helping patient"
            />
          </div>
        </div>

        <div className="border"></div>

        <div id="expertise" className="row mb-2 pt-3">
          <div className="col">
            <h1>Areas of focus</h1>
          </div>
        </div>

        <div className="row gx-3 gy-3 mb-3">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="m-0">Anxiety</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Anxiety is a feeling of worry, nervousness or unease about
                  something with an uncertain outcome, it can become
                  overwhelming and disruptive to daily life and can manifest in
                  different ways.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="m-0">Depression</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Depression is a mental health condition characterized by
                  feelings of sadness, loss, and anger that interfere with daily
                  life. It can also cause physical symptoms such as fatigue and
                  changes in appetite and sleep patterns.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 h-sm-auto">
              <div className="card-header">
                <h5 className="m-0">Addiction</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Addiction is a chronic condition characterized by compulsively
                  seeking and using a substance or engaging in a behavior
                  despite negative consequences. It can cause physical,
                  psychological and social harm.
                </p>
              </div>
              <div className="d-none d-sm-flex d-md-none position-absolute start-100 ms-3 mh-100 h-100 w-100 d-flex align-items-center justify-content-center">
                <img
                  src={AREAS_IMG}
                  alt="mental health areas"
                  className="img-fluid mh-100 align-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5"></div>

        <div id="services" className="row mb-3 pt-3">
          <div className="col">
            <h1>Services</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 p-0 d-flex align-items-start">
            <img
              className="img-fluid"
              src={SERVICES_IMG}
              alt="therapist helping a client"
            />
          </div>

          <div className="col">
            <div className="accordion" id="servicesAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#collapse1"
                    data-bs-toggle="collapse"
                  >
                    Psychological Testing
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse1"
                  data-bs-parent="#servicesAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Psychological testing services provide a thorough
                      assessment of an individual's cognitive, emotional, and
                      behavioral functioning. Our team of trained professionals
                      administer a range of tests including IQ, personality,
                      aptitude, achievement, neuropsychological, behavioral, and
                      projective assessments. These tests are designed to
                      provide insight into an individual's strengths and areas
                      for improvement, and can be used to inform diagnosis,
                      treatment planning, and academic or career decisions. Our
                      testing services are suitable for individuals of all ages
                      and can be helpful for a variety of concerns such as
                      learning difficulties, mental health issues, or behavioral
                      problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#collapse2"
                    data-bs-toggle="collapse"
                  >
                    Individual Therapy
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse2"
                  data-bs-parent="#servicesAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Individual therapy services provide a safe and
                      confidential space for individuals to explore their
                      thoughts, feelings, and behaviors. Our team of trained
                      therapists use evidence-based techniques to help
                      individuals understand and work through their challenges.
                      We offer a range of therapies including
                      cognitive-behavioral therapy, talk therapy, and
                      solution-focused therapy. These therapies can help
                      individuals with a wide range of concerns such as anxiety,
                      depression, trauma, relationship issues, and life
                      transitions. Our therapists work with individuals to set
                      therapy goals and develop a treatment plan that is
                      tailored to meet their specific needs. With the support
                      and guidance of our therapists, individuals can gain
                      insight, build coping skills, and make positive changes in
                      their lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#collapse3"
                    data-bs-toggle="collapse"
                  >
                    Marriage and Family Therapy
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse3"
                  data-bs-parent="#servicesAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Marriage and therapy services provide couples with the
                      tools and support they need to improve their relationship
                      and strengthen their bond. Our team of trained therapists
                      specialize in working with couples and use evidence-based
                      techniques such as Emotionally Focused Therapy (EFT),
                      Cognitive Behavioral Therapy (CBT) and the Gottman Method
                      to help couples address and resolve conflicts, improve
                      communication and intimacy, and build a stronger and more
                      fulfilling relationship. We help couples to understand and
                      manage their emotions, improve their problem-solving and
                      conflict resolution skills, and increase their
                      understanding of one another. Whether you are dealing with
                      a specific issue or looking for ways to improve your
                      relationship, our therapists can help you create a more
                      loving and satisfying connection with your partner.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#collapse4"
                    data-bs-toggle="collapse"
                  >
                    Addiction Services
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse4"
                  data-bs-parent="#servicesAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Addiction services provide comprehensive treatment and
                      support for individuals struggling with substance abuse
                      and behavioral addictions. Our team of trained
                      professionals use evidence-based therapies such as
                      cognitive-behavioral therapy, motivational interviewing,
                      and 12-step facilitation to help individuals understand
                      the underlying causes of their addiction and develop the
                      skills and strategies needed to overcome it. We provide a
                      range of services including individual and group therapy,
                      medication-assisted treatment, and case management to
                      support individuals in their recovery journey. We also
                      offer support to families and loved ones to help them
                      understand and cope with the effects of addiction on their
                      loved ones. Our goal is to provide a holistic and
                      individualized approach to help individuals achieve
                      long-term recovery and improve their overall well-being.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-target="#collapse5"
                    data-bs-toggle="collapse"
                  >
                    Telehealth Therapy
                  </button>
                </h2>
                <div
                  className="accordion-collapse collapse"
                  id="collapse5"
                  data-bs-parent="#servicesAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Telehealth therapy provides individuals with access to
                      mental health care remotely via phone or video
                      conferencing. Our team of trained therapists use
                      evidence-based techniques to provide therapy services to
                      individuals in the comfort of their own home. We offer a
                      range of services including individual therapy, couples
                      therapy, and family therapy. Our therapists are
                      experienced in providing therapy remotely and are equipped
                      to address a variety of concerns such as anxiety,
                      depression, relationship issues, and life transitions.
                      Telehealth therapy is an accessible and convenient option
                      for those who may have difficulty attending in-person
                      therapy sessions due to location, mobility, or scheduling
                      constraints. It also allows for continuity of care for
                      those who travel frequently or have other reasons that
                      make it difficult to maintain in-person therapy sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5"></div>

        <div id="team" className="row mb-3 pt-3">
          <div className="col">
            <h1>Team</h1>
          </div>
        </div>

        <div className="row gy-4">
          <div className={`col-6 col-md-3`}>
            <div className="card mb-3 h-100">
              <img src={PROFILE_IMG2} alt="" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Dr. Ethan Reading</h4>
                <p className="card-text mb-0">
                  <b>MD, PsyD</b> <br /> Psychiatrist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        <i className="bi-envelope-fill"></i> Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-light">
                      Read more <i className="bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card mb-3 h-100">
              <img src={PROFILE_IMG4} alt="" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Dr. Elizabeth Green</h4>
                <p className="card-text mb-0">
                  <b>MD, PhD</b> <br /> Psychologist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        <i className="bi-envelope-fill"></i> Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-light">
                      Read more <i className="bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card mb-3 h-100">
              <img src={PROFILE_IMG3} alt="" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Dr. Nathan Lee</h4>
                <p className="card-text mb-0">
                  <b>PsyD, PhD</b> <br /> Therapist, Nutritionist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        <i className="bi-envelope-fill"></i> Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-light">
                      Read more <i className="bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card mb-3 h-100">
              <img src={PROFILE_IMG5} alt="" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Mrs. Isabel Pham</h4>
                <p className="card-text mb-0">
                  <b>Licensed MFT</b> <br /> Marriage and Family Therapist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        <i className="bi-envelope-fill"></i> Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-light">
                      Read more <i className="bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5"></div>

        <div id="contact" className="row pt-3 mb-3">
          <div className="col">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="row">
          {submissionSuccess ? (
            <div className="col-md-6 bg-light border p-4 rounded">
              <h1>Submission received</h1>
              <p>
                Confirmation email sent to <b>{email}</b>
              </p>
            </div>
          ) : (
            <form
              className="col-md-6 bg-light border p-4 rounded"
              action="http://127.0.0.1:8000/"
              method="post"
              encType="text/plain"
            >
              <div className="row mb-3">
                <div className="col-6">
                  <label htmlFor="firstname" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    id="firstname"
                    required
                    name="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="lastname" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    id="lastname"
                    required
                    name="lastname"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    required
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="(123)-456-7890"
                    id="phone"
                    required
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <p className="form-label">Availability for call</p>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="morning"
                          name="morning"
                          onChange={(e) =>
                            setMorningAvailability(e.target.checked)
                          }
                        />
                        <label htmlFor="morning" className="form-check-label">
                          Morning
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="afternoon"
                          name="afternoon"
                          onChange={(e) =>
                            setAfternoonAvailability(e.target.checked)
                          }
                        />
                        <label htmlFor="afternoon" className="form-check-label">
                          Afternoon
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="evening"
                          name="evening"
                          onChange={(e) =>
                            setEveningAvailability(e.target.checked)
                          }
                        />
                        <label htmlFor="evening" className="form-check-label">
                          Evening
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check mt-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="emailpreferred"
                          name="emailpreferred"
                          onChange={(e) => setEmailPreference(e.target.checked)}
                        />
                        <label
                          htmlFor="emailpreferred"
                          className="form-check-label"
                        >
                          I prefer to be emailed
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Your message here..."
                    id="message"
                    required
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              {formErrors.length > 0 ? (
                <div className="row mb-3">
                  <div className="col">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-danger">
                        <ul className="ps-3" style={{ listStyleType: "disc" }}>
                          {formErrors.map((e) => (
                            <li key={uniqid()}>{e.msg}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}

              <div className="row">
                <div className="col-auto">
                  {isLoading ? (
                    <button className="btn btn-warning" disabled>
                      <span className="spinner-border spinner-border-sm"></span>{" "}
                      Loading...
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning w-100"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}

          <div className="d-none d-md-flex col-md-6 align-items-end">
            <img
              src={CONTACT_IMG}
              alt="relaxing at peaces"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white p-3">
        <div className="row gy-3">
          <div className="col-sm-6 col-md-4 text-center">
            <h2>
              <i className="bi-capsule" /> PsychCorp
            </h2>
          </div>
          <div className="col-sm-6 col-md-4 text-center">
            <p className="m-0">
              600 Blue Spring Ave, Suite 880
              <br /> Clarksville, CA 92040
              <br />
              (123) 456-7890
            </p>
          </div>
          <div className="col-md-4">
            <div className="row justify-content-center">
              <div className="col-auto">
                <i className="bi-yelp" style={{ fontSize: "24px" }}></i>
              </div>
              <div className="col-auto">
                <i className="bi-facebook" style={{ fontSize: "24px" }}></i>
              </div>
              <div className="col-auto">
                <i className="bi-instagram" style={{ fontSize: "24px" }}></i>
              </div>
              <div className="col-auto">
                <i className="bi-linkedin" style={{ fontSize: "24px" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
