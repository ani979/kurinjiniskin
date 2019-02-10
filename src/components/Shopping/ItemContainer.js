import {connect} from 'react-redux'
import {addToCart} from '../../actions/index'
import {updateCartItem} from '../../actions/index'
import Item from './Item'


const addItemGetSelectedValue = (e) => (
  e.target.getElementsByClassName('item-qty')[0].value
);

const ItemContainer = connect(
    (state, ownProps) => (
      
      {
        id: ownProps.id,
        count: state.stock.find(item => item.id === ownProps.id) ? state.stock.find(item => item.id === ownProps.id).count: 0,
        inCart: state.cart.some(item => (item.id === ownProps.id && item.flavour === ownProps.flavour)),
        flavour:ownProps.flavour
      }
    ),
    null,
    (stateProps, dispatchProps, ownProps) => {
      console.log("stateProps.inCart ", stateProps.inCart)
      const onSubmit = stateProps.inCart ? updateCartItem : addToCart;
      return Object.assign({}, ownProps, stateProps, dispatchProps, {
        onSubmit: (e, id) => {
          if(stateProps.flavour) {
            id = id + stateProps.flavour
            console.log("id is ", id);
            dispatchProps.dispatch(onSubmit(id, 1, stateProps.flavour));
          } else {
            dispatchProps.dispatch(onSubmit(id, 1));
          }  
        },
        handleChange: (e) => {
          console.log("e.target.value ", e.target.value);
          stateProps.flavour = e.target.value;
          //this.setState({flavour: e.target.value});
        }
      });

      
    }
  )(Item);

export default ItemContainer