//import axios from 'axios';
import React, { useState } from "react";
import './App.css';

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setPost(data.data)
        setLoading(false);  
        })
  };

  return (
    <div>
      <nav style={{ display:'flex', alignItems: 'center' ,justifyContent:'center', backgroundColor: 'lightgray', padding: '1em' }}>
      <h3 style={{width:'100%'}}>aDMe</h3>
      <button onClick={handleClick} style={{ backgroundColor: 'white', border: '2px solid gray', padding: '0.5em 1em' }}>Get Users</button>
      </nav>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <h3>Loading...</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridGap: '1em' }}>
          {post.map(item => (
            <div style={{ padding: '1em', backgroundColor: '#f2f2f2', borderRadius: '5px' }} key={item.id}>
              <img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} style={{ width: '100%', borderRadius: '5px 5px 0 0' }} />
              <h3 style={{ marginTop: '0.5em' }}>{item.first_name} {item.last_name}</h3>
              <p style={{ marginTop: '0.5em', fontSize: '0.9em' }}>{item.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
