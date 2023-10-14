import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

export default function CardList({ todos }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
      <Grid container spacing={2}>
        {todos?.map((todo) => (
          <>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {todo?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {todo?.description}
                  </Typography>
                </CardContent>
                <CardActions style={{display: "flex", justifyContent: "center"}}>
                  <Button size="small"  style={{backgroundColor: "black", color: "white"}}>Edit</Button>
                  <Button size="small" style={{backgroundColor: "red", color: "white"}}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}
