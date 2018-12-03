import React, {Component} from 'react'
import UserList from './UserList'
import _moment from 'moment';

const moment = _moment().utcOffset('+07:00');

class Content extends Component {
    constructor(props){
        super(props);
        let dbCon = this.props.db.database().ref(`/users`);
        dbCon.once('value', snapshot => {
            let totalUser =  Object.keys(snapshot.val()).length
            let totalFollow = _.filter(snapshot.val(), (o) => o.follow === 'follow' );
            this.setState({
                totalUser:totalUser,
                totalFollow:totalFollow.length
            });
        });
        dbCon.on('value', snapshot => {
            let totalUser =  Object.keys(snapshot.val()).length
            let totalFollow = _.filter(snapshot.val(), (o) => o.follow === 'follow' );
            this.setState({
                totalUser:totalUser,
                totalFollow:totalFollow.length
            });
        });
        this.state = {
            totalUser:0,
            totalFollow:0,
            today:moment.format('MMM DD, YYYY')
        }
    }

    render() {
        return(
            <div className="be-content">
                <div className="main-content container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-3">
                            <div className="widget widget-tile">
                                {/* <div className="chart sparkline" id="spark1"></div> */}
                                <div className="data-info">
                                    <div className="desc">Today</div>
                                    <div className="value">
                                        <span className="indicator indicator-equal mdi mdi-chevron-right"></span>
                                        <span className="number" data-toggle="counter" data-end="113">{this.state.today}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-3">
                            <div className="widget widget-tile">
                                <div className="chart sparkline" id="spark2"></div>
                                <div className="data-info">
                                    <div className="desc">Users Online</div>
                                    <div className="value">
                                        <span className="indicator indicator-positive mdi mdi-chevron-up"></span>
                                        <span className="number" data-toggle="counter" data-end="80" data-suffix="%">{this.state.totalUser}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-3">
                            <div className="widget widget-tile">
                                <div className="chart sparkline" id="spark3"></div>
                                <div className="data-info">
                                    <div className="desc">Status Follow</div>
                                    <div className="value">
                                        <span className="indicator indicator-positive mdi mdi-chevron-up"></span>
                                        <span className="number" data-toggle="counter" data-end="532">{this.state.totalFollow}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-3">
                            <div className="widget widget-tile">
                                <div className="chart sparkline" id="spark4"></div>
                                <div className="data-info">
                                    <div className="desc">Downloads</div>
                                    <div className="value">
                                        <span className="indicator indicator-negative mdi mdi-chevron-down"></span>
                                        <span className="number" data-toggle="counter" data-end="113">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="card card-table">
                                <div className="card-header">
                                    <div className="tools dropdown"><span className="icon mdi mdi-download"></span><a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"><span className="icon mdi mdi-more-vert"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right" role="menu"><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    <div className="title">Members</div>
                                </div>
                                <div className="card-body table-responsive">

                                    <UserList 
                                        db={this.props.db}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;