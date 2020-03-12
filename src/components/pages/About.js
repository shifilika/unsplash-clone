import React, { Component } from 'react'
import * as axios from 'axios'
export default class About extends Component {
    state = {
        photo: [],
        loading: true,
        tags: []
    }

    componentDidMount = () => {
        let search = window.location.search;

        let params = new URLSearchParams(search);

        let photo_id = params.get('id');

        axios.get('https://api.unsplash.com/photos/' + photo_id + '/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821')
            .then(res => this.setState({
                photo: res.data,
                loading: false,
                tags: res.data.tags
            })
            )

    }

    render() {
        const { photo, loading } = this.state
        return (
            // this.state.photo.tags.map((photo_title)=> (

            // ))
            <div>
                <div className="single-photo-wrappen">
                    <div className="single-photo-info">
                        {/* {this.state.tags.map((tag, index) => {
                            return <span class="badge badge-primary">{tag.title}</span>
                        })} */}




                    </div>
                </div>
                {loading && <h1>Loading ...</h1>}
                {!loading && (
                    <div>

                        <ul>
                            <li><label htmlFor="uploaded_by">Uploaded By : {photo.user.first_name}</label></li>
                            <li><label htmlFor="uploaded_date">Uploaded Date :{photo.updated_at} </label></li>
                            <li><label htmlFor="download">Download link : <a href={photo.links.download}>{photo.links.download}</a> </label></li>
                            <li><label htmlFor="Portfolio">Portfolio : <a href={photo.user.portfolio_url}>{photo.user.portfolio_url}</a> </label></li>
                        </ul>
                        <img style={{ maxWidth: "100%" }} src={this.state.photo.urls.full} alt="" />
                    </div>
                )}

            </div>
        )
    }
}
