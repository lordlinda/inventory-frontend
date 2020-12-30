import React from "react";

function StockDetail({ stockEvents }) {
  return (
    <div className="ui card">
      {stockEvents.map((e) => {
        return (
          <div className="content" key={e._id}>
            <div className="meta">QTY: {e.qty}</div>
            <div className="description">
              {e.type === "add" ? "added stock" : "removed stock"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StockDetail;
