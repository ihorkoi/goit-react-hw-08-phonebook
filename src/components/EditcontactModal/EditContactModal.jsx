import Modal from 'react-modal';
import { Form, Formik } from 'formik';
export const ModalWindow = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  closeModal,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <Formik>
        <Form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </Form>
      </Formik>
    </Modal>
  );
};
