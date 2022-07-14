import {Component} from "react";
import Typography from "@mui/material/Typography";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../components/Common/Button";
import GDSESnackBar from "../../components/Common/Snackbar";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            userName:'admin',
            password:'admin',
            formData:{
                user_name:'',
                password:''
            },
            //for snackbar
            open:false,
            message:'',
            severity:''
        }
    }
    checkValidate(){
        if (this.state.formData.user_name===this.state.userName && this.state.formData.password === this.state.password){
                console.log("equals")
            this.setState({
                open:true,
                message:'Successfully logging.',
                severity:'success'
            })
        }else{
            console.log("not equal")
            this.setState({
                open:true,
                message:'Wrong User_Name or Password.',
                severity:'error'
            })
        }

    }



    render() {
        const { classes } =this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <Typography variant="h4" gutterBottom component="div">
                            Login
                        </Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField  id="outlined-basic" label="User Name" variant="outlined" onChange={(e)=>{
                            let formData=this.state.formData
                            formData.user_name=e.target.value
                            this.setState({formData})
                        }} />
                        <TextField type="password" id="outlined-basic" label="Password" variant="outlined"
                                   onChange={(e)=>{
                                       let formData=this.state.formData
                                       formData.password=e.target.value
                                       this.setState({formData})
                                   }} />

                    </div>
                    <div className={classes.btn_container}>
                        <GDSEButton variant="contained" label="login" onClick={()=>{
                            this.checkValidate()
                        }
                        }/>
                    </div>

                </div>

                <GDSESnackBar
                open={this.state.open}
                onClose={()=>{
                    this.setState({open:false})
                }}
                message={this.state.message}
                autoHideDuration={3000}
                severity={this.state.severity}
                variant="filled"
                />
            </div>
            )
    }
}

export default withStyles(styleSheet)(Login)