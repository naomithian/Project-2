import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <p><strong>Here are some of the experiences our clients have shared:</strong></p>
      <div className="testimonial">
        <p>"NDH Studio transformed our home into a haven of elegance and comfort. Their attention to detail and commitment to our vision was truly remarkable." - Jessica</p>
      </div>
      <div className="testimonial">
        <p>"Working with NDH Studio was a fantastic experience. Their creative solutions and professional approach exceeded our expectations." - John</p>
      </div>
    </section>
  );
};

export default Testimonials;
