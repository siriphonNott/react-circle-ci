import React, {Component} from 'react'

class SidebarLeft extends Component {
    render() {
        return(
            <div className="be-left-sidebar">
                <div className="left-sidebar-wrapper"><a className="left-sidebar-toggle" href="#">Dashboard</a>
                    <div className="left-sidebar-spacer">
                        <div className="left-sidebar-scroll">
                            <div className="left-sidebar-content">
                                <ul className="sidebar-elements">
                                    <li className="divider">Menu</li>
                                    <li className="active">
                                        <a href="index.html"><i className="icon mdi mdi-home"></i><span>Dashboard</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
} 

export default SidebarLeft;