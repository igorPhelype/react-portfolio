import React from 'react';
import { GalleryAppBar } from ".";

const withGalleryAppMain = (name) => (Component) => {
    console.log("withGalleryAppMain", {name});
    const GalleryAppMainProvider = (props) => (
        <GalleryAppBar>
            <Component />
        </GalleryAppBar>
    );
    return GalleryAppMainProvider;
}

export default withGalleryAppMain;