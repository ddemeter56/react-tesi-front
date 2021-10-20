import React from 'react';
import MetricsContainer from '../../../commons/admin/MetricsContainer';

const MetricsAppointments = ({ data }) => {
  return (
    <MetricsContainer data={data} title='Appointments' forwardCallback={() => alert('implement redirect')} /> 
  )
}


export default MetricsAppointments;