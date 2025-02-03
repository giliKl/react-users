import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router';


const RecipeImage = ({ imgItem }: { imgItem: { img: string; title: string; author: string; link: string } }) => {
    return (
        <>
            <Link to={imgItem.link}>
                <ImageListItem key={imgItem.img} sx={{
                    width: 350,
                    height: 200, 
                    overflow: "hidden",
                    borderRadius: 1, 
                }}>
                    <img
                        srcSet={`${imgItem.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${imgItem.img}?w=248&fit=crop&auto=format`}
                        alt={imgItem.title}
                        loading="lazy"
                        style={{
                            width: "350px",
                            height: "450px",
                            objectFit: "cover",
                        }}

                    />
                    <ImageListItemBar
                        title={imgItem.title}
                        subtitle={imgItem.author}
                        actionIcon={
                            <>
                                <FavoriteBorderIcon
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)', padding: 3 }}
                                    aria-label={`info about ${imgItem.title}`}
                                />
                            </>
                        }
                    />

                </ImageListItem>
            </Link>
        </>);

};

export default RecipeImage;