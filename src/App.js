import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

export const App = () => {
  return (
    <div className="App">
      <div class="container-fluid p-0">
        <button
          className="btn btn-primary w-100 p-0 rounded-0"
          style={{ height: "50px" }}
        >
          <b>SCHEDULE AN APPOINTMENT</b>
        </button>
      </div>

      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            John Doe
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
            <div class="navbar-nav">
              <a href="#" className="nav-item nav-link">
                Home
              </a>
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
