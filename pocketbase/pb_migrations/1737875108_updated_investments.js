/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jl31ymtr3f9hx9o")

  // update
  collection.schema.addField(new SchemaField({
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
        "10000 – Angel investors testing the waters",
        "50000 – Moderate investment for early-stage growth",
        "100000 – Strong seed-stage contribution",
        "500000 – For scaling and expansion",
        "1000000 – Lead funding for significant impact."
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jl31ymtr3f9hx9o")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
