import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { UserProfile } from '../../components';
import { IUser } from '../../models';
import { getUser } from '../../services';
import './UserProfilePage.scss';

interface IParams {
    id: string;
}

export function UserProfilePage() {
    const [user, setUser] = useState({} as IUser);
    const { id } = useParams<IParams>();

    useEffect(() => {
        getUser(id)
        .then((user: IUser) => setUser(user))
        .catch((user: IUser) => setUser(user))
    }, []);

    return (
        <Card className="user-page">
            <Card.Header>
            <Link to={`/posts`}><ArrowLeftCircleFill className="back" size="40"/>back to Posts</Link>
            </Card.Header>
            <Card.Body>
                <Card.Title>User Profile</Card.Title>
                <UserProfile user={user}/>
            </Card.Body>
        </Card>
    );
}
