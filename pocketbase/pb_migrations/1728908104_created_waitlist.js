/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8vs61g3jq43enze",
    "created": "2024-10-14 12:15:04.104Z",
    "updated": "2024-10-14 12:15:04.104Z",
    "name": "waitlist",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vz3w5iob",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("8vs61g3jq43enze");

  return dao.deleteCollection(collection);
})
