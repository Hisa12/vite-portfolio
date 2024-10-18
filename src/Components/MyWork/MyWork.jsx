import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import { useState } from "react";
import Modal from "../Modals/Modal";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MyWork = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container" onClick={() => setOpenModal(true)}>
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div> */}
    </div>
  );
};

export default MyWork;
