"use client"

import React, { FormEventHandler } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { useState } from 'react'
import { addTodo } from '@/backend/api'
import {v4 as uuidv4} from 'uuid'

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskvalue, setNewTaskValue] = useState<string>('')

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await addTodo({
        id: uuidv4(),
        text: newTaskvalue
      })
      setNewTaskValue('')
      setModalOpen(false);
      
      window.location.reload();
    }
  
  return (
    <div>
        <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full text-white'>
            Add new task
            <AiOutlinePlus className="ml-2" size={20}/>
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className='font-bold text-lg text-white'>Add new Task</h3>
            <div className="modal-action">
               <input
                value={newTaskvalue}
                onChange={e => setNewTaskValue(e.target.value)}
               type="text" placeholder='Type here' className='input input-bordered w-full text-white'  />
               <button className='btn' type='submit'>Submit</button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask
