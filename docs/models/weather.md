## `Weather` Model

A weather data for a given city

| Key               | Type          | Description |
| ----------------- | ------------- | ----------- |
| _id               | ObjectId      | Unique ID for the `Weather` Data |
| _v                | Number        | Version number of the `Weather` Data |
| createdAt         | Timestamp     | Weather Data Creation Time in UTC | 
| city             	| String        | City Name |
| condition	        | String        | Weather of the Day, e.g. cloudy, sunny |
| humidity          | Number        | Humidity in % |
| temperature       | Number        | Temperature in F|
| wind.speed		| Number        | Wind speed in mph |
| wind.direction    | String        | Wind direction |








