// import moment from "moment";
// import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";


// import {
//     buildAutocompleteQueryConfig,
//     buildFacetConfigFromConfig,
//     buildSearchOptionsFromConfig,
//     buildSortOptionsFromConfig,
//     getConfig,
//     getFacetFields
//   } from "./config-helper.js";


// const connector = new ElasticsearchAPIConnector({
//     cloud: {
//       id: "eCommerce_Website_project:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyQ0OGQ1NWRhOGFjZGQ0YTVlOTg1NTY2ODQ4YTJmYWRhOSRkYjU1YmY3MjY0ZDU0NDM4YjVjZDE4ODBiYjM2Y2E2MQ=="
//     },
//     apiKey: "Y3lhZWFvTUJGTXpwNWJ1R1NkM0w6WDE2SFItVDBTZzZ5UXJ6aGRFcW4wUQ== ",
//     index: "tesco_sample"
//   });

// export const config = {
//     searchQuery: {
//       facets: buildFacetConfigFromConfig(),
//       ...buildSearchOptionsFromConfig(),
//       search_fields: {
//         name: {
//           weight: 3
//         },
//         plot: {},
//         genre: {},
//         actors: {},
//         directors: {}
//       },
//       result_fields: {
//        name: {
//           snippet: {}
//         },
//         //gtin13: { },
//         //sku: { },
//         price: { raw: {} },
//         //condition: { },
//         //availability: { },
//         //currency: { },
//         brand: { },
//         breadcrumbs: { raw: {} },
//         //description: { },
//         images: { raw: {} },
//         //avg_rating: { },
//         //reviews_count: { },
//         url: { raw: {} },
//         //crawled_at: { },
//         //source: { }
//       },
//       disjunctiveFacets: ["genre.keyword", "actors.keyword", "directors.keyword"],
//       facets: {
//         "genre.keyword": { type: "value" },
//         "actors.keyword": { type: "value" },
//         "directors.keyword": { type: "value" },
//         released: {
//           type: "range",
//           ranges: [
//             {
//               from: "2012-04-07T14:40:04.821Z",
//               name: "Within the last 10 years"
//             },
//             {
//               from: "1962-04-07T14:40:04.821Z",
//               to: "2012-04-07T14:40:04.821Z",
//               name: "10 - 50 years ago"
//             },
//             {
//               to: "1962-04-07T14:40:04.821Z",
//               name: "More than 50 years ago"
//             }
//           ]
//         },
//         imdbRating: {
//           type: "range",
//           ranges: [
//             { from: 1, to: 3, name: "Pants" },
//             { from: 3, to: 6, name: "Mediocre" },
//             { from: 6, to: 8, name: "Pretty Good" },
//             { from: 8, to: 10, name: "Excellent" }
//           ]
//         }
//       }
//     },
//     autocompleteQuery: {
//       results: {
//         resultsPerPage: 5,
//         search_fields: {
//           "title.suggest": {
//             weight: 3
//           }
//         },
//         result_fields: {
//           title: {
//             snippet: {
//               size: 100,
//               fallback: true
//             }
//           },
//           url: {
//             raw: {}
//           }
//         }
//       },
//       suggestions: {
//         types: {
//           results: { fields: ["movie_completion"] }
//         },
//         size: 4
//       }
//     },
//     apiConnector: connector,
//     alwaysSearchOnInitialLoad: true
//   };
