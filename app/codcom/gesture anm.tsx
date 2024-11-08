"use client";
import * as React from "react"
import { motion } from "framer-motion";
// Gesture animations
import "./style-ges.css";

const MyComponent = () =>  {
    return (
      <div className="example-container">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
      </div>
    );
  };
  export default MyComponent;
