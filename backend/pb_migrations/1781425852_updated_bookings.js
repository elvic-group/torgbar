/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_986407980")

  // add field
  collection.fields.addAt(1, new Field({
    "help": "",
    "hidden": false,
    "id": "select3731384213",
    "maxSelect": 0,
    "name": "package",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "Festival",
      "Bedrift",
      "Privat",
      "Bryggeri",
      "Event"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_986407980")

  // remove field
  collection.fields.removeById("select3731384213")

  return app.save(collection)
})
