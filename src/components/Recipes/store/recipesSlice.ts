import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RecipeType } from '../../../Types/RecipeType';
import { RootStore } from './store';


export const fetchRecipes = createAsyncThunk('recipes/fetch', async (_, thunkApi) => {
    try {
        const response = await axios.get('http://localhost:3000/api/recipes');

        return response.data as RecipeType[];
    }
    catch (err) {
        return thunkApi.rejectWithValue(err);
    }
})

export const addRecipe = createAsyncThunk('recipes/add', async (recipe: RecipeType, thunkApi) => {
    try {
        const response = await axios.post('http://localhost:3000/api/recipes', recipe);
        return response.data as RecipeType;
    } catch (e) {
        return thunkApi.rejectWithValue(e);
    }
})

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [] as RecipeType[],
        loading: false,
        error: null as string | null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<RecipeType[]>) => {
                state.recipes = [...state.recipes, ...action.payload];
            }).addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load recipes";
            }).addCase(fetchRecipes.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            }).addCase(addRecipe.fulfilled, (state, action: PayloadAction<RecipeType>) => {
                state.recipes.push(action.payload);
                state.loading = false;
            }
            ).addCase(addRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to load recipes";
            }).addCase(addRecipe.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })




    },
});
export const selectRecipes=(state:RootStore)=>state.recipes;
export const { } = recipesSlice.actions;
export default recipesSlice;