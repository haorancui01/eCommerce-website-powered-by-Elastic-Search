import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { config, SORT_OPTIONS } from "./config";

import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import {
  Layout,
  SingleLinksFacet,
  BooleanFacet
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { CustomResultView } from "./CustomResultView";


const config = () => ({
    ...config,
    searchQuery: {
      ...config.searchQuery,
      facets: {
        ...config.searchQuery.facets,
      }
    }
  });