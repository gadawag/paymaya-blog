import React from 'react';
import Article from '../Article/Article';
import Pagination from '../Pagination/Pagination';
import classes from './Search.module.scss';

const Search = (props) => {    
    const [searchResult, setSearchResult] = React.useState([]);
    const [displayed, setDisplayed] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const itemsPerPage = 2;

    React.useEffect(() => {
        const copyPosts = [...searchResult];
        const items = copyPosts.splice((page - 1) * itemsPerPage, itemsPerPage);
        
        setDisplayed(items);
    }, [page, searchResult]);

    React.useEffect(() => {
        const results = [];
        props.posts.forEach(p => {
            const lowerTitle = p.title.toLowerCase();
            const lowerSearch = props.match.params.keyword.toLowerCase();
            
            if (lowerTitle.includes(lowerSearch)) {
                results.push(p);
            }
        });

        setSearchResult(results);
        
    }, [props.posts, props.match.params.keyword]);

    const displayPosts = () => {
        const output = displayed.map(p => {
            return <Article 
                    key={p.id} 
                    title={p.title} 
                    slug={p.slug}
                    date={p.date} />
        });

        return output;
    }

    return (
        <section className={classes.Search}>
            <p className={classes.Search__title}>Search Results: {props.match.params.keyword}</p>
            {(searchResult.length > 0) 
                ? displayPosts() 
                : <p style={{color: 'red', textAlign: 'center', fontSize: '2rem'}}>No results found</p> 
            }
            {searchResult.length > 0 && 
                <Pagination 
                    posts={displayed} 
                    page={page} 
                    itemsPerPage={itemsPerPage} 
                    totalItems={searchResult.length}
                    setPage={setPage} />
            }
        </section>
    );
}

export default Search;