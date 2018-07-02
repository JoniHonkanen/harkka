import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from './event/EventDashboard/EventDashboard';
import NaVBar from './nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NaVBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
