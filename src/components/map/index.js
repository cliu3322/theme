import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form } from 'antd';



import { Map, TileLayer } from 'react-leaflet';



class CityOptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
        openKeys: [],
    }
  }


  render() {

    return (


        <Row >


          <Col md={18} sm={12} xs={24}>
            <Map style={{ height: '100vh' }}
              center={[37.0902, -110.7129]}
              zoom={3}
              >
              <TileLayer
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
/>
            </Map>
          </Col>
        </Row>

    );
  }
}



function mapStateToProps(state) {
  //console.log(state);
  return {

  };
}

const WrappedCityOptions = Form.create()(CityOptions);

export default connect(mapStateToProps, {} )(WrappedCityOptions);
