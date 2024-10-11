/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "exceptDomains": [],
        "hidden": false,
        "id": "_clone_sLPD",
        "name": "email",
        "onlyDomains": [],
        "presentable": false,
        "required": true,
        "system": false,
        "type": "email"
      }
    ],
    "id": "_pbc_4258769855",
    "indexes": [],
    "listRule": null,
    "name": "waitlistview",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    id,\n    email\nFROM\n    waitlist;\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pbc_4258769855");

  return app.delete(collection);
})
