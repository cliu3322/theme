import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ProductListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            image: ''
        }
    }

    onClickHandle(img) {
        this.setState({ image : img} );
    }


    render() {
        const {product} = this.props;
        return (
                <div className="col-xl-3 col-md-6 col-grid-box">
                    <div className="product-box">
                        <div className="img-wrapper">
                            <div className="front">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img
                                    src={`http://`+product.pic[0]}
                                    className="img-fluid"
                                    alt="" /></Link>
                            </div>
                            <ul className="product-thumb-list">
                                {product.pic.map((vari, i) =>
                                    <li className={`grid_thumb_img ${(vari === this.state.image)?'active':''}`} key={i}>
                                        <a href="javascript:void(0)" title="Add to Wishlist">
                                            <img src={`http://${vari}`} onClick={() => this.onClickHandle(vari)} />
                                        </a>
                                    </li>)
                                }
                            </ul>

                        </div>
                        <div className="product-detail">
                            <div>
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                                    <h6>{product.name}</h6>
                                </Link>
                                {/* <p dangerouslySetInnerHTML={{__html: product.content}} /> */}
                                <p>{product.title}</p>
                                <h4>{product.phone}</h4>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ProductListItem;
