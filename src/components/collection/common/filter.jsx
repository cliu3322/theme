import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import $ from 'jquery';



import {getBrands, getColors, getMinMaxPrice} from '../../../services';
import {filterBrand, filterColor, filterPrice} from '../../../actions'

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openFilter: false
        }
    }

    closeFilter = () => {
        $('.collection-filter').css("left","-365px");
    }

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
            $('.color-selector ul li').on('click', function() {
                $(".color-selector ul li").removeClass("active");
                $(this).addClass("active");
            });
        });
    }

    clickBrandHendle(event, brands){

        var index = brands.indexOf(event.target.value);
        if (event.target.checked)
            brands.push(event.target.value); // push in array cheked value
        else
            brands.splice(index,1);  // removed in array unchecked value

        this.props.filterBrand(brands);
    }

    render (){
        const filteredBrands = this.props.filters.brand;
        //console.log(this.props.brands);
        return (
                <div className="collection-filter-block">
                    {/*brand filter start*/}
                    <div className="collection-mobile-back">
                        <span className="filter-back" onClick={this.closeFilter} >
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>

                    <div className="collection-collapse-block open">
                        <h3 className="collapse-block-title">brand</h3>
                        <div className="collection-collapse-block-content">
                            <div className="collection-brand-filter">
                                {this.props.brands.map((brand, index) => {
                                    return (
                                    <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                        <input type="checkbox" onClick={(e) => this.clickBrandHendle(e,filteredBrands)} value={brand} defaultChecked={filteredBrands.includes(brand)? true : false}  className="custom-control-input" id={brand} />
                                        <label className="custom-control-label"
                                               htmlFor={brand}>{brand}</label>
                                    </div> )
                                })}
                            </div>
                        </div>
                    </div>
                    {/*color filter start here*/}
                    <div className="collection-collapse-block open">
                        <h3 className="collapse-block-title">colors</h3>
                        <div className="collection-collapse-block-content">
                            <div className="color-selector">
                                <ul>
                                    {this.props.colors.map((color, index) => {
                                        return (
                                        <li className={color} title={color} onClick={() => this.props.filterColor(color)} key={index}></li> )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*price filter start here */}
                    <div className="collection-collapse-block open">
                        <h3 className="collapse-block-title">price</h3>
                        <div className="collection-collapse-block-content">
                            <div className="collection-brand-filter">
                                <div className="custom-control custom-checkbox collection-filter-checkbox">
                                    <InputRange
                                        maxValue={this.props.prices.max}
                                        minValue={this.props.prices.min}
                                        value={this.props.filters.value}
                                        onChange={value => this.props.filterPrice({ value })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}


const mapStateToProps = state => ({
    brands: getBrands(state.data.products),
    colors: getColors(state.data.products),
    prices: getMinMaxPrice(state.data.products),
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterBrand, filterColor, filterPrice }
)(Filter);