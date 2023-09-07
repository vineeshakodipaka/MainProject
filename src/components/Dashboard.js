import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Dashboard() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Make the API request when the component mounts
    fetch('http://172.104.40.98/api/darshann/getTableList')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  
      })
      .then((data) => {
        // Extract the 'data' array from the response and set it in the state
        setTableData(data.data);
      })
      .catch((error) => {
        // Handle request or response errors
        console.error('Fetch error:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTableData = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (indexOfLastItem < tableData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='container col-md-5'>
      <h1>Table List</h1>
      <Table striped bordered >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Table Name</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1 + indexOfFirstItem}</td>
              <td>{item.table_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <button
          className='black rounded-3 p-3 mx-2'
          style={{ border: 'none', background: 'rgb(18 47 117)', color: 'white' }}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className='success  rounded-3 p-3  mx-2'
          style={{ border: 'none', background: 'rgb(117 18 18)', color: 'white' }}
          onClick={handleNextPage}
          disabled={indexOfLastItem >= tableData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dashboard;





