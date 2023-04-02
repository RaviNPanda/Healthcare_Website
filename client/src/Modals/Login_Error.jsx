import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Modal from 'react-modal';
import { MdErrorOutline } from 'react-icons/md';

function Login_Error() {
  const [isOpen, setIsOpen] = useState(true);
const navigate = useNavigate();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    navigate("/")
  };

  return (
    <>
      <Modal onRequestClose={closeModal} isOpen={isOpen} className="space-y-3 shadow-lg shadow-black z-10 text-white w-3/12 h-2/6 mx-[38vw] my-[30vh] p-4 bg-blue-600 rounded-xl">
        <div className='flex justify-center'>
          <MdErrorOutline size="3rem" className='flex align-middle' />
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='font-bold text-2xl'>Opps!!</h1>
          <p>Please Login first</p>
        </div>
        <div className='flex justify-between'>
          <button onClick={closeModal} className="mt-[15px] bg-orange-400 rounded-xl w-24 p-[3px] hover:bg-orange-200">Close</button>
          <button onClick={closeModal} className="mt-[15px] bg-green-400 rounded-xl w-24 p-[3px] hover:bg-green-200">Ok</button>
        </div>
      </Modal>
    </>
  );
}

export default Login_Error; 