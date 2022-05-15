import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-header">Made with ❤ by Varnita Makrariya</div>
        <ul className="social-links list-non-bullet">
          <li className="list-items-inline">
            <a
              className="link"
              href="https://github.com/varnita619"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fab fa-github"
                aria-hidden="true"
                title="github"
              ></i>
              github
            </a>
          </li>
          <li className="list-items-inline">
            <a
              className="link"
              href="https://twitter.com/VarnitaMakrari1"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fab fa-twitter"
                aria-hidden="true"
                title="twitter"
              ></i>
              twitter
            </a>
          </li>
          <li className="list-items-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/varnita-makrariya-307177191/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fab fa-linkedin"
                aria-hidden="true"
                title="linkedin"
              ></i>
              linkedin
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
