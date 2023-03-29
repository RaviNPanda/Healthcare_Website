import React, { useState } from 'react'
import Modal from 'react-modal';
function trial() {
  const [Isopen, setIsopen] = useState(false)
  return (
    <>
    <button onClick={()=>setIsopen(true)}>open</button>
    <Modal onRequestClose={()=>setIsopen(false)} isOpen={Isopen} className="bg-orange-300 m-40 p-20">
      <h2>harsh yadav</h2>
      <button onClick={()=>setIsopen(false)}>close</button>
    </Modal>
    </>
  )
}

export default trial