import React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <>
      <Grid>
        <div>
          <Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black'}}
            variant="contained"
            size="small"
            onClick={() => handleCategoryClick('all')}
          >
            all
          </Button>
        </div>
        <div>
          <Button
            sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
            variant="contained"
            size="small"
            onClick={() => handleCategoryClick('star-wars')}
          >
            Star Wars
          </Button>
        </div>
        <div><Button
          sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
          variant="contained"
          size="small"
          onClick={() => handleCategoryClick('famous-people')}
        >
          Famous people
        </Button></div>
        <div><Button
          sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
          variant="contained"
          size="small"
          onClick={() => handleCategoryClick('saying')}
        >
          Saying
        </Button></div>
        <div><Button
          sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
          variant="contained"
          size="small"
          onClick={() => handleCategoryClick('humour')}
        >
          Humour
        </Button></div>

        <Button
          sx={{backgroundColor: 'white', color: 'black', border: 'black', mt: 1}}
          variant="contained"
          size="small"
          onClick={() => handleCategoryClick('motivational')}
        >
          Motivational
        </Button>

      </Grid>
    </>
  );
};

export default Categories;