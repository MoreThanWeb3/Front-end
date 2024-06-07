// src/components/Images.js
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ImageList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="url" />
            <EditButton basePath="/images" />
            <DeleteButton basePath="/images" />
        </Datagrid>
    </List>
);

export const ImageEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);

export const ImageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);
