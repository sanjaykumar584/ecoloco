const { getJson } = require("serpapi");

getJson({
  engine: "google_maps_directions",
  start_addr: "chennai",
  end_addr: "pondichery",
  travel_mode: 3,
  api_key: "698492f22a0987166cba709ce1f7026849109669989f8d1ad0459a47741f5049"
}, (json) => {
    console.log(json);
    let details=[];
    for(let i=0;i<json.directions.length;i++){
        console.log(json.directions[i].trips[0]);
        let id=json.directions[i].travel_mode;
        let name=json.directions[i].trips[0].title;
        let price=350;
        let eco_score=4;
        let description="Eco friendly travel...";
        details.push({"id":id,"name":name,"price":price,"eco_score":eco_score,"description":description});
    }
    console.log(details);
});