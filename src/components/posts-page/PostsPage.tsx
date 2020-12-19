import React, { useState, useEffect, useRef } from 'react';
import { Card, FormControl, InputGroup, Pagination } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { getPosts } from '../../services';
import { IPage, IPost, IPostRes } from '../../models';
import { Posts } from '../../components';
import './PostsPage.scss';
import { Loader } from '../loader/Loader';
import debounce from 'lodash.debounce';

const DEFAULT_PAGE: IPage = {
    active: 0,
    size: 10,
    count: 5
};

const SEARCH_DELAY = 500;

export function PostsPage() {
    const [posts, setPosts] = useState([] as Array<IPost>);
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const delayedQuery = useRef(debounce(q => setSearch(q), SEARCH_DELAY)).current;

    useEffect(() => {
        loadPosts();
    }, [page, search]);

    function renderPageItems() {
        const items = [];
        for (let i = 0; i < page.count; i++) {
            items.push((
                <Pagination.Item
                    onClick={() => handlePageChanged(i)}
                    key={i}
                    active={page.active === i}
                >{i + 1}</Pagination.Item>
            ));
        }
        return items;
    }

    function handlePageChanged(active: number) {
        setPage(page => ({ ...page, active }));
    }

    function loadPosts() {
        setLoading(true);
        getPosts(page.active, page.size, search).then((postsRes: IPostRes) => {
            setPosts(postsRes.posts);
            page.count = (postsRes.count / page.size);
            setLoading(false);
        }).catch(posts => {
            setPosts(posts);
            setLoading(false);
        });
    }

    function nextPage(): void {
        let active = page.active;
        if (active < (page.count - 1)) {
            active++;
        }
        setPage(page => ({ ...page, active }));
    }

    function previousPage(): void {
        let active = page.active;
        if (active > 0) {
            active--;
        }
        setPage(page => ({ ...page, active }));
    }

    function searchChanged(keyword: string): void {
        delayedQuery(keyword);
    }

    return (
        <>
            <Card className="posts-page">
                <Card.Header>
                    <Card.Title>Posts</Card.Title>
                    <InputGroup className="mb-3" size="lg">
                        <FormControl onChange={(e) => searchChanged(e.target.value)}
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text>
                                <Search/>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                </Card.Header>
                <Card.Body>
                    {posts.length ? <Posts posts={posts} /> :
                    <Card.Subtitle>No Posts found. Please try searching some other keywords</Card.Subtitle>}
                </Card.Body>
                <Card.Footer>
                    <Pagination size="lg">
                        <Pagination.Prev
                            onClick={() => previousPage()}
                            disabled={page.active <= 0 || page.count <= 0} />
                        {renderPageItems()}
                        <Pagination.Next
                            onClick={() => nextPage()}
                            disabled={page.active >= page.count || page.count <= 0} />
                    </Pagination>
                </Card.Footer>
            </Card>
            <Loader loading={loading} />
        </>
    );
}
