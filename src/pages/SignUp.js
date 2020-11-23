import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
//import {  } from '';

export default class Login extends React.Component {
  state = {
    userid: '',
    passwd: '',
    passcheckid:'',
    email:''
  }

  handleChangeId = event => {
    this.setState({ userid: event.target.value });
  }

  handleChangePw = event => {
    this.setState({ passwd: event.target.value });
  }
  handleChangePwConfirm = event => {
    this.setState({ passcheckid: event.target.value });
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      userid: this.state.userid,
      passwd: this.state.passwd
    };

    console.log(user)

    axios.post('http://localhost:3001/api/login', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  // 위치: http://localhost:3000/login
  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ position:'absolute',top:'50%', left:'50%',transform:'translate(-50%, -50%)'}}>
        <div className="login" style={{alignSelf:'center'}}>
            <Typography component="h1" variant="h5">
                SignUp
            </Typography>
            <form onSubmit={this.handleSubmit} style={{marginTop:20}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            type="text"
                            name="userid"
                            fullWidth
                            onChange={this.handleChangeId}
                            label="User ID"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            type="email"
                            name="email"
                            fullWidth
                            onChange={this.handleChangeEmail}
                            label="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            type="password"
                            name="passwd"
                            fullWidth
                            onChange={this.handleChangePw}
                            label="User Password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            type="password"
                            name="passwd-confirm"
                            fullWidth
                            onChange={this.handleChangePwConfirm}
                            label="User Password"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                            Sign Up
                    </Button>
                    <Link to={'/'}>
                    <Typography component="h1" variant="h5" style={{marginLeft:70, marginTop:20}}  >
                      Already have an account?
                    </Typography>
                    </Link>
                    
                </Grid>
            </form>
        </div>
      </Container>
    )
  }
}
