import React, { useContext,useState, useEffect } from 'react';
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
    [theme.breakpoints.between('md', 'xl')] : {
      width: "80%",
      margin: "0px auto"
    }
  },
  tableContainer: {
    maxHeight: 400,
    [theme.breakpoints.between('md', 'xl')] : {
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
  const [ responseData, setResponseData ] = useState(''); 

  const renderAdminPage = (rolesArray) => {
    console.log(rolesArray)

    if(rolesArray?.includes("gym_owner")) {
      return (
        //TODO UserDetails because of isRegistered 
        <AdminPageGym type="owner" userDetails={userDetails} />
      )
    }
    
    if(rolesArray?.includes("personal_trainer")) {
      return (
        //TODO UserDetails because of isRegistered 
        <AdminPagePt type="personal_trainer" userDetails={userDetails}/>
      )
    }
    
    if(rolesArray?.includes("gym_manager")) {
      return (
        <AdminPageGym type="manager" />
      )
    }
  }

  useEffect(() => {
    if(!userDetails.isLoggedIn) {
      console.log('ADMIN PAGE USER NOT LOGGED IN')
      redirectToLogin();
    } else {
      fetchData('/user-management/role-check', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userDetails.accessToken}` 
        }
      })
        .then(data => {
          console.log(data);
          setResponseData(data);
        })
        .catch((error) => {
          setResponseData(JSON.stringify(error))
        }); 

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