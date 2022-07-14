import React, {Component, Fragment} from "react";
import Greeting from "../../components/Home/Greeting";
import Countable from "../../components/Home/Countable";
import Divider from "@mui/material/Divider";
import Login from "../login";


class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                {/*<Greeting name="GDSE"/>
                <Divider light/>
                <Countable/>*/}
                <Login/>
            </Fragment>
            )
    }
}

export default HomePage