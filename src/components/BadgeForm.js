import React from 'react';

class BadgeForm extends React.Component {
    render(){
        return(
            <div>
                <h1>New Atendant</h1>
                <form>
                    <div className="form-group">
                        <label>Firts Name</label>
                        <input className="form-control" name="firtsName" type="text" />
                    </div>
                    <button className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;