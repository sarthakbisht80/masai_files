import React from 'react'
import { useState } from 'react'

const FileUpload = () => {

    const [file,setFile]= useState(null);
    const[ message, setMessage]= useState("");
    const [error,setError]= useState("");



        const handleUpload= async(e)=>{
            e.preventDefault();
            if(!file) return setError("please select a file to submit");
            setMessage("");
            setError("");

            const formData= new FormData();
            formData.append("file",file);

            try {
                //endpoint is not valid it i showing 
                const res= await fetch("your_backend_url.." ,{

                    method:"POST",
                    body:formData,
                })
                if(!res.ok) throw Error("upload failed");
                setMessage("File uploaded Succe")
                setMessage(null);
                setFile(null);
            } catch (error) {
                    setError(error);
            }
        }
  return (

            <>
                    <form action="" onSubmit={handleUpload}>
                        <input type="file" onChange={(e)=>
                            setFile(e.target.files[0]) }
                            
                              />

                              <button>Upload</button>
                              <div>
                            {message && <p style={{color:'green'}}>{message}</p>}
                            {error && <p style={{color:"red"}}>{error}</p>}
                              </div>
                    </form>
            </>
  )
}

export default FileUpload