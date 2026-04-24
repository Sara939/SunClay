import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

export default function CardItem({ itemText, itemTitle, itemImage, itemSub }) {
  const [count, setCount] = useState(1);

  const handleShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out my site: ");
    window.open(`https://wa.me/?text=${text}${url}`, "_blank");
  };

  return (
    <Card sx={{ width: 340, height: 510, margin: 0.5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[900] }} aria-label="clay">
            Sun
          </Avatar>
        }
        title={itemTitle}
        subheader={itemSub}
      />
      <CardMedia component="img" height="194" image={itemImage} alt="item" />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.3 rem",
          }}
        >
          {itemText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon color="info" onClick={handleShare} />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="error" onClick={() => setCount(count + 1)} />
        </IconButton>
        <IconButton aria-label="add to favorites">{count}</IconButton>
      </CardActions>
    </Card>
  );
}
