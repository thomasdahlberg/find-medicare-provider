let apiKey = 'e207638b02ecb23dabc2848f0b3931f6';
let limit = 20;
let apiObj;

$.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${apiKey}`,
    type: "GET",
    // data: {
      
    // }
}).then(function(data) {
    // console.log(data);
    apiObj = data;
    for(let i = 0; i < apiObj.data.length; i++){
        console.log(`${apiObj.data[i].profile.first_name} ${apiObj.data[i].profile.last_name}: ${apiObj.data[i].insurances[0].insurance_provider.name}`)
    }
});

