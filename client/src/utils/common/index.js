export const getGenres = (songs) => {
    return songs.reduce((acc, song) => {
        const category = song.genre.name;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(song);
        return acc;
    }, {});
}