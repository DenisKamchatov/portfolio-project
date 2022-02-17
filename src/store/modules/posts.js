export default {
    state: {
        characters: [],
        locations: [],
        location: [],
        charactersInLocation: [],
        countCharactersPages: 3,
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
                for (let i = 0; i < 20; i++) {
                    if (characters.results[i].id < 40) {
                        state.characters.push(characters.results[i])
                    }
                }
            }
        },
        updateAllLocations(state, locations) {
            for (let i = 0; i < 20; i++) {
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
        reloadAllCharacters(state) {
            state.charactersInLocation = []
            state.characters = []
        },
        nextPage(state) {
            state.page += 1
        }
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