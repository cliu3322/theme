import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import 'smartmenus';
import { withTranslate } from 'react-redux-multilingual'
import SuperFetch from '../../../../helpers/superFetch';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            navClose:{right:'0px'},
            cities:[]
        }
    }

    componentWillMount (){
        $(function() {
            $('#main-menu').smartmenus({
                subMenusSubOffsetX: 1,
                subMenusSubOffsetY: -8
            });
        });
        if ($(window).width() < 750) {
            this.setState({navClose: {right:'-410px'}})
        }
        if($(window).width() == 1199)
        {
            this.setState({navClose: {right:'-300px'}})
        }
    }

    componentDidMount () {
      SuperFetch.get(`/getCXGCities`)
        .then((cities) => {
          this.setState(() => ({ cities }))
        })
    }

    openNav() {
        this.setState({navClose: {right:'0px'}})
    }
    closeNav() {
        this.setState({navClose: {right:'-410px'}})
    }
    render() {
        const {translate} = this.props;
        return (
            <div>
                <nav id="main-nav">
                    <div className="toggle-nav" onClick={this.openNav.bind(this)}>
                        <i className="fa fa-bars sidebar-bar" ></i>
                    </div>
                    {/*Horizontal menu*/}
                    <ul id="main-menu" className="sm pixelstrap sm-horizontal" style={this.state.navClose}>
                        <li >
                            <div className="mobile-back text-right" onClick={this.closeNav.bind(this)}>
                                Back<i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                            </div>
                        </li>
                        <li className="mega"><Link to={`${process.env.PUBLIC_URL}/`}>{translate('home')}</Link></li>
                        <li className="mega">
                            <a href="#">{translate('features')}
                                <div className="lable-nav">{translate('new')}</div>
                            </a>
                            <ul className="mega-menu feature-menu">
                                <li>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <Link to={`${process.env.PUBLIC_URL}/blog/blog-page`} >
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/blog-page.jpg`} alt="" />
                                                    <h6>{translate('blog_left_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`${process.env.PUBLIC_URL}/blog/right-sidebar`} >
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/blog(right-sidebar).jpg`} alt="" />
                                                    <h6>{translate('blog_right_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/blog-detail.jpg`} alt="" />
                                                    <h6>{translate('blog_detail')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/category-page.jpg`} alt="" />
                                                    <h6>{translate('category_left_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`${process.env.PUBLIC_URL}/right-sidebar/collection`} >
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/category-page(right).jpg`} alt=""/>
                                                    <h6>{translate('category_right_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-4">
                                                <Link to={`${process.env.PUBLIC_URL}/no-sidebar/collection`} >
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/category-page(no-sidebar).jpg`} alt=""/>
                                                    <h6>{translate('category_no_sidebar')}</h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="mega"><a href="#">{translate('products')}</a>
                            <ul className="mega-menu feature-menu product-menu">
                                <li>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(left-sidebar).jpg`} alt="" />
                                                    <h6>{translate('left_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/right-sidebar/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(right-sidebar).jpg`} alt="" />
                                                    <h6>{translate('right_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/no-sidebar/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(no-sidebar).jpg`} alt="" />
                                                    <h6>{translate('no_sidebar')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/col-left/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(3-col-left).jpg`} alt="" />
                                                    <h6>{translate('three_col_thumbnail_left')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/col-right/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(3-col-right).jpg`} alt="" />
                                                    <h6>{translate('three_col_thumbnail_right')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/column/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(3-column).jpg`} alt="" />
                                                    <h6>{translate('thumbnail_below')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/left-image/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(left-image).jpg`} alt="" />
                                                    <h6>{translate('thumbnail_left')}</h6>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3">
                                                <Link to={`${process.env.PUBLIC_URL}/right-image/product/1`}>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/feature/product-page(right-image).jpg`} alt="" />
                                                    <h6>{translate('thumbnail_right')}</h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">{translate('pages')}</a>
                            <ul>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/about-us`} >{translate('about_us')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/404`} >404</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/lookbook`} >{translate('lookbook')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/login`} >{translate('login')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/register`} >{translate('register')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/search`} >{translate('search')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/collection`} >{translate('collection')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/forget-password`} >{translate('forget_password')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/contact`} >{translate('contact')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} >{translate('dashboard')}</Link></li>
                                <li><Link to={`${process.env.PUBLIC_URL}/pages/faq`} >{translate('FAQ')}</Link></li>
                            </ul>
                        </li>
                        <li className="mega"><a href="#">{'Choose your city'}</a>
                            <ul className="mega-menu full-mega-menu">
                                <li>
                                    <div className="container">
                                        <div className="row">

                                        { this.state.cities.allcities?
                                          (
                                          this.state.cities.allcities[0].children.map((state, index) =>
                                          <div className="col mega-box" key = {index}>
                                              <div className="link-section">
                                                  <div className="menu-title"><h5>{state.label}</h5></div>
                                                  <div className="menu-content">
                                                      <ul>
                                                        {state.children.map((city, index) =>
                                                          <li key = {city.value}>
                                                            <Link to={"/right-sidebar/collection/"+city.value}>{city.label}</Link>
                                                          </li>
                                                        )}
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>)
                                        ):null}
                                        </div>
                                    </div>
                                    <div className="row banner-padding">
                                        <div className="col-xl-6">
                                            <a href="#" className="mega-menu-banner"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/1.jpg`} className="img-fluid d-none d-xl-block " alt="" /></a>
                                        </div>
                                        <div className="col-xl-6">
                                            <a href="#" className="mega-menu-banner"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid d-none d-xl-block" alt="" /></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default withTranslate(NavBar);
