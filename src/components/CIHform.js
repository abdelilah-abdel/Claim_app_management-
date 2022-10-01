import React, { useState } from 'react'
import {Button, TextField, InputAdornment, Typography} from "@material-ui/core";
 import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { useHistory } from 'react-router-dom';
import useFetch from "./useFetch";
import validator from 'validator';
import Card from '@material-ui/core/Card'
 import CardContent from '@material-ui/core/CardContent'
import ReCAPTCHA from "react-google-recaptcha";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {DoubleFooter} from "./footer";
import {Anchor, PageHeader} from "grommet";
import Checkbox from "@mui/material/Checkbox";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';






function CIHform() {
    const { error,isPending,data: client} = useFetch("http://localhost:8000/client");


  const handleClick = (e) => {
    console.log("hello", e);
  };
    const [checked, setChecked] = React.useState(true);



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


    if (checked==true) {

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
      label: "Typologie 1",
      value: "Typologie 1",
    },
    {
      label: "Typologie 2",
      value: "Typologie 2",
    },
    {
      label: "Typologie 3",
      value: "Typologie 3",
    },
    {
      label: "Typologie 4",
      value: "Typologie 4",
    },

  ]







const  handleChange = (e) => {
    console.log("typologieee ");
    setTypologie(e.target.value);
    setChecked(e.target.checked);
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

    function onChange(value) {
        console.log("Captcha value:", value);
    }

  return (
      <div className="gradiant">
           <div className="create">
              <h3> Formulaire de réclamation </h3>

    <Card elevation={5} variant="outlined" sx={{ maxWidth: 700 }}>
        <cardHeader Claims form />



        <CardContent>
            <form  autoComplete="off" onSubmit={handleSubmit}>
                <h2> info de client </h2>
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
                    <UploadFileIcon />  Telecharger des fichiers
                    <input hidden accept="image/*" multiple type="file"  />
                </Button>

                <br/><br/><br/>
                <p>Ce traitement a été notifié et autorisé par la CNDP au titre du récépissé N° D-W-85/2015. Conformément à la loi n° 09-08, vous bénéficiez d’un droit d’accès, de rectification et d’opposition aux traitement de vos données personnelles auprès de la Direction Communication Institutionnelle, Adresse : Quartier Cil, 397-Bd Bd Sidi Abderrahmane, Casablanca 2000 </p>
<div>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                /> <p>J’ai lu et j’accepte les conditions générales d’utilisation, notamment la mention relative à la protection des données personnelles et je consens à recevoir les offres des produits et services du Groupe Banque Populaire.
                </p>
</div>
                <ReCAPTCHA
                    sitekey="6Lf8XC8iAAAAAPaHln3yPQqVaNBbqHkeX1Gas1SS"
                    onChange={handleClick}
                />
                <br/><br/><br/>

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
                <Button color="error" onClick={handleClick} endIcon={<RotateLeftIcon />}>
                    Reset
                </Button>
            </form>

        </CardContent>

    </Card>


    </div>
          <div>
              <DoubleFooter />
          </div>
      </div>
  );




}






export default CIHform;


