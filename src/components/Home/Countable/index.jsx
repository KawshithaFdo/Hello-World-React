import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

class Countable extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    incrementCount(){
        this.setState({
            count:this.state.count + 1
        })
    }
    decrementCount(){
        this.setState({
            count:this.state.count - 1
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    Count:{this.state.count}
                </Typography>
                <Button
                    variant="contained"
                    onClick={()=>{
                       this.incrementCount()
                    }}
                    >Increse!</Button>
                <Button
                    variant="outlined"
                    onClick={()=>{
                        this.decrementCount()
                    }}
                    style={{marginLeft:"15px"}}
                >Decrese!</Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={()=>{
                        this.reset()
                    }}
                    style={{marginLeft:"15px"}}
                >reset</Button>
            </div>
        );
    }
}
export default Countable