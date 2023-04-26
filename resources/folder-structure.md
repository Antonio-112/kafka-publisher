my-nestjs-project/
│
├── src/
│ ├── api/
│ │ ├── dto/
│ │ │ └── data.model.ts
│ │ ├── controllers/
│ │ │ └── api.controller.ts
│ │ ├── services/
│ │ │ └── ejemplo.service.ts
│ │ └───api.module.ts
│ │
│ ├── infra/
│ │ ├── kafka/
│ │ │ ├── kafka.module.ts
│ │ │ ├── kafka.repository.ts
│ │ │ └── kafka.model.ts
│ │ │
│ │ ├── middlewares/
│ │ │ └── logger.middleware.ts
│ │ │
│ │ │
│ ├── app.module.ts
│ └── main.ts
│
├── resources/
│ └── postman/
│ └── kafka-publisher-API.postman_collection.json
│
├── .env.example
├── .eslintrc.js
├── package.json
└── docker-compose.yml
