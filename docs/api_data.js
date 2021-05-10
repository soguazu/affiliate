define({ "api": [
  {
    "type": "post",
    "url": "/api/affiliate",
    "title": "",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "authorization",
            "defaultValue": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MjA2Njg0NzMsImV4cCI6MTY1MjIwNDQ3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5hbWUiOiJKb2hubnkgUm9jayIsIkVtYWlsIjoianJvY2tldEBleGFtcGxlLmNvbSIsIlJvbGUiOiJBZmZpbGlhdGUiLCJ1c2VybmFtZSI6IlwidGVzdGluZ1wiIiwidXNlcklEIjoiNjA5OTFjOWQ1Nzk2OGRiYjZkZjc5YTg0In0.Qyhh6TUrfHk3UW-KkjgMO76l6qr2HmscgJI1461G77E",
            "description": "<p>Basic token authorization appending Bearer</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Content-Type",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "name": "create_url",
    "group": "affiliate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>category unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>selected country</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n  \"product_id\": \"\",\n  \"category_id\": \"\",\n  \"country\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   status: true,\n   message: New affiliate url created,\n   url: \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/affiliate.routes.ts",
    "groupTitle": "affiliate",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Invalid payload passed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"BadRequest\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
