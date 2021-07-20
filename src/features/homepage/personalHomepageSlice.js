import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomePageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;

export default personalHomePageSlice.reducer;