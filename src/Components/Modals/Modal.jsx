import "./Modal.css";
import taskManage from "../../assets/taskManage.png";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ project, handleClose }) => {
  const { w_name, w_img, w_detail } = project;
  const { w_description, w_skills, w_links } = w_detail[0];

  console.log(w_description, "w_description");
  console.log(project, "project");

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-left">
          <img src={w_img} alt="" className="project-photo" />
        </div>
        <div className="modal-right">
          <FontAwesomeIcon
            class="x-icon"
            icon={faX}
            onClick={() => handleClose()}
          />
          <div className="project-content">
            <div className="project-title">
              <h1>{w_name}</h1>
            </div>
            <div className="project-links">
              {w_links.map((linkItem, index) => {
                return linkItem.link ? (
                  <a key={index} href={linkItem.link} target="_blank" rel="no">
                    <FontAwesomeIcon
                      className="project-icon"
                      icon={linkItem.icon}
                      alt={linkItem.alt}
                    />
                  </a>
                ) : null;
              })}
            </div>
            {/* <div className="project-skills">
              {w_detail[0].w_skills[0].map((skill, index) => {
                <div className="project-skillTag">
                  <span key={index} className="skill">
                    {skill}
                  </span>
                </div>;
              })}
            </div> */}
            <div className="project-description">
              <p>{w_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;