import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ArrowLeftCircleFill, PersonFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../../models';
import { getPost } from '../../services';
import { Posts } from '../posts/Posts';
import './PostPage.scss';

interface IParams {
    id: string;
}

export function PostPage() {
    const [post, setPost] = useState({} as IPost);
    const { id } = useParams<IParams>();

    useEffect(() => {
        getPost(id)
        .then((post: IPost) => setPost(post))
        .catch((post: IPost) => setPost(post))
    }, []);

    function renderComments() {
        return post.comments && post.comments.map(comment => (
        <Card key={comment.id} className="comment">
            <Card.Header>
                <Card.Title>{comment.name}</Card.Title>
                <Card.Subtitle>
                    <PersonFill/>{comment.email}
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
        </Card>
        )) || [];
    }
    return (
        <Card className="post-page">
            <Card.Header>
            <Link to={`/posts`}><ArrowLeftCircleFill className="back" size="40"/>back to Posts</Link>
            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>
                {post.user && <Link to={`/users/${post.user.id}`}>
                    <PersonFill className="post-user"/>{post.user.username}
                </Link>}
                </Card.Subtitle>
                <Card.Text>{post.body}</Card.Text>
                <Card className="comments">
                    <Card.Body>
                        <Card.Title>Comments:</Card.Title>
                        {
                            renderComments()
                        }
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
}
