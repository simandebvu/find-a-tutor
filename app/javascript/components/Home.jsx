import React from 'react';
import { Link } from 'react-router-dom';
import BooksBg from 'images/books_bg.jpg';
import { Description } from './Description';
import { Testimonials } from './Testimonials';
import { Invite } from './Invite';
import { ContactInfo } from './ContactInfo';

export const Home = () => (
  <>
    <div className="primary-color" style={{ backgroundImage: `url(${BooksBg})`, objectFit: 'cover', maxHeight: '400px' }}>
      <div className="jumbotron jumbotron-fluid bg-transparent home-intro">
        <div className="container secondary-color">
          <h1 className="display-4 text-white font-weight-bolder">Find a Tutor anywhere</h1>
          <p className="lead text-white">
            Only the best tutors will be available, for you. Rated by you !
          </p>
          <hr className="my-4" />
          <Link
            to="/tutors"
            className="btn btn-lg custom-button"
            role="button"
          >
            Start now
          </Link>
        </div>
      </div>
    </div>
    <Description />
    <Testimonials />
    <Invite bg={BooksBg} />
    <ContactInfo />
  </>
);

export default Home;
