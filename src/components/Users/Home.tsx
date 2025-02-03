import { Outlet } from 'react-router';
import RecipeImage from '../Recipes/recipeImage';
import { Grid2 as Grid, Box, Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <h1 style={{ backgroundColor: '#4b38381f', width: '100%', margin: '15px', padding: "15px" }}>Our favorite recipes ❤❤❤</h1>
      <Container>
        <Grid container spacing={2} sx={{ color: '#8B5E3C' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <RecipeImage imgItem={{
              img: "Images/1.jpg",
              title: "PIZZA",
              author: "Gordon Ramsay",
              link: "/show/recipes/5"
            }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RecipeImage imgItem={{
              img: "Images/image2.jpg",
              title: "PASTA",
              author: "Jamie Oliver",
              link: "/show/recipes/1"
            }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RecipeImage imgItem={{
              img: "Images/image3.jpg",
              title: "CAKES",
              author: "Alain Ducasse",
              link: "/show/recipes/3"
            }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <RecipeImage imgItem={{
              img: "Images/image4.jpg",
              title: "ALFAJORES",
              author: "Wolfgang Puck",
              link: "/show/recipes/4"
            }} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Home