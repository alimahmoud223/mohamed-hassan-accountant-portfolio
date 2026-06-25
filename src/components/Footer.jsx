import React from 'react';
export default function Footer({ name }) {
  return (
    <footer className="footer">
      <span>{name}</span>
      <span>Inventory Accounting - Reconciliation - Reporting</span>
    </footer>
  );
}
