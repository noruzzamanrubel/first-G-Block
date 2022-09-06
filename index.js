var registerBlockType = wp.blocks.registerBlockType;

registerBlockType("test/firstblock", {
  edit: function () {
    return "Hello World";
  },
  save: function () {
    return "Save item";
  },
});
