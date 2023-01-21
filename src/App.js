import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

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
  return (
    <div className="App">
      <div class="container-fluid p-0">
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
            <div class="navbar-nav ms-auto">
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

      <div class="container-fluid p-4">
        <div class="row">
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <h1 class="card-title">
                  Getting the right help should be easy.
                </h1>
                <p class="card-text">
                  Welcome to our practice! Our team of dedicated therapists are
                  here to provide you with the support and guidance you need to
                  overcome life's challenges. We look forward to working with
                  you.
                </p>
                <div class="row mb-3">
                  <div class="col">
                    <a href="#contact">
                      <button class="btn btn-warning btn-sm me-3">
                        Get started
                      </button>
                    </a>
                    <a href="#expertise">
                      <button class="btn btn-light btn-sm">Learn more</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 d-flex align-items-center p-0 mb-3">
            <img
              className="img-fluid"
              src={MAIN_IMG}
              alt="therapists helping patient"
            />
          </div>
        </div>

        <div className="border"></div>

        <div id="expertise" class="row mb-2 pt-3">
          <div class="col">
            <h1>Areas of focus</h1>
          </div>
        </div>

        <div class="row gx-3 gy-3 mb-3">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card h-100">
              <div className="card-header">
                <h5 className="m-0">Anxiety</h5>
              </div>
              <div class="card-body">
                <p class="card-text">
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
          <div className="col-6 col-md-3">
            <div class="card mb-3 h-100">
              <img src={PROFILE_IMG2} alt="" class="card-img-top" />
              <div class="card-body d-flex flex-column">
                <h3 class="card-title">Dr. Ethan Reading</h3>
                <p class="card-text mb-0">
                  <b>MD, PsyD</b> <br /> Psychiatrist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button class="btn btn-sm btn-light">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div class="card mb-3 h-100">
              <img src={PROFILE_IMG4} alt="" class="card-img-top" />
              <div class="card-body d-flex flex-column">
                <h3 class="card-title">Dr. Elizabeth Green</h3>
                <p class="card-text mb-0">
                  <b>MD, PhD</b> <br /> Psychologist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button class="btn btn-sm btn-light">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div class="card mb-3 h-100">
              <img src={PROFILE_IMG3} alt="" class="card-img-top" />
              <div class="card-body d-flex flex-column">
                <h3 class="card-title">Dr. Nathan Lee</h3>
                <p class="card-text mb-0">
                  <b>PsyD, PhD</b> <br /> Therapist, Nutritionist
                </p>
                <div className="flex-fill"></div>
                <div class="row g-3">
                  <div class="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button class="btn btn-sm btn-light">Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div class="card mb-3 h-100">
              <img src={PROFILE_IMG5} alt="" class="card-img-top" />
              <div class="card-body d-flex flex-column">
                <h3 class="card-title">Mrs. Isabel Pham</h3>
                <p class="card-text mb-0">
                  <b>Licensed MFT</b> <br /> Marriage and Family Therapist
                </p>
                <div className="flex-fill"></div>
                <div className="row g-3">
                  <div className="col-auto">
                    <a href="#contact">
                      <button className="btn btn-sm btn-warning">
                        Contact
                      </button>
                    </a>
                  </div>
                  <div className="col-auto">
                    <button class="btn btn-sm btn-light">Read more</button>
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
          <form className="col-md-6 bg-light border p-4 rounded" action="#">
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="first-name" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="first-name"
                />
              </div>
              <div className="col-6">
                <label htmlFor="last-name" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  id="last-name"
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
                        id="email-preferred"
                      />
                      <label
                        htmlFor="email-preferred"
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
                />
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <button className="btn btn-warning w-100">Submit</button>
              </div>
            </div>
          </form>

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
