import React from 'react';
import ReactPaginate from 'react-paginate';

const Paginating = ({ changePage, pageCount, selectecPage}) => {
  return (
    <ReactPaginate
      nextLabel='Next'
      onPageChange={changePage}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel='Prev'
      pageClassName='h-8 px-5 bg-white border border-r-0 border-indigo-600'
      previousClassName='h-8 px-5 bg-white border border-r-0 border-indigo-600 rounded-l-2xl'
      nextClassName='h-8 px-5 bg-white border border-indigo-600 rounded-r-2xl'
      breakLabel='...'
      breakClassName='h-8 px-5 bg-white border border-r-0 border-indigo-600'
      containerClassName='container flex justify-center mx-auto my-4 '
      activeClassName='h-8 px-5 text-white bg-indigo-600 border border-r-0 border-indigo-600 '
      renderOnZeroPageCount={null}
    />
  );
}
export default Paginating;