import React, { useState, useEffect } from "react";
import getTrendingTerms from "services/getTrendingTerms";
import Category from "components/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
    //TODO Ver URL xq las trends vienen vacias...
    console.log("TRENDS", trends);
  }, []);
  return <Category name="Tendencias" options={trends} />;
}
