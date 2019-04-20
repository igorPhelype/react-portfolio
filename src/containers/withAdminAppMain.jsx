import React from 'react';
import { GalleryAppBar, AdminAppBar } from ".";

const withAdminAppMain = (name) => (Component) => {
    console.log("withAdminAppMain", {name});
    const AdminAppMainProvider = (props) => (
        <AdminAppBar>
            <Component />
        </AdminAppBar>
    );
    return AdminAppMainProvider;
}

export default withAdminAppMain;