import React from 'react';
import PropTypes from 'prop-types';

/*
Render a single item
@param {Object} props
 */

 function ItemList(props) {
   const { item } = props;
   return <li id='item'>{item}</li>
 }

 ItemList.propTypes = {
   item: PropTypes.string,
 };

 export default ItemList;