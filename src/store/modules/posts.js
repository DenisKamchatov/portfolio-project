export default {
    state: {
        characters: [],
        charactersInfo: [],
        locations: [],
        charactersPage: 1,
        location: [],
        charactersInLocation: [],
    },
    actions: {
        async fetchCharacters(ctx, page) {
            const res = await fetch('https://rickandmortyapi.com/api/character/?page=' + page)
            const characters = await res.json()
            ctx.commit('updateCharacters', characters)
        },
        async fetchLocations(ctx) {
            const res = await fetch('https://rickandmortyapi.com/api/location')
            const locations = await res.json()
            ctx.commit('updateLocations', locations)
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
        updateCharacters(state, characters) {
            state.characters = characters.results
        },
        updateLocations(state, locations) {
            state.locations = locations.results
        },
        updateLocation(state, location) {
            state.location = location
        },
        updateCharactersInLocation(state, character) {
            state.charactersInLocation.push(character)
        },
        reloadCharactersOnLocation(state) {
            state.charactersInLocation = []
        },
    },
    getters: {
        allCharacters(state) {
            return state.characters
        },
        allLocations(state) {
            return state.locations
        },
        getCharactersPage(state) {
            return state.charactersPage
        },
        getOneLocation(state) {
            return state.location
        },
        getCharactersInLocation(state) {
            return state.charactersInLocation
        },

    },
}