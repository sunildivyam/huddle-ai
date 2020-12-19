import React from 'react';
import { Card } from 'react-bootstrap';
import { PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { IPost } from '../../models';

interface IProps {
    post: IPost;
}
export function Post({ post }: IProps) {

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
        <>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle>
                {post.user && <Link to={`/users/${post.user.id}`}>
                    <PersonFill className="post-user" />{post.user.username}
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
        </>
    );
}
