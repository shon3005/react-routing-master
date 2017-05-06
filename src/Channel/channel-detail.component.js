/**
 * Created by shaunchua on 4/25/17.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Channel from './channel.component';

class ChannelDetail extends Component {
    handleRedirect(){
        browserHistory.push('/channels');
    }
    render(){
        const channels = props.data;
        const id = this.props.params.id;
        const channel = channels.filter(channel => {
            if(channel.id == id) {
                return channel;
            }
        });

        // coach: object.get('oneLiner'),
        //     urlId: object.objectId,
        //     channel: object.get('title'),
        //     description: object.get('description'),
        //     tags: object.get('tags')
        return (
            <div>
                <h1>{channel[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            {/*<img src={channel[0].media} alt={channel[0].name} />*/}
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ul>
                            <li><strong>Channel</strong>: {channel[0].channel}</li>
                            <li><strong>Coach</strong>: {channel[0].coach}</li>
                            <li><strong>Description</strong>: {channel[0].description}</li>
                            <li><strong>Tags</strong>: {channel[0].tags}</li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Channels</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelDetail