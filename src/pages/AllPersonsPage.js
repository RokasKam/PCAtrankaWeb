import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableData from '../components/TableData';
import TableHead from '../components/TableHead';
import ButtonToAdd from '../components/ButtonToAdd';
import Paginating from '../components/Paginating';
import Filtering from '../components/Filtering';
import Sorting from '../components/Sorting';
import { fetchPersons } from '../services/fetchPersons';
import { fetchPersonById } from '../services/fetchPersonById';

const AllPersonsPage = () => {
  const navigate = useNavigate();
  const [persons, setPersons] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const [filters, setFilters] = useState({id: '', name: '', age: '', height: ''})
  const [sorting, setSorting] = useState({field: 'id', descending: false})

  useEffect(() => {
    setPageNumber(1);
  }, [filters]);

  useEffect(() => {
    fetchPersons(setPersons, setTotalPageNumber, pageNumber, filters, sorting)
  }, [pageNumber, filters, sorting]);

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  const handlePersonClick = async (id) => {
    const person = await fetchPersonById(id);
    console.log(person);
    navigate('Item', { state: { person: person } })
  }

  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 relative min-h-screen'>
      <section className='py-1 bg-blueGray-50'>
        <div className=' xl:w-10/12  xl:mb-0 px-4 mx-auto mt-16 '>
          <ButtonToAdd />
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl '>
            <div className='block w-full overflow-x-auto'>
              <table className='items-center bg-transparent w-full border-collapse '>
                <thead>
                  <tr>
                    <TableHead data='Person id' />
                    <TableHead data='Name Surname' />
                    <TableHead data='Hight' />
                    <TableHead data='Age' />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableData data={
                      <Sorting
                        setSorting={(value) => setSorting({field: 'id', descending: value})}
                        type="text"
                      />} />
                    <TableData data={
                      <Sorting
                        setSorting={(value) => setSorting({field: 'name', descending: value})}
                        type="text"
                      />} />
                    <TableData data={
                      <Sorting
                        setSorting={(value) => setSorting({field: 'height', descending: value})}
                        type="int"
                      />} />
                    <TableData data={
                      <Sorting
                        setSorting={(value) => setSorting({field: 'age', descending: value})}
                        type="int"
                      />} />
                  </tr>
                  <tr>
                    <TableData data={
                      <Filtering
                        filtering={(value) => setFilters({...filters, id: value})}
                        col='Id'
                      />} />
                    <TableData data={
                      <Filtering
                        filtering={(value) => setFilters({...filters, name: value})}
                        col='Name and Surname'
                      />} />
                    <TableData data={
                      <Filtering
                        filtering={(value) => setFilters({...filters, height: value})}
                        col='Height'
                      />} />
                    <TableData data={
                      <Filtering
                        filtering={(value) => setFilters({...filters, age: value})}
                        col='Age'
                      />} />
                  </tr>

                  {
                    persons.map(person =>
                      <tr key={person.id} onClick={() => handlePersonClick(person.id)}>
                        <TableData data={person.id} />
                        <TableData data={person.nameSurname} />
                        <TableData data={person.hight} />
                        <TableData data={person.age} />
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Paginating
          changePage={changePage}
          pageCount={totalPageNumber}
        />
      </section >
    </div >
  );
}

export default AllPersonsPage;


