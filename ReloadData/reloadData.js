import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function reloadData() {
  let data = 'var gravedata = [';
  let url = "https://gis.ashevillenc.gov/server/rest/services/Parks/RiversideCemetery/FeatureServer/9/query?" +
    "where=last_name+like+%27%25%27&" +
    "outFields=section%2C+dob%2C+dod%2C+age%2C+lot%2C+last_name%2C+grave_num%2C+military%2C+url_photo%2C+interment_num%2C+first_name%2C+title%2C+type%2C+middle_name&" +
    "returnGeometry=true&f=pjson"
// url = "https://gis.ashevillenc.gov/server/rest/services/Parks/RiversideCemetery/FeatureServer/9/query?where=last_name+like+%27GIST%25%27&outFields=section%2C+dob%2C+dod%2C+age%2C+lot%2C+last_name%2C+grave_num%2C+military%2C+url_photo%2C+interment_num%2C+first_name%2C+title%2C+type%2C+middle_name&returnGeometry=true&f=pjson"
  axios.get(url)
    .then(response => {
      // console.log(JSON.stringify(response.data.features));
      data += response.data.features.map(feature => {
        return JSON.stringify( {
          last_name: feature.attributes.last_name,
          first_name: feature.attributes.first_name,
          middle_name: feature.attributes.middle_name,
          section: feature.attributes.section,
          lot: feature.attributes.lot,
          grave_num: feature.attributes.grave_num,
          interment_num: feature.attributes.interment_num,
          age: feature.attributes.age,
          url_photo: feature.attributes.url_photo,
          type: feature.attributes.type,
          military: feature.attributes.military,
          dob: feature.attributes.dob,
          dod: feature.attributes.dod,
          title: feature.attributes.title,
          x: feature.geometry.x,
          y: feature.geometry.y
        });
      });
      data += '];';

      fs.writeFileSync(path.join(__dirname, '../Main/data/gravedata.js'), data, 'utf8');
    })
    .catch(error => {
      console.log(error);
    })
}

reloadData();