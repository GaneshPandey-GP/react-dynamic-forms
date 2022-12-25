import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


const theme = createTheme();

export default function DynamicForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
const [inputfield ,setInputfield]=React.useState([{fname:"",lname:"",email:"",age:""}]);



const handleFormChange = (event, index) => {
  let data = [...inputfield];
  data[index][event.target.name] = event.target.value;
  setInputfield(data);
}

const submit = (e) => {
  e.preventDefault();
  console.log(inputfield)
}

const addFields = () => {
  let object = {fname:"",lname:"",email:"",age:""}
  setInputfield([...inputfield, object])
}

const removeFields = (index) => {
  console.log('hello',index)
  let data = [...inputfield];
  data.splice(index, 1)
  setInputfield(data)
}

const handleInput = (e) =>{
console.log(e.target.value)
}
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Dynamic Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {inputfield.map((form, index) => {
            return(
            <Grid container spacing={2} style={{marginTop:'10px'}} key={index}>
             
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  name="fname"
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                  value={form.fname}
                  onChange={(e)=>handleFormChange(e,index)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                 
                  value={form.lname}
                  onChange={(e)=>handleFormChange(e,index)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  
                  value={form.email}
                  onChange={(e)=>handleFormChange(e,index)}
                />
              </Grid>
              <Grid item xs={12}>

              <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
        fullWidth
          labelId="demo-simple-select-label"
          id="age"
          name="age"
          value={form.age}
          label="Age"
          onChange={(e)=>handleFormChange(e,index)}
        
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

                
              </Grid>
              {index>0?<Button onClick={(e)=>removeFields(index)}>Remove</Button>:<></>}
            </Grid>
            )
          })}
          <Button onClick={addFields}>Add More</Button>
          <Button onClick={submit}>submit</Button>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}