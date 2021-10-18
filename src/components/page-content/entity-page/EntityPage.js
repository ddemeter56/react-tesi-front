import React from 'react';
import { useParams } from 'react-router-dom';
import { API_PATH } from '../../../utils/apiPaths';
import { useFetch } from '../../../hooks/useFetch';
import GymEntityPage from './gym/GymEntityPage';
import PtEntityPage from './pt/PtEntityPage';
import SkeletonEntityPage from '../../commons/skeleton/SkeletonEntityPage';


const EntityPage = () => { 
  const { entityPage } = useParams();
  console.log(entityPage);
  const { loading, data, error } = useFetch(`${API_PATH.LIST_PAGE}${entityPage}`);
  let type;

  console.log(error);
  
  if(data) {
    type = Array.isArray(data.facilities) ? 'gym' : 'pt';
  }
  
  
  if(loading) {
    return(
      <SkeletonEntityPage />
    )
  }
  
  if(error) {
    return(
      <h2>
        ERROR
      </h2>
    )
  }
  return(
    (type === 'gym' ? <GymEntityPage data={data} /> : <PtEntityPage data={data} /> )
  )
}

export default EntityPage;