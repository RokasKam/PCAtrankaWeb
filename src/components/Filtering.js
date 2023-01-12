import React from 'react';

const Filtering = ({ filtering, col }) => {
  return (
    <div className='flex items-center border-2  py-2 px-3 rounded-2xl'>
      <input
        className=' pl-0 w-full outline-none border-none'
        placeholder={`Filter ${col}`}
        onChange={(e) => filtering(e.target.value)}
      />
    </div>
  );
}
export default Filtering;