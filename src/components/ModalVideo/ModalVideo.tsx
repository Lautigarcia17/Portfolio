import { Modal } from "react-bootstrap";

function ModalVideo ({ show, handleModalShow, video }: { show: boolean, handleModalShow: () => void, video : any}) {

  return (
    <>

      <Modal show={show} onHide={handleModalShow} centered >
        <video 
          src={video} 
          controls 
          autoPlay 
          loop 
          muted 
          style={{ width: '100%', height: 'auto' }}
        />
      </Modal>
    </>
  );
};

export default ModalVideo;
