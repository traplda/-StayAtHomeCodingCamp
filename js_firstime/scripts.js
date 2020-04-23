let name = 'Dalibor'

console.log(name + "'s apples")
console.log("Hello world!")

$('h1').text("We are having a 10 minutes break until 17:05")
$('p').html("StayAtHome Coding Camp, Likes: <strong>13</strong>")

$('strong').css('background', 'lime')
$('strong').css('padding', '10px')

$('h2').toggleClass('blue')
$('h2').toggleClass('blue')

$('ul').append('<li>My name is ' + name + '</li>')

let addButtonHandler = () => {
    $('ul').append('<li>My name is ' + name + '</li>')
}

$('#add-button').click(addButtonHandler)

$('#remove-button').click(() => {
    $('li:last-child').remove()
})



// This is a Javascript comment

/*
This is a multiline comment
*/