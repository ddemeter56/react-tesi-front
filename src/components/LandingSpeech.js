import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const LandingSpeech = () => {
  return (
    <>
      <Typography variant="h2">
        Tesi - a mozgás közössége
      </Typography>
      <Divider />
      <Typography inline variant="h6" color="textSecondary">
        Engedd, hogy segítsünk megtalálni a számodra legmegfelelőbb edzőtermet, vagy akár faltenisz pályát. 
      </Typography>
      <Typography inline variant="h6" color="textSecondary">
        Ha pedig úgy érzed, hogy profi szakember szolgáltatásait vennéd igénybe, használd a személyi edző keresés opciót.
      </Typography>  
      
    </>
  );
}
export default LandingSpeech;