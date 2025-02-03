import { Container, Typography, Box, Grid2 as Grid, Paper } from "@mui/material";
import { Restaurant, Cake, LocalDining, Favorite, People, BakeryDining, Public, RamenDining, Spa, EmojiEvents } from "@mui/icons-material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: "#f8f8f8" }}>
        <Typography variant="h3" gutterBottom align="center" fontWeight="bold">About Us</Typography>
        <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
          Welcome to our website, where love for cooking and baking transforms into unforgettable flavors! 
          Here, you'll find a wide variety of recipes for all levels – sweet pastries, surprising desserts, rich side dishes, and exquisite homemade flavors.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 ,color:"#3a3a3a"}}>
          We believe that the kitchen is the heart of the home, and our recipes are designed to turn every meal into a special experience. 
          Whether you are looking for inspiration for a festive dish, a sweet dessert for the end of the day, or a quick and satisfying meal, 
          we are here to help you succeed with every recipe.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 ,color:"#3a3a3a"}}>
          All our recipes have been carefully tested and written in a clear and simple way, so anyone – even without much cooking experience – can make the most of them. 
          Additionally, we share professional tips, upgrade ideas, and detailed guides to make your cooking experience easier and more enjoyable.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 ,color:"#3a3a3a"}}>
          On our website, you'll also find special recipes according to the seasons, festive and holiday dishes, and recipes tailored for a healthy diet and various nutritional needs. 
          We are committed to bringing you quality content, original recipes, and a wealth of creative ideas that will excite your taste buds.
        </Typography>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Our Chefs
          </Typography>
          <Typography variant="body1" display="flex" alignItems="center" color="#3a3a3a" gap={1}>
              <BakeryDining color="primary" /> Chef Eyal Cohen – Expert in gourmet pastries and desserts.</Typography>
            <Typography variant="body1" display="flex" alignItems="center" color="#3a3a3a" gap={1}>
              <Public color="secondary" /> Chef Roni Levi – Innovates exquisite global cuisine recipes.</Typography>
            <Typography variant="body1" display="flex" alignItems="center" color="#3a3a3a" gap={1}>
              <Spa color="success" /> Chef Maya Barak – Specializes in healthy and alternative dishes. </Typography>
            <Typography variant="body1" display="flex" alignItems="center" color="#3a3a3a" gap={1}>
              <RamenDining color="error" /> Chef Daniel Shapira – Known for traditional cooking with a modern twist.</Typography>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            Our Principles
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Restaurant fontSize="large" color="primary" />
                <Typography variant="subtitle1" fontWeight="bold">Quality & Precision</Typography>
                <Typography variant="body2">
                  Every recipe is tested and designed for guaranteed success.
                </Typography></Paper> </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Cake fontSize="large" color="secondary" />
                <Typography variant="subtitle1" fontWeight="bold">
                  Creativity
                </Typography>
                <Typography variant="body2">
                  Encouraging culinary experiments and recipe enhancements.
                </Typography></Paper> </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <LocalDining fontSize="large" sx={{ color: '#000000' }}/>
                <Typography variant="subtitle1" fontWeight="bold">
                  Accessibility
                </Typography>
                <Typography variant="body2">
                  Recipes for all skill levels, from beginners to experts.
                </Typography></Paper> </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Favorite fontSize="large" color="error" />
                <Typography variant="subtitle1" fontWeight="bold">
                  Health & Balance
                </Typography>
                <Typography variant="body2">
                  Offering recipes suitable for a healthy lifestyle.
                </Typography> </Paper> </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <People fontSize="large" sx={{ color: '#000000' }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Community & Sharing
                </Typography>
                <Typography variant="body2">
                  A place where cooking enthusiasts share tips and experiences.
                </Typography></Paper></Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <EmojiEvents fontSize="large" sx={{ color: '#FF5252' }} />
                <Typography variant="subtitle1" fontWeight="bold">
                  Excellence & Passion
                </Typography>
                <Typography variant="body2">
                  Striving for culinary excellence with passion and dedication.
                </Typography></Paper></Grid>
          </Grid></Box></Paper></Container>
  );
};
export default About;
