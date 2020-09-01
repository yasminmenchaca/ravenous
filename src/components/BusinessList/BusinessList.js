import React from 'react';
import './BusinessList.css';
import Business from "../Business/Business";

class BusinessList extends React.Component {
    render() {
        return (
            <div>
                <div className="BusinessList">
                    <Business/>
                    <Business/>
                    <Business/>
                    <Business/>
                    <Business/>
                    <Business/>
                </div>
            </div>
        );
    }
}

export default BusinessList;