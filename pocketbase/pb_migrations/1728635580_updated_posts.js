/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pbc_2287844090")

  // add field
  collection.fields.add(new Field({
    "hidden": false,
    "id": "date3772055009",
    "max": "",
    "min": "",
    "name": "published_at",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.add(new Field({
    "hidden": false,
    "id": "select2063623452",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "draft",
      "in review",
      "published",
      "cancelled"
    ]
  }))

  // add field
  collection.fields.add(new Field({
    "hidden": false,
    "id": "file2359244304",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/png"
    ],
    "name": "file",
    "presentable": false,
    "protected": true,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pbc_2287844090")

  // remove field
  collection.fields.removeById("date3772055009")

  // remove field
  collection.fields.removeById("select2063623452")

  // remove field
  collection.fields.removeById("file2359244304")

  return app.save(collection)
})
