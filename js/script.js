let apiKey = 'e207638b02ecb23dabc2848f0b3931f6';
let limit = 20;
let apiObj, latitude, longitude;

$.ajax({
    url: `http://api.ipstack.com/check?access_key=fef26ea7f3f8cb548a3b9cafbf91346c`,
    type: "GET",
}).then(function(data) {
    // console.log(data);
    latitude = parseFloat(data.latitude.toFixed(3));
    longitude = parseFloat(data.longitude.toFixed(3));
    $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?location=${latitude},${longitude},100&skip=2&limit=50&user_key=${apiKey}`,
        type: "GET",
    }).then(function(data) {
        // console.log(data);
        apiObj = data;
        console.log(apiObj);
        for(let i = 0; i < apiObj.data.length; i++){
            // apiObj.data[i].insurance.forEach(element => {
            for(let x = 0; x < apiObj.data[i].insurances.length; x++){    
                if(apiObj.data[i].insurances[x].insurance_provider.name.includes('Medicare')){
                    console.log(`${apiObj.data[i].profile.first_name} ${apiObj.data[i].profile.last_name}`);
                }
            };
            // console.log(`${apiObj.data[i].profile.first_name} ${apiObj.data[i].profile.last_name}: ${apiObj.data[i].insurances[0].insurance_provider.name}`)
        }
    })
});