import React, {Component} from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';
import {filterSort} from '../../../actions'
import {getVisibleproducts} from '../../../services';

class FilterBar extends Component {


    componentWillMount(){
        $(function() {
            //list layout view

            $('.list-layout-view').on('click', function() {
                $('.collection-grid-view').css('opacity', '0');
                $(".product-wrapper-grid").css("opacity","0.2");
                $('.shop-products-ajax-loader').css("display","block");
                $('.product-wrapper-grid').addClass("list-view");
                $(".product-wrapper-grid").children().children().children().children().children().removeClass();
                $(".product-wrapper-grid").children().children().children().children().children().addClass("col-lg-12");
                setTimeout(function(){
                    $(".product-wrapper-grid").css("opacity","1");
                    $('.shop-products-ajax-loader').css("display","none");
                }, 500);
            });

            //grid layout view

            $('.grid-layout-view').on('click', function(e) {
                $('.collection-grid-view').css('opacity', '1');
                $('.product-wrapper-grid').removeClass("list-view");
                $(".product-wrapper-grid").children().children().children().children().children().removeClass();
                $(".product-wrapper-grid").children().children().children().children().children().addClass("col-lg-3");

            });
            $('.product-2-layout-view').on('click', function(e) {
                if($('.product-wrapper-grid').hasClass("list-view")) {}
                else{
                    $(".product-wrapper-grid").children().children().children().children().children().removeClass();
                    $(".product-wrapper-grid").children().children().children().children().children().addClass("col-lg-6");
                }
            });
            $('.product-3-layout-view').on('click', function(e) {
                if($('.product-wrapper-grid').hasClass("list-view")) {}
                else{
                    $(".product-wrapper-grid").children().children().children().children().children().removeClass();
                    $(".product-wrapper-grid").children().children().children().children().children().addClass("col-lg-4");
                }
            });
            $('.product-4-layout-view').on('click', function(e) {
                if($('.product-wrapper-grid').hasClass("list-view")) {}
                else{
                    $(".product-wrapper-grid").children().children().children().children().children().removeClass();
                    $(".product-wrapper-grid").children().children().children().children().children().addClass("col-lg-3");
                }
            });
            $('.product-6-layout-view').on('click', function(e) {
                if($('.product-wrapper-grid').hasClass("list-view")) {}
                else{
                    $(".product-wrapper-grid").children().children().children().children().children().removeClass();
                    $(".product-wrapper-grid").children().children().children().children().children().addClass("col-lg-2");
                }
            });
        });
    }

    render (){
        return (
            <div className="product-filter-content">
                <div className="search-count">
                    <h5>Showing Products 1-{this.props.products.length} Result</h5>
                </div>
                <div className="collection-view">
                    <ul>
                        <li><i
                            className="fa fa-th grid-layout-view" ></i>
                        </li>
                        <li><i
                            className="fa fa-list-ul list-layout-view" ></i>
                        </li>
                    </ul>
                </div>
                <div className="collection-grid-view">
                    <ul>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/2.png`}
                                alt=""
                                className="product-2-layout-view" />
                        </li>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/3.png`}
                                alt=""
                                className="product-3-layout-view" />
                        </li>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/4.png`}
                                alt=""
                                className="product-4-layout-view" />
                        </li>
                        <li>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/6.png`}
                                alt=""
                                className="product-6-layout-view" />
                        </li>
                    </ul>
                </div>
                <div className="product-page-filter">
                    <select onChange={(e) => this.props.filterSort(e.target.value)}>
                        <option value="">Sorting items</option>
                        <option value="HighToLow">Price: High to Low</option>
                        <option value="LowToHigh">Price: Low to High</option>
                        <option value="Newest">Newest Items</option>
                        <option value="AscOrder">Sort By Name: A To Z</option>
                        <option value="DescOrder">Sort By Name: Z To A</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort})(FilterBar);