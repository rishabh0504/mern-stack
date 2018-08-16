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
import Item from "./Item";
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      id: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    this.props.fetchItems();
  }
  addItemAction = () => {
    this.props.addItem(this.state.item);
    this.setState({ item: "" });
  };
  deleteProduct = id => {
    this.props.deleteItem(id);
  };

  updateProduct = id => {
    const selectedItem = this.props.items.items.find(item => item._id === id);
    console.log(selectedItem);
    this.setState({ id: selectedItem._id, item: selectedItem.name });
    this.setState({ style: { display: "none" } });
  };

  render() {
    let items = this.props.items.items.map(item => {
      return <Item item={item} key={item._id} />;
    });

    return (
      <div>
        <div className="row margin">
          <div className="col-sm-2" />
          <div className="col-sm-6">
            <input
              type="text"
              value={this.state.item}
              name="item"
              className="form-control"
              onChange={this.inputHandler}
            />
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              onClick={this.addItemAction}
              className="btn btn-success btn-sm"
            >
              Add Item
            </button>
          </div>
          <div className="col-sm-2" />
        </div>
        <div className="jumbotron">{items}</div>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  items: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  fetchItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.products
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addItem, fetchItems, deleteItem, updateItem },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
