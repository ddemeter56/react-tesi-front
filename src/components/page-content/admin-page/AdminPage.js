import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../../context/auth.context';
import { redirectToLogin } from '../../../utils/auth';
import { makeStyles } from '@mui/styles';
import { fetchData } from '../../../utils/urlQuery';
import AdminPageGym from './gym/AdminPageGym';
import AdminPagePt from './pt/AdminPagePt';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    paddingTop: 70,
    [theme.breakpoints.between('md', 'xl')]: {
      width: "80%",
      margin: "0px auto"
    }
  },
  tableContainer: {
    maxHeight: 400,
    [theme.breakpoints.between('md', 'xl')]: {
      width: "100%",
    }
  },
  chipContainer: {
    padding: 30
  }
}));


const AdminPage = () => {
  const classes = useStyles();
  const { userDetails } = useContext(AuthContext);
  const [responseData, setResponseData] = useState('');

  const renderAdminPage = (rolesArray) => {
    console.log(rolesArray)

    if (rolesArray?.includes("GYM_OWNER")) {
      return (
        //TODO UserDetails because of isRegistered 
        <AdminPageGym type="GYM_OWNER" userDetails={userDetails} />
      )
    }

    if (rolesArray?.includes("PERSONAL_TRAINER")) {
      return (
        //TODO UserDetails because of isRegistered 
        <AdminPagePt type="PERSONAL_TRAINER" userDetails={userDetails} />
      )
    }

    if (rolesArray?.includes("GYM_MANAGER")) {
      return (
        <AdminPageGym type="manager" />
      )
    }
  }

  useEffect(() => {
    if (!userDetails.isLoggedIn) {
      console.log('ADMIN PAGE USER NOT LOGGED IN')

      console.log(userDetails)
      redirectToLogin();
    } else {

      console.log(userDetails)
      setResponseData({roles: userDetails.type})
      console.log(responseData);
    }
  }, [userDetails.isLoggedIn, setResponseData, userDetails.accessToken]);

  return (
    <div className={classes.container}>
      {responseData.statusCode === 403 ?
        <>
          <code>{responseData.message}</code>
        </>
        :
        <>
          {renderAdminPage(responseData.roles)}
        </>
      }
    </div>
  )
}

export default AdminPage;