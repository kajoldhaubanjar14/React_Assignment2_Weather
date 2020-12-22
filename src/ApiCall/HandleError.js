import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class HandleError extends Component {
    RefreshPage() {
        window.location.reload(false);
      }
    render() {
        let errors = this.props.data;
        return (
            <div style={{
                backgroundColor:'rgba(0, 200, 200, 0.6)'
                , boxShadow: '0px 0px 30px 10px green',
                color:'black',
                 fontFamily:'sans-serif'
                  ,fontSize:50,
                   fontWeight:'bold',
                   marginTop:"20%"}}>
                {
                    errors === 3?<div>Weather Forcasting<br/> Using Open Weather API & React</div>:
                    <div> Invalid City Name<br/>
                    <Button onClick={this.RefreshPage} variant="outlined" style={{backgroundColor:"lightblue", padding:10, borderRadius:5}}>
                    Retry
                    </Button>
                    </div>

                }
            </div>
        );
    }
}

export default HandleError;