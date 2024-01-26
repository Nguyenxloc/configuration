import React, { Component } from 'react';
import SearchOne from "../component/SearchOne";
class MainView extends Component {
    render() {
        return (
            <div className="row g-3 mt-5">
                <div className="col-md-8">
                    <img src="https://i.pinimg.com/1200x/22/db/10/22db102765159b0555b586b38e4e67be.jpg" style={{width:"70px",height:"70px",borderRadius:50}} alt=""/>
                    <label htmlFor="inputPassword4" className="form-label ms-3"  style={{border:"red solid"}}>
                        NoID
                    </label>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputPassword4" className="form-label">#Graps</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </div>
        );
    }
}
export default MainView;