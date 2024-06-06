// src/components/Car.js
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const CarList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="brand" />
            <TextField source="model" />
            <TextField source="price" />
            <TextField source="color" />
            <TextField source="motorType" />
            <TextField source="power" />
            <TextField source="placeNumber" />
            <TextField source="status" />
            <TextField source="type" />
            <EditButton basePath="/car" />
            <DeleteButton basePath="/car" />
        </Datagrid>
    </List>
);

export const CarEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="brand" />
            <TextInput source="model" />
            <TextInput source="price" />
            <TextInput source="color" />
            <TextInput source="motorType" />
            <TextInput source="power" />
            <TextInput source="placeNumber" />
            <TextInput source="status" />
            <TextInput source="type" />
        </SimpleForm>
    </Edit>
);

export const CarCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="brand" />
            <TextInput source="model" />
            <TextInput source="price" />
            <TextInput source="color" />
            <TextInput source="motorType" />
            <TextInput source="power" />
            <TextInput source="placeNumber" />
            <TextInput source="status" />
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);
