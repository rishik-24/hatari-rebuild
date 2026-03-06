import OrderedItemsCard from "@/components/OrderComp/OrderedItemsCard";
import OrderSummaryCard from "@/components/OrderComp/OrderSummaryCard";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const myorders = () => {
  const orderItems = [
    {
      id: "1",
      name: "Bhetki Fish Fry",
      quantity: 2,
      price: 320,
      isVeg: false,
    },
    {
      id: "2",
      name: "Chicken Dum Biryani",
      quantity: 2,
      price: 580,
      isVeg: false,
    },
    {
      id: "3",
      name: "Ice cream with brownie",
      quantity: 1,
      price: 180,
      isVeg: true,
    },
  ];

  return (
    <>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <OrderedItemsCard
          orderId="#e45378db"
          items={orderItems}
        />

        <OrderSummaryCard
          total={1080}
          gst={40}
          packing={20}
          grandTotal={1140}
          customerName="Brandie Watson"
          phone="9876543210"
          paymentMethod="Cash"
          orderTime="27 AUG, 2025 at 2:25 PM"
          cancelTime="20:15"
          onCancel={() => console.log("Cancel order")}
        />
      </ScrollView>
    </>
  );
};

export default myorders;

const styles = StyleSheet.create({});
