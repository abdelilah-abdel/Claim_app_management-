import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import {Button} from "@material-ui/core";



export default function PaymentForm() {


  let   [Typologie, setTypologie] = useState("");
  const [Reference, setReference] = useState("");
  const [Ncompte, setNcompte] = useState("");
  const [objet, setObjet] = useState("");


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

  const [GSMError, setGSMError] = useState(false);
  const [EmailError , setEmailError]= useState(false)
  const [ObjetError, setObjetError] = useState(false);


  return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Contenu de Reclamation
        </Typography>
        <Grid container spacing={3}>

          <Grid item xs={12} >

            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Typologie
            </InputLabel>

            <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'Typologie',
                  id: 'uncontrolled-native',
                }}
            >
              {Typologie.map((Typologie) => (
                  <option value={Typologie.value}>{Typologie.label}
                  </option>

              ))}
            </NativeSelect>
          </Grid>




          <Grid item xs={12}>
            <TextField
                required
                id="Reference"
                value={Reference}
                label="Reference"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
                onChange={(e) => setReference(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                required
                value={Ncompte}
                id="N_compte"
                label="Numero de compte "
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
                onChange={(e) => setNcompte(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                required
                id="Objet de reclamation"
                label="Objet de reclamation"
                multiline
                rows={10}
                helperText="preciser l'objet et le type de reclamation"
                fullWidth
                variant="standard"
                autoComplete="cc-csc"
                rules={{required: "Required!"}}
                onChange={(e) => setObjet(e.target.value)}
                value={objet}
                error={ObjetError}
            />
          </Grid>

          <Grid item xs={12}>
          <Button component="label" variant="outlined" >
              Telecharger des fichiers
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>
        </Grid>

      </React.Fragment>
  );
};