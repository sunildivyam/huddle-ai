import React from 'react';
import { Card, Container, Row, Col, Badge, Media } from 'react-bootstrap';
import { Mailbox, Person, Globe } from 'react-bootstrap-icons';
import { IUser } from '../../models';
import './UserProfile.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

interface IProps {
    user: IUser
}

export function UserProfile({ user }: IProps) {

    return (
        <Media className="user-profile">
            <img
                alt={user.name}
                src={logo}
                width="120"
                height="120"
                className="align-self-top post-img"
            />
            <Media.Body>
                <Card>
                    <Card.Header>
                        <Card.Title>{user.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle><Person />{user.username} </Card.Subtitle>
                        <Card.Subtitle><Mailbox />{user.email}</Card.Subtitle>
                        <Card.Subtitle><Globe /><a href={user.website} target="_blank">{user.website}</a></Card.Subtitle>

                        <Card.Title>Company</Card.Title>
                        <Card>
                            <Card.Header>
                                <Card.Title>{user.company?.name}</Card.Title>
                                <Card.Subtitle>{user.company?.bs}</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>{user.company?.catchPhrase}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Media.Body>
        </Media>
    );
}
