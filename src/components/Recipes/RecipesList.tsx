import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from "@mui/material";
import { AppDispatch, RootStore } from "./store/store";
import { fetchDeleteRecipe, fetchRecipes } from "./store/recipesSlice";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../context";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
const StyledListItemButton = styled(ListItemButton)({ "&:hover": { backgroundColor: "#b71c1c38" }, });
const StyledLink = styled(Link)({ textDecoration: "none", color: "#000000", width: "100%", display: "block", });

export default ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const recipesList = useSelector((state: RootStore) => state.recipes.recipes);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { dispatch(fetchRecipes()); }, [dispatch]);
  useEffect(() => { }, [recipesList]);
  const context = useContext(UserContext);
  if (!context) { throw new Error("User context must be used within a UserContextProvider"); }
  const { state } = context;

  const handleDeleteClick = (event: React.MouseEvent, recipeId: number) => {
    event.preventDefault(); setSelectedRecipe(recipeId); setOpenDialog(true);
  };
  const handleDelete = async () => {
    try {
      if (!selectedRecipe || !state.id) return;
      await dispatch(fetchDeleteRecipe({ recipeId: selectedRecipe, userId: state.id })).unwrap();
      await dispatch(fetchRecipes()).unwrap();
      setOpenDialog(false);
      setSelectedRecipe(null);
      navigate("/show/Deleting");
    } catch (error) {
      setError("Failed to delete recipe. Please try again."); setTimeout(() => setError(null), 5000);
    }
  };
  return (
    <>
      {error && (<Stack sx={{ width: "100%", position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 9999 }}>
        <Alert variant="outlined" severity="error" onClose={() => setError(null)}>{error} </Alert>
      </Stack>)}
      <Drawer sx={{ width: drawerWidth, flexShrink: 0, "& .MuiDrawer-paper": { width: drawerWidth } }} variant="persistent" anchor="right" open={open}>
        <Tooltip title="Close Recipies List" arrow>
          <IconButton onClick={onClose} sx={{ alignSelf: "flex-end", margin: 1, color: "#B71C1C" }}><ChevronRightIcon /></IconButton>
        </Tooltip>
        {state.id && (<Tooltip title="Add Recipies " arrow>
          <StyledLink to={`Add/${state.id}`}>
            <StyledListItemButton>
              <ListItemIcon sx={{ color: "#B71C1C" }}> <AddIcon /></ListItemIcon>
              <ListItemText primary="Add" />
            </StyledListItemButton>
          </StyledLink>
        </Tooltip>)}
        <List>
          {recipesList.map((r) => (
            <ListItem key={r.title} disablePadding
              secondaryAction={state.id && r.authorId == state.id && (
                <Tooltip title="Delete Recipe" arrow>
                  <IconButton
                    edge="end"
                    onClick={(e) => handleDeleteClick(e, r.id)}
                    sx={{ color: '#B71C1C' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              )} >
              <ListItemButton component={Link} to={`recipes/${r.id}`} sx={{
                '&:hover': {
                  backgroundColor: '#bf00009e',
                },
              }}>
                <ListItemIcon sx={{ color: "#B71C1C" }}> <MenuBookIcon /></ListItemIcon>
                <ListItemText primary={r.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Delete confirmation</DialogTitle>
        <DialogContent>Are you sure you want to delete the recipe?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
