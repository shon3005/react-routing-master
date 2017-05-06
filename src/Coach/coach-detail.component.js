/**
 * Created by shaunchua on 4/25/17.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CoachDetail extends Component {
    constructor(props) {
        super(props);

    }

    handleRedirect(){
        browserHistory.push('/coaches');
    }
    render(){
        console.log(this.props.params.data);
        const coaches = this.props.params.data;
        const id = this.props.params.id;
        const coach = coaches.filter(coach => {
            if(coach.id == id) {
                return coach;
            }
        });

        // name: object.get('name'),
        //     urlId: object.objectId,
        //     image: object.get('image'),
        //     description: object.get('description'),
        //     website: object.get('website'),
        //     tags: object.get('tags')
        return (
            <div>
                <h1>{coach[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={coach[0].image} alt={coach[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ul>
                            <li><strong>Coach</strong>: {coach[0].name}</li>
                            <li><strong>Website</strong>: {coach[0].website}</li>
                            <li><strong>Description</strong>: {coach[0].description}</li>
                            <li><strong>Tags</strong>: {coach[0].tags}</li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Coaches</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoachDetail