import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/MenuStyle.css';

import Button from 'react-bootstrap/Button';

import Preprocess from './Preprocess';
import Problem from './Problem';
import Analysis from './Analysis';
import Server from './Server/Server';
import axios from 'axios';

export default function Menu() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }; 

  const handleSubmit = async (event) => {
  event.preventDefault();
    
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('http://127.0.0.1:8000/file_upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Upload successful:", res.data);
      setResponse(res.data);
    } catch (error) {
      console.error("Error uploading file:", error.response ? error.response.data : error.message);
    }
  };
    return (
      <>
        <div class="row">
          <div class="col-4 menu">

            <h2>Menu</h2>

            <div>
              <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileChange} />
              <button type="submit">Load Data</button>
              </form>
              
          </div>

            <Preprocess/><br/>

            <Problem/><br/>

            <Analysis/>

          </div>


          <div class="col-8 view">
            Empty
          </div>
          
        </div>
      </>
    );
  
}
