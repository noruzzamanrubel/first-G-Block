// var registerBlockType = wp.blocks.registerBlockType;

import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";

registerBlockType("test/firstblock", {
  edit: Edit,
  save: Save,
});
