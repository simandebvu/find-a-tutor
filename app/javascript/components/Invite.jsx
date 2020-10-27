import React from 'react';

// eslint-disable-next-line react/prop-types
export const Invite = ({ bg }) => (
  <div className="mt-4 text-center" style={{ backgroundImage: `url(${bg})`, objectFit: 'cover' }}>
    <h3 className="text-center text-white mt-2"> Be everywhere at home</h3>
    <input type="button" value="START FREE" className="btn btn-large text-white custom-button text-center mb-3" />
  </div>
);

export default Invite;
