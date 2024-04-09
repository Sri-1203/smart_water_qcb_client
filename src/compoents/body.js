import React from 'react'

function Body() {
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="quality-box">
            <h1 style={{fontWeight: 'bold', fontSize: 'xx-large'}}>Water Quality</h1>
            <h6 style={{fontSize: 'large'}}>Good</h6> {/* Display water quality value in words */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="quality-box">
            <h1 style={{fontWeight: 'bold', fontSize: 'xx-large'}}>Water Quality Index (WQI)</h1>
            <h6 style={{fontSize: 'large'}}>85</h6> {/* Display water quality index value */}
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row" style={{marginLeft: '12%'}}>
          <section className="section_0">
            <div className="col-sm-4 text-center">
              <div className="circle">
                <p className="offset" style={{fontSize: '160%', fontWeight: 'bolder', color: 'whitesmoke'}}>TEMPERATURE</p>
                <p className="card-text" style={{fontSize: 'small'}}>......</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="circle">
                <p className="offset" style={{fontSize: '160%', fontWeight: 'bolder', color: 'whitesmoke'}}>TDS</p>
                <p className="card-text" style={{fontSize: 'small'}}>....</p>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="circle">
                <p className="offset" style={{fontSize: '160%', fontWeight: 'bolder', color: 'whitesmoke'}}>TURBIDITY</p>
                <p className="card-text" style={{fontSize: 'small'}}>....</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    

    </>
  )
}

export default Body