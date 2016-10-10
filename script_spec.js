"use strict";

describe('Home page', function() {

xit('should have correct title', function(){
browser.get('https://soundcloud-ngrx.herokuapp.com/');
browser.getTitle();

expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx', 'Expecting title to be correct');

let title = $('.content-header__title');
expect(title.getText()).toBe('Featured Tracks', 'Expecting text Featured Tracks');

let firstSong = $$('.track-card__username').first();
//let FirstSonglinkLong = element.all(by.css('.track-card__username')).first();

let firstSongText = firstSong.getText();
firstSong.click();

let card_title = $('.user-card__title').getText();
expect(firstSongText).toBe(card_title);

//element(by.css(''))



});

it('2.1 player is visible in footer', function() {

browser.get('https://soundcloud-ngrx.herokuapp.com/');

//let thirdSong = $$('.track-card__username').get(3).$('.btn.btn--icon.btn--play');
//let clickPlay = thirdSong.click();
 
 
 //var thirdSongTest = element.all(by.repeater('.track-card__username')).get(3);
 //var playButton = thirdSongTest.element(by.css('.btn.btn--icon.btn--play')).click();

var thirdSongTest = element.all(by.css('.track-card__username')).
  get(3).$('button').click();

var playerFooter = protractor.ExpectedConditions;
browser.wait(playerFooter.isDisplayed($('.open>player-controls')), 5000);


});

it('2.2 player is visible when page is opened', function() {

browser.get('https://soundcloud-ngrx.herokuapp.com/');

let secondSong = element.all(by.css('.track-card__username')).
  get(2).click();

let clickPlay = element(by.css('.track-card__username')).
  first().click();

var playerFooter = protractor.ExpectedConditions;
browser.wait(playerFooter.isDisplayed($('.open>player-controls')), 5000);
});

it('2.3 search', function() {

browser.get('https://soundcloud-ngrx.herokuapp.com/');
let testText = 'test';

let searchIcon = element(by.css('.btn.btn--icon.btn--search-alt')).click();

let searchField = element(by.css('.search-form__input.ng-touched.ng-dirty.ng-valid')).sendKeys(testText).sendKeys(protractor.Key.ENTER);

let searchResult = element(by.css('.content-header__title')).getText();
expect(testText).toBe(searchResult);

let searchResultList = element(by.ssContainingText('.track-card__title', 'test')).first().getText();
expect(testText).toBe(searchResultList);




});


});
