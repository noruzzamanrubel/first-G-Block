import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";
export default function Save() {
  const blockProps = useBlockProps.save();
  return <p {...blockProps}>Hi</p>;
}
