import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';


function Todo(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
    
  function deleteHandler()
  {
    setModalIsOpen(true);
  }
  
  function closeModalHandler()
  {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}

export default Todo; 
/*Para deixar mais dinamico é inserido um objeto, nesse caso props, que pode
ser qualquer coisa, mas é melhor usar props, no qual chama dentro de {} q seria
para chamar o js, com .text para chamar o valor dado la no App.js */
/*{modalIsOpen ? <Modal /> : null} se isso for verdadeiro renderiza modal se não, não renderiza nada*/ 
/*{modalIsOpen && <Modal />} mesma coisa porém se a primeira e segunda opção são verdadeiras, então renderiza a segunda função, isso é o que faz abrir a janela ao clicar no delete, 
modalIsOpen define que o será aberto no useState*/