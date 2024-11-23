const { getJson } = require("serpapi");

getJson({
  engine: "google_hotels",
  q: "Bali Resorts",
  check_in_date: "2024-11-23",
  check_out_date: "2024-11-24",
  adults: "2",
  currency: "INR",
  gl: "us",
  hl: "en",
eco_certified:"true",
  api_key: "698492f22a0987166cba709ce1f7026849109669989f8d1ad0459a47741f5049"
}, (json) => {
    let res=[];
    let n=json.properties.length;
    for(let i=0;i<n;i++){
        console.log(json.properties[i].type);
        console.log(json.properties[i].name);
        console.log(json.properties[i].description);
        console.log(json.properties[i].rate_per_night.extracted_lowest);
        console.log(json.properties[i].overall_rating);
        res.push({"id":json.properties[i].type,"name":json.properties[i].name,"price":json.properties[i].rate_per_night.extracted_lowest,"eco_score":json.properties[i].overall_rating,"description":json.properties[i].description});
    }
    console.log(res);
    });