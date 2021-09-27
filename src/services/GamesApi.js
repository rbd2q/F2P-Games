export default class GamesApi {
    async getGames() {
        const response = await fetch('https://www.freetogame.com/api/games');

        const data = await response.json();

        return data;
    }
}