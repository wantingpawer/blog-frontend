import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams, Switch, Route, useRouteMatch} from "react-router-dom";

function Topics() {
    const [title, setTitle] = useState("Loading...");
    const [content, setContent] = useState("Loading...");
    const [id, setId] = useState(-1);
    var { topicId } = useParams();
    var match = useRouteMatch();

    useEffect(() => {
        fetch(`/api/posts/${topicId}`)
        .then(res => res.json())
        .then(posts => {
            setTitle(posts.title);
            setContent(posts.content);
            setId(posts.id);})
        .catch(() => {
            setTitle("")
            setContent("An error occured!")
        })
    // eslint-disable-next-line
    }, [])

    if(!topicId){
        return (<div>
            <Router>
                <Switch>
                    <Route path={`${match.path}/:topicId`}>
                        <Topics />
                    </Route>
                    <Route path={match.path}>
                        <p>You find yourself in a strange place...</p>
                    </Route>
                </Switch>
            </Router>

        </div>)
    }else{
        return (<div><h1>{title}</h1>
            <h3>Requested topic ID: {id}</h3>
            <br />
            {content}</div>);
    }
}

export default Topics;