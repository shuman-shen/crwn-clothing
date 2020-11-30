//import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollecionOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})


//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollecionOverview))
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollecionOverview)

export default CollectionOverviewContainer