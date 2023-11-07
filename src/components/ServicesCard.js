import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import "./ServicesCard.css";

function ServicesCard({ image, title, subtitle }) {
  return (
    <Card className="card">
      <CardMedia
        className="card-image"
        component="img"
        height={400}
        image={image}
        alt={""}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" className="service-card-subtitle" gutterBottom>
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServicesCard;
