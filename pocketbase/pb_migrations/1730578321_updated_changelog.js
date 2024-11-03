/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mcvihn4gwhd9ku")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "awyleoua",
    "name": "tag",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Feature",
        "Bug",
        "Improvement"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mcvihn4gwhd9ku")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "awyleoua",
    "name": "tag",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "New",
        "Improved",
        "Fixed"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
