import React, { Component } from 'react';
import './Header.css';
import clapboard from '../clapboard.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }
  
  render() {
    return (
      <header>
        <div className={this.state.show ? 'bg-dark collapse show' : 'bg-dark collapse' }
             id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">This project was created to get more knowledge about react and redux.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="https://twitter.com/Alejovp78" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-white">Follow on Twitter</a></li>
                  <li><a href="https://github.com/alejovp/my-react-movie-finder" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-white">See the repository</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <img src={clapboard} className="logo" alt="" />
              <strong>React Movie Finder</strong>
            </a>
            <button 
              className="navbar-toggler collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarHeader" 
              aria-controls="navbarHeader" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={() => this.setState({ show: !this.state.show })}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    );
  }
}