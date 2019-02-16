import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare } from '../../../actions'
import {getVisibleproducts} from '../../../services';
import ProductListItem from "./product-list-item";
import SuperFetch from '../../../helpers/superFetch';

class ProductListing extends Component {

    constructor (props) {
        super (props)

        this.state = {
          limit: 5,
          hasMoreItems: true,
          recordlist:[]
        };

    }

    componentWillMount(){
        this.fetchMoreItems();
    }

    componentDidMount () {
      SuperFetch.get(`/getcityxrecordlist?id=5bfa2a60200fe764bdf9ec5c`)
        .then((recordlist) => {
          console.log(recordlist)
          this.setState(() => ({ recordlist }))
        })
    }

    fetchMoreItems = () => {
        if (this.state.limit >= this.props.products.length) {
            this.setState({ hasMoreItems: false });
            return;
        }
        // a fake async api call
        setTimeout(() => {
            this.setState({
                limit: this.state.limit + 5
            });
        }, 3000);


    }

    render (){
        const {products, addToCart, symbol, addToWishlist, addToCompare} = this.props;
        const {recordlist} = this.state;
        console.log(this.state.recordlist)
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        {products.length > 0 ?
                            <InfiniteScroll
                                dataLength={this.state.limit} //This is important field to render the next data
                                next={this.fetchMoreItems}
                                hasMore={this.state.hasMoreItems}
                                loader={<div className="loading-cls"></div>}
                                endMessage={
                                    <p className="seen-cls seen-it-cls">
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                            >
                                <div className="row">
                                    { recordlist.slice(0, this.state.limit).map((record, index) =>
                                        <ProductListItem product={record} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(record)}
                                                         onAddToWishlistClicked={() => addToWishlist(record)}
                                                         onAddToCartClicked={addToCart} key={index}/>)
                                    }
                                </div>
                            </InfiniteScroll>
                            :
                            <div className="row">
                                <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} class="img-fluid mb-4" />
                                    <h3>Sorry! Couldn't find the provider you were looking For!!!    </h3>
                                    <p>Please check if you have misspelt something or try searching with other words.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/`} class="btn btn-solid">continue shopping</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    products: getVisibleproducts(state.data, state.filters),
    symbol: state.data.symbol,
  };
}


export default connect(
    mapStateToProps,
    {addToCart, addToWishlist, addToCompare}
)(ProductListing)
