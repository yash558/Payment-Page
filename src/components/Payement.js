import React from 'react'

const Payement = () => {
    return (
        <div>
            <div className="d-flex flex-row mt-5">
                <div className="title mx-5">
                    <h4>Shipping and Payment</h4>
                </div>
                <div className="process-icon fs-5 ml-5 content-wrap">
                    <div className="mx-5 border border-success rounded-circle"><i className="fa fa-shopping-cart"></i></div>
                    <div className="mx-5 bg-success rounded-circle"><i class="fa fa-truck" aria-hidden="true"></i></div>
                </div>
            </div>

        </div>
    )
}

export default Payement