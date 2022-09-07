var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType("test/firstblock", {
  edit: function () {
    return createElement(
      "p",
      {
        className: "NewClass",
      },
      "Edit"
    );
  },
  save: function () {
    return createElement("p", null, "Save");
  },
});
