import React from "react";
import { Link } from "react-router-dom";

class Tutors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: []
    };
  }
  componentDidMount() {
    const url = "/api/v1/tutors/index";
    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Bad Network!");
    }).then(response => this.setState({ tutors: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { tutors } = this.state;
    const allTutors = tutors.map((tutor, idx) => (
      <div key={idx} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={tutor.image}
            className="card-img-top"
            alt={`${tutor.name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{tutor.name}</h5>
            <Link to={`/tutor/${tutor.id}`} className="btn custom-button">
              View Profile
            </Link>
            <Link to={`/tutor/${tutor.id}`} className="btn  btn-success mx-2" style={{
              borderRadius: '20px',
              border: 'none',
            }}>
              Favourite
            </Link>
          </div>
        </div>
      </div>
    ));
    const noTutor = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No tutors yet. Why not <Link to="/new_tutor">add one?</Link>
        </h4>
      </div>
    );
    return (
      <>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/new_tutor" className="btn custom-button">
                Create New Tutor
                    </Link>
            </div>
            <div className="row">
              {tutors.length > 0 ? allTutors : noTutor}
            </div>
            <Link to="/" className="btn btn-link">
              Home
                  </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Tutors;