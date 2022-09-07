// var registerBlockType = wp.blocks.registerBlockType;

import { registerBlockType } from "@wordpress/blocks";

registerBlockType("test/firstblock", {
  edit: function () {
    return <p className="backendClass">hello bangladesh</p>;
  },
  save: function () {
    return <p className="forentendClass">Hi</p>;
  },
});
