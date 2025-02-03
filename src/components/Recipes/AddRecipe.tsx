import { useDispatch } from "react-redux";
import { array, object, string } from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, Checkbox, IconButton, Stack, TextField } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Add, Delete } from "@mui/icons-material";
import { fetchAddRecipe, fetchRecipes } from "./store/recipesSlice";
import { useNavigate, useParams } from "react-router";
import { AppDispatch } from "./store/store";
import { RecipeType } from "../../Types/RecipeType";
import React from 'react';

const schema = object({
    title: string().required("Title is required"),
    description: string().required("Description is required"),
    ingredients: array().of(string().required("Each ingredient is required")).min(1, "At least one ingredient is required").required("Ingredients are required"),
    instructions: string().required("Instructions is required"),
}).required();

interface FormValues {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string;
}

const AddRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showError, setShowError] = React.useState(false);
    const { control, formState: { errors, isSubmitted }, register, handleSubmit, reset
    } = useForm<FormValues>({defaultValues: { title: '', description: '', ingredients: [], instructions: '' },resolver: yupResolver(schema)});
    const { fields, append, remove } = useFieldArray<any>({ control,name: "ingredients"});
    const dispatchFetch = useDispatch<AppDispatch>();
    
    const onSubmit = async (data: FormValues) => {
        try {
            const recipe: RecipeType = {title: data.title, description: data.description,ingredients: data.ingredients,instructions: data.instructions,id: 0,authorId: parseInt(id!)};
            await dispatchFetch(fetchAddRecipe({ recipe, userId: parseInt(id!) }));
            dispatchFetch(fetchRecipes());
            reset();
            navigate('/show/successAdding');
        } catch (error) {
            setShowError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "500px", margin: "auto", padding: "20px", direction: "ltr" }}>
            <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
                {isSubmitted && Object.keys(errors).length > 0 && (
                    <Alert severity="error">
                        יש למלא את כל השדות הנדרשים:
                        {errors.title && <div>- שם המתכון חסר</div>}
                        {errors.description && <div>- תיאור המתכון חסר</div>}
                        {errors.ingredients && <div>- יש להוסיף לפחות מרכיב אחד</div>}
                        {errors.instructions && <div>- הוראות ההכנה חסרות</div>}
                    </Alert>
                )}
                {showError && (
                    <Alert severity="error">אירעה שגיאה בשמירת המתכון, אנא נסה שוב</Alert>
                )}
            </Stack>
            <h2 style={{ textAlign: "center" }}>Add a New Recipe: </h2>
            <TextField label="Recipe name" variant="outlined" fullWidth margin="normal"{...register("title")} error={!!errors.title}  helperText={errors.title?.message} />
            <TextField label="Description" variant="outlined" fullWidth  margin="normal" {...register("description")} error={!!errors.description} helperText={errors.description?.message}  multiline rows={4} />
            <h3>Ingredients:</h3>
            {fields.map((field, index) => (
                <Box key={field.id} display="flex" alignItems="center" gap={1} mb={1}>
                    <TextField
                        {...register(`ingredients.${index}` as const)}
                        variant="outlined"
                        fullWidth
                        error={!!errors.ingredients?.[index]}
                        helperText={errors.ingredients?.[index]?.message}
                    />
                    <IconButton onClick={() => remove(index)} color="error"><Delete /></IconButton>
                </Box>
            ))}
            <Button variant="contained" startIcon={<Add />} onClick={() => append("")} sx={{ mb: 2 }}>Add a Ingredient</Button>
            <TextField label="Instructions" variant="outlined" fullWidth {...register("instructions")} error={!!errors.instructions} helperText={errors.instructions?.message} multiline rows={4} />
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="I agree to receive notifications of new recipes" />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary" fullWidth>Submit a recipe</Button>
        </form>
    );
}

export default AddRecipe;
