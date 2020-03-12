import React, { Component } from 'react'
import * as axios from 'axios'
export default class LetestPhoto extends Component {

    state = {
        photos: [],
        page: 1,
        loading: true,
        searching: false,
        search_query: ''
    }


    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=16&page=' + this.state.page)
            .then(res => this.setState({
                photos: res.data,
                page: this.state.page + 1,
                loading: false
            })
            )
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    loadNextPage = (e) => {
        axios.get('https://api.unsplash.com/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=16&page=' + this.state.page)
            .then(res => this.setState({
                photos: res.data,
                page: this.state.page + 1,
                loading: false
            })
            )
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    searchQuery = (e) => {


        this.setState({ search_query: e.target.value })
    }
    searchTrigger = (e) => {
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&query=' + this.state.search_query + '&per_page=16&page=' + this.state.page)
            .then(res => this.setState({
                photos: res.data.results,
                page: 2,
                loading: false,
                searching: true,
                total_found: res.data.total,
                total_found_pages: res.data.total_pages
            })
            )

    }
    searchResultNext = (e) => {
        axios.get('https://api.unsplash.com/search/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&query=' + this.state.search_query + '&per_page=16&page=' + this.state.page)
            .then(res => this.setState({
                photos: res.data.results,
                page: this.state.page + 1,
                loading: false,
                searching: true,
                total_found: res.data.total,
                total_found_pages: res.data.total_pages
            })
            )
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        var searchHeading = '';
        var searchResult = '';
        var searchInfo = '';
        if (this.state.searching === true) {
            searchResult = <button onClick={this.searchResultNext}>Load more {this.state.page}</button>
            searchHeading = <h2>you need ->  <i>{this.state.search_query}</i></h2>
            searchInfo = <span>total found {this.state.total_found} | pages {this.state.page - 1} of {this.state.total_found_pages}</span>
        }

        else {
            searchResult = <button onClick={this.loadNextPage}>Load more {this.state.page}</button>
            searchHeading = <span><h2 className="Photo-gallery">Photo Gallery</h2></span>
            searchInfo = ''
        }
        if (this.state.loading === true) {
            return (
                <div className="row">
                    <div className="col text-center">
                        <h2>Next Pages</h2>
                    </div>
                </div>
            )
        }


        return (
            <React.Fragment>
                <div className="row tp-heading">
                    <div className="col my-auto"> <h2 className="searchimg-info-ara">{searchHeading} {searchInfo}</h2></div>
                    <div className="col-auto my-auto">
                        <form onSubmit={this.searchTrigger}>
                            <input type="text" value={this.state.search_query} onChange={this.searchQuery} placeholder="search keyword" />
                            <input type="submit" value="search" />
                        </form>
                    </div>
                </div>

                <div className="row">


                    {
                        this.state.photos.map((photo) => (

                            <div key={photo.id} className="col-lg-3">
                                <div className="card mb-2">
                                    <div className="card-body">
                                        <div className="single-photo-item">
                                            <a className="d-block" target="_blank" href={'single/?id=' + photo.id}>
                                                <div className="photo-size">
                                                    <img src={photo.urls.small} alt={photo.user.updated_at} />
                                                </div>
                                                <h2 className="photo-description card-title">{photo.alt_description}</h2>
                                                <p className="catagory-name">Name: {photo.user.first_name}{photo.user.last_name}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="load-more-page">
                            {searchResult}
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}