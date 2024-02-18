import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { useListContext, DateField, List, TextField, DatagridConfigurable, TopToolbar, SelectColumnsButton, CreateButton, ExportButton, BulkUpdateButton, BulkDeleteButton, SimpleForm, TextInput, Button, useUpdateMany, useNotify, SearchInput, FilterButtonMenuItem } from 'react-admin';
import { LogEdit } from './LogListEdit';


const BulkEditForm = () => {
    const { selectedIds } = useListContext();
    const [update] = useUpdateMany()
    const notify = useNotify();
    const handleSubmit = (data: Partial<any> | undefined) => {
        update(
            "logs",
            { ids: selectedIds, data: { ...data } },
            {
                onSuccess: () => {
                    notify('Changes saved');
                },
                onError: () => {
                    notify('Error: changes not saved');
                },
            }

        )
    }

    return (
        <SimpleForm onSubmit={handleSubmit}>
            <TextInput source="host_name" />
            <TextInput source="ip" />
            <TextInput source="os" />
            <TextInput source="location" />
            <TextInput source="owner" />
        </SimpleForm>)
}

const postFilters = [
    // eslint-disable-next-line react/jsx-key
    <TextInput label="Search" source="q" alwaysOn />,

];


export const LogList = () => {
    const [showBulkEditForm, setShowBulkEditForm] = useState(false);

    const handleShowBulkEditForm = () => {

        setShowBulkEditForm(!showBulkEditForm);
    };


    return (
        <List
            filters={postFilters}
            actions={
                <TopToolbar>

                    <SelectColumnsButton />
                    <CreateButton />
                    <ExportButton />

                </TopToolbar>
            }
        >
            <Dialog open={showBulkEditForm} onClose={handleShowBulkEditForm}>
                <DialogTitle>Bulk Edit</DialogTitle>
                <DialogContent>
                    <BulkEditForm />
                </DialogContent>
            </Dialog>
            <DatagridConfigurable
                rowClick="edit"

                bulkActionButtons={
                    <>
                        <Button label="Bulk Edit" onClick={handleShowBulkEditForm} />
                        <BulkDeleteButton />
                    </>
                }
            >
                <TextField source="host_name" />
                <TextField source="ip" />
                <TextField source="os" />
                <DateField source="timestamp" itemType='datetime' />
                <TextField source="location" />
                <TextField source="owner" />
                <TextField source="id" />
            </DatagridConfigurable>
        </List>
    );
};