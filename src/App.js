import React from "react";
import styled from "styled-components/macro";

import Map from "./components/Map/Map";
import axios from "axios";
import People from "./components/People/People";

const Wrapper = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

class App extends React.Component {
  state = { position: { lat: 0, lng: 0 }, zoom: 6, people: [] };

  componentDidMount() {
    this.getSpaceData();
    this.intervalId = setInterval(() => {
      this.getSpaceData();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleViewportChange = (viewport) => {
    if (viewport.zoom !== this.state.zoom)
      this.setState({ zoom: viewport.zoom });
  };

  getSpaceData = async () => {
    try {
      const locationURL = "http://api.open-notify.org/iss-now.json";
      const peopleInSpaceURL = "http://api.open-notify.org/astros.json";

      const issLocationPromise = axios.get(locationURL);
      const peopleInSpacePromise = axios.get(peopleInSpaceURL);

      const [issLocation, peopleInSpace] = await Promise.all([
        issLocationPromise,
        peopleInSpacePromise,
      ]);

      const position = {
        lat: issLocation.data.iss_position.latitude,
        lng: issLocation.data.iss_position.longitude,
      };

      this.setState({ position: position, people: peopleInSpace.data.people });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { position, zoom, people } = this.state;
    return (
      <Wrapper>
        <Content>
          <Map
            onViewportChange={this.handleViewportChange}
            zoom={zoom}
            position={position}
          />
          <People people={people}></People>
        </Content>
      </Wrapper>
    );
  }
}

export default App;
