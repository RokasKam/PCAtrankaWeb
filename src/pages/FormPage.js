import React, { useState } from 'react'
import { postNewPerson } from '../services/postNewPerson';

const FormPage = () => {
  const [person, setPerson] = useState({nameSurname: "", description: "", hight: undefined, age: undefined});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postNewPerson(person);
  }
  return (
    <div className='relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100'>
      <div className='mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60'>
        <div className='p-4'>
          <form onSubmit={handleSubmit}>
            <h1 className='text-gray-800 font-bold text-2xl mb-8'>Add a new person</h1>
              <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                <input
                  className=' pl-0 w-full outline-none border-none'
                  type='text'
                  required
                  name='NameSurname'
                  value={person.nameSurname}
                  placeholder='Name and Surname'
                  onChange={(item) => setPerson({ ...person, nameSurname: item.target.value})}
               />
              </div>
              <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                <textarea
                  className=' pl-0 w-full outline-none'
                  name='Description'
                  required
                  value={person.description}
                  placeholder='Description'
                  onChange={(item) => setPerson({ ...person, description: item.target.value})}
                />
              </div>
              <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                <input
                  className=' pl-0 w-full outline-none border-none'
                  type='number'
                  required
                  name='Hight'
                  value={person.hight}
                  placeholder='Hight'
                  onChange={(item) => setPerson({ ...person, hight: item.target.value})}
                />
              </div>
              <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                <input
                  className=' pl-0 w-full outline-none border-none'
                  type='number'
                  required
                  name='Age'
                  value={person.age}
                  placeholder='Age'
                  onChange={(item) => setPerson({ ...person, age: item.target.value})}
                />
              </div>
              <button type='submit' className='block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 transition-all duration-500 text-white font-semibold mb-2'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default FormPage;