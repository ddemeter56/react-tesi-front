
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonResultHeader = () => {
  // use these params to make api call later

  return (
    <Grid container
      spacing={0}
      direction="row"
      alignItems="center"
      alignContent="center"
      justify="space-around"
      style={{ textAlign: "center" }}>
      <Grid item>
        <Skeleton animation="wave" height={15} width={150} />
      </Grid>
      <Grid item style={{ padding: 30}}>
        <Skeleton animation="wave" height={25} width={50} />  
        <Skeleton animation="wave" height={40} width={250} />
        <Skeleton animation="wave" height={25} width={50} />
      </Grid>
      <Grid item>
        <Skeleton animation="wave" height={30} width={30} />
      </Grid>
    </Grid>
  )
}

export default SkeletonResultHeader;