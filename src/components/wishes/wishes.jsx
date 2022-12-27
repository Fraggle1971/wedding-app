import React from 'react';
import './wishes.css';

const wishes = () => {
  return (
    <div>
    <h1>Leave your best wishes</h1>
    <p>We'd love to hear your well wishes and congratulations as we celebrate our special day. Please leave a message in the form below:</p>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);
}
export default wishes
