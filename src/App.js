import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

export const App = () => {
  return (
    <div className="App">
      {/* <div class="container-fluid p-0">
        <button
          className="btn btn-primary w-100 p-0 rounded-0"
          style={{ height: "50px" }}
        >
          <b>SCHEDULE AN APPOINTMENT</b>
        </button>
      </div> */}

      <nav className="navbar navbar-expand-sm shadow px-3">
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
                About
              </a>
              <a href="#" className="nav-item nav-link">
                Services
              </a>
              <a href="#" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
