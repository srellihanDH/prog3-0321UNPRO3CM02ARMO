import React from 'react';
import Category from '../Category/Category';

function Categories(){
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    <Category category='Category 01'/>
                    <Category category='Category 02'/>
                    <Category category='Category 03'/>
                    <Category category='Category 04'/>
                    <Category category='Category 05'/>
                    <Category category='Category 06'/>
                </div>
            </div>
        </div>

    );
}

export default Categories