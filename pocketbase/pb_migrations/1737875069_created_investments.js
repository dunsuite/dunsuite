/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jl31ymtr3f9hx9o",
    "created": "2025-01-26 07:04:29.819Z",
    "updated": "2025-01-26 07:04:29.819Z",
    "name": "investments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "anjwlnl8",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e5dwupdn",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "liqndjmy",
        "name": "about",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pm0a4amu",
        "name": "amount",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "10",
            "000 – Angel investors testing the waters",
            "50",
            "000 – Moderate investment for early-stage growth",
            "100",
            "000 – Strong seed-stage contribution",
            "500",
            "000 – For scaling and expansion",
            "1",
            "000",
            "000 – Lead funding for significant impact."
          ]
        }
      },
      {
        "system": false,
        "id": "kpfehuh9",
        "name": "expectations",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "5x return – High-risk",
            "high-reward potential",
            "3x return – Balanced growth opportunity",
            "10% equity – Ownership stake in the company",
            "2-5% revenue share – Ongoing share of profits",
            "Convertible note – Converts to equity later."
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jl31ymtr3f9hx9o");

  return dao.deleteCollection(collection);
})
