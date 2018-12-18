import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { setCity } from './actions/'
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from "./components/LocationList";
import ForecastExtended from './components/ForecastExtended';
//import Location from "./components/WeatherLocation/Location";
import { store } from './store/'
import './App.css';

const cities = [
  "Ciudad de México,mx",
  "Buenos Aires,ar",
  "Moscow,ru",
  "Guadalajara,mx",
  "Madrid,es"
]


class App extends Component {

  constructor(){
    super();
    this.state = { city: null }
  }


  handleSelectedLocation = city => {
    this.setState({ city })
    //console.log("handleSelectedLocation", city);
  
    store.dispatch(setCity(city));
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
            {
              city &&
              <ForecastExtended city={city}></ForecastExtended>
            }
            </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
