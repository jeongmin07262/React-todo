import React, { useState } from 'react'
import TodoFilter from './TodoFilter'
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';

const TodoHeader = ({ onAdd, category, onFilter }) => {

  const [openModal, open] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-2" id="task-control">
        <button
          onClick={() => open(true)}
          className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        >
          Add Todo
        </button>

        {/* Modal */}
        {openModal && createPortal (
          <Modal>
            <TodoForm onAddOrUpdate={onAdd} onClose={() => open(false)} >
              할일 등록
            </TodoForm>
          </Modal>,
          document.body
        )}
        <TodoFilter category={category} onFilter={onFilter} />
      </div>
    </div>
  );
};

export default TodoHeader;
