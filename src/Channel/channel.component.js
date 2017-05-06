/**
 * Created by shaunchua on 4/25/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import Parse from 'parse';

class Channel extends Component {

    constructor() {
        super();

        Parse.initialize("appid", "mkey");
        Parse.serverURL = 'https://sentience.herokuapp.com/parse';

        this.state = {channelData: []};

        var Channels = Parse.Object.extend("Routines");
        var channelsQuery = new Parse.Query(Channels);
        channelsQuery.find().then((results) => {
            // Do something with the returned Parse.Object values
            let localChannels = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                localChannels.push({
                    id: 1+i,
                    coach: object.get('oneLiner'),
                    urlId: object.objectId,
                    channel: object.get('title'),
                    description: object.get('description'),
                    tags: object.get('tags')
                });
            };
            this.setState({channelData: localChannels})
            //console.log(this.state.channelData);
        }, function(error) {
            alert("Error: " + error.code + " " + error.message);
        });
    }

    render(){
        // Get data from route props
        // Map through cars and return linked cars
        const channelNode = this.state.channelData.map((channel) => {
            return (
                <Link
                    to={"/channels/"+channel.id}
                    className="list-group-item"
                    key={channel.id}>
                    {channel.channel}
                </Link>
            )
        });
        return (
            <div>
                <h1>Channels page</h1>
                <div className="list-group">
                    {channelNode}
                </div>
            </div>
        );
    }
}

export default Channel
