import React from "react";
import Container from "../../UI/Container";
import CardItem from "../../UI/Card";
import m1 from "../../assets/m1.jpg";
import p from "../../assets/p.jpg";
import p1 from "../../assets/p1.jpg";
import p3 from "../../assets/p3.jpg";
import main from "../../assets/main.jpg";

function Catalog() {
  return (
    <Container
      display={"flex"}
      position={"unset"}
      flexWrap={"wrap"}
      // backgroundImage={clay2}
      backgroundColor={"rgba(201, 138, 44, 0.06)"}
    >
      <CardItem
        itemText={
          "Handcrafted small planters, thoughtfully designed for plant cuttings with a unique personal touch. Each piece is slightly different, making every planter one of a kind. Perfect for nurturing young plants while adding a natural, calming accent to any space.A beautiful step in your plant’s journey-before it finds its forever pot."
        }
        itemTitle={"Green- ירוק"}
        itemImage={main}
        itemSub={"Planter. On Stack"}
      />
      {/* 
      <CardItem
        itemText={
          "Handcrafted small planters, thoughtfully designed for plant cuttings with a unique personal touch. Each piece is slightly different, making every planter one of a kind. Perfect for nurturing young plants while adding a natural, calming accent to any space.A beautiful step in your plant’s journey—before it finds its forever pot."
        }
        itemTitle={"Sky Mug"}
        itemImage={p2}
        itemSub={"Planter. On Stack"}
      /> */}
      <CardItem
        itemText={
          "Handcrafted small planters, thoughtfully designed for plant cuttings with a unique personal touch. Each piece is slightly different, making every planter one of a kind. Perfect for nurturing young plants while adding a natural, calming accent to any space.A beautiful step in your plant’s journey-before it finds its forever pot."
        }
        itemTitle={"Comfort- נחמה"}
        itemImage={p3}
        itemSub={"Planter. On Stack"}
      />
      <CardItem
        itemText={
          "Handcrafted small planters, thoughtfully designed for plant cuttings with a unique personal touch. Each piece is slightly different, making every planter one of a kind. Perfect for nurturing young plants while adding a natural, calming accent to any space.A beautiful step in your plant’s journey-before it finds its forever pot."
        }
        itemTitle={"Desert- מדבר"}
        itemImage={p}
        itemSub={"Planter. On Stack"}
      />
      <CardItem
        itemText={
          "Handcrafted small planters, thoughtfully designed for plant cuttings with a unique personal touch. Each piece is slightly different, making every planter one of a kind. Perfect for nurturing young plants while adding a natural, calming accent to any space.A beautiful step in your plant’s journey-before it finds its forever pot."
        }
        itemTitle={"Sand- חול"}
        itemImage={p1}
        itemSub={"Planter. On Stack"}
      />
      <CardItem
        itemText={
          "Handcrafted ceramic mug,uniquely designed with a personal touch. Each piece is slightly different, making every mug one of a kind. Perfectly suited for enjoying coffee or tea in style.No two mugs tell the same story-find the one that speaks to you."
        }
        itemTitle={"Sky- שמיים"}
        itemImage={m1}
        itemSub={"Handmade Mug. On Stack"}
      />
      {/* <CardItem
        itemText={
          "Handcrafted ceramic mug, uniquely designed with a personal touch. Each piece is slightly different, making every mug one of a kind. Perfectly suited for enjoying coffee or tea in style.No two mugs tell the same story—find the one that speaks to you."
        }
        itemTitle={"Sky Mug"}
        itemImage={m2}
        itemSub={"Handmade Mug. On Stack"}
      /> */}
    </Container>
  );
}

export default Catalog;
