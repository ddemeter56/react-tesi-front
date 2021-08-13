import { 
  useParams
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ResultHeader from './ResultHeader';
import ResultGymCard from './ResultGymCard';
import Grid from '@material-ui/core/Grid';
import { useFetch } from '../hooks/useFetch';
import { API_PATH } from '../utils/apiPaths';
import SkeletonCard from './SkeletonResultCard';
import SkeletonHeader from './SkeletonResultHeader';
import { getNumberOfPages } from '../utils/pagination';
import { useState, useEffect, useRef } from 'react';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  },
  topSection: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
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
  const { loading, data, error } = useFetch(`${API_PATH.RESULT_LIST}${type}?pageSize=${ITEM_PER_PAGE}&page=${actualPage}&sortByProperty=${sortByProperty}&sortByMethod=${sortByMethod}&${searchParams}`);
  const classes = useStyles();

  function handleSortProperty(value) {
    setSortByProperty(value);
  }

  function handleSortMethod(value) { 
    setSortByMethod('DESC');
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
      <div className={classes.container}> 
        <SkeletonHeader />
        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          alignContent="center"
          justify="space-evenly"
          style={{ textAlign: "center" }} >
          {
            [1,2,3,4,5,6,7,8,9,10].map((index) => {
              return(
                <Grid item key={index}>
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
    return (<p>Error</p>)
  }
  return (
    <div className={classes.container}> 
      <ResultHeader paginationComponent={
        <Grid item  style={{ padding: 30}}> 
          <Pagination onChange={handlePagination} count={numberOfPages.current} variant="outlined" shape="rounded" />
        </Grid>
      } 
      found={data.length}
      handleSortProp={handleSortProperty}
      handleSortMethod={handleSortMethod}
      />
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        alignContent="center"
        justify="space-evenly"
        style={{ textAlign: "center" }} >
        {
          data.map((item, index) => {
            return(
              <Grid item key={index}>
                {type === 'gym' 
                  ? 
                  <ResultGymCard props={item}/> 
                  : 
                  <ResultGymCard props={item}  />
                }
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default Result;
