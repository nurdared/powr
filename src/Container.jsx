import React from "react";
import Boxes from "./Boxes";

const Container = ({addBox, changeColor, boxes, containers, addContainer}) => {
  return (
        <div className="row">
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-default add-btn"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    What do you want to Add?
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <button className="btn btn-dark mr-2" onClick = { addContainer }>Container</button>
                  <button className="btn btn-dark" onClick = { addBox }>Box</button>
                </div>
              </div>
            </div>
          </div>
          <Boxes boxes = {boxes} changeColor={changeColor}/>
        </div>
  );
};

export default Container;
