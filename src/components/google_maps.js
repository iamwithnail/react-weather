import React, {Component} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return <div ref="map"></div>
        //uses the reference system, a reference to an element that's been rendered using this.refs.map
    }
}

export default GoogleMap;