# Elastic Search Setting Up

> This is a walkthrough of Elasticsearch setup and rationale why it was setup that way in case need to change in the future

## Deploy Elastic Search
There are two way to deploy Elastic Search:

1. On Premise
2. On Cloud

 Since the Elastic Team has provide the Elastic Cloud four months trial for us, and team collaboration we decide to use Elastic cloud.

On [Elastic Cloud](https://cloud.elastic.co/home), we create a deployment named eCommerce Website Project. All Elastic Search data and relevant configuration are in this deployemnt.  


![elastic cloud](/images/elasticcloud.png)

# 1. Using Elastic Search

There are some ways to use Elastic Search:

1. Using REST API to deploy Elastic Search and make intergration with eCommerce website. Low Level and High Leve Elastic Search API, such as NEST API, JavaScript API.
2. Using App Search to deploy Elastic Search

Considering the time limitation and whole team's ability, App Search is better option.

# 2. Importing Data into Elastic Search
Although we use App Search to make the intergration with the eCommerce website, and App Search offer the importing data by just simpley uplaod the data set in JSON format, an issue was found when we were trying to 


Using Kibana console to create and import data set

```
#Create the index called search-tesco
PUT /search-tesco
```

## 2.1 Before Importing Data Set


 Edit Data set

Data set source: https://data.world/crawlfeeds/tesco-groceries-dataset/workspace/file?filename=tesco_sample.json



## 2.2 Data Set Mapping

```

PUT /search-tesco/_mapping
{
  "properties": {
    "name": {
      "type": "text"
    },
    "gtin13": {
      "type": "text"
    },
    "sku": {
      "type": "text",
      "fields": {
        "keyword": {
          "type": "keyword"
        }
      }
    },
    "price": {
      "type": "float"
    },
    "condition": {
      "type": "text"
    },
    "availability": {
      "type": "text"
    },
    "currenncy": {
      "type": "text"
    },
    "brand": {
      "type": "text"
    },
    "breadcrumbs": {
     "type": "text"
    },
    "description": {
      "type": "text"
  
    },
    "images": {
      "type": "text",
      "fields": {
        "keyword": {
          "type": "keyword"
        }
      }
    },
    "avg_rating": {
      "type": "long",
      "fields": {
        "keyword": {
          "type": "keyword"
        }
      }
    },
    "reviews_count": {
      "type": "long",
      "fields": {
        "keyword": {
          "type": "keyword"
        }
      }
    },
    "url": {
      "type": "text"
    },
    "id": {
      "type": "text",
      "fields": {
        "keyword": {
          "type": "keyword"
        }
      }
    },
    "crawled_at": {
      "type": "text",
      "fields": {
        "keyword": {
          "type": "keyword"
        }
      }
    },
    "source": {
     "type": "text"
    }
  }
}
```


# Deploy App Search
1. Deploying App Search
2. Building and configuring search UI
3. Intergarating Search UI
4. Relevance tuning
5. Synonyms
6. Curation
7. Analytics








