# Search UI configuration

In this walkthrough guide, we introduce the appraoch how we implement the front-end using Search UI, and how the back-end is implemented.

# Implemented screens
There are two screen pages are implemented based on Search UI.

Homepage codes are included in [Homepage](../frontend/src/Homepage/) folder. 

```
Homepage Directory Tree

├─ Homepage
│  ├─ config.js
│  ├─ TestScreen.js
│  ├─ ProductCarousel
│  ├─ config.js
└─ └─ index.js
```

Search page codes are included in [SearchScreen.js](../frontend/src/screens/SearchScreen.js)

# Implementation of SearchScreen
This implementation is based on this [documentation](https://docs.elastic.co/search-ui/tutorials/elasticsearch).
In search screen, the used API is APP connector to connect to App Search. 
Since there are two running databased, the search result in search screen is stored at Elasticsearch cloud and the product detail in product detail screen is stored at MongoDB, if a user click on the link of product search on search screen, it will not jump to the product detail screen.
Therefore, a adjustment here has to be made to make the connection between these two databsase,
 
To connect the two database, a common data need to be found.
Each of data has specific id.

### MongoDB data example
```
{
  "_id": {
    "$oid": "63369eae5ad3158944b8abcb"
  },
  "name": "Bondi Sands Liquid Gold Tan Oil 270Ml",
  "gtin13": 850278004336,
  "sku": 298107879,
  "price": 15,
  "condition": "NewCondition",
  "availability": "InStock",
  "currency": "GBP",
  "brand": "BONDI SANDS",
  "breadcrumbs": "Home ~ Health & Beauty ~ Body Skincare ~ Fake Tan",
  "images": "https://digitalcontent.api.tesco.com/v2/media/ghs/b929ec99-ad6f-4d3c-9750-fe19aa2aca6b/snapshotimagehandler_1151611055.jpeg",
  "avg_rating": null,
  "reviews_count": null,
  "url": "https://www.tesco.com/groceries/en-GB/products/298107879",
  "id": "0df5d322-9271-5178-b0bd-fe6e07157ecf",
  "crawled_at": {
    "$date": {
      "$numberLong": "1629721732000"
    }
  },
  "source": "https://www.tesco.com/groceries",
  "__v": 0,
  "createdAt": {
    "$date": {
      "$numberLong": "1664523950137"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1664523950137"
    }
  }
}
```

### Elasticsearch data example

```
 "_index": "search-tesco",
        "_id": "OCbW3oMBFMzp5buGfuGZ",
        "_score": 1,
        "_ignored": [
          "description.keyword"
        ],
        "_source": {
          "name": "Bondi Sands Liquid Gold Tan Oil 270Ml",
          "gtin13": "00850278004336",
          "sku": "298107879",
          "price": 15,
          "condition": "NewCondition",
          "availability": "InStock",
          "currency": "GBP",
          "brand": "BONDI SANDS",
          "breadcrumbs": "Home ~ Health & Beauty ~ Body Skincare ~ Fake Tan",
          "images": "https://digitalcontent.api.tesco.com/v2/media/ghs/b929ec99-ad6f-4d3c-9750-fe19aa2aca6b/snapshotimagehandler_1151611055.jpeg",
          "avg_rating": "",
          "reviews_count": "",
          "url": "https://www.tesco.com/groceries/en-GB/products/298107879",
          "uid": "0df5d322-9271-5178-b0bd-fe6e07157ecf",
          "crawled_at": "08/23/2021, 22:28:52",
          "source": "https://www.tesco.com/groceries"
```
Notice the id in MongoDB and the uid in Elasticsearch:

`0df5d322-9271-5178-b0bd-fe6e07157ecf`, are the same id.

Therefore, we can use this id as the connector to connect databases.
```
const CustomResultView = ({ 
  result, 
  onClickLink 
} ) => (
  
  <li className="sui-result">
    <div className="sui-result__header">
    ...
       <Link to={`/product/${result.uid.raw}`}>
          {result.name.raw}       
          {/* <Product product={product}/>  */}
      </Link> 
```
 
 In the above codes inside the Link element, is the adjustment made. 
 {result.uid.raw} is the key code to make adjust at front-end.

 ## Back-end adjustment

 In [productCOntroller.js](../backend/controllers/productController.js)
 
 ```
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
   //const product = await Product.findById(req.params.id)
  const product = await Product.findOne({id:req.params.id})

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
 ```
 There used findOne instead of findById.

Overall, the adjustment that needed to be made was the changes to ID. Making these changes in the rest of the files where needed to make, the connection between different pages is successful.

# Implemented Home screen

The Home screen used Elastic connector. 
The implementation of Home screen has reffered this [example](https://codesandbox.io/s/cranky-ives-zr4d4t?file=/src/pages/elasticsearch/index.js).

In home page, the connection bewteen Elasticserch and mongoDB data are also same as the implementation of Search screen.

