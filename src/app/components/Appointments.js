// src/components/Appointment.js
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const AppointmentList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="carId" />
            <TextField source="name" />
            <TextField source="firstName" />
            <TextField source="email" />
            <TextField source="message" />
            <TextField source="contact" />
            <TextField source="appointmentDate" />
            <TextField source="status" />
            <EditButton basePath="/appointment" />
            <DeleteButton basePath="/appointment" />
        </Datagrid>
    </List>
);

export const AppointmentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="carId" />
            <TextInput source="name" />
            <TextInput source="firstName" />
            <TextInput source="email" />
            <TextInput source="message" />
            <TextInput source="contact" />
            <TextInput source="appointmentDate" />
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export const AppointmentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="carId" />
            <TextInput source="name" />
            <TextInput source="firstName" />
            <TextInput source="email" />
            <TextInput source="message" />
            <TextInput source="contact" />
            <TextInput source="appointmentDate" />
            <TextInput source="status" />
        </SimpleForm>
    </Create>
);
