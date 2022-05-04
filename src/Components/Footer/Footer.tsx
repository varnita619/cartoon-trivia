import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-header">Made with ❤ by Varnita Makrariya</div>
        <ul className="social-links list-non-bullet">
          <li className="list-items-inline">
            <Link className="link" to="https://github.com/varnita619">
              <i
                className="fab fa-github"
                aria-hidden="true"
                title="github"
              ></i>
              github
            </Link>
          </li>
          <li className="list-items-inline">
            <Link className="link" to="https://twitter.com/VarnitaMakrari1">
              <i
                className="fab fa-twitter"
                aria-hidden="true"
                title="twitter"
              ></i>
              twitter
            </Link>
          </li>
          <li className="list-items-inline">
            <Link
              className="link"
              to="https://www.linkedin.com/in/varnita-makrariya-307177191/"
            >
              <i
                className="fab fa-linkedin"
                aria-hidden="true"
                title="linkedin"
              ></i>
              linkedin
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
