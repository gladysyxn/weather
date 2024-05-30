## `Weather` endpoints


### Get a random weather data of a given city

Retrieve a random weater data of a given city

##### Endpoint
`GET /weather/:city`


##### Example request
`GET /weather/daily/Copenhagen`

##### Example response
```
{
    "temperature": "32.57",
    "humidity": "75.52",
    "condition": "sunny",
    "wind": {
        "speed": "0.22",
        "direction": "W"
    },
    "city": "Copenhagen"
}
```

## Get a presistent weather data of a given city

Retrieve a presistent weater data of a city and it should last for 24 hours after being created. The city info should be url encoded.

##### Endpoint
`GET /weather/daily/:city`


##### Example request
`GET /weather/daily/Sydney`


##### Example response
```
{
    "city": "Sydney",
    "condition": "rain",
    "temperature": 64.69,
    "humidity": 35.65,
    "wind": {
        "speed": "21.58",
        "direction": "W"
    },
    "_id": "6656a2b92f21af9e9fe157da",
    "createdAt": "2024-05-29T03:36:25.460Z"
}
```

---


## Get a presistent weather data of a random city

Retrieve a presistent weater data of a random city and it should last for 24 hours after being created

##### Endpoint
`GET /weather/daily/random`


##### Example request
`GET /weather/daily/random`

##### Example response
```
{
    "city": "Copenhagen",
    "condition": "sunny",
    "temperature": 40.85,
    "humidity": 50.07,
    "wind": {
        "speed": "15.94",
        "direction": "N"
    },
    "_id": "6656a1ba2f21af9e9fe157d5",
    "createdAt": "2024-05-29T03:32:10.055Z"
}
```

---

