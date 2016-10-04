"use strict";

describe('Home page', function() {

it('should have correct title', function(){
browser.get('https://soundcloud-ngrx.herokuapp.com/');
browser.getTitle();

expect(browser.getTitle()).toBe('SoundCloud • Angular2 NgRx', 'Expecting title to be correct');

});

xit('should have correct url', function() {


});

} );
