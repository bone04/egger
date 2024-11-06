"use client";
import * as React from "react"
import { motion } from "framer-motion";

export default function CC_04_Repeat() {
    return (
      <div>
        <motion.div 
            style={{
                marginTop: 100,
                marginLeft:100,
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "#0ff",
            }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        />
      </div>
    );
  };
  
