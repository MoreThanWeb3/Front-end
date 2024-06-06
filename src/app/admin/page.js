// src/app/admin/page.js
"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const AdminApp = dynamic(() => import('../components/AdminApp'), { ssr: false });

const Admin = () => <AdminApp />;

export default Admin;
