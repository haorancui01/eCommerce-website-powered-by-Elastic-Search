import React from "react";
import moment from "moment";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import { Link } from 'react-router-dom' 

import "@elastic/react-search-ui-views/lib/styles/styles.css";


const connector = new ElasticsearchAPIConnector({
  cloud: {
    id: "eCommerce_Website_project:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQ0OGQ1NWRhOGFjZGQ0YTVlOTg1NTY2ODQ4YTJmYWRhOSRkYjU1YmY3MjY0ZDU0NDM4YjVjZDE4ODBiYjM2Y2E2MQ=="
  },
  apiKey: "Y3lhZWFvTUJGTXpwNWJ1R1NkM0w6WDE2SFItVDBTZzZ5UXJ6aGRFcW4wUQ== ",
  index: "tesco_sample"
});

export const config = (filters) => ({
  alwaysSearchOnInitialLoad: true,
  trackUrlState: false,
  initialState: {
    resultsPerPage: 10
  },
  searchQuery: {
    filters,
    result_fields: {
      name: { raw: {} },
      price: { raw: {} },
      brand: { raw: {} },
      breadcrumbs: { raw: {} },
      images: { raw: {} },
      url: { raw: {} },
      id: { raw: {} },
      crawled_at: {},
    },
  },
  apiConnector: connector
});
