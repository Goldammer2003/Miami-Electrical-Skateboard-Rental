import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Aboutus = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://ca.slack-edge.com/T0BFXMWMV-U0363UMC9DM-d3db59db9eb8-512"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Manuel Goldammer</h5>
              <p className="card-title text-center">Co-CEO/Co-Founder</p>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                Full-Stack Software Developer {"  "}
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faLinkedinIn}
                  title="Linkenin"
                ></FontAwesomeIcon>
              </h6>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"></small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://ca.slack-edge.com/T0BFXMWMV-U03Q9TYN3CY-11ad7b09b644-512"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Jesse Metayer</h5>
              <p className="card-title text-center">Co-CEO/Co-Founder</p>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                Full-Stack Software Developer {"  "}
                <FontAwesomeIcon
                  className="text-primary"
                  icon={faLinkedinIn}
                  title="Linkenin"
                ></FontAwesomeIcon>
              </h6>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"></small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://ca.slack-edge.com/T0BFXMWMV-U03QG7US03T-0787958ba6b5-512"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Enmanuel Pinto</h5>
              <p className="card-title text-center">Co-CEO/Co-Founder</p>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                Full-Stack Software Developer {"  "}
                <a href="https://www.linkedin.com/in/enmanuel-pinto-b8405613b/" target="_blank">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faLinkedinIn}
                    title="Linkenin"
                  ></FontAwesomeIcon>
                </a>
              </h6>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
