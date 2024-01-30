import React, {Component} from 'react';
import ProfileAvt from "./ProfileAvt";
import ProfileIndexBar from "./ProfileIndexBar";
import {ethers} from "ethers";

class ProfileTab extends Component {
    emptyItem  = {
        id: '',
        amount: '',
    };
    lstCLone =[];
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }
    async addToLst(event) {
        try {
            const provider = new ethers.getDefaultProvider();
            let balance = await provider.getBalance(this.state.item["adrs"])
            console.log(parseFloat(ethers.formatEther(balance)));
            let newItem={id:this.state.item["adrs"],amount:parseFloat(ethers.formatEther(balance))}
            let lstAdrs = {...this.state.lstAdrs};
            this.lstCLone.push(newItem);
            lstAdrs = JSON.stringify(this.lstCLone);
            console.log(lstAdrs)
            this.setState({lstAdrs},this.setState({lstAdrs}));
        }
        catch(err) {
            console.log(err);
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        this.setState(this.getAll());
    }
    async remove(id) {
        this.setState(this.getAll());
    }
    constructor(props) {
        super(props);
        this.state = {lstAdrs: [], item: this.emptyItem};
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
    }


    render() {
        const {lstAdrs} = this.state;
        let lstEth = null;
        let total=0;
        let arr=[];
        let standingID = "####################";
        if(lstAdrs.length>0){
            arr = JSON.parse(lstAdrs);
            standingID = arr.at(arr.length-1).id;
            console.log("render lsteth: "+lstAdrs)
                lstEth = arr.map(adrs => {
                    total+=2272*adrs.amount;
                return <tr key={adrs.id}>
                    <td >#</td>
                    <td >{adrs.id}</td>
                    <td >ETH</td>
                    <td >$2,272</td>
                    <td >{adrs.amount}</td>
                    <td >$ {2272*adrs.amount}</td>
                </tr>
            });
        }
        return (
            <div className="row g-" style={{backgroundColor: "#fffcfc"}}>
                <div className="col-md-4">
                    <p> 0xec83...a63a</p>
                </div>
                <div className="col-md-8">
                    <div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" name="adrs" style={{borderRadius:50}} type="search" onChange={this.handleChange} placeholder="Search address/memo/Web3ID" aria-label="Search"/>
                            <button type="button" className="btn ms-3 mt-1" style={{borderRadius:20,width:300,height:30,fontSize:10,textAlign:"center",lineHeight:"8px",color:"white",backgroundColor:"#ff7256"}} onClick={() => this.addToLst()}><strong>Login in via web3wallet</strong></button>
                        </form>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12">
                    <ProfileAvt id={standingID}/>
                    <br/>
                    <ProfileIndexBar/>
                </div>
                <div className="card">
                    <h5 className="card-header"><i className="bi bi-wallet-fill" style={{color:"#fe7192"}}></i>   Wallet</h5>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Adress</th>
                                <th scope="col">Token</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">USD Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {lstAdrs.length>0 ?lstEth:<p>Loading...</p>}
                            <tr>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ></td>
                                <td ><strong>Total: ${total}</strong></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileTab;