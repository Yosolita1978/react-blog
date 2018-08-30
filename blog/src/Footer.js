import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/crissrodriguez">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/Yosolita1978">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/developer?id=yosola">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-google fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; TejiendoMiVida 2018</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}



export default Footer;
