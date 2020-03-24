import React from 'react';

class directory extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            state: 'temp'
        }
    }

    render(){
        return (
            <div className="directory">
                This is the directory!
            </div>
        )
    }
}

export default directory;