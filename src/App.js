import React, { Component} from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./App.css";
import { Notify, Swal } from "./components/Notification";

class App extends Component{

    componentDidMount()
    {
        Notify('info', 'Noty is here!');
        Swal('success', 'Swal is Here!', 'And Working!');
    }

  render(){
    return(
      <div className="App">
        <Typography variant="display1" gutterBottom>
          React is here.
        </Typography>
        <Button color="primary">
          MetroUI is Here
        </Button>
      </div>
    );
  }
}

export default App;
