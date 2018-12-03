import React, {Component} from 'react';
import _ from 'lodash'
import _moment from 'moment'
import styled from 'styled-components';
const moment = _moment().utcOffset('+07:00');

class UserList extends Component {
    constructor(props){
        super(props);
        let dbCon = this.props.db.database().ref(`/users`);
        dbCon.on('value', snapshot => {
            this.getData(snapshot.val());
        });
        this.state = {
            userList:this.props.userList,
        }
    }
    getData(values){
        let userList = _.map(values, (value, index) => {
            let cloned = _.clone(values[index]);
            cloned.key = index;
            return cloned;
        });
        this.setState({
            userList:userList
        });
    }

    getDataFromDate() {
        let checkPoint = [];
        let data = _.forEach(this.state.userList, (value, index) => {
            let item = {};
            item.key = value.key;
            item.times = [];
            let today = moment.format('YYYYMMDD');
            if(value.checkpointReport !== undefined && value.checkpointReport[today] !== undefined) {
                let timeChecked = [];
                let isCheckPoint = _.forEach(value.checkpointReport[today] ,(value, index) => {
                        for (let index = 7; index <= 19; index++) {
                            if(_moment(value).hour() === index) {
                                timeChecked.push(index)
                            }
                        }
                });
                item.times  = timeChecked;
            } 
            checkPoint.push(item);
        });
        return checkPoint;
    }
    render() {
        let isCheck = {};
        let statusSign = {
            display: 'inline-block',
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: '#06e84c',
            marginRight: '2px'
        }

        const Td = styled.td`text-align: center;`;
        let userCheckedPoint = this.getDataFromDate();
        let Userlist = _.map(this.state.userList, (item,index) => {
            let user = userCheckedPoint[index];
            let isCheckPoint = [];
            let classCheck = {
                1:'mdi mdi-check-circle',
                0:'mdi mdi-circle-o'
            }

            for (let index = 0; index <= 12; index++) {
                let time = (index+7);
                if(  _.find(user.times, (item) => item == time) ) {
                    isCheckPoint[index] = classCheck[1];
                } else {
                    isCheckPoint[index] = classCheck[0];
                }
            }
            let displayName = '';
            let pictureUrl = '';
            if(item.profile !== undefined) {
                pictureUrl = item.profile.pictureUrl ;
                displayName = item.profile.displayName;
            }
            
            return (
                <tr key={item.key} id={item.key}>
                    <td className="user-avatar"> 
                        <img src={pictureUrl} alt="Avatar" />{displayName}
                    </td>
                    <td>{item.follow}</td>
                    <Td><div className="icon"><span className={isCheckPoint[0]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[1]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[2]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[3]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[4]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[5]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[6]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[7]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[8]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[9]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[10]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[11]}></span></div></Td>
                    <Td><div className="icon"><span className={isCheckPoint[12]}></span></div></Td>
                </tr>
            )
        });
        return(
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>07:00</th>
                        <th>08:00</th>
                        <th>09:00</th>
                        <th>10:00</th>
                        <th>11:00</th>
                        <th>12:00</th>
                        <th>13:00</th>
                        <th>14:00</th>
                        <th>15:00</th>
                        <th>16:00</th>
                        <th>17:00</th>
                        <th>18:00</th>
                        <th>19:00</th>
                    </tr>
                </thead>
                <tbody>
                    {Userlist}
                </tbody>
            </table>
        )
    }
}

export default UserList;