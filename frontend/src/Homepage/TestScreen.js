import React from "react";
import { Link } from 'react-router-dom' 
import { config } from './ProductCarousel/config'

import {
  SearchProvider,
  Results,
} from "@elastic/react-search-ui";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const CustomResultsView = ({ children }) => {
  return (
    <div className="relative overflow-x-auto">
      <h3>Lateset Product</h3>
      <ul 
      className="  flex-direction: row   overflow-x: auto;
      list-style: none;"
      >{children}</ul>
    </div>
  );
};

const CustomResultView = ( { result} ) => (
    <div>
    <li
        className="py-3 px-3 snap-start hover:text-blue-600 sui-result "
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
    </div>
     
);

function ProductCarousel(props) {
  return (
    <div>
      <SearchProvider config={config(props.filters)}>
      <div className="product-carousel mb-10">
          <h3 className="text-xl leading-8 font-semibold text-slate-700">
            {props.title}
          </h3>
          <Results view={CustomResultsView} resultView={CustomResultView} />
        </div>
    </SearchProvider>
    </div>
  );
}

export default ProductCarousel