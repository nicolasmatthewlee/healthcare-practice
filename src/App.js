import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

import PROFILE_IMG from "./assets/profile.jpg";

import MAIN_IMG from "./assets/mental_health.png";

export const App = () => {
  return (
    <div className="App">
      <div class="container-fluid p-0">
        <button
          className="btn btn-warning w-100 p-0 rounded-0"
          style={{ height: "30px" }}
        >
          <b>SCHEDULE AN APPOINTMENT</b>
        </button>
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
              <a href="#" className="nav-item nav-link">
                Expertise
              </a>
              <a href="#" className="nav-item nav-link">
                Services
              </a>
              <a href="#" className="nav-item nav-link">
                About
              </a>
              <a href="#" className="nav-item nav-link">
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
                <div class="row">
                  <div class="col">
                    <button class="btn btn-warning btn-sm me-3">
                      Get started
                    </button>
                    <button class="btn btn-light btn-sm">Learn more</button>
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

        <div className="border mb-3"></div>

        <div class="row mb-2">
          <div class="col">
            <h1>Areas of focus</h1>
          </div>
        </div>

        <div class="row gx-3 gy-3 mb-3">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Anxiety</h5>
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
              <div className="card-body">
                <h5 className="card-title">Depression</h5>
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
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Addiction</h5>
                <p className="card-text">
                  Addiction is a chronic condition characterized by compulsively
                  seeking and using a substance or engaging in a behavior
                  despite negative consequences. It can cause physical,
                  psychological and social harm.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5 mb-3"></div>

        <div className="row mb-3">
          <div className="col">
            <h1>Services</h1>
          </div>
        </div>

        <div className="border mt-5 mb-3"></div>

        <div className="row mb-3">
          <div className="col">
            <h1>About</h1>
          </div>
        </div>

        <div class="card mb-3">
          <img src={PROFILE_IMG} alt="" class="card-img-top" />
          <div class="card-body">
            <h1 class="card-title">Dr. Johnathan Reading</h1>
            <p class="card-text">
              Welcome to our practice! Our team of dedicated therapists are here
              to provide you with the support and guidance you need to overcome
              life's challenges. We look forward to working with you!
            </p>
            <div class="row">
              <div class="col">
                <button class="btn btn-sm btn-warning me-3">Get started</button>
                <button class="btn btn-sm btn-light">Learn more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border mt-5 mb-3"></div>

        <div className="row mb-3">
          <div className="col">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white p-3">
        <div className="row">
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
