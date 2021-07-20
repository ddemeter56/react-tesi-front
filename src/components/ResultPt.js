import { 
  useParams
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ResultHeader from './ResultHeader';
import ResultGymCard from './ResultGymCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px",
    [theme.breakpoints.between('md', 'xl')] : {
      width: "60%",
      margin: "0px auto"
    }
  },
  topSection: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  midSection: {
  }
}));
const ResultPt = () => {

  const classes = useStyles();
  return (
    <div className={classes.container}> 
      <ResultHeader />
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        alignContent="center"
        justify="space-evenly"
        style={{ textAlign: "center" }} >
        {
          gymList.gyms.map((item, index) => {
            return(
              <Grid item>
                <ResultGymCard props={item}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default ResultPt;


const gymList = {
  "gyms": [
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym lorem ipsum faszscsum test gym lorem ipsum faszscsum test gym lorem ipsum faszscsum test gym lorem ipsum faszscsum test gym lorem ipsum faszscsum",
      "facebookUserId": 1,
      "instagramUserId": 2,
      "twitterUserId": 3,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": " test gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gymtest gym",
      "facebookUserId": 'asd',
      "instagramUserId": "s",
      "twitterUserId": "3",
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym",
      "facebookUserId": 1,
      "instagramUserId": null,
      "twitterUserId": null,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym",
      "facebookUserId": null,
      "instagramUserId": null,
      "twitterUserId": null,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },{
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym",
      "facebookUserId": null,
      "instagramUserId": null,
      "twitterUserId": null,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym",
      "facebookUserId": null,
      "instagramUserId": null,
      "twitterUserId": null,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym",
      "facebookUserId": null,
      "instagramUserId": null,
      "twitterUserId": null,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    },
    {
      "id": "6f774ede-5929-4a1a-a5c1-56cd635d9a72",
      "name": "Gerioo",
      "referenceCode": "geriterme",
      "addressString": "Hungary, 8200 Veszprém utac1",
      "shortDescription": "test gym",
      "facebookUserId": null,
      "instagramUserId": null,
      "twitterUserId": null,
      "youtubeUserId": null,
      "webPageUserId": null,
      "minPrice": 3000,
      "maxPrice": 3000,
      "averagePrice": 3000,
      "earliestOpening": "23:59",
      "latestClosing": "16:00",
      "facilities": [
        {
          "id": 1,
          "customName": "",
          "description": "My facility",
          "facilityCode": {
            "code": 2,
            "name": "Cardio zone",
            "type": "Cardio zone"
          }
        },
        {
          "id": 2,
          "customName": "",
          "description": "Cycling ",
          "facilityCode": {
            "code": 3,
            "name": "Cycling studio",
            "type": "Cardio zone"
          }
        },
        {
          "id": 3,
          "customName": "Kondoi",
          "description": "Kondi",
          "facilityCode": {
            "code": 1,
            "name": "Empty",
            "type": "Empty"
          }
        }
      ],
      "images": []
    }
  ],
  "count": 6
}