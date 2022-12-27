import React from 'react';
import './photo_upload.css';

const photo_upload = () => {
  return (
    <div>
    <h1>Photo upload</h1>
    <p>We'd love to see your photos from the big day! Please use the form below to upload your photos:</p>
    <form>
      <label>
        Choose a file:
        <input type="file" name="photo" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);
}

export default photo_upload
