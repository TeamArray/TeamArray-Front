import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import {  } from '';

export default class Login extends React.Component {
  state = {
    userid: '',
    passwd: '',
  }

  handleChangeId = event => {
    this.setState({ userid: event.target.value });
  }

  handleChangePw = event => {
    this.setState({ passwd: event.target.value });
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
      <Container component="main" maxWidth="xs">
        <div className="login">
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form onSubmit={this.handleSubmit}>
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
                            type="text"
                            name="passwd"
                            fullWidth
                            onChange={this.handleChangePw}
                            label="User Password"
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                            Login
                    </Button>
                </Grid>
            </form>
        </div>
      </Container>
    )
  }
}
