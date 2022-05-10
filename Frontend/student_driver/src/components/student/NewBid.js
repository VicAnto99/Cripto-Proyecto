import React from 'react';


function NewBid(){

    return(
        <div className='container text-center'>
            <div className="card">
                <h3 className="card-title">New Bid</h3>
                <div className="row">

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Rideshare details</h5>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingDriver" placeholder="Victor Godinez"/>
                                    <label for="floatingDriver">Driver</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPositionsOpen" placeholder="Victor Godinez"/>
                                    <label for="floatingPositionsOpen">Positions Open</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingAdditionalComments" placeholder="Victor Godinez"/>
                                    <label for="floatingAdditionalComments">Additional comments</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPlace" placeholder="Victor Godinez"/>
                                    <label for="floatingPlace">Place</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingCost" min="0.00" max="10000.00" step="0.01" placeholder="Victor Godinez"/>
                                    <label for="floatingCost">Cost</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-floating mb-3">
                                        <input type="time" className="form-control" id="floatingPeriod" placeholder="From 8:00 to 16:00"/>
                                        <label for="floatingPeriod">Period</label>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <h6>TO</h6>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-floating mb-3">
                                        <input type="time" className="form-control" id="floatingPeriod2" placeholder="From 8:00 to 16:00"/>
                                        <label for="floatingPeriod2">Period</label>
                                    </div>
                                </div>                                      
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bid details</h5>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingCost" min="0.00" max="10000.00" step="0.01" placeholder="Victor Godinez"/>
                                    <label for="floatingCost">Amount</label>
                                    <br></br>
                                    <button type="button" className="btn btn-success">Bid</button>
                                </div>   
                            </div>
                        </div>            
                    </div>

                </div>
            </div>
        </div>


    )
}

export default NewBid