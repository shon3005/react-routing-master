import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Cue</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                {/*<li><Link to="/cars" activeClassName="active">Cars</Link></li>*/}
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                                <li><Link to="/coaches" activeClassName="active">Coaches</Link></li>
                                <li><Link to="/channels" activeClassName="active">Channels</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main