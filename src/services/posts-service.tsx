import axios, { AxiosResponse } from 'axios';
import { IPostRes, IPost, IUser } from '../models';

export function getPosts(page: number = 0, pageSize: number = 10): Promise<IPostRes> {
    return new Promise<IPostRes>((resolve, reject) => {
        axios.get('posts', {
            params: {
                _page: page,
                _limit: pageSize,
                _expand: 'user'
            }
        })
            .then((posts: AxiosResponse) => {
                resolve({ posts: posts.data, count: posts.headers['x-total-count'] || 0 } as IPostRes);
            })
            .catch(er => {
                // Error Needs to be handled here.
                reject({ posts: [], count: 0 })
            });
    });
}

export function getPost(postId: string): Promise<IPost> {
    return new Promise<IPost>((resolve, reject) => {
        axios.get(`posts/${postId}`, {
            params: {
                _expand: 'user',
                _embed: 'comments'
            }
        })
            .then((post: AxiosResponse) => {
                resolve(post.data as IPost);
            })
            .catch(er => {
                // Error Needs to be handled here.
                reject({} as IPost)
            });
    });
}

export function getUsers(): Promise<Array<IUser>> {
    return new Promise<Array<IUser>>((resolve, reject) => {
        axios.get('users', {
            params: {}
        })
            .then((users: AxiosResponse) => {
                resolve(users.data as Array<IUser>);
            })
            .catch(er => {
                // Error Needs to be handled here.
                reject([])
            });
    });
}

export function getUser(userId: string): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
        axios.get(`users/${userId}`, {
            params: {}
        })
            .then((user: AxiosResponse) => {
                resolve(user.data as IUser);
            })
            .catch(er => {
                // Error Needs to be handled here.
                reject({} as IUser)
            });
    });
}