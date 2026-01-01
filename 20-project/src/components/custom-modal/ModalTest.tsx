import { useState } from "react";
import Modal from "./Modal";

export default function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(prev => !prev)}>{isOpen? 'close' : 'open'} modal</button>
    {isOpen && (
      <Modal
        header={<h1>This is the Headar</h1>}
        body={<div>This is the Body</div>}
        footer={<div>This is the Footer</div>}
        onClose={() => setIsOpen(false)}
      />
    )}
    </div>
  );
}
