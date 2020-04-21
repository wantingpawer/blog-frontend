import React from "react";
import { Link } from "react-router-dom";

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            loading: true,
        };
    }

    componentDidMount = ()  => {
        fetch('/api/posts')
        .then(res => res.json())
        .then(posts => {
            this.setState({"loading": false});
            return this.setState({posts: [posts.data]})})
        .catch(() => {
            this.setState({"loading": false});
            return this.setState({posts: "ERROR"})
        });
    }

    render() {
        /*PostComponents is equal to loading to begin with. When it
        receives the data it needs, or an error occurs, it maps the 
        list because for some reason it starts out in a list of objects.
        Each object (there's only 1 object) is then mapped for the ID 
        and title, which is then turned into a component ready to be rendered on screen.
        The "class="postTitle"" thing is simply for the CSS.*/
        const postComponents = this.state.loading ? <li>Loading...</li> :
            this.state.posts === "ERROR" ? <p>An Error Occurred</p> :
            this.state.posts.map(post => {
                return(
                    post.map(post => <div><Link  className="postTitle" 
                                            to={`/topics/${post.id}`}>{post.title}</Link>
                                            <br />
                                    </div>))
            });
        return(
            <div className="content">
                <h1>Body</h1>
                {postComponents}
            </div>
        );
    }
}

export default Body;