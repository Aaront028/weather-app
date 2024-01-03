$(document).ready(function () {
  $('#weather-form').submit(function (event) {
    event.preventDefault()
    const location = $('#location').val()

    $.ajax({
      type: 'POST',
      url: '/post',
      data: { location: location },
      success: function (response) {
        console.log(response)
        $('#result').html(`
        <p>Name: ${response.location.name}</p>
        <p>Temperature: ${response.current.temp_c}</p>
        <p>Humidity: ${response.current.humidity}</p>
        <label>${response.current.condition.text}</label>
        <img src="${response.current.condition.icon}"/>
        `)
      },
      error: function (error) {
        console.error('Error fetching data:', error)
      },
    })
  })
})
