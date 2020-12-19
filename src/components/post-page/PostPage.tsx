import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../../models';
import { getPost } from '../../services';
import { Post, Loader } from '../../components';
import './PostPage.scss';

interface IParams {
    id: string;
}

export function PostPage() {
    const [post, setPost] = useState({} as IPost);
    const { id } = useParams<IParams>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getPost(id)
        .then((post: IPost) => {setPost(post); setLoading(false);})
        .catch((post: IPost) => {setPost(post); setLoading(false);})
    }, []);

    return (
        <>
        <Card className="post-page">
            <Card.Header>
            <Link to={`/posts`}><ArrowLeftCircleFill className="back" size="40"/>back to Posts</Link>
            </Card.Header>
            <Card.Body>
                <Post post={post}></Post>
            </Card.Body>
        </Card>

        <Loader loading={loading} />
        </>
    );
}
