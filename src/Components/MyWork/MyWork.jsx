import "./MyWork.css";
import defaultImg from "../../assets/comingSoon.png";
import mywork_data from "../../assets/mywork_data";
import { useState } from "react";
import Modal from "../Modals/Modal";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MyWork = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProject, setShowProject] = useState(null);
  const handleClose = () => {
    setShowModal(false);
    setShowProject(null);
  };

  const handleImageClick = (project) => {
    setShowProject(project);
    setShowModal(true);
  };

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div
        className="mywork-container"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {!mywork_data ? (
          <img src={defaultImg} alt="default" />
        ) : (
          mywork_data.map((work, index) => {
            return (
              <img
                key={index}
                src={work.w_img}
                alt={work.w_name}
                onClick={() => handleImageClick(work)}
              />
            );
          })
        )}
      </div>
      {showModal ? (
        showProject ? (
          <Modal project={showProject} handleClose={handleClose} />
        ) : (
          <div className="project-error">
            Error: Project details are not available.
          </div>
        )
      ) : null}

      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div> */}
    </div>
  );
};

export default MyWork;
