# google-spreadsheet-notifications

This is a Google Spreadsheet monitoring app. You will receive a notification once a change matches certain rules defined by you.

## Application

This can be used to monitor stock price changes on a Google Spreadsheet.

## Config

Config rules is defined by json. So you need to create `./dist/config.json`.

```json
{
  "sheetJsonUrl": "",
  "nofitications": {
    "slack": {
      "webhookUrl": ""
    }
  },
  "headerRow": 1,
  "rules": [
    {
      "type": "GT",
      "params": {
        "startRow": 2,
        "col1": "G",
        "col2": "I"
      }
    },
    {
      "type": "LT",
      "params": {
        "startRow": 2,
        "col1": "G",
        "col2": "J"
      }
    }
  ]
}
```
