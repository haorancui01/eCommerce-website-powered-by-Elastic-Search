import React from "react";
import moment from "moment";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import { Link } from 'react-router-dom' 
import { config } from './config'

import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import {
  BooleanFacet,
  Layout,
  SingleSelectFacet,
  SingleLinksFacet
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const CustomResultsView = ({ children }) => {
    return (
      <div className="relative overflow-x-auto">
        <ul className="flex snap-x">{children}</ul>
      </div>
    );
  };

const CustomResultView = ({ result }) => {
    return (
      <li
        className="py-3 px-3 snap-start hover:text-blue-600 sui-result"
        style={{ width: "200px" }}
      >
      <Link to={`/product/${result.id.raw}`}>
           {result.name.raw}       
      </Link> 
        <a>
          <div className="sui-result__image">
            <img src={result.images.raw} alt=""  className="object-contain h-48 w-48"/>
          </div>
          {/* <h4 className="text-sm truncate">{result.name.raw}</h4> */}
        </a>
      </li>
    );
  };

export default function ProductCarousel(props) {
    return (
      <SearchProvider config={config(props.filters)}>
        <div className="product-carousel mb-10">
          <h3 className="text-xl leading-8 font-semibold text-slate-700">
            {props.title}
          </h3>
          <Results view={CustomResultsView} resultView={CustomResultView} />
        </div>
      </SearchProvider>
    );
  } 
