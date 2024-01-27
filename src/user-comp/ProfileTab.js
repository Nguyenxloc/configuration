import React, {Component} from 'react';
import SearchOne from "../component/SearchOne";
import ProfileAvt from "./ProfileAvt";
import ProfileIndexBar from "./ProfileIndexBar";

class MainView extends Component {
    render() {
        return (
            <div className="row g-" style={{backgroundColor: "#fffcfc"}}>
                <div className="col-md-4">
                    <p> 0xec83...a63a</p>
                </div>
                <div className="col-md-8">
                    <SearchOne/>
                </div>
                <hr/>
                <div className="col-md-12">
                    <ProfileAvt/>
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
                                <th scope="col">Token</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">USD Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>1</th>
                                <td>ETH</td>
                                <td>$2,272</td>
                                <td>2.2907</td>
                                <td>$5,206.75</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>ETH</td>
                                <td>$2,272</td>
                                <td>2.2907</td>
                                <td>$5,206.75</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>ETH</td>
                                <td>$2,272</td>
                                <td>2.2907</td>
                                <td>$5,206.75</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>ETH</td>
                                <td>$2,272</td>
                                <td>2.2907</td>
                                <td>$5,206.75</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>ETH</td>
                                <td>$2,272</td>
                                <td>2.2907</td>
                                <td>$5,206.75</td>
                            </tr>
                            <tr>
                                <th> </th>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <th>Total: x$</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;