import React from "react";
//import { config } from "../config";
import moment from "moment";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import { Link } from 'react-router-dom' 
import Product from '../components/Product'

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  buildSortOptionsFromConfig,
  getConfig,
  getFacetFields
} from "../config-helper.js";

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

import Header from "../components/Header";


const connector = new ElasticsearchAPIConnector({
  cloud: {
    id: "eCommerce_Website_project:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQ0OGQ1NWRhOGFjZGQ0YTVlOTg1NTY2ODQ4YTJmYWRhOSRkYjU1YmY3MjY0ZDU0NDM4YjVjZDE4ODBiYjM2Y2E2MQ=="
  },
  apiKey: "Y3lhZWFvTUJGTXpwNWJ1R1NkM0w6WDE2SFItVDBTZzZ5UXJ6aGRFcW4wUQ== ",
  index: "tesco_sample"
});


const SORT_OPTIONS = [
  {
    name: "Relevance",
    value: []
  },
  {
    name: "Title",
    value: [
      {
        field: "title",
        direction: "asc"
      }
    ]
  },
  {
    name: "State",
    value: [
      {
        field: "states",
        direction: "asc"
      }
    ]
  },
  {
    name: "State -> Title",
    value: [
      {
        field: "states",
        direction: "asc"
      },
      {
        field: "title",
        direction: "asc"
      }
    ]
  },
  {
    name: "Heritage Site -> State -> Title",
    value: [
      {
        field: "world_heritage_site",
        direction: "asc"
      },
      {
        field: "states",
        direction: "asc"
      },
      {
        field: "title",
        direction: "asc"
      }
    ]
  }
];

const config = {
  
  searchQuery: {   
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig(),
    search_fields: {
      "name": { "weight": 3 },
       //"price": {},
        brand: {},
      // breadcrumbs: {},
    },
    result_fields: {
      name: { snippet: {} },
      //gtin13: { },
      //sku: { },
      price: { raw: {} },
      //condition: { },
      //availability: { },
      //currency: { },
      brand: { raw: { } },
      breadcrumbs: { raw: {} },
      //description: { },
      images: { raw: {} },
      //avg_rating: { },
      //reviews_count: { },
      url: { raw: {} },
      id: { raw: {} },
      crawled_at: { },
      //source: { }
    },
    disjunctiveFacets: [
      "name", 
      //"price", 
      "directors"
    ],
    facets: {
      "name.keyword": { type: "value" },
      //"price.keyword": { type: "value" },
      "directors.keyword": { type: "value" },
    price: {
        type: "range",
        ranges: [
          {
            from: 0, to: 10,
            name: "0 - 10"
          },
          {
            from: 10, to: 20,
            name: "10 - 20"
          },
          {
            from: 20, to: 230,
            name: "20 - 30"
          },
        ]
      },
      imdbRating: {
        type: "range",
        ranges: [
          { from: 1, to: 3, name: "Pants" },
          { from: 3, to: 6, name: "Mediocre" },
          { from: 6, to: 8, name: "Pretty Good" },
          { from: 8, to: 10, name: "Excellent" }
        ]
      }
    }
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      search_fields: {
        "title.suggest": {
          weight: 3
        }
      },
      result_fields: {
        title: {
          snippet: {
            size: 100,
            fallback: true
          }
        },
        url: {
          raw: {}
        }
      }
    },
    suggestions: {
      types: {
        results: { fields: ["movie_completion"] }
      },
      size: 4
    }
  },
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};


const CustomResultView = ({ 
  result, 
  onClickLink 
} ) => (
  
  <li className="sui-result">
    <div className="sui-result__header">
      {/* <h3> */}
        {/* Maintain onClickLink to correct track click throughs for analytics*/}
        {/* <a onClick={onClickLink} href={result.brand}>
          {result.breadcrumbs}
        </a> */}
      {/* {result.name.raw} */}
       
      {/* </h3> */}

      {/* <a onClick={onClickLink} href={result.url.raw}>
          {result.name.raw}         
      </a> */}


       <Link to={`/product/${result.id.raw}`}>
          {result.name.raw}       
          {/* <Product product={product}/>  */}
      </Link> 

    </div>
    <div className="sui-result__body">
      {/* use 'raw' values of fields to access values without snippets */}
      
      <div className="sui-result__image">
        <img src={result.images.raw} alt="" />
      </div>
      {/* Use the 'snippet' property of fields with dangerouslySetInnerHtml to render snippets */}
      <div
        className="sui-result__details"
       // dangerouslySetInnerHTML={{ __html: result.breadcrumbs.raw}} 
      >
        Brand: {result.brand.raw}
        Price: ${result.price.raw}
      </div>
    </div>
  </li>
);


function Search() {
  return (
    <div>
      <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
              <Layout
              header={
              <SearchBox
                  autocompleteMinimumCharacters={3}
                  autocompleteResults={{
                  linkTarget: "_blank",
                  sectionTitle: "Results",
                  titleField: "title",
                  urlField: "url",
                  shouldTrackClickThrough: true
                  }}
                  autocompleteSuggestions={true}
                  debounceLength={0}
                  /> 
              }
              sideContent={
              <div>
                {wasSearched && <Sorting label={"Sort by"} sortOptions={SORT_OPTIONS} />}
                <Facet key={"1"} field={"genre.keyword"} label={"genre"} />
                <Facet key={"2"} field={"actors.keyword"} label={"actors"} />
                <Facet key={"3"} field={"directors.keyword"} label={"directors"} />
                <Facet key={"4"} field={"price"} label={"price"} />
                <Facet key={"4"} field={"imdbRating"} label={"imdb rating"} />
                </div>
              }
              bodyContent={
                <Results shouldTrackClickThrough={true} titleField="name"   thumbnailField="images"  resultView={CustomResultView}  />
                //<Results resultView={CustomResultView}/>
              }
              bodyHeader={
                <React.Fragment>
                {wasSearched && <PagingInfo />}
                {wasSearched && <ResultsPerPage />}
                </React.Fragment>
              }
              bodyFooter={<Paging />}
              />
              </ErrorBoundary>
            </div>
           
          );
        }}
      </WithSearch>
    </SearchProvider>
    </div>
  );
}

export default Search