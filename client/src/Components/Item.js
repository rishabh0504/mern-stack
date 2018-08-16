import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addItem,
  fetchItems,
  deleteItem,
  updateItem
} from "../Actions/ActionCreators";
import { bindActionCreators } from "redux";

class Item extends Component {
  deleteProduct = id => {
    this.props.deleteItem(id);
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <p className="text-center">
            <strong>{this.props.item.name}</strong>
          </p>
        </div>
        <div className="col-sm-1">
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => this.deleteProduct(this.props.item._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteItem }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Item);


