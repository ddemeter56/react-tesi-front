import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const LandingSpeech = () => {
  return (
    <div style={{ position: "relative"}}>
      <Typography variant="h2">
        Tesi - a mozgás közössége
      </Typography>
      <Divider />
      <Typography display="inline" variant="h6" color="textSecondary">
        Engedd, hogy segítsünk megtalálni a számodra legmegfelelőbb edzőtermet, vagy akár faltenisz pályát. 
      </Typography>
      <Typography display="inline" variant="h6" color="textSecondary">
        Ha pedig úgy érzed, hogy profi szakember szolgáltatásait vennéd igénybe, használd a személyi edző keresés opciót.
      </Typography>  
      
    </div>
  );
}
export default LandingSpeech;