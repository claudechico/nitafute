import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
        const { data } = await axios.get("http://192.168.0.152:8080/api/v1/auth/all-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
