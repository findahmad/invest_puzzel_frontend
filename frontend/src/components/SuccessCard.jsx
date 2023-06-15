import React from 'react'

const SuccessCard = ({title, titleText}) => {
  return (
    <>

    <div className="container">
        <div className="row">
            <div className="col-12 my-3 ">
                <div style={{height: '15em'}} className='d-flex justify-content-center'>
                    <img src="./images/success.png" className='img-fluid' alt="success"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center py-3">
                <h1 className='fs-4 fw-bold'>{title} changed!</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h1 className="fs-6 text-center titleText">
                    Congratulations, you have changed your {titleText}.
                </h1>
            </div>
        </div>
       
    </div>

    </>
  )
}

export default SuccessCard