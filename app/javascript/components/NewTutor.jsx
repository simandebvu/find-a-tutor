/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

class NewTutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      links: '',
      description: '',
      image: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = '/api/v1/tutors/create';
    const {
      name, links, image, description,
    } = this.state;
    if (name.length === 0 || links.length === 0 || description.length === 0) { return; }

    const body = {
      name,
      links,
      image,
      description: description.replace(/\n/g, '<br> <br>'),
    };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.props.history.push(`/tutor/${response.id}`))
      .catch(error => new Error(error.message));
  }

  // eslint-disable-next-line class-methods-use-this
  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new tutor to our awesome tutor collection.
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="tutorName">Tutors name</label>
                <input
                  type="text"
                  name="name"
                  id="tutorName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tutorImage">Image URL</label>
                <input
                  type="text"
                  name="image"
                  id="tutorImage"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tutorlinks">Links</label>
                <input
                  type="text"
                  name="links"
                  id="tutorlinks"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                <small id="linksHelp" className="form-text text-muted">
                  Separate each link with a comma.
                </small>
              </div>
              <label htmlFor="description">I like this tutor because ?</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Create tutor
              </button>
              <Link to="/tutors" className="btn btn-link mt-3">
                Back to tutors
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTutor;
