import React , {Component} from 'react'
import avatar from '../assets/img/avatar.png';

class Header extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand fixed-top be-top-header">
                    <div className="container-fluid">
                        <div className="be-navbar-header">
                            <a className="navbar-brand" href="index.html"></a>
                        </div>
                        <div className="be-right-navbar">
                            <ul className="nav navbar-nav float-right be-user-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">
                                        <img src={avatar}  alt="Avatar" />
                                        <span className="user-name">NottDev01</span>
                                    </a>
                                    <div className="dropdown-menu" role="menu">     
                                        <div className="user-info">
                                            <div className="user-name">NottDev</div>
                                            <div className="user-position online">Available</div>
                                        </div>
                                        <a className="dropdown-item" href="#"><span className="icon mdi mdi-face"></span>Account</a>
                                        <a className="dropdown-item" href="#"><span className="icon mdi mdi-settings"></span>Settings</a>
                                        <a className="dropdown-item" href="#"><span className="icon mdi mdi-power"></span>Logout</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="page-title">
                                <span>Dashboard</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;