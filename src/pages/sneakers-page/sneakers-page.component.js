import { render } from '@testing-library/react';
import React from 'react';
import './sneakers-page.style.scss';
import SHOP_DATA from './sneakers.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview-component';

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA,
            number:123
        }
    }

   render(){
       //object de-structuring
       const {collections} = this.state;

       return(
           <div className= "shop-page">
               {
                   collections.map(({ id, ...otherCollectionProps}) => (

                   <CollectionPreview key = {id} {...otherCollectionProps}/>
                    ))}

           </div>
       )
   }
}


export default ShopPage;