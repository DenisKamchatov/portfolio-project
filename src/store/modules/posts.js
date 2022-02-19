export default {
    state: {
        characters: [],
        locations: [],
        location: [],
        charactersInLocation: [],
        countCharactersPages: 10,
        countLocationsPages: 7,
    },
    actions: {
        async fetchAllCharacters(ctx, page) {
            const res = await fetch('https://rickandmortyapi.com/api/character/?page=' + page)
            const characters = await res.json()
            ctx.commit('updateAllCharacters', characters)
        },
        async fetchAllLocations(ctx, page) {
            const res = await fetch('https://rickandmortyapi.com/api/location/?page=' + page)
            const locations = await res.json()
            ctx.commit('updateAllLocations', locations)
        },
        async fetchLocation(ctx, page) {
            const res = await fetch(page)
            const location = await res.json()
            ctx.commit('updateLocation', location)
        },
        async fetchCharacterInLocation(ctx, page) {
            const res = await fetch(page)
            const character = await res.json()
            ctx.commit('updateCharactersInLocation', character)
        }
    },
    mutations: {
        updateAllCharacters(state,characters) {
            if (state.characters.length === 0) {
                state.characters = characters.results
            } else {
                for (let i = 0; i < characters.results.length; i++) {
                    if (characters.results[i].id <= state.countCharactersPages * 20) {
                        state.characters.push(characters.results[i])
                    }
                }
            }
        },
        updateAllLocations(state, locations) {
            for (let i = 0; i < locations.results.length; i++) {
                state.locations.push(locations.results[i])
            }
        },
        updateLocation(state, location) {
            state.location = location
        },
        updateCharactersInLocation(state, character) {
            if (character.id <= 40) {
                state.charactersInLocation.push(character)
            }
        },
        reloadAllCharacters(state, data) {
            if (data === 'characters') {
                if (state.locations.length !== 0) {
                    state.locations = []
                }
                state.characters = []
            } else if (data === 'locations') {
                if (state.characters.length !== 0) {
                    state.characters = []
                }
                state.locations = []
                state.charactersInLocation = []
            } else if (data === 'none') {
                state.locations = []
                state.charactersInLocation = []
                state.characters = []
            }
        },
    },
    getters: {
        allCharacters(state) {
            return state.characters
        },
        allLocations(state) {
            return state.locations
        },
        getOneLocation(state) {
            return state.location
        },
        getCharactersInLocation(state) {
            return state.charactersInLocation
        },
        getCountCharactersPages(state) {
            return state.countCharactersPages
        },
        getCountLocationsPages(state) {
            return state.countLocationsPages
        },
    },
}