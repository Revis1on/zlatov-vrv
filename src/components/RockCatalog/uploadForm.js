import React, { useState } from 'react';

const UploadForm = () => {
    const[file, setFile] = useState(null);
    const[error, setError] = useState(null);

    const types = ['images/png', 'images/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Please select an image file(png or jpeg)');
        }
    }


  return (  
      <form>
            <input type="file"  onChange={changeHandler}/>
            <div className="outpout">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
            </div>
        </form>
    
  )
}

export default UploadForm;
