import React from "react";
import { useRef,useState } from "react";
import "../App.css";

const Landing = () => {
  const fileInputRef = useRef();
  const [file, setFile] = useState('');
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
    return (
    <div className="App">
      <div className="upload">
        <h1 className="heading1">Seamless File Sharing</h1>
        <h3 className="heading3">
          
          Your One-Stop Destination for Effortless Link Sharing
        </h3>
        <div className="upload-file">
           <h4 className="heading4">Please choose your file </h4>
          <div className="input-field">
            <input type="file" onChange={(e)=>setFile(e.target.file)}  ref={ fileInputRef}name="" id="" />
            <button type="" onClick={()=>onUploadClick()}> Upload File</button>
          </div>
          <div className="link">

        <code> The link will be here after upload file </code>
          </div>
        </div>
      </div>
      <div className="img">
        <img src="back.svg" alt="" />
      </div>
    </div>
  );
};

export default Landing;
