import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

//route passes match, location and history through to the component as a prop
const ShopPage = ({match}) => {
        console.log(match);
        return(
         <div className = 'shop-page'>
             <Route exact path={`${match.path}`} component={CollectionsOverview} />
             <Route path = {`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
        )};




export default ShopPage;