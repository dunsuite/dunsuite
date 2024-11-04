/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mcvihn4gwhd9ku")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "96si2wqu",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Draft",
        "Published",
        "Archived"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cr4o8auf",
    "name": "slug",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9mcvihn4gwhd9ku")

  // remove
  collection.schema.removeField("96si2wqu")

  // remove
  collection.schema.removeField("cr4o8auf")

  return dao.saveCollection(collection)
})
