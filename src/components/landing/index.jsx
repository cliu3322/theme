import React, { Component } from 'react';
import $ from 'jquery';
//import '../common/index.scss';

class Landing extends Component {
  render() {
  		$(document).ready(function() {

	        $(".new-tab-btn").each(function( index ) {
	            $(this).on("click", function(){
	                var url = $(this).attr('data-url');
	                window.open(url, '_blank');
	            });
	        });
	        $(function() {
	            $('#section06').on('click', function(e) {
	                e.preventDefault();
	                $('html, body').animate({ scrollTop: $('#demo-section').offset().top}, 1000);
	            });
	        });
	    });
    return (
    	<div>
	      	<section className="slider-section p-0 home-image">
			    <div className="slider-content">
			        <div>
			            <img src="${process.env.PUBLIC_URL}/assets/images/landing-page/icon-image/logo.png" />
			            <h3>Boots Your Business </h3>
			            <h3>With Endless <span>Html</span> Features</h3>
			            <p>Multikart is Perfect ecommerce HTML template for any business. it has all features and modules to create your amazing ecommerce website. you can use this template for selling electronics, clothing, fashion, flowers, kids fashion, digital, kids, watches, shoes, furniture, sports etc.

			            </p>
			            <a href="#" className="btn btn-primary">purchase now</a>
			        </div>
			    </div>
			    <div id="section06" className="demo">
			        <a href="#"><span></span>Scroll</a>
			    </div>
			</section>

			{/*Demo section*/}
			<section id="demo-section" className="demo-section">
			    <div className="container">
			        <div className="row">
			            <div className="col-12">
			                <div className="title-text text-center">
			                    <h2>21+</h2>
			                    <h3>Attractive Homepage Layout</h3>
			                </div>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo1">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 1</span> - Fashion</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/index.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/index.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo2">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 2</span> - Fashion</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/fashion-2.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/fashion-2.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo3">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 3</span> - Fashion</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/fashion-3.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/fashion-3.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo4">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 4</span> - Shoes</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/shoes.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/shoes.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo5">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 5</span> - Bags</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/bags.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/bags.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo6">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 6</span> - Watch</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/watch.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/watch.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo7">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 7</span> - Kids</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/kids.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/kids.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo8">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 8</span> - Flower</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/flower.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/flower.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo9">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 9</span> - Nursery</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/nursery.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/nursery.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo10">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 10</span> - Vegetables</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/vegetables.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/vegetables.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo11">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 11</span> - Beauty</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/beauty.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/beauty.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo12">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 12</span> - Instagram Shop</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/instagram-shop.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/instagram-shop.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects effect-2">
			                <div className="set-position">
			                    <div className="layout-container demo13">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 13</span> - Lookbook</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/lookbook-demo.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/lookbook-demo.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo14">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 14</span> - Light</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/light.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/light.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo15">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 15</span> - Full Page</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/full-page.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/full-page.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo16">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 16</span> - Electronic-1</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/electronic-1.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/electronic-1.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo17">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 17</span> - Electronic-2</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/electronic-2.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/electronic-2.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects effect-2">
			                <div className="set-position">
			                    <div className="layout-container demo18">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 18</span> - Video</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/video.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/video.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo19">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 19</span> - Goggles</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/goggles.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/goggles.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo20">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 20</span> - Parallax</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/parallax.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/parallax.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo21">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 21</span> - Furniture</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/furniture.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/furniture.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects effect-3">
			                <div className="set-position">
			                    <div className="layout-container demo39">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 22</span> - Tools</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="#" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="#" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects effect-3">
			                <div className="set-position">
			                    <div className="layout-container demo39">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 23</span> - Gifts</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="#" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="#" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects effect-3">
			                <div className="set-position">
			                    <div className="layout-container demo39">
			                    </div>
			                    <div className="demo-text">
			                        <h4><span>Demo 24</span> - Jewellery</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="#" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="#" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

			{/*Product page section*/}
			<div className="tab-section">
			    <section className="demo-section ">
			        <div className="container">
			            <div className="row">
			                <div className="col-12">
			                    <div className="title-text text-center">
			                        <h2>12+</h2>
			                        <h3>Layout Option for Product Pages</h3>
			                    </div>
			                </div>
			            </div>
			            <div className="row">
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo27">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (3-col-left)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(3-col-left).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(3-col-left).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo28">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (3-col-right)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(3-col-right).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(3-col-right).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo29">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (3-column)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(3-column).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(3-column).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo30">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (accordian)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(accordian).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(accordian).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo31">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (full-page)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(full-page).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(full-page).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo32">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (left-image)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(left-image).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(left-image).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo33">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (left-sidebar)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page.html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page.html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo34">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (no sidebar)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(no-sidebar).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(no-sidebar).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo35">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (right image)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(right-image).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(right-image).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo36">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (right-sidebar)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(right-sidebar).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(right-sidebar).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects effect-classic">
			                    <div className="set-position">
			                        <div className="layout-container demo37">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (sticky)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(sticky).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(sticky).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                    <div className="set-position">
			                        <div className="layout-container demo38">
			                        </div>
			                        <div className="demo-text">
			                            <h4>product-page (vertical tab)</h4>
			                            <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                                <button type="button" data-url="LTR/product-page(vertical-tab).html" className="btn new-tab-btn">Preview</button>
			                                <button type="button" data-url="RTL/product-page(vertical-tab).html" className="btn new-tab-btn">RTL</button>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>

			{/*Shop layout section*/}
			<section className="demo-section">
			    <div className="container">
			        <div className="row">
			            <div className="col-12">
			                <div className="title-text text-center">
			                    <h2>8+</h2>
			                    <h3>Layout Option for Shop Pages</h3>
			                </div>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo22">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (left-sidebar)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page.html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page.html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo23">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (no-sidebar)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(no-sidebar).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(no-sidebar).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo24">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (right-sidebar)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(right).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(right).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo25">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (sidebar-popup)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(sidebar-popup).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(sidebar-popup).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo26">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (infinite scroll)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(infinite-scroll).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(infinite-scroll).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo40">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (List view)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(list-view).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(list-view).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo41">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (3 - grid)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(3-grid).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(3-grid).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-3 col-sm-6 col-12 text-center demo-effects">
			                <div className="set-position">
			                    <div className="layout-container demo42">
			                    </div>
			                    <div className="demo-text">
			                        <h4>category (6 - grid)</h4>
			                        <div className="btn-group demo-btn" role="group" aria-label="Basic example">
			                            <button type="button" data-url="LTR/category-page(6-grid).html" className="btn new-tab-btn">Preview</button>
			                            <button type="button" data-url="RTL/category-page(6-gird).html" className="btn new-tab-btn">RTL</button>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

			{/*lookbook section*/}
			<div className="tab-section lookbook-sec">
			    <div className="container">
			        <div className="row">
			            <div className="col-md-6">
			                <div className="lookbook">
			                    <div>
			                        <img src="assets/images/landing-page/l-icon.png" alt="" className="img-fluid" />
			                        <div className="title-text text-center">
			                            <h3>Advance & Attractive Lookbook</h3>
			                        </div>
			                        <p>Just pin everything you want to sell from a photo.</p>
			                    </div>
			                </div>
			            </div>
			            <div className="col-md-6">
			                <img src="assets/images/landing-page/lookbook.jpg" alt="" className="img-fluid" />
			            </div>
			        </div>
			    </div>
			</div>

			{/*special feature section*/}
			<section className="feature-section">
			    <div className="container">
			        <div className="row">
			            <div className="col-12">
			                <div className="title-text text-center">
			                    <h3>Special Feature</h3>
			                </div>
			            </div>
			        </div>
			        <div className="feature">
			            <div className="row">
			                <div className="col-sm-6 col-12 p-r-0 set-padding">
			                    <div className="feature-product">
			                        <img src="assets/images/landing-page/feature/s1.png" className="img-fluid" />
			                    </div>
			                </div>
			                <div className="col-sm-6 col-12 align-self-center align-right">
			                    <div className="bg-brown">
			                        <h2>Fly to Cart</h2>
			                        <div className="set-border"></div>
			                        <h5>Don't Need to open product in a new window to purchase it. multikart fly to cart features add products quickly without leaving the current page.
			                        </h5>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div className="feature">
			            <div className="row">
			                <div className="col-sm-6 col-12 align-self-center set-order">
			                    <div className="bg-brown">
			                        <h2>Product Zoom</h2>
			                        <div className="set-border"></div>
			                        <h5>Let your users see item's material , texture or any details multikart zoom works perfectly for your users.
			                        </h5>
			                    </div>
			                </div>
			                <div className="col-sm-6 col-12 p-l-0 set-padding">
			                    <div className="feature-product">
			                        <img src="assets/images/landing-page/feature/s2.png" className="img-fluid" />
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div className="feature">
			            <div className="row">
			                <div className="col-sm-6 col-12 p-r-0 set-padding">
			                    <div className="feature-product">
			                        <img src="assets/images/landing-page/feature/s3.png" className="img-fluid" />
			                    </div>
			                </div>
			                <div className="col-sm-6 col-12 align-self-center align-right">
			                    <div className="bg-brown">
			                        <h2>Mobile Optimized</h2>
			                        <div className="set-border"></div>
			                        <h5> No Reason to worry about the growing mobile device market , multikart is ready to look on any device.
			                        </h5>
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div className="feature">
			            <div className="row">
			                <div className="col-sm-6 col-12 align-self-center set-order">
			                    <div className=" bg-brown">
			                        <h2>RTL Supported</h2>
			                        <div className="set-border"></div>
			                        <h5>Design your website LTR or RTL , Multikart supports multi-languages so its easy to design website on any layout  such as arabic , persian , urdu and many more.
			                        </h5>
			                    </div>
			                </div>
			                <div className="col-sm-6 col-12 p-l-0 set-padding">
			                    <div className="feature-product">
			                        <img src="assets/images/landing-page/feature/s4.png" className="img-fluid" />
			                    </div>
			                </div>
			            </div>
			        </div>

			        <div className="feature">
			            <div className="row">
			                <div className="col-sm-6 col-12 p-r-0 set-padding">
			                    <div className="feature-product">
			                        <img src="assets/images/landing-page/feature/1.5.gif" className="img-fluid" />
			                    </div>
			                </div>
			                <div className="col-sm-6 col-12 align-self-center align-right">
			                    <div className=" bg-brown">
			                        <h2>Facebook Chat
			                        </h2>
			                        <div className="set-border"></div>
			                        <h5>Turn Visitors into your customers, increase sales. support your customers anywhere, anytime even on your phone for your business using facebook messenger.
			                        </h5>
			                    </div>
			                </div>
			            </div>
			        </div>

			    </div>
			</section>

			{/*key feature section*/}
			<section className="key-feature section-space">
			    <div className="container">
			        <div className="row">
			            <div className="col-12">
			                <div className="demo-texts text-center">
			                    <h2>key features</h2>
			                </div>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-1"></div>
			                        </div>
			                        <h5>Html5</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-2"></div>
			                        </div>
			                        <h5>Css3</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-3"></div>
			                        </div>
			                        <h5>Bootstrap</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-4"></div>
			                        </div>
			                        <h5>Sass</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-5"></div>
			                        </div>
			                        <h5>W3 Validate</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-6"></div>
			                        </div>
			                        <h5>Unlimited color filters</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-7"></div>
			                        </div>
			                        <h5>Social sharing</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-8"></div>
			                        </div>
			                        <h5>Product Zoom</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-9"></div>
			                        </div>
			                        <h5>Multilevel Menu</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-10"></div>
			                        </div>
			                        <h5>Infinite Loader</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-11"></div>
			                        </div>
			                        <h5>Product-time reminder</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-12"></div>
			                        </div>
			                        <h5>Instagram Shop</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-13"></div>
			                        </div>
			                        <h5>Full-width Layout</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-14"></div>
			                        </div>
			                        <h5>Lookbook layout</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-15"></div>
			                        </div>
			                        <h5>Product Compare</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-16"></div>
			                        </div>
			                        <h5>Google fonts</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-17"></div>
			                        </div>
			                        <h5>Tap to top</h5>
			                    </div>
			                </div>
			            </div>
			            <div className="col-xl-2 col-md-3 col-6">
			                <div className="theme-collection">
			                    <div>
			                        <div className="image-contain">
			                            <div className="set-image image-18"></div>
			                        </div>
			                        <h5>Collection Grid</h5>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

			{/*support section*/}
			<section className="support-section">
			    <div className="support-text">
			        <img src="assets/images/landing-page/support.png" alt="" className="img-fluid" />
			    </div>
			    <div className="container">
			        <div className="row">
			            <div className="col-md-4">
			                <div className="support-content">
			                    <div>
			                        <img src="assets/images/landing-page/feature/s6.png" alt="" className="img-fluid"/>
			                        <h4>have any problem?</h4>
			                        <p>No worries - Our support service is always ready to help you</p>
			                    </div>
			                </div>
			            </div>
			            <div className="col-md-4">
			                <div className="support-content">
			                    <div>
			                        <img src="assets/images/landing-page/feature/s7.png" alt="" className="img-fluid" />
			                        <h4>Do you new user and you can't install theme?</h4>
			                        <p>No worries - we'll install free theme for you</p>
			                    </div>
			                </div>
			            </div>
			            <div className="col-md-4">
			                <div className="support-content">
			                    <div>
			                        <img src="assets/images/landing-page/feature/s8.png" alt="" className="img-fluid" />
			                        <h4>Frequently asked questions</h4>
			                        <p>If you have any question, please feel free to post it on our
			                            support system HERE</p>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="support-image">
			        <img src="assets/images/landing-page/support-bg.png" alt="" className="img-fluid" />
			    </div>
			</section>

			{/*Rate section*/}
			<section className="rate-section pt-0">
			    <div className="container">
			        <div className="row">
			            <div className="col-12 text-center">
			                <img src="assets/images/landing-page/logo.png" />
			                <h2>if you like our product please rate us</h2>
			                <ul>
			                    <li>
			                        <i className="fa fa-star" aria-hidden="true"></i>
			                    </li>
			                    <li>
			                        <i className="fa fa-star" aria-hidden="true"></i>
			                    </li>
			                    <li>
			                        <i className="fa fa-star" aria-hidden="true"></i>
			                    </li>
			                    <li>
			                        <i className="fa fa-star" aria-hidden="true"></i>
			                    </li>
			                    <li>
			                        <i className="fa fa-star" aria-hidden="true"></i>
			                    </li>
			                </ul>
			                <a href="#" className="btn btn-primary">rate us</a>
			            </div>
			        </div>
			    </div>
			</section>

			{/*Footer section*/}
			<section className="footer-section p-0">
			    <div className="container">
			        <div className="row">
			            <div className="col-12">
			                <div className="footer">
			                    <p>Copyrights © 2018 by Pixelstrap All Rights Reserved.
			                    </p>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

		</div>
    );
  }
}

export default Landing;
