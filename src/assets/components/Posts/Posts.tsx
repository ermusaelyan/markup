import React from 'react';
import s from './Posts.module.css';
import Post from "./components/Post/Post.tsx";
import { postApi } from "../../../services/PostService.ts";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store.ts';

const Posts = () => {
    const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery('');
    const searchQuery = useSelector((state: RootState) => state.search.query);

    const filteredPosts = searchQuery
        ? posts?.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : posts;

    return (
        <section className={s.wrapper}>
            {isLoading && 'Loading...'}
            {error && '404'}
            {filteredPosts?.length === 0 && searchQuery && (
                <p className={s.notFound}>No posts found for <span>"{searchQuery}"</span></p>
            )}
            <ul className={s.list}>
                {filteredPosts?.map(post => (
                    <Post key={post.title} data={post} />
                ))}
            </ul>
        </section>
    );
};

export default Posts;
