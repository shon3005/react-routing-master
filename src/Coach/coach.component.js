/**
 * Created by shaunchua on 4/25/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import Parse from 'parse';
import CoachDetail from './coach-detail.component'



class Coach extends Component {

    constructor() {
        super();
        Parse.initialize("appid", "mkey");
        Parse.serverURL = 'https://sentience.herokuapp.com/parse';

        this.state = {coachData: []};

        var Coaches = Parse.Object.extend("Profile");
        var coachesQuery = new Parse.Query(Coaches);
        coachesQuery.equalTo("isCoach", true);
        coachesQuery.find().then((results) => {
            //console.log(results);
            let localCoaches = [];
            for (var i = 0; i < results.length; i++) {
                //console.log('forloop called');
                var object = results[i];
                localCoaches.push({
                    id: 1+i,
                    name: object.get('name'),
                    urlId: object.objectId,
                    image: object.get('image'),
                    description: object.get('description'),
                    website: object.get('website'),
                    tags: object.get('tags')
                });
            };
            this.setState({coachData: localCoaches});
            console.log(this.state.coachData);

        }, function(error) {
            alert("Error: " + error.code + " " + error.message);
        });
    };

    render(){
        // Get data from route props
        //const coaches = this.props.route.data;
        //const coaches = this.state.coachData;
        // Map through cars and return linked cars
        //console.log(this.state.coachData);
        {/*<CoachDetail shuandata={this.state.coachData}/>*/}

        var coachNode = this.state.coachData.map((coach) => {
            return (
                <Link
                    to={"/coaches/" + coach.id}
                    className="list-group-item"
                    key={coach.id}
                    data={this.state.coachData}>
                    {coach.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Coaches page</h1>
                <div className="list-group">
                    {coachNode}
                </div>
            </div>
        );
    };

}

export default Coach
