import React from 'react';
import OrderList from './OrderList/OrderList';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <OrderList></OrderList>
        </div>
    );
};

export default Admin;