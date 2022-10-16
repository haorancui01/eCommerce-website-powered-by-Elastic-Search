import * as React from "react";
import ProductCarousel from "./TestScreen";
import "../style.css";
import { config } from "./ProductCarousel/config"

export default function SearchHomeScreen() {
  return (
    <>
      {/* <Navigation /> */}
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ProductCarousel
          title="Latest in Product"
          filters={[{ field: "brand", values: ["true"] }]}
        />
        <ProductCarousel
          title="Popular Product"
          filters={[{ field: "parent_category", values: ["Monitors"] }]}
        />
      </div>
    </>
  );
}