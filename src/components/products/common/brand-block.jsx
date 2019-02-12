import React, {Component} from 'react';
import { connect } from 'react-redux'


import $ from 'jquery';


class BrandBlock extends Component {

    componentWillMount(){
        $(function() {
            $('.collapse-block-title').on('click', function () {
                var speed = 300;
                var thisItem = $(this).parent(),
                    nextLevel = $(this).next('.collection-collapse-block-content');
                if (thisItem.hasClass('open')) {
                    thisItem.removeClass('open');
                    nextLevel.slideUp(speed);
                }
                else {
                    thisItem.addClass('open');
                    nextLevel.slideDown(speed);
                }
            });
        });
    }

    render (){
        return (
            <div className="collection-filter-block">
                <div className="collection-mobile-back">
                    <span className="filter-back">
                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                    </span>
                </div>
                <div className="collection-collapse-block border-0 open">
                    <h3 className="collapse-block-title">brand</h3>
                    <div className="collection-collapse-block-content">
                        <div className="collection-brand-filter">
                            <ul className="category-list">
                                <li><a href="#">clothing</a></li>
                                <li><a href="#">bags</a></li>
                                <li><a href="#">footwear</a></li>
                                <li><a href="#">watches</a></li>
                                <li><a href="#">accessories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(
    mapStateToProps,
    null
)(BrandBlock)
