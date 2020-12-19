import React from 'react';
import { Card, Container, Row, Col, Media } from 'react-bootstrap';
import { PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Posts.scss';
import { IPost } from '../../models';

interface IProps {
    posts: Array<IPost>
}

export function Posts({ posts }: IProps) {

    return (
        <Container fluid>
            {
                posts.map((post: IPost) => (
                    <Row key={post.id}><Col>
                        <Media className="post">
                            <img
                                alt={post.id + ''}
                                src={logo}
                                width="64"
                                height="64"
                                className="align-self-top post-img"
                            />
                            <Media.Body>
                                <Card.Title>
                                    <Link className="post-link" to={`/posts/${post.id}`}>{post.title}</Link>
                                </Card.Title>
                                <Card.Subtitle>
                                    <Link to={`/users/${post.user.id}`}><PersonFill/>{post.user.username}</Link>
                                </Card.Subtitle>
                            </Media.Body>
                        </Media>
                    </Col></Row>
                ))
            }
        </Container>
    );
}
