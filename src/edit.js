import { useBlockProps } from "@wordpress/block-editor";
import "./editorStyle.scss";
export default function Edit() {
  const blockProps = useBlockProps();
  return <p {...blockProps}>hello bangladesh</p>;
}
