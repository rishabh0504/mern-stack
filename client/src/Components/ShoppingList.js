import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem,fetchItems,deleteItem,updateItem } from "../Actions/ActionCreators";
import { bindActionCreators } from "redux";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount(){
    this.props.fetchItems();
  }
  addItemAction = ()=>{
    this.props.addItem(this.state.item);
    this.setState({item:''});
  }
  deleteProduct = (id) =>{
   this.props.deleteItem(id);
  }
  render() {
    
    const items = this.props.items.items.map(item => {
      return (
        <div className="row" key={item.id}>
          <div className="col-sm-8">
            <p className="text-center">
              <strong>
                {item.id}.{item.name}
              </strong>
            </p>
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.deleteProduct(item.id)}>
              Delete
            </button>
          </div>
        </div>
      );
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
          <div className="col-sm-2"/>
        </div>
        <div className="jumbotron">{items}</div>
      </div>
    );
  }
}

ShoppingList.propTypes = {
  items: PropTypes.object.isRequired,
  addItem : PropTypes.func.isRequired,
  fetchItems : PropTypes.func.isRequired,
  deleteItem : PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    items: state.products
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem, fetchItems ,deleteItem,updateItem}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
