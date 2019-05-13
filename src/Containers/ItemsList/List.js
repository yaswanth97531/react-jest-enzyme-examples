import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ListItem';

/*
  Render a list of items

  @param {Object} props - List of items
 */

 function List(props) {
   const { items } = props;
   if(!items.length) {
    //  No items on the list, render an empty message
    return <span id='empty-message'>No items in list</span>
   }

   return(
     <ul id='list-items'>
       {items.map(item => <ItemList key={item} item={item} />)}
     </ul>
   );
 }

 List.propTypes = {
   items: PropTypes.array,
 };

 List.defaultProps = {
   items: []
 }

 export default List;
