import React from 'react';

const DocumentViewerPage: React.FC = () => {
    return (
        <iframe
            src="/files/VGU Conference 50 year poster_Final.pdf"
            title="VGU Conference 50 Year Poster"
            width="100%"
            height="1000px"
            style={{
                border: 'none',
                display: 'block',
                margin: '0 auto',
            }}
        />
    );
};

export default DocumentViewerPage;
