// Filename - App.js

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { useSwipeable } from "react-swipeable";

// Collection of images with their labels and paths
const MyCollection = [
  {
    label: "BODY SPLASH - COCONUT",
    imgPath: "./images/S-C.png",
  },
  {
    label: "BODY SPLASH - GINGHAM",
    imgPath: "./images/S-G.png",
  },
  {
    label: "BODY LOTION - COCONUT",
    imgPath: "./images/L-C.png",
  },
  { label: "BODY LOTION - GINGHAM", imgPath: "./images/L-G.png" },
  {
    label: "Lip Palm",
    imgPath: "./images/lip-palm.png",
  },
];

const ImageSlider = () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  // Function to go to the next picture
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % CollectionSize);
  };

  // Function to go to the previous picture
  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? CollectionSize - 1 : prevActiveStep - 1
    );
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextPicture,
    onSwipedRight: goToPreviousPicture,
    preventScrollOnSwipe: true,
    trackMouse: true, // Allow mouse dragging
  });

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPicture();
    }, 7000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div
      {...swipeHandlers} // Attach swipe handlers to the container
    >
      <div
        style={{
          maxWidth: "20rem",
          flexGrow: 1,
        }}
      >
        <Paper
          className="rounded-t-2xl "
          square
          elevation={0}
          style={{
            height: 50,
            display: "flex",
            paddingLeft: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
            background: "#e57d91",
          }}
        >
          <p className=" text-xl font-extrabold text-pink-950 -ml-4 ">
            {MyCollection[index].label}
          </p>
        </Paper>
        <img
          className=" rounded-b-2xl"
          src={MyCollection[index].imgPath}
          style={{
            height: 255,
            width: "100%",
            maxWidth: 400,
            display: "block",
            overflow: "hidden",
          }}
          alt={MyCollection[index].label}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
