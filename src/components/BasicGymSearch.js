import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const BasicGymSearch = (isDetailed) => {

  const renderDetails = (isDetailed) => {
    if(isDetailed.isDetailed) {
      return (
        <h1>Details</h1>
      )
    } else {
      return (
        <h1> No details </h1>
      )
    }
  }

  return (
    <>
    
      <Grid item>
        <TextField id="outlined-basic" label="Város" variant="outlined" size="small" />
      </Grid>
      <Grid item>
        <TextField style={{ width: 100, paddingRight: 5 }} id="outlined-basic" label="Ár -tól" variant="outlined" size="small" />
        <TextField style={{ width: 100 }} id="outlined-basic" label="Ár -ig" variant="outlined" size="small" />
      </Grid>
      {
        renderDetails(isDetailed)
      }
    </>
  )
}

export default BasicGymSearch;