import React from 'react';
import { useParams } from 'react-router-dom';
const AdminPage = () => {
  const { referenceCode } = useParams();
  console.log(referenceCode);

  // 
  return (
    <>
      <h1>ADMIN PAGE {referenceCode}</h1>
    </>
  )
}

export default AdminPage;