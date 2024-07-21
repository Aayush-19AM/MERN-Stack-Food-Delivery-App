import React from 'react';
import Navbar from '../components/Navbar';
function AboutUs() {
  return (
    <div>   <Navbar />
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#333', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#ffcc00' }}>About Us</h1>
      <div style={{ maxWidth: '600px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Welcome to <strong>Foodie</strong>, your number one source for all things food delivery. We're dedicated to giving you the very best of local cuisine, with a focus on dependability, customer service, and uniqueness.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
          Sincerely,<br/>
          <strong>The Foodie Team</strong>
        </p>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
