/*
 * Draws a new card in the document <body>.
 *   image - string url to an image resource.
 *   cast - string cast holding the cast members.
 *   teaser - string teaser narrative describing the movie.
 */
// function renderNewCard(image, cast, teaser, author) {
//   var cardElement = $('<div>', {class: 'card'});
//   cardElement.css('background-image', 'url(' + image + ')');

//   var castElement = $('<div>', {class: 'cast'});
//   castElement.text(cast);

//   var teaserElement = $('<div>', {class: 'teaser'});
//   teaserElement.text(teaser);

//   var authorElement = $('<div>', {class: 'author'});
//   authorElement.text(author);

//   cardElement.append(castElement);
//   cardElement.append(teaserElement);
//   teaserElement.append(authorElement);

//   $('body').append(cardElement);
// }

function renderNewCard(image, title, tags, author, link) {
// reach and grab raw template
var templateText= $('#my-template').html();
//define your dynamic values
var daValues = {
image: image,
title: title,
tags: tags,
author: author,
link: link,
};
var renderedText = Mustache.render(templateText, daValues);
$('#cards-container').append(renderedText);
}



// Teaser one, looking ahead where we hit the Flickr API and dump images to <body>.

function renderFlickrAPI() {
  $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    format: "json",
    tags: "mountain hardwear"
  }, processFlickrData);
}

function processFlickrData(data) {
  var items = data.items;
  for (var i = 0; i < items.length; i++) {
    console.log(items[i])
    renderNewCard(items[i].media.m, items[i].title, items[i].tags, items[i].author, items[i].link)

  };
}

renderFlickrAPI();
