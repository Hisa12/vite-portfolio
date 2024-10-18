import "./Modal.css";
import PropTypes from "prop-types";
import taskManage from "../../assets/taskManage.png";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = () => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-left">
          <img src={taskManage} alt="" className="project-photo" />
        </div>
        <div className="modal-right">
          <FontAwesomeIcon class="x-icon" icon={faX} />
          <div className="project-content">
            <div className="project-title">
              <h1>Task management</h1>
            </div>
            <div className="project-links">
              <p className="project-github">GitHub: www://...</p>
              <p className="project-github">Website: www://</p>
            </div>
            <div className="project-skills">
              <div className="project-skillTag">
                <span className="skill">Javascript</span>
              </div>
              <div className="project-skillTag">
                <span className="skill">Javascript</span>
              </div>
            </div>
            <div className="project-description">
              <p>this task management is...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
