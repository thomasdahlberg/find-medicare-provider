$.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=e207638b02ecb23dabc2848f0b3931f6`,
    type: "GET",
    // data: {
      
    // }
}).then(function(data) {
    console.log(data);
});
