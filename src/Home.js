import React, { Component } from 'react';
import './App.css';
import SideBar from "./component/SideBar";
import ProfileTab from "./user-comp/ProfileTab";
class Home extends Component {
    emptyItem  = {
        id: '',
        amount: '',
    };
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log("name handlechange:" + name);
        console.log("value handlechange:" + value);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        await fetch('/chucVu/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.setState(this.getAll());
    }

    constructor(props) {
        super(props);
        this.state = {bucketOfID: [], item: this.emptyItem};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

    }

    render() {
        return (
        <div className="d-flex flex-row mb-3" style={{backgroundColor:"#f0f4fc"}}>
            <SideBar/>
            <ProfileTab/>
        </div>
        );
    }
}
export default Home;