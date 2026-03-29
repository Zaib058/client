/**
 * Shared dark-theme styles injected by form screens.
 * Import and use: <style>{DARK_FORM_STYLES}</style>
 */
export const DARK_FORM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  .form-page { font-family: 'DM Sans', sans-serif; }
  .search-bar {
    display: flex; align-items: center;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px; overflow: hidden; max-width: 480px;
    transition: border-color 0.18s;
  }
  .search-bar:focus-within { border-color: rgba(99,102,241,0.5); }
  .search-input {
    flex: 1; padding: 12px 18px; background: transparent;
    border: none; color: #e2e8f0; font-size: 14px;
    font-family: 'DM Sans', sans-serif; outline: none;
  }
  .search-input::placeholder { color: #475569; }
  .search-btn, .clear-btn {
    padding: 12px 18px; background: transparent;
    border: none; cursor: pointer; transition: color 0.18s;
    font-size: 18px; color: #64748b;
  }
  .search-btn:hover { color: #818cf8; }
  .clear-btn:hover { color: #fca5a5; }
  .found-banner {
    display: flex; align-items: center; gap: 10px;
    margin: 20px 0; padding: 12px 18px; border-radius: 12px;
    background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2);
    color: #6ee7b7; font-size: 14px; font-weight: 600;
  }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
  .field-group { display: flex; flex-direction: column; gap: 6px; }
  .field-group.full { grid-column: 1 / -1; }
  .field-label {
    font-size: 11px; font-weight: 700; color: #64748b;
    text-transform: uppercase; letter-spacing: 0.07em;
  }
  .field-input, .field-select {
    width: 100%; padding: 11px 14px; border-radius: 10px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
    color: #e2e8f0; font-size: 14px; font-family: 'DM Sans', sans-serif;
    outline: none; transition: border-color 0.18s, background 0.18s;
  }
  .field-input:focus, .field-select:focus {
    border-color: rgba(99,102,241,0.5); background: rgba(99,102,241,0.05);
  }
  .field-input:disabled, .field-select:disabled {
    opacity: 0.45; cursor: not-allowed;
  }
  .field-select option { background: #1e2235; color: #e2e8f0; }
  .section-divider {
    grid-column: 1 / -1; font-size: 11px; font-weight: 700; color: #475569;
    text-transform: uppercase; letter-spacing: 0.08em;
    padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-top: 8px;
  }
  .upload-area {
    border: 2px dashed rgba(255,255,255,0.1); border-radius: 12px;
    padding: 20px; text-align: center; cursor: pointer;
    transition: border-color 0.18s, background 0.18s;
    background: rgba(255,255,255,0.02);
  }
  .upload-area:hover { border-color: rgba(99,102,241,0.4); background: rgba(99,102,241,0.04); }
  .upload-icon { font-size: 26px; margin-bottom: 6px; }
  .upload-text { font-size: 13px; color: #64748b; }
  .preview-row {
    display: flex; align-items: center; gap: 16px; margin-top: 12px;
    padding: 12px; border-radius: 10px; background: rgba(0,0,0,0.15);
    border: 1px solid rgba(255,255,255,0.06);
  }
  .preview-img {
    width: 64px; height: 64px; border-radius: 50%; object-fit: cover;
    border: 2px solid rgba(99,102,241,0.4);
  }
  .preview-name { font-size: 13px; color: #94a3b8; }
  .submit-btn {
    grid-column: 1 / -1; padding: 13px 0; border-radius: 12px; cursor: pointer;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border: none; color: white; font-size: 15px; font-weight: 700;
    font-family: 'DM Sans', sans-serif; transition: opacity 0.18s, transform 0.18s;
    width: 100%;
  }
  .submit-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .submit-btn.green { background: linear-gradient(135deg, #10b981, #059669); }
  .tabs { display: flex; gap: 8px; margin-bottom: 24px; }
  .tab-btn {
    padding: 9px 24px; border-radius: 10px; cursor: pointer;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.03);
    color: #94a3b8; font-size: 14px; font-weight: 600;
    font-family: 'DM Sans', sans-serif; transition: all 0.18s;
  }
  .tab-btn:hover { background: rgba(99,102,241,0.1); color: #a5b4fc; }
  .tab-btn.active { background: rgba(99,102,241,0.18); border-color: rgba(99,102,241,0.35); color: #818cf8; }
`;
