import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'


export default function ClaimsCard({ claim, handleDelete }) {
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