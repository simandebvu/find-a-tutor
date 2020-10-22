import React from "react";
import { Link } from 'react-router-dom';

class Tutor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tutor: { links: "" } };

        this.addHtmlEntities = this.addHtmlEntities.bind(this);
        this.deleteTutor = this.deleteTutor.bind(this);
    }

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        const url = `/api/v1/show/${id}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Bad Network.");
            })
            .then(response => this.setState({ tutor: response }))
            .catch(() => this.props.history.push("/tutors"));
    }
    
  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deleteTutor() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Network.");
      })
      .then(() => this.props.history.push("/tutors"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { tutor } = this.state;
    let linksList = "No links available";
    console.log(tutor)

    if (tutor.links.length > 0) {
        linksList = tutor.links
        .split(",")
        .map((link, index) => (
          <li key={index} className="list-group-item">
            {link}
          </li>
        ));
    }
    const tutorLink = this.addHtmlEntities(tutor.link);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={tutor.image}
            alt={`${tutor.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {tutor.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">links</h5>
                {linksList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Preparation descriptions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${tutorLink}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteTutor}>
                Delete tutor
              </button>
            </div>
          </div>
          <Link to="/tutors" className="btn btn-link">
            Back to tutors
          </Link>
        </div>
      </div>
    );
  }
}

export default Tutor;