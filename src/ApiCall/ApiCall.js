import React, { Component } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import HandleError from './HandleError';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import background from './images/bgg.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';



class ApiCall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            api_data: {},
            loading: false,
            error: 3
        }
    }

    
    getApiData = () => {
        this.start_loading();
        let self = this;
        let city = this.state.location;
        let Key = "4f3ecbef0d9353e9552575150c31db89";
        
        var api_url = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid="+ Key;
        console.log(api_url);
        axios.get(api_url)
            .then(function (response) {
                self.setState({
                api_data: response.data,
                loading: false,
                error:1
            })

            }
            ).catch(function (error){
                self.setState({
                    loading:false,
                    error:2
                })
                return;
            });

    };

    handleChange=(event)=>{
       
        this.setState({
            [event.target.name]:event.target.value
        })
  
      };

    start_loading(){
        this.setState({
            loading: true
        })
    }

    stop_loading(){
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div style={{height:'100vh',backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} >
            
                <AppBar position="static" style={{color:'Primary'}}>
                    <Toolbar>
                
                        <Typography variant="h6">
                            Search With City Name to Get Current Weather Condition of Your City
                        </Typography>
                        <div style={{marginLeft: '30%'}}>
                <TextField style={{padding:0, backgroundColor: 'whitesmoke', borderRadius: '30px 0px 0px 30px', }} id="outlined-basic" label="Enter City Name"  name="location" onChange={this.handleChange}/>           
                        <Button variant="outlined" color="inherit" style={{marginLeft: 0, padding: 10, borderRadius: '0px 30px 30px 0px'}} onClick={this.getApiData} >
                            Search
                        </Button>
                        </div>
                        
                    </Toolbar>
                </AppBar>
                
                <div style={{textAlign:'center'}}>
                {
                    this.state.loading ? <div><CircularProgress color="secondary" /></div> : <div>
                    </div>
                }
                {
                    this.state.error === 1 ? <div>{
                            <WeatherCard data={this.state.api_data} />
                        }</div>:<div>
                            <HandleError data = {this.state.error}/>
                        </div>
                }
                </div>
            </div>
        );
    }
}

export default ApiCall;