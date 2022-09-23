import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import useFetch from "../useFetch";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import validator from "validator";


import { MuiTelInput } from 'mui-tel-input'














export default function AddressForm() {
  const { error,isPending,data: client} = useFetch("http://localhost:8000/client");


  const handleClick = (e) => {
    console.log("hello", e);
  };


  const history = useHistory();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [GSM1, setGSM1] = useState("");
  const [GSM2, setGSM2] = useState("");
  const [CIN, setCIN] = useState("");
  const [Typology, setTypology] = useState("");
  const [Reference, setReference] = useState("");
  const [Ncompte, setNcompte] = useState("");
  const [objet, setObjet] = useState("");
  let   [Typologie, setTypologie] = useState("");


  const [NomError, setNomError] = useState(false);
  const [PrenomError, setPrenomError] = useState(false);
  const [GSMError, setGSMError] = useState(false);
  const [EmailError , setEmailError]= useState(false)
  const [ObjetError, setObjetError] = useState(false);




  const handleSubmit = (e) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
//      const [open, setOpen] = React.useState(false);
    console.log('submited succefully')

    e.preventDefault();
    setNomError(false);
    setPrenomError(false);
    setGSMError(false);
    setEmailError(false);
    setObjetError(false);


    if (nom && CIN  && Typology && Ncompte && objet == "") {
      setNomError   (true);
      setPrenomError(true);
      setGSMError   (true);
      setEmailError (true);
      setObjetError (true);
    }


    if (true) {

      console.log("fitching if statement is wworking ")
      console.log({nom,prenom,email,GSM1})

      fetch("http://localhost:8000/client", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          GSM1,
          GSM2,
          CIN,
          Typology,
          Reference,
          Ncompte,
          objet,
        }),
      }).then(() => history.push("/history"));


    }
  };



  Typologie = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },

  ]


  const  handleChange = (e) => {
    console.log("typologieee ");
    setTypologie(e.target.value);
  }



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

  }

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (textInput) => {

    if (validator.isPassportNumber(textInput,'IN')) {
      setErrorMessage('Is Valid Passport Number')
    } else {
      setErrorMessage('Is Invalid Passport Number')
    }
  }




  const handleChangeN1 = (newPhone) => {
    setGSM1(newPhone)
  }

  const handleChangeN2 = (newPhone) => {
    setGSM2(newPhone)
  }

  return (


    <React.Fragment>
      <Card elevation={5} variant="outlined" sx={{ maxWidth: 700 }}>
      <CardContent>
    <Typography variant="h6" gutterBottom>
        info client
      </Typography>



      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>


           <TextField
            label="Nom"
            fullWidth
            autoComplete="given-name"
            value={nom}
            variant="standard"
            color="primary"
            type="text"
            required
            error={NomError}
            onChange={(e) => setNom(e.target.value)}
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            value={prenom}
            id="prenom"
            label="Prenom"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            error={PrenomError}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>

          <TextField
            value={CIN}
            required
            id="CIN"
            label="CIN"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onClick ={(e) => validate(e.target.value)}
            onChange={ (e) => setCIN(e.target.value)}
          />

        </Grid>


        <Grid item xs={12} sm={6}>
          <MuiTelInput
              onlyCountries={['MA']}
              value={GSM1}
              onChange={handleChangeN1}
              onClick ={(e) => validate(e.target.value)}
              required
              variant="standard"
              autoComplete="shipping address-line1"
              label="GSM"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiTelInput
              onlyCountries={['MA']}
              value={GSM2}
              onChange={handleChangeN2}
              onClick ={(e) => validate(e.target.value)}
              required
              variant="standard"
              autoComplete="shipping address-line1"
              label="GSM2"
          />

        </Grid>
        <Grid item xs={12}>



        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="E-mail"
            name="E-mail"
            label="Email"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="adress"
            label="adress"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="code Postal"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="primary" name="saveAddress" value="yes" />
            }
            label="Regles d'utilisation"
          />

        </Grid>
      </Grid>

        </CardContent>
      </Card>

    </React.Fragment>
  );
}
