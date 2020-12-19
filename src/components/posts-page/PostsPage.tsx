import React, { useState, useEffect } from 'react';
import { Card, Pagination } from 'react-bootstrap';
import { getPosts } from '../../services';
import { IPage, IPost, IPostRes } from '../../models';
import { Posts } from '../../components';

import './PostsPage.scss';
import { count } from 'console';
const DEFAULT_PAGE: IPage = {
    active: 0,
    size: 10,
    count: 5
};

export function PostsPage() {
    const [posts, setPosts] = useState([] as Array<IPost>);
    const [page, setPage] = useState(DEFAULT_PAGE);

    useEffect(() => {
        loadPosts();
    }, []);

    useEffect(() => {
        loadPosts();
    }, [page]);

    function renderPageItems() {
        const items = [];
        for (let i = 0; i < page.count; i++) {
            items.push((
                <Pagination.Item
                onClick={() => handlePageChanged(i)}
                key={i}
                active={page.active === i}
                >{ i + 1}</Pagination.Item>
            ));
        }
        return items;
    }

    function handlePageChanged(active: number) {
        setPage(page => ({...page, active}));
    }

    function loadPosts() {
        getPosts(page.active, page.size).then((postsRes: IPostRes) => {
            setPosts(postsRes.posts);
            page.count = (postsRes.count / page.size);
        }).catch(posts => setPosts(posts));
    }

    function nextPage() {
        let active = page.active;
        if (active < (page.count - 1)) {
            active++;
        }
        setPage(page => ({...page, active}));
    }

    function previousPage() {
        let active = page.active;
        if (active > 0) {
            active--;
        }
        setPage(page => ({...page, active}));
    }

    return (
        <Card className="posts-page">
            <Card.Body>
                <Card.Title>Posts</Card.Title>
                <Posts posts={posts} />
            </Card.Body>
            <Card.Footer>
                <Pagination size="lg">
                    <Pagination.Prev
                    onClick={() => previousPage()}
                    disabled={page.active <= 0 || page.count <= 0}/>
                    {renderPageItems()}
                    <Pagination.Next
                    onClick={() => nextPage()}
                    disabled={page.active >= page.count || page.count <= 0}/>
                </Pagination>
            </Card.Footer>
        </Card>
    );
}
