import React, {Component} from 'react';
import {ethers} from "ethers";
import EthereumAddress from 'ethereum-address';

class WelcomeTab extends Component {
    lstCLone = [];

    isValidEthAddress(address) {
        return EthereumAddress.isAddress(address);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        if (this.isValidEthAddress(value)) {
            this.props.setPage(6);
            item[name] = value;
            this.setState({item});
            this.collectCrypto(item[name]);
        }
    }

    async callEthChaild1(addresID) {
        const provider = new ethers.getDefaultProvider();
        let balance = await provider.getBalance(addresID)
        let newItem = {id: this.state.item["adrs"], amount: parseFloat(ethers.formatEther(balance))}
        return newItem;
    }

    async collectCrypto(event) {
        this.lstCLone = null;
        try {
            this.lstCLone = this.lstCLone || [];
            const eth = await this.callEthChaild1(event).then(this.props.setPage(1));
            //bitcoin//ethlayer2/dodgecoin
            this.lstCLone.push(eth);
            this.props.onCLickFucntion(true);
            this.props.getData(JSON.stringify(this.lstCLone));
        } catch (error) {
            console.error("Error:", error);
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
        this.state = {item: this.emptyItem};
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValidEthAddress = this.isValidEthAddress.bind(this);
    }

    async componentDidMount() {

    }

    render() {
        // const {lstAdrs} = this.state;
        // let lstEth = null;
        // let total = 0;
        // let arr = [];
        // let standingID = "####################";
        // if (lstAdrs.length > 0) {
        //     arr = JSON.parse(lstAdrs);
        //     standingID = arr.at(arr.length - 1).id;
        //     console.log("render lsteth: " + lstAdrs)
        //     lstEth = arr.map(adrs => {
        //         total += 2272 * adrs.amount;
        //         return <tr key={adrs.id}>
        //             <td>#</td>
        //             <td>{adrs.id}</td>
        //             <td>ETH</td>
        //             <td>$2,272</td>
        //             <td>{adrs.amount}</td>
        //             <td>$ {2272 * adrs.amount}</td>
        //         </tr>
        //     });
        // }

        return (
            <div className="row" style={{backgroundColor: "#fffcfc"}}>
                <div className="col-md-4 mt-3">
                    <strong>Home</strong>
                </div>
                <div className="col-md-8">
                    <div>
                        <form className="d-flex mt-2 mb-2" role="search">
                            <input className="form-control me-2" name="adrs" style={{borderRadius: 50}} type="search"
                                   onChange={this.handleChange} placeholder="Search address/memo/Web3ID"
                                   aria-label="Search"/>
                            <button type="button" className="btn ms-3 mt-1" style={{
                                borderRadius: 20,
                                width: 300,
                                height: 30,
                                fontSize: 10,
                                textAlign: "center",
                                lineHeight: "8px",
                                color: "white",
                                backgroundColor: "#ff7256"
                            }}><strong>Login in via web3wallet</strong></button>
                        </form>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12" style={{marginTop: "-15px"}}>
                    <img src="https://breadnbeyond.com/wp-content/uploads/2022/04/Cryptocurrency-Videos.jpg"
                         style={{width: "100%"}} alt=""/>
                </div>
            </div>
        );
    }
}

export default WelcomeTab;