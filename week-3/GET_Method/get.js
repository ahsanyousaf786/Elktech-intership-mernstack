//import { json } from "node:stream/consumers";

const moviesFile = await Deno.readTextFile('movies.json')
const movies = JSON.parse(moviesFile)
//console.log(movies)

async function handler(req) {

    const url = new URL(req.url)

    const getMovies = new URLPattern({
        pathname: '/movies'
    })
    const getMoviesByID = new URLPattern({
        pathname: '/movies/:id'
    })

if (getMovies.test(url) && req.method === 'GET'){

    const jsonStringyfy = JSON.stringify(movies)

    return new Response(jsonStringyfy,{
        headers: {'content-type': 'application.js'},
        status: 200
    })
}

    if (getMoviesByID.test(url) && req.method === 'GET') {
        
        const split = url.pathname.split('/');
        //consoled to see what split give it gives us an array ["","movies","50"]
        // so we select index 2 to get id of split
        const id = Number(split[2])


        // loop through to get ids of movie
    for (const movie of movies){
        if(movie.id === id){
            return new Response(JSON.stringify(movie),{
                headers: {"content-type": "Application/json"},
            })
        }

    }
       
    }

    return new Response("Not Found", { status: 404 });

}





Deno.serve(handler)