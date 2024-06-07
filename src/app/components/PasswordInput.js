// src/components/PasswordInput.js
import React from 'react';
import { TextInput } from 'react-admin';

const PasswordInput = (props) => (
    <TextInput {...props} type="password" />
);

export default PasswordInput;
