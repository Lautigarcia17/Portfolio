import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

function ModalVideo ({ show, handleModalShow, video }: { show: boolean, handleModalShow: () => void, video : any}) {

  return (
    <>

      <Modal show={show} onHide={handleModalShow} centered >
        <ReactPlayer url={video} playing controls loop muted/>  
      </Modal>
    </>
  );
};

export default ModalVideo;
