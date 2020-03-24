import React from 'react';

class homePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sectionPreviews:[{
                name: 'Art',
                types: ['painting', 'drawing']
            },
            {
                name: 'Visuals'
            },
            {
                name: 'Flow Art',
                types: ['gloving', 'orbital', 'slinky', 'hoops']
            },
            {
                name: 'Mixes'
            },
            {
                name: 'Music'
            }]
        }
    }

    render(){
        return (
            <div className="homepage">
                This is the homepage!
            </div>
        )
    }
}

export default homePage;