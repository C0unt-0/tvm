import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { Grid } from '@mui/material';

export const LogEdit = () => (
    <Edit>
        <SimpleForm>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextInput source="host_name" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextInput source="ip" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextInput source="os" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <DateInput source="timestamp" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextInput source="location" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextInput source="owner" fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextInput source="id" fullWidth />
                </Grid>
            </Grid>
        </SimpleForm>
    </Edit>
);