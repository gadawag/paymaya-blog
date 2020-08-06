import React from 'react';
import Article from '../Article/Article';
import Pagination from '../Pagination/Pagination';
import classes from './Home.module.scss';

const Home = (props) => {
    const displayPosts = () => {
        const output = props.posts.map(p => {
            return <Article 
                    key={p.id} 
                    title={p.title} 
                    slug={p.slug}
                    date={p.date} />
        });

        return output;
    }

    return (
        <section className={classes.Home}>
            <p className={classes.Home__title}>Posts</p>
            <div className={classes.Home__sort}>
                <select className={classes.Home__select} value={props.sort} onChange={(e) => props.setSort(e.target.value)}>
                    <option value="" disabled>- Sort -</option>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
            </div>
            {displayPosts()}
            {props.posts.length > 0 && 
                <Pagination 
                    posts={props.posts} 
                    page={props.page} 
                    itemsPerPage={props.itemsPerPage} 
                    totalItems={props.totalItems}
                    setPage={props.setPage} />
            }
        </section>
    );
}

export default Home;