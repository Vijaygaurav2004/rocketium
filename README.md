# Node.js Project with Dummy JSON Data

This project demonstrates a Node.js server that fetches, stores, and serves dummy JSON data through a RESTful API. It includes functionality for basic filtering and sorting of the data.

## Features

- Fetches dummy JSON data from an external API
- Stores data on the Node.js server
- Provides RESTful API endpoints to access the data
- Supports basic filtering and sorting of data
- Includes an initialization script to import data on first run
- Has a simple UI created for testing

https://github.com/user-attachments/assets/2897227e-3b35-40ba-ae57-3b53e1ff883e


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Vijaygaurav2004/rocketium.git
   ```

2. Navigate to the project directory:
   ```
   cd rocketium
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=3002
     DATAURL=<YOUR_DATA_URL>
     ```

## Usage

To run the project, use the following command:

```
npm start
```

## BASIC  UI

![image](https://github.com/user-attachments/assets/41ca3995-a2a7-42c3-9f85-d1cce17b0566)

we can do the same things from UI


This will start the server and run the initialization script if it's the first time running the project.

## API Documentation

### Get All Entries

- **URL**: `/api/data`
- **Method**: `GET`
- **Query Parameters**:
  - `sort`: Field to sort by (e.g., `name`, `language`, `version`)
  - `order`: Sort order (`asc` or `desc`)
  - `filter`: Field to filter by (e.g., `language`,`id`)

#### Example Requests

1. Get all data:
   ```
   GET /api/data
   ```
<img width="1440" alt="Screenshot 2024-07-31 at 10 51 10 PM" src="https://github.com/user-attachments/assets/5601f8f6-af2f-4489-8763-559510347f78">

2. Get entries sorted by version in ascending order:
   ```
   GET /api/data?sort=name&order=asc
   ```
<img width="1440" alt="Screenshot 2024-07-31 at 10 58 38 PM" src="https://github.com/user-attachments/assets/1750a364-ed7c-48df-942e-926f6a4305da">

3. Get entries sorted by version in descending order:
   ```
   GET /api/data?sort=name&order=desc
   ```
   <img width="1440" alt="Screenshot 2024-07-31 at 11 04 34 PM" src="https://github.com/user-attachments/assets/c6cde554-b4cc-42f3-83ab-d1263c7e5360">

4. Get entries filtered by language:
   ```
   GET /api/data?filter={"language":"Hindi"}
   ```
<img width="1440" alt="Screenshot 2024-07-31 at 11 06 23 PM" src="https://github.com/user-attachments/assets/fff4ed95-7c78-427a-bda2-3f5b4b090e4a">

4. Get entries filtered by version:
   ```
   GET /api/data?filter={"version":"1.4"}
   ```
   <img width="1440" alt="Screenshot 2024-07-31 at 11 09 24 PM" src="https://github.com/user-attachments/assets/5bdce006-c4a3-4337-bdfa-65745cc8f40d">

## Error Handling
1.Unrecognised Query parameters
<img width="1440" alt="Screenshot 2024-08-01 at 12 23 36 AM" src="https://github.com/user-attachments/assets/4c4789e5-26ce-4ffb-a2b6-7040d82595ed">

2.Invalid Sort parameters
<img width="1440" alt="Screenshot 2024-08-01 at 12 20 53 AM" src="https://github.com/user-attachments/assets/7862e348-654b-4913-a243-92e37673c25f">

3.Invalid filter parameters
<img width="1440" alt="Screenshot 2024-08-01 at 12 26 07 AM" src="https://github.com/user-attachments/assets/71021f58-32f8-4c50-bfcc-3dac7b4a94e3">

#### Response

```json
[
  {
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    "version": 6.1
  },
  {
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    "version": 1.88
  },
  // ... more entries
]
```

For more detailed API documentation, please refer to the https://documenter.getpostman.com/view/37320201/2sA3kd9cNj.

## Data Structure

Each entry in the dummy data has the following structure:

```json
{
  "name": "String",
  "language": "String",
  "id": "String",
  "bio": "String",
  "version": Number
}
```

## Project Structure

```
rocketium/
│
├── .idea/
├── data/
│   └── dummyData.json
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── controllers/
│   │   └── dataController.js
│   ├── routes/
│   │   └── api.js
│   └── utils/
│       └── dataFetcher.js
├── .env
├── package.json
├── package-lock.json
├── README.md
├── rocketium.iml
└── server.js
```

This structure reflects the organization of your Node.js project:

- `data/`: Contains the `dummyData.json` file, which stores the fetched dummy data.
- `public/`: Holds static files, including `index.html`.
- `src/`: Contains the main source code of your application:
  - `controllers/`: Includes `dataController.js` for handling data-related logic.
  - `routes/`: Contains `api.js` for defining API routes.
  - `utils/`: Includes `dataFetcher.js` for fetching data from external sources.
- `server.js`: The main entry point of your Node.js application.
- `.env`: Stores environment variables.
- `package.json` and `package-lock.json`: Define project dependencies and scripts.

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request
