//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixShow{
    constructor(title, numEpisodes, genre, rating){
        this.title = title
        this.numEpisodes = numEpisodes
        this.genre = genre
        this.rating = rating
    }
    describeShow(){
        console.log(`${this.title} is ${this.numEpisodes} long, it's from the ${this.genre} genre, and its got a ${'rating'} rating.`)
    }
    getRuntime(){
        console.log(`If every episode is 45 minuts long, then the entire season is ${this.numEpisodes * 45} minutes long.`)
    }
    getTomatoScore(){
        return this.rating<5 ? 'rotten' : this.rating<7 ? 'spoiling' : 'ripe'
    }

}