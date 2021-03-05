import React from 'react';
import weatherData from '../data/weatherData'
import {Accordion, Card, Container, Row, Col} from 'react-bootstrap'
import WeatherArrow from './weatherArrow';
import {FaArrowDown} from 'react-icons/fa';

export default class DisplayData extends React.Component{
    state = {
        data: []
      }

    componentDidMount(){
        this.setState({data: weatherData.days})   
    }

    windSpeedChange(event){
        if(event.target.value === 'Km/h'){
            weatherData.windSpeed= 'Km/h';
            console.log(weatherData.windSpeed)
            for (let i = 0; i < weatherData.days.length; i++) {
               weatherData.days[i].windSpeed = weatherData.days[i].windSpeed*3.6 ;
                
                
            }
        }
        else if(event.target.value === 'm/s'){
            weatherData.windSpeed= 'm/s';
            console.log(weatherData.windSpeed)
            for (let i = 0; i < weatherData.days.length; i++) {
                weatherData.days[i].windSpeed = weatherData.days[i].windSpeed/3.6 ;
                
                 
             }
        };
    }

    tempUnitChange(event){
        if(event.target.value === 'C'){
            weatherData.tempUnit= 'C';
            
            for (let i = 0; i < weatherData.days.length; i++) {
               weatherData.days[i].temp = weatherData.days[i].temp+273.15 ;
               console.log(weatherData.days[i].temp)  
            }
        }
        else if(event.target.value === 'K'){
            weatherData.tempUnit= 'K';
            for (let i = 0; i < weatherData.days.length; i++) {
                weatherData.days[i].temp = weatherData.days[i].temp-273.15 ;
                console.log(weatherData.days[i].temp)
            }
        };
    }
    render() {
        return (
            <div className="WeatherData">
                <div className="promeni-edinici">
                    <Container>
                        <Row>
                            <Col onChange={this.windSpeedChange}>
                            <h4>Change wind speed unit</h4>
                            <input type="radio" value="Km/h" name="brzina" /> KM/h
                            <input type="radio" value="m/s" name="brzina" /> m/s
                            </Col>

                            <Col onChange={this.tempUnitChange}>
                            <h4>Change temperature unit</h4>
                            <input type="radio" value="C" name="brzina" /> &deg;C
                            <input type="radio" value="K" name="brzina" /> &deg;K
                            </Col>
                        </Row>
                    </Container>
                </div>
               
                
                { this.state.data.map(day => 
                <Accordion>
                    <Card key={day.id}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        {day.day}, {day.temp} &deg;{weatherData.tempUnit} <span className="ikona-dropdown"><FaArrowDown/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Wind Direction: {day.windDirection} <WeatherArrow direction ={day.windDirection}/><br/>
                            Wind Speed: {day.windSpeed}<br/>
                            Type: {day.type}
                            
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                )}
 
</div>
        
         
        )
      }
    }