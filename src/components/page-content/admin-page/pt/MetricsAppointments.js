import React from 'react';
import MetricsContainer from '../../../commons/admin/MetricsContainer';

const MetricsAppointments = ({ data }) => {
  return (
    <MetricsContainer data={data} title='Appointments' forwardButtonText='to appointments' /> 
  )
}


export default MetricsAppointments;