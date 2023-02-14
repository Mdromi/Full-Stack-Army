import {
  CssBaseline,
  Button,
  Checkbox,
  Container,
  Rating,
  Box,
} from "@mui/material";
import { purple, pink } from "@mui/material/colors";
import { useState, useEffect } from "react";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const App = () => {
  const [rating, setRating] = useState(0.5);
  const [hover, setHover] = useState(-1);

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  useEffect(() => {
    alert(rating);
  }, [rating]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Button variant="contained" bg="gray-200">
          {" "}
          Test Button{" "}
        </Button>
        <Checkbox
          defaultChecked
          sx={{
            color: purple[800],
            "&.Mui-checked": {
              color: pink[600],
            },
            "& .MuiSvgIcon-root": { fontSize: 28 },
          }}
        />
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="simple-controlled"
            value={rating}
            precision={0.5}
            onChange={(_, value) => {
              setRating(value);
            }}
            onChangeActive={(_, newHover) => {
              setHover(newHover);
            }}
          />
          {rating !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default App;
