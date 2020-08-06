import React from 'react';
import classes from './Pagination.module.scss';

const Pagination = (props) => {
    const hasPreviousPage = props.page > 1;
    const hasNextPage = (props.itemsPerPage * props.page) < props.totalItems;
    const nextPage = props.page + 1;
    const previousPage = props.page - 1;
    const lastPage = Math.ceil(props.totalItems / props.itemsPerPage);

    return (
        <div className={classes.Pagination}>
            {(props.page !== 1 && previousPage !== 1) && 
                <div className={classes.Pagination__item}>
                    <p className={classes.Pagination__box} onClick={() => props.setPage(1)}>1</p>
                    <p className={classes.Pagination__box}>...</p>
                </div>
            }

            {hasPreviousPage && 
                <div className={classes.Pagination__item}>
                    <p className={classes.Pagination__box} onClick={() => props.setPage(previousPage)}>{previousPage}</p>
                </div>
            }

            <div className={`${classes.Pagination__item} ${classes.Pagination__active}`}>
                <p className={classes.Pagination__box}>{props.page}</p>
            </div>

            {hasNextPage && 
                <div className={classes.Pagination__item}>
                    <p className={classes.Pagination__box} onClick={() => props.setPage(nextPage)}>{nextPage}</p>
                </div>
            }

            {(props.page !== lastPage && nextPage !== lastPage) && 
                <div className={classes.Pagination__item}>
                    <p className={classes.Pagination__box}>...</p>
                    <p className={classes.Pagination__box} onClick={() => props.setPage(lastPage)}>{lastPage}</p>
                </div>
            }
        </div>
    );
}

export default Pagination;