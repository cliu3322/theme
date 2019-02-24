import React, {Component} from 'react';
import $ from 'jquery';
import 'smartmenus';
import SuperFetch from '../../../../helpers/superFetch';


class SideBar extends Component {


  constructor (props) {
      super (props)

      this.state = {
        cities:[]
      };

  }

    componentWillMount (){
        $(function() {
            $('#sub-menu').smartmenus({
                subMenusSubOffsetX: 1,
                subMenusSubOffsetY: -8

            });
        });
    }


    componentDidMount () {
      SuperFetch.get(`/getCXGCities`)
        .then((cities) => {
          this.setState(() => ({ cities }))
        })
    }

    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if(closemyslide)
            closemyslide.classList.remove('open-side');
    }

    render() {
      console.log(this.state.cities.allcities)
        return (
            <div id="mySidenav" className="sidenav" style={{height:'100hv',overflowY: 'scroll'}}>
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
                <nav className="vertical-menu">
                    <div onClick={this.closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </div>
                    {/*Vertical Menu*/}
                    <ul id="sub-menu" className="sm sm-vertical ">

                    { this.state.cities.allcities?
                      (
                      this.state.cities.allcities[0].children.map((state, index1) =>
                         <li key ={index1}><a href="#" style={{
                           paddingLeft: '20px',
                           color: '#222222',
                           fontSize: '16px',
                           fontWeight: '400',
                           textDecoration: 'none',
                           textTransform: 'uppercase',
                           paddingTop: '2px',
                           paddingBottom: '2px',
                           letterSpacing: '0.07em'
                         }}>{state.label}</a>
                           <ul>
                           {state.children.map((city, index2) =>
                             <li key = {index2}><a href="#" style={{
                               paddingLeft: '30px',
                               color: '#222222',
                               fontSize: '12px',
                               fontWeight: '300',
                             }}>{city.label}</a></li>
                           )}
                           </ul>
                         </li>)
                    ):null}

                    </ul>
                </nav>
            </div>
        )
    }
}


export default SideBar;
