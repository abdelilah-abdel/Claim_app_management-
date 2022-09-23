import React, { useState } from 'react'
 import typography  from '@material-ui/core/Typography'
import {Button, TextField, InputAdornment, Typography} from "@material-ui/core";
import Home from "./home"
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from 'react-router-dom';
import useFetch from "./useFetch";
import validator from 'validator';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'






function CIHform() {
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


  return (
  <div className="create">

    <Card elevation={5} variant="outlined" sx={{ maxWidth: 700 }}>
        <cardHeader Claims form />



        <CardContent>
            <form  autoComplete="off" onSubmit={handleSubmit}>
                <label>Nom:</label>

                <input
                    value={nom}
                    variant="outlined"
                    color="secondary"
                    type="text"
                    required
                    error={NomError}
                    onChange={(e) => setNom(e.target.value)}
                />

                <label>prenom:</label>
                <input
                    value={prenom}
                    variant="outlined"
                    color="secondary"
                    type="text"
                    required
                    error={PrenomError}
                    onChange={(e) => setPrenom(e.target.value)}
                />

                <label>CIN :</label>
                <input
                    value={CIN}
                    variant="outlined"
                    color="secondary"
                    type="text"
                    required
                    onClick ={(e) => validate(e.target.value)}
                    onChange={ (e) => setCIN(e.target.value)}

                />

                <label>Email :</label>
                <input
                    value={email}
                    variant="outlined"
                    color="secondary"
                    type="email"
                    required
                    error={EmailError}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>GSM principal :</label>
                <input
                    value={GSM1}
                    variant="outlined"
                    color="secondary"
                    type="number"
                    required
                    error={GSMError}
                    onChange={(e) => setGSM1(e.target.value)}
                />

                <label>GSM secondaire :</label>
                <input
                    value={GSM2}
                    variant="outlined"
                    color="secondary"
                    type="number"
                    onChange={(e) => setGSM2(e.target.value)}
                />




                <Typography mt={2} variant="h1" component="h2">
                    Contenue de Reclamation
                </Typography>


                <label>Typologie:</label>
                <select  onChange= {(e) => setTypologie(e.target.value)} >

                    {Typologie.map((Typologie) => (
                        <option value={Typologie.value}>{Typologie.label}
                        </option>

                    ))}
                </select>

                <label> Reference : </label>
                <input
                    value={Reference}
                    variant="outlined"
                    color="secondary"
                    type="text"
                    onChange={(e) => setReference(e.target.value)}
                />


                <label> Numero de compte : </label>

                <input
                    value={Ncompte}
                    variant="outlined"
                    color="secondary"
                    type="text"
                    onChange={(e) => setNcompte(e.target.value)}
                />


                <label> l'objet de reclamation : </label>
                <TextField
                    onChange={(e) => setObjet(e.target.value)}
                    label="Objet"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={10}
                    fullWidth
                    required
                    value={objet}
                    error={ObjetError}
                />

                <Button component="label">
                    Telecharger des fichiers
                    <input hidden accept="image/*" multiple type="file" />
                </Button>

                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClick}
                    //startIcon={<IosShareOutlinedIcon />}
                    endIcon={<SendOutlinedIcon />}
                >
                    Submit
                </Button>




                <br/>
                <br/>
                <Button color="error" onClick={handleClick}>
                    Reset
                </Button>
            </form>

        </CardContent>

    </Card>


    </div>
  );




}






export default CIHform;


