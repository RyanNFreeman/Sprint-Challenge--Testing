const server = require('./server')
const request = require('supertest')

describe('POST /games', ()=>{
    it('Should return status 422 when making a post to POST /games and required data is not provided', async () =>{
        const game ={
            title: 'Pacman',
            releaseYear: 1980 
          }
        const response = await request(server)
       .post('/games')
       .send(game);
       expect(response.status).toEqual(422);
    });

     it('Should make a post to POST /games when required data provided', async () =>{
       const game ={
                title: 'Pacman', // required
                genre: 'Arcade', // required
                releaseYear: 1980 // not required
          }
       const response = await request(server)
       .post('/games')
       .send(game);
       expect(response.body.games[0]).toEqual(game);
    });

     it('Should return status 201 when you make a post to POST /games and required data provided', async () =>{
      const  game ={

                title: 'Pacman', // required
                genre: 'Arcade', // required
                releaseYear: 1980 // not required
           }
       const response = await request(server)
       .post('/games')
       .send(game);
       expect(response.status).toEqual(201)
    });
 })

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


describe("GET /games", () => {   
    it("returns a status code of 200", async () => {
        const response = await request(server).get("/games");

        expect(response.status).toBe(200);
    });

     it("should return a games array", async () => {
        const response = await request(server).get("/games");

        expect(response.body).toContain("games");
    });

     it("returns an array even if there are no games", async () => {
        const response = await request(server).get("/games");
        const games = response.body.games;
        expect(response.body).toContain("games");
        expect(games.length).toBeFalsy();
    });

    /*  
    The GET /games endpoint should return the list of games and HTTP status code 200.
    Write a test to make sure this endpoint always returns an array, even if there are 
    no games stored. If there are no games to return, the endpoint should return an empty array
    */

});