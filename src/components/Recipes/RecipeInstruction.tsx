import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Box, CircularProgress, Container, List, ListItem, Typography } from "@mui/material";
import { AppDispatch, RootStore } from "./store/store";
import { fetchRecipes } from "./store/recipesSlice";
import { RecipeType } from "../../Types/RecipeType";


const RecipeInstruction = () => {

    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>()
    const recipesList = useSelector((state: RootStore) => state.recipes.recipes)
    const loading = useSelector((state: RootStore) => state.recipes.loading)
    useEffect(() => { dispatch(fetchRecipes()); }, [dispatch, loading]);
    let myRecipe: RecipeType | undefined;

    if (id) {
        myRecipe = recipesList.find(recipe => recipe.id === parseInt(id));
    }
    else {
        myRecipe = recipesList.find(recipe => recipe.id === 0);
    }

    return (<>
        <Container maxWidth="md" sx={{ mt: 4 }}>
            {!myRecipe ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ backgroundColor: '#000000', padding: 2, borderRadius: 1, color: "#FFFFFF" }}>
                        {myRecipe.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        Author ID: {myRecipe.authorId}
                    </Typography>
                    <Box sx={{ backgroundColor: '#000000', padding: 2, borderRadius: 1, mt: 2, color: "#FFFFFF" }}>
                        <Typography variant="h6" gutterBottom>
                            Description:
                        </Typography>
                    </Box>
                    <Typography variant="body1">{myRecipe.description}</Typography>
                    <Box sx={{ backgroundColor: '#000000', padding: 2, borderRadius: 1, mt: 2, color: "#FFFFFF" }}>
                        <Typography variant="h6" gutterBottom>
                            Ingredients:
                        </Typography>
                    </Box>
                    <List>
                        {myRecipe.ingredients.map((ingredient, index) => (
                            <ListItem key={index} color="textSecondary">
                                <RestaurantMenuIcon sx={{ mr: 1, color: "#D32F2F" }} /> {ingredient}
                            </ListItem>
                        ))}
                    </List>
                    <Box sx={{ backgroundColor: '#000000', padding: 2, borderRadius: 1, mt: 2, color: "#FFFFFF" }}>
                        <Typography variant="h6" gutterBottom>
                            Instructions:
                        </Typography>
                    </Box>
                    <Typography variant="body1">{myRecipe.instructions}</Typography>
                </>
            )}
        </Container>
    </>)
}
export default RecipeInstruction