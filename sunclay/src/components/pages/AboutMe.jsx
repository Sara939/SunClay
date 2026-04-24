import React from "react";
import Container from "../../UI/Container";
import Ticket from "../../UI/Ticket";
import profile from "../../assets/profile.jpeg";
import { Grid, Typography, Avatar, Box, Divider, Paper } from "@mui/material";
import { Code, LocationOn } from "@mui/icons-material";

export default function AboutMe() {
  return (
    <Container
      display={"flex"}
      position={"unset"}
      backgroundColor={"rgba(201, 138, 44, 0.06)"}
    >
      <Ticket>
        <Paper
          elevation={8}
          sx={{
            padding: {
              xs: 2, // 16px on small screens
              sm: 2, // 24px on medium screens
              md: 8, // 32px on large screens
            },
            height: 600,
            minWidth: 0,

            overflow: "hidden",
            textOverflow: { xs: "clip", sm: "clip", md: "clip" },
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Nice to meet you
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Hi, I'm Sara :) A software developer & Ceramic artist{" "}
          </Typography>
          <Typography variant="body1">
            Alongside the technological world I have found a place for
            creativity and peace through pottery. a hobby that has become a
            space for breathing: through material,through process, and working
            with my hands. For me, pottery is a way to connect with an ancient
            culture and history that has accompanied humanity for thousands of
            years. The thought that people shaped clay with their hands many
            generations ago creates a sense of continuity and connection to a
            long tradition of human craftsmanship. I create handmade pottery out
            of a love for clay, nature, and the slow, precise process of making.
            Each piece begins as a simple raw material and goes through stages
            of shaping, glazing, and firing in the kiln until it becomes a
            unique item with its own character. I treat every piece as a
            creation of its own, giving it care and patience with the intention
            of passing it forward to people who will use it and enjoy it in
            their everyday lives.
            <br /> Thank you
          </Typography>
        </Paper>
      </Ticket>

      <Ticket>
        <Paper
          elevation={8}
          sx={{
            padding: {
              xs: 2, // 16px on small screens
              sm: 2, // 24px on medium screens
              md: 8, // 32px on large screens
            },
            height: 600,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: { xs: "clip", sm: "clip", md: "clip" },
          }}
        >
          <Box display="flex" alignItems="center">
            <LocationOn color="primary" sx={{ mr: 1 }} />
            <Typography variant="body2" color="text.secondary">
              Located in [Pardes Hanna–Karkur]
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <img
            src={profile}
            alt="profile"
            style={{ width: "95%", borderRadius: "20px", margin: "20px" }}
          />
          <Typography variant="body1">
            שמי שרה, בת 34 ומתגוררת בפרדס חנה כרכור. במקצועי אני מפתחת תוכנה,
            והקדרות עבורי היא מזון לנשמה ! זוהי הדרך שלי להתחבר לתרבות
            ולהיסטוריה עתיקה שמלווה את האנושות במשך אלפי שנים ובעיקר לעצמי. אני
            יוצרת כלים בעבודת יד מתוך אהבה לעבדה על האובניים, לריכוז ולתהליך
            האיטי והמדויק של היצירה עד שהוא הופך לכלי ייחודי עם אופי משלו. ניתן
            לפנות אליי להזמנות דרך עמוד יצירת הקשר באתר, מכיוון שכל הכלים
            מיוצרים בעבודת יד ובקצב היצירה שלי שעליו אני מקפידה שיהיה נעים ונעשה
            באהבה ורוגע- קבלת הזמנות תלויה בזמינות שלי ולכן לא תמיד אוכל להתחייב
            להזמנות חדשות. תודה על ההבנה
          </Typography>
        </Paper>
      </Ticket>
    </Container>
  );
}

// import React from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Avatar,
//   Box,
//   Divider,
//   Paper,
// } from "@mui/material";
// import { Code, LocationOn } from "@mui/icons-material";

// const AboutMe = () => {
//   return (
//     <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
// <Grid container spacing={4} alignItems="center">
//   <Grid item xs={12} md={4} display="flex" justifyContent="center">
//             {/* Avatar for profile picture */}
//             <Avatar
//               alt="Your Name"
//               src="/path-to-your-image.jpg" // Replace with your image path
//               sx={{
//                 width: 150,
//                 height: 150,
//                 border: "2px solid",
//                 borderColor: "primary.main",
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             {/* Main content */}
//             <Typography variant="h3" component="h1" gutterBottom>
//               Hi, I'm Sara
//             </Typography>
//             <Typography variant="h6" color="text.secondary" gutterBottom>
//               <Code sx={{ verticalAlign: "middle", mr: 1 }} />
//               React Developer & UI Enthusiast
//             </Typography>
//             <Typography variant="body1" paragraph>
//               I am a passionate front-end developer with expertise in building
//               responsive and user-friendly web applications using React and
//               Material UI. My focus is on creating clean, efficient, and
//               visually appealing interfaces that provide a great user
//               experience.
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Box display="flex" alignItems="center">
//               <LocationOn color="primary" sx={{ mr: 1 }} />
//               <Typography variant="body2" color="text.secondary">
//                 Located in [Pardes Hanna–Karkur]
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default AboutMe;
