
// important data
import React, { useState } from 'react';

function AppCalendar() {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [country, setCountry] = useState('IN');
  const [hinduCalendarData, setHinduCalendarData] = useState(null);

  const handleSubmit = () => {
    // Check if date is selected
    if (date) {
      // Make the API request with the selected date, city, and country
      fetch(`https://64f9b8aa4098a7f2fc14df2f.mockapi.io/list/list?date=${date}&city=${city}&country=${country}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.length > 0) {
            setHinduCalendarData(data[0].data);
          } else {
            setHinduCalendarData(null);
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    } else {
      // Show an error message if date is not selected
      alert('Please select a date.');
    }
  };  

  return (
    <div className='container col-md-5'>
      <h1>App Calendar</h1>
      <form>
        <div className='form-group'>
          <label>Date (yy-mm-dd):</label>
          <input
            type='date'
            className='form-control'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>City:</label>
          <select
            className='form-control'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value='Hyderabad'>Hyderabad</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Country:</label>
          <select
            className='form-control'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value='IN'>India (IN)</option>
          </select>
        </div>
        <button
          type='button'
          className='btn btn-primary mt-2'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {hinduCalendarData && (
        <div className='mt-4'>
          <h2>Hindu Calendar for {date}</h2>
          <pre>{JSON.stringify(hinduCalendarData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AppCalendar;
