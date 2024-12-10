"use client"

import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { editTodo, deleteTodo } from '@/backend/api'

interface TaskProps{
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  const [openModalEdit, setModalOpen] = useState<boolean>(false);
  const [openModalDelete, setModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)
;
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    setModalOpen(false);

    window.location.reload();
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id)
    setModalDelete(false)

    window.location.reload();
  }

  return (
     <tr key={task.text}>
        <td className='w-full'>{task.text}</td>
        <td className='flex gap-5'>
          <FiEdit onClick={() => setModalOpen(true)} cursor="pointer" className="text-blue-500" size={25} /> 
          <Modal modalOpen={openModalEdit} setModalOpen={setModalOpen}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg text-white'>Edit task</h3>
            <div className="modal-action">
               <input
                value={taskToEdit}
                onChange={e => setTaskToEdit(e.target.value)}
               type="text" placeholder='Type here' className='input input-bordered w-full text-white'  />
               <button className='btn' type='submit'>Submit</button>
            </div>
          </form>
        </Modal>
          <FiTrash2 onClick={() => setModalDelete(true)} cursor="pointer" className='text-red-500' size={25}/>
          <Modal modalOpen={openModalDelete} setModalOpen={setModalDelete}>
          <h3 className='text-lg text-red-600'>Are you sure you want to delete the task?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className='btn'>Yes</button>
          </div>
        </Modal>
        </td>
    </tr>
  )
}

export default Task
