import React from 'react';
import { connect } from 'react-redux';
import CollectionModel from '../component/CollectionModel';

class Panel extends React.Component {
  renderRestaurant() {
    const restaurantName = 'Pizza my heeart';
    const rating = 'good';
    const latitude = '59.5848';
    const longitude = '80.0384';
    const type = 'American';
    const image = 'http://thepruneyard.com/wp-content/uploads/2013/12/logo21.jpg';
  }

  render() {
    return (
      <div className='panelBody'>
        <div className='restaurant'>
          <CollectionModel restaurant={this.props.allRestaurants(this.renderRestaurant)}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {allRestaurants: state.allRestaurants};
}
export default connect(mapStateToProps)(Panel);
