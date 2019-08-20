import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLongitude: this.props.options.center.lng,
      currentLatitude: this.props.options.center.lat,
      showNewHarvest: false,
      markersLoaded: false,
      markers: [],
    };

    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    console.log("onScriptLoad loaded")
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);

    this.setState({
      map: map,
    });

    console.log("map === null: " + map === null)
    if (map !== null) {
      console.log("Map isn't null, running onMapLoad")
      this.props.onMapLoad(map);
    }
  }

  componentDidMount() {
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=` + window.googleAPIKey;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      // Below is important. 
      // We cannot access google.maps until it's finished loading
      console.log("map component mounted")
      s.addEventListener('load', () => {
        this.onScriptLoad()
      })

    } else {
      this.onScriptLoad();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.map !== null && prevState.map !== this.state.map) {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div className="mapMap" id={this.props.id}>
      </div>
    );
  }
}

export default Map;