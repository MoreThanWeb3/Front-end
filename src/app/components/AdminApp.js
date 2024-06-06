// src/components/AdminApp.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../../dataProvider';
import { AppointmentList, AppointmentEdit, AppointmentCreate } from './Appointments';
import { CarList, CarEdit, CarCreate } from './car';
import { ImageList, ImageEdit, ImageCreate } from './images';
import { UserList, UserEdit, UserCreate } from './Users';

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="appointment" list={AppointmentList} edit={AppointmentEdit} create={AppointmentCreate} />
        <Resource name="car" list={CarList} edit={CarEdit} create={CarCreate} />
        <Resource name="image" list={ImageList} edit={ImageEdit} create={ImageCreate} />
        <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
);

export default AdminApp;
