import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Template1() {
  const [data, setData] = useState([]);

useEffect(() => {
    axios.get('http://localhost:5000/api/template1')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Template 1 Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}: {item.data}</li>
        ))}
      </ul>
    </div>
  );
}

export default Template1;