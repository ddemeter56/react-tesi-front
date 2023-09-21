import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ResultHeader from './ResultHeader';
import ResultGymCard from './gym/ResultGymCard';
import Grid from '@mui/material/Grid';
import { useFetch } from '../../../hooks/useFetch';
import { API_PATH } from '../../../utils/apiPaths';
import SkeletonCard from '../../commons/skeleton/SkeletonResultCard';
import SkeletonHeader from '../../commons/skeleton/SkeletonResultHeader';
import { getNumberOfPages } from '../../../utils/pagination';
import Pagination from '@mui/lab/Pagination';
import ResultPtCard from './pt/ResultPtCard';
import ErrorPage from '../../commons/error/ErrorPage';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
  },
  topSection: {
    paddingTop: '36px',
    paddingBottom: '36px',
  },
  midSection: {
  }
}));

/**
 * type: gym or pt as string
 */
const Result = ({ type }) => {
  console.log(type);
  const ITEM_PER_PAGE = 10;
  const [ actualPage, setActualPage ] = useState(1);
  const [ sortByProperty, setSortByProperty ] = useState('name');
  const [ sortByMethod, setSortByMethod] = useState('ASC');
  const numberOfPages = useRef();
  const { searchParams } = useParams();
  const { loading, data, error } = useFetch(`${API_PATH.RESULT_LIST}${type}?pageSize=${ITEM_PER_PAGE}&page=${actualPage}&sortByProperty=${sortByProperty}&sortByMethod=${sortByMethod}&${searchParams}`, null, true);
  const classes = useStyles();

  function handleSortProperty(value) {
    setSortByProperty(value);
  }

  function handleSortMethod(value) { 
    setSortByMethod(value);
  }
  
  useEffect(() => {
    if(Array.isArray(data) && data.length > 0) {
      numberOfPages.current = getNumberOfPages(data.length, ITEM_PER_PAGE)
    }
  }, [data])
 

  function handlePagination(event, page) {
    setActualPage(page);
  }

  /**Show skeleton if loading */
  if(loading) {
    return (
      <div className={`${classes.container}`}> 
        <SkeletonHeader />
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          alignContent="center"
          justifyContent="space-evenly"
          style={{ textAlign: "center" }} >
          {
            [1,2,3,4,5,6].map((index) => {
              return(
                <Grid item key={index} xl={6} lg={6} md={6} sm={12}>
                  <SkeletonCard />
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    )
  }

  if(error) {
    return (
      <ErrorPage type="ERROR" message={error} />
    )
  }

  return (
    <div className={classes.container}> 
      <ResultHeader paginationComponent={
        <Grid item  style={{ padding: 30}}> 
          <Pagination onChange={handlePagination} count={numberOfPages.current} variant="outlined" shape="rounded" />
        </Grid>
      } 
      found={data?.gyms?.length || data?.pts?.length}
      handleSortProp={handleSortProperty}
      handleSortMethod={handleSortMethod}
      />
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        alignContent="center"
        justifyContent="space-evenly"
        style={{ textAlign: "center" }} >
        {
          type === 'gym' &&
          data.gyms.map((item, index) => {
            return(
              <Grid item key={index}>
                <ResultGymCard props={item}/> 
              </Grid>
            )
          })
        }
        {
          type === 'pt' &&
          data.pts.map((item, index) => {
            return(
              <Grid item key={index}>
                <ResultPtCard props={item}/> 
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default Result;
