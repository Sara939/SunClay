import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import order from "../../assets/order.jpg";

const MakeOrder = () => {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 1,
    customerName: "",
    customerEmail: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      console.log("Order Submitted:", formData);
      emailjs.sendForm(
        "service_r7nzy5f",
        "template_8c8q86o",
        e.target,
        "Zht_40NkphEKFd43B",
      );
      setIsSubmitted(true);
    } else {
      console.log("Order not Submitted:");
    }
  };
  if (isSubmitted) {
    return (
      <CardContent>
        <Card sx={{ maxWidth: 500, margin: "auto", mt: 10 }}>
          <h2>Thank you for your message, {formData.customerName}!</h2>
          <p>We have received your order and will get back to you shortly.</p>
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={() => setIsSubmitted(false)}
          >
            Submit another form
          </Button>
        </Card>
      </CardContent>
    );
  }

  return (
    <Container
      style={{ backgroundImage: `url(${order})`, backgroundSize: "cover" }}
    >
      <Card sx={{ maxWidth: 500, margin: "auto", mt: 5 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Place Your Order
          </Typography>
          <p>
            הפריטים מיוצרים בעבודת יד ובקצב היצירה שלי, קבלת הזמנות תלויה
            בזמינות <br />
            Items are handmade and made at my creativity pace. Accepting orders
            depends on availability.
            <br />
          </p>
          <h4>Thank you for your understanding.</h4>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Customer Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Customer Email"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              fullWidth
              required
            />

            <FormControl fullWidth required>
              <InputLabel id="product-label">Product</InputLabel>
              <Select
                labelId="product-label"
                name="product"
                value={formData.product}
                onChange={handleChange}
                label="Product"
              >
                <MenuItem value="Widget A">Handmade Mug</MenuItem>
                <MenuItem value="Widget B">Uniqe Plant Holder</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ min: 1 }}
            />
            <TextField
              label="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              minRows="2"
            />

            <Button type="submit" variant="contained" color="success">
              Submit Order
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MakeOrder;
