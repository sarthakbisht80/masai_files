import React from "react";

export default function InputNode({ node, onChange, isRoot }) {
  const updateValue = (e) => {
    onChange({ ...node, value: e.target.value });
  };

  const addSubInput = () => {
    const newChild = { id: Date.now(), value: "", children: [] };
    onChange({ ...node, children: [...node.children, newChild] });
  };

  const updateChild = (childId, newChild) => {
    onChange({
      ...node,
      children: node.children.map((child) =>
        child.id === childId ? newChild : child
      ),
    });
  };

  return (
    <div className={isRoot ? "node root-node" : "node sub-node"}>
      <div className="node-header">
        <input
          type="text"
          value={node.value}
          onChange={updateValue}
          placeholder={isRoot ? "Root Input..." : "Sub Input..."}
        />
        <button className="sub-btn" onClick={addSubInput}>
          Add Sub Input
        </button>
      </div>

      <div className="children">
        {node.children.map((child) => (
          <InputNode
            key={child.id}
            node={child}
            onChange={(newChild) => updateChild(child.id, newChild)}
            isRoot={false}  // ✅ All children are sub-inputs
          />
        ))}
      </div>
    </div>
  );
}
