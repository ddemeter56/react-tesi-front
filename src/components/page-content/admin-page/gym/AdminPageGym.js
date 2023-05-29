import React from 'react';
import { makeStyles } from '@mui/styles';
import GymListContainer from './gym-listing/GymListContainer';
import { useFetch } from '../../../../hooks/useFetch';
import { API_PATH } from '../../../../utils/apiPaths';

const useStyles = makeStyles((theme) => ({
  adminPageContainer: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    [theme.breakpoints.only('xl')]: {
      width: "60%",
      margin: "0 auto"
    },
  },
  adminPageBasicInformation: {
    textAlign: "center",
    position: "relative",
    paddingBottom: 25
  },
  admingPagePicture: {
    display: "block",
    maxWidth: 270,
    maxHeight: 270,
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
    width: "auto",
    height: "auto",
    padding: "10px 15px 10px 15px",
  }
}));

const AdminPageGym = ({ type, userDetails }) => {
  console.log(type)
  console.log(userDetails)
  const classes = useStyles();
  const { loading, data, error } = useFetch(`${API_PATH.ADMIN_OWNED_GYMS}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userDetails.accessToken}`
      }
    });

  return (
    <>
      <div className={classes.adminPageContainer}>
        <GymListContainer gymList={data} isGymLoading={loading} gymLoadError={error} />
      </div>
    </>
  )
}

export default AdminPageGym;