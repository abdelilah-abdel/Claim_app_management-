import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';






export default function ClaimsCard({ claim, handleDelete }) {
    const  id_c = claim.id
    const  nom = claim.nom
    const  prenom = claim.prenom
    const gsm = claim.GSM1


    return (
                <div>
                    <Card elevation={20}>
                        <CardHeader
                            action={
                                <IconButton onClick={() => handleDelete(claim.id)}>
                                    <DeleteOutlined />
                                </IconButton>
                            }
                            title={claim.nom}
                            subheader={claim.prenom}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                { claim.objet }
                            </Typography>
                        </CardContent>

                    </Card>


                </div>


    )
}