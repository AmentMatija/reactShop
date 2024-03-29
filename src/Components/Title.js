import React from 'react'

export default ({title}) => {
  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="font-weight-bold">
                 {title}
            </h1>
        </div>
      </div>
    </div>
  )
}
