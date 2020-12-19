import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { getPosts } from '../../services';
import { IPost } from '../../models';
import { Posts } from '../../components';

import './PostsPage.scss';

export function PostsPage() {
    const [posts, setPosts] = useState([] as Array<IPost>);

    useEffect(() => {
        getPosts().then(posts => setPosts(posts)).catch(posts => setPosts(posts));
    }, []);

    return (
        <Card>
            <Card.Body>
                <Card.Title>Posts</Card.Title>
                <Posts posts={posts}/>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
        </Card>
    );
}
