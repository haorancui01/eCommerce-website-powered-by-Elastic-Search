# Elasticsearch Setting Up

> This is a walkthrough of Elasticsearch setup and rationale why it was setup that way in case need to change in the future

# 1. Deploy Elastic Search
There are two way to deploy Elastic Search:

1. On Premise
   
   Elastic Serach runs on local host.

2. On Cloud

 Since the Elastic Team has provide the Elastic Cloud four months trial for us, and team collaboration we decide to use Elastic cloud.

On [Elastic Cloud](https://cloud.elastic.co/home), we create a deployment named eCommerce Website Project. All Elastic Search data and relevant configuration are in this deployemnt.  


<!-- ![elastic cloud](/images/elasticcloud.png) -->

There are some ways to use Elastic Search:

1. Using REST API to deploy Elastic Search and make intergration with eCommerce website. Low Level and High Leve Elastic Search API, such as NEST API, JavaScript API.
2. Using App Search to deploy Elastic Search.
   
   App Search and search UI are more quciker to deploy and configure for general Elastic Search usage.

Considering the time limitation and whole team's ability, App Search is better option.

# 2. Importing Data into Elastic Search
Although we use App Search to make the intergration with the eCommerce website, and App Search offers the data importing by just simply upload the data set using JSON format, issues was found when we were trying to upload the JSON file into Elastic Search.

## 2.1 Import Data Method

To import data into Elastic Search, there are several ways to accomplish it.

1. API 
   
   This method includes using cURL and PostMan.  
   A issue with API importing data is about cURL, they way to   use is a bit time-comsuming under Windwos OS, and since we have not touch with cURL and REST API before.
   The way to import data in Postman is more easier for us. 

2. Kibana console

   Another way is to use Kibana dev console.
   In our project, we have use this way to create index, mapping data and importing data.

3. App Search
   App Search also provide import data function:
   - Use the Crawler
   - Upload JSON
   - Indexing by API 

Using Kibana console to create and import data set

In our case, we could upload JSON file or index from API. We have found some issues:
First, although the APP serch allow developers to upload the JSON data set very easily. Our data set requires specific adjustment due to the database [conenction issue](./SearchUI.md).
Also, the schema (index mapping) is intended to adjust on Elastic kibana. 
To suit all these issues, the easiest way is to use Elasticsearch to manage index instead of using the App search internal database.

```
#Create the index called search-tesco
PUT /search-tesco
```
## 2.1 Before Importing Data Set

 Edit Data set: [Data set source](https://data.world/crawlfeeds/tesco-groceries-dataset/workspace/file?filename=tesco_sample.json)

## 2.2 Index Mapping

After import the data set into Elastic

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






