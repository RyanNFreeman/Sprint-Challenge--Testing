const server = require('/server.js')
const request = require('supertest')

describe('POST /games', ()=>{
/*
The POST /games endpoint should take in an object that looks like this

{
  title: 'Pacman', // required
  genre: 'Arcade', // required
  releaseYear: 1980 // not required
}
 In the route handler, validate that the required fields are included inside the body. 
 If the information is incomplete, return a 422 status code.
 Write tests to verify that the endpoint returns the correct HTTP status code 
 when receiving correct and incorrect game data.


*/
})

describe("GET /games", () => { 
/*  
The GET /games endpoint should return the list of games and HTTP status code 200.
Write a test to make sure this endpoint always returns an array, even if there are 
no games stored. If there are no games to return, the endpoint should return an empty array
*/  
})