curl --include --request PATCH "https://wdi-library-api.herokuapp.com/games/${ID}" \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'
