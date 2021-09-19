import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const LandingSpeech = () => {
  return (
    <div style={{ boxSizing: "content-box"}}>
      <Typography variant="h2" fontFamily="monospace">
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