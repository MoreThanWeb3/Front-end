// src/components/AdminApp.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../dataProvider';
import { CarList, CarEdit, CarCreate } from './car';
import { UserList, UserEdit, UserCreate } from './Users';
import { ImageList, ImageEdit, ImageCreate } from './images';

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="cars" list={CarList} edit={CarEdit} create={CarCreate} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="images" list={ImageList} edit={ImageEdit} create={ImageCreate} />
    </Admin>
);

export default AdminApp;
