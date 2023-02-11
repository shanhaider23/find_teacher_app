

const coaches = {
    getters: {
        coaches(state) {
            return state.coaches
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        }
    }
}

export default coaches