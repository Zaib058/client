/**
 * CAMPUS ERP — Global Design System
 * Import: import { DS, roleTheme } from '../../design';
 */
/**
 * CAMPUS ERP — Global Design System
 * 
 * IMPORTANT: Body color is NOT set here intentionally.
 * Setting body color globally breaks the Admin/Student/Faculty
 * forms that use Tailwind light bg classes (bg-blue-50 etc).
 * Dark color is scoped only to .erp-layout and its children.
 */

export const roleTheme = {
  admin:   { accent: '#6366f1', light: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.25)',  glow: 'rgba(99,102,241,0.15)',  text: '#a5b4fc', logo: 'ERP', letter: 'A' },
  faculty: { accent: '#f59e0b', light: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.25)',  glow: 'rgba(245,158,11,0.15)',  text: '#fcd34d', logo: 'FAC', letter: 'F' },
  student: { accent: '#10b981', light: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.25)',  glow: 'rgba(16,185,129,0.15)', text: '#6ee7b7', logo: 'STU', letter: 'S' },
};

export const DS = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Figtree:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #080b12;
    --surface:   #0f1520;
    --card:      #141b2a;
    --card2:     #192033;
    --border:    rgba(255,255,255,0.07);
    --border2:   rgba(255,255,255,0.12);
    --text:      #e8edf5;
    --muted:     #8896a8;
    --faint:     #3a4558;
    --danger:    #ef4444;
    --success:   #10b981;
    --font-head: 'Instrument Serif', Georgia, serif;
    --font-body: 'Figtree', sans-serif;
    --radius:    14px;
    --radius-sm: 10px;
    --shadow:    0 4px 24px rgba(0,0,0,0.4);
  }

  /* Scope ALL dark styles inside .erp-layout — never touch body globally */
  .erp-layout {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text);
    line-height: 1.5;
  }

  /* ── Layout ── */
  .erp-layout    { display: flex; min-height: 100vh; }
  .erp-sidebar   { position: fixed; top: 0; left: 0; height: 100vh; display: flex; flex-direction: column;
                   background: var(--surface); border-right: 1px solid var(--border);
                   overflow: hidden; transition: width .3s cubic-bezier(.4,0,.2,1); z-index: 100; }
  .erp-main      { flex: 1; display: flex; flex-direction: column; transition: margin-left .3s cubic-bezier(.4,0,.2,1); min-height: 100vh; }
  .erp-topbar    { height: 64px; display: flex; align-items: center; justify-content: space-between;
                   padding: 0 28px; background: rgba(8,11,18,0.85); backdrop-filter: blur(16px);
                   border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 50; }
  .erp-content   { padding: 28px; flex: 1; }
  .erp-toggle    { position: fixed; top: 18px; z-index: 200; width: 24px; height: 24px;
                   background: var(--card); border: 1px solid var(--border2); border-radius: 50%;
                   cursor: pointer; display: flex; align-items: center; justify-content: center;
                   color: var(--muted); font-size: 10px; transition: all .2s; }
  .erp-toggle:hover { background: var(--card2); color: var(--text); }

  /* ── Sidebar ── */
  .sb-header     { display: flex; align-items: center; gap: 12px; padding: 20px 14px 18px; border-bottom: 1px solid var(--border); min-height: 64px; overflow: hidden; }
  .sb-logo       { width: 36px; height: 36px; min-width: 36px; border-radius: 10px;
                   display: flex; align-items: center; justify-content: center;
                   font-family: var(--font-head); font-size: 13px; font-style: italic; color: white; letter-spacing: .5px; }
  .sb-title      { font-family: var(--font-body); font-weight: 700; font-size: 14px; color: var(--text); white-space: nowrap; }
  .sb-sub        { font-size: 11px; color: var(--muted); margin-top: 1px; }
  .sb-nav        { flex: 1; padding: 12px 8px; overflow-y: auto; }
  .sb-label      { font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--faint); padding: 0 8px 8px; white-space: nowrap; }
  .sb-item       { display: flex; align-items: center; gap: 11px; padding: 9px 11px; border-radius: var(--radius-sm);
                   cursor: pointer; border: none; background: none; width: 100%; text-align: left;
                   color: var(--muted); font-size: 13.5px; font-weight: 500; font-family: var(--font-body);
                   white-space: nowrap; transition: all .16s; margin-bottom: 2px; }
  .sb-item:hover { color: var(--text); background: rgba(255,255,255,0.04); }
  .sb-item.active { color: white; }
  .sb-icon       { font-size: 16px; min-width: 22px; text-align: center; }
  .sb-text       { transition: opacity .2s; }
  .sb-footer     { padding: 10px 8px; border-top: 1px solid var(--border); }

  /* ── Topbar ── */
  .tb-title      { font-family: var(--font-head); font-size: 22px; font-style: italic; color: var(--text); }
  .tb-badge      { padding: 4px 14px; border-radius: 99px; font-size: 12px; font-weight: 600; }
  .tb-right      { display: flex; align-items: center; gap: 10px; }
  .tb-stat       { padding: 5px 12px; border-radius: 99px; font-size: 12px; font-weight: 600; }
  .tb-logout     { padding: 7px 18px; border-radius: var(--radius-sm); cursor: pointer; font-size: 13px; font-weight: 600;
                   background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); color: #fca5a5;
                   font-family: var(--font-body); transition: all .16s; }
  .tb-logout:hover { background: rgba(239,68,68,0.18); }

  /* ── Cards ── */
  .card          { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; }
  .card-lg       { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 28px; }
  .stat-grid     { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 28px; }
  .stat-card     { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; display: flex; align-items: center; gap: 16px; }
  .stat-icon     { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .stat-val      { font-family: var(--font-head); font-size: 30px; font-style: italic; color: var(--text); }
  .stat-lbl      { font-size: 12px; color: var(--muted); margin-top: 1px; }

  /* ── Profile ── */
  .profile-wrap  { display: flex; gap: 24px; align-items: flex-start; }
  .profile-info  { flex: 1; }
  .profile-name  { font-family: var(--font-head); font-size: 28px; font-style: italic; color: var(--text); margin-bottom: 20px; }
  .profile-name span { opacity: .6; font-size: 18px; }
  .info-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .info-cell     { background: var(--card2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 13px 16px; }
  .info-key      { font-size: 10px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--faint); margin-bottom: 5px; }
  .info-val      { font-size: 14px; font-weight: 600; color: var(--text); }
  .profile-avatar { width: 180px; min-width: 180px; height: 180px; border-radius: var(--radius); overflow: hidden;
                    background: var(--card2); border: 1px solid var(--border);
                    display: flex; align-items: center; justify-content: center; font-size: 56px; }
  .profile-avatar img { width: 100%; height: 100%; object-fit: cover; }

  /* ── Dark form fields (used in sidebar pages only) ── */
  .form-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .field         { display: flex; flex-direction: column; gap: 5px; }
  .field.span2   { grid-column: 1/-1; }
  .field-lbl     { font-size: 11px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--faint); }
  .field-inp, .field-sel {
    width: 100%; padding: 10px 13px; border-radius: var(--radius-sm);
    background: rgba(255,255,255,0.04); border: 1px solid var(--border2);
    color: var(--text); font-size: 13.5px; font-family: var(--font-body);
    outline: none; transition: border-color .16s, background .16s;
  }
  .field-inp:focus, .field-sel:focus { border-color: var(--accent, #6366f1); background: rgba(99,102,241,0.05); }
  .field-inp:disabled, .field-sel:disabled { opacity: .4; cursor: not-allowed; }
  .field-sel option { background: var(--card); color: var(--text); }
  .section-rule  { grid-column: 1/-1; padding-bottom: 8px; border-bottom: 1px solid var(--border);
                   font-size: 10px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase;
                   color: var(--faint); margin-top: 6px; }
  .upload-zone   { border: 2px dashed var(--border2); border-radius: var(--radius); padding: 20px;
                   text-align: center; cursor: pointer; transition: border-color .16s, background .16s; }
  .upload-zone:hover { border-color: rgba(99,102,241,.4); background: rgba(99,102,241,.03); }
  .upload-zone p { font-size: 13px; color: var(--muted); margin-top: 6px; }
  .preview-strip { display: flex; align-items: center; gap: 14px; margin-top: 10px; padding: 10px 14px;
                   background: rgba(255,255,255,.03); border-radius: var(--radius-sm); border: 1px solid var(--border); }
  .preview-strip img { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; }
  .preview-strip p { font-size: 12px; color: var(--muted); }

  /* ── Buttons ── */
  .btn           { padding: 10px 22px; border-radius: var(--radius-sm); cursor: pointer; font-size: 13.5px;
                   font-weight: 700; font-family: var(--font-body); border: none; transition: all .16s;
                   display: inline-flex; align-items: center; gap: 7px; }
  .btn-primary   { background: var(--accent, #6366f1); color: white; }
  .btn-primary:hover { filter: brightness(1.12); transform: translateY(-1px); }
  .btn-primary:active { transform: translateY(0); }
  .btn-ghost     { background: rgba(255,255,255,.05); border: 1px solid var(--border2); color: var(--muted); }
  .btn-ghost:hover { background: rgba(255,255,255,.09); color: var(--text); }
  .btn-danger    { background: rgba(239,68,68,.1); border: 1px solid rgba(239,68,68,.22); color: #fca5a5; }
  .btn-danger:hover { background: rgba(239,68,68,.2); }
  .btn-full      { width: 100%; justify-content: center; padding: 12px; }

  /* ── Search ── */
  .search-bar    { display: flex; align-items: center; background: rgba(255,255,255,.04);
                   border: 1px solid var(--border2); border-radius: var(--radius); overflow: hidden;
                   max-width: 420px; transition: border-color .16s; }
  .search-bar:focus-within { border-color: rgba(99,102,241,.45); }
  .search-inp    { flex: 1; padding: 11px 16px; background: transparent; border: none;
                   color: var(--text); font-size: 13.5px; font-family: var(--font-body); outline: none; }
  .search-inp::placeholder { color: var(--faint); }
  .search-btn    { padding: 11px 15px; background: transparent; border: none; cursor: pointer;
                   color: var(--muted); font-size: 16px; transition: color .16s; }
  .search-btn:hover { color: var(--text); }

  /* ── Found banner ── */
  .found-banner  { display: flex; align-items: center; gap: 9px; padding: 10px 16px; border-radius: var(--radius-sm);
                   background: rgba(16,185,129,.07); border: 1px solid rgba(16,185,129,.18);
                   color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 16px 0; }

  /* ── Tabs ── */
  .tab-row       { display: flex; gap: 6px; margin-bottom: 22px; }
  .tab           { padding: 8px 22px; border-radius: var(--radius-sm); cursor: pointer; font-size: 13.5px;
                   font-weight: 600; border: 1px solid var(--border2); background: rgba(255,255,255,.03);
                   color: var(--muted); font-family: var(--font-body); transition: all .16s; }
  .tab:hover     { background: rgba(255,255,255,.06); color: var(--text); }
  .tab.active    { color: white; }

  /* ── Lists ── */
  .list-item     { display: flex; align-items: center; justify-content: space-between; background: var(--card);
                   border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 18px;
                   transition: border-color .16s; margin-bottom: 8px; }
  .list-item:hover { border-color: var(--border2); }
  .list-code     { padding: 3px 10px; border-radius: 7px; font-size: 11px; font-weight: 700;
                   font-family: var(--font-body); letter-spacing: .04em; }

  /* ── Marks ── */
  .mark-row      { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
  .mark-sub      { flex: 1; font-size: 13.5px; color: var(--muted); font-weight: 500; }
  .mark-bar-bg   { flex: 2; height: 7px; background: rgba(255,255,255,.07); border-radius: 99px; overflow: hidden; }
  .mark-bar-fill { height: 100%; border-radius: 99px; transition: width .8s cubic-bezier(.4,0,.2,1); }
  .mark-score    { min-width: 32px; text-align: right; font-weight: 700; font-size: 14px; font-family: var(--font-head); font-style: italic; }

  /* ── Material cards ── */
  .mat-card      { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
                   padding: 16px 20px; transition: border-color .16s, transform .16s; cursor: pointer; margin-bottom: 8px; }
  .mat-card:hover { border-color: var(--border2); transform: translateY(-1px); }
  .mat-title     { font-family: var(--font-head); font-size: 18px; font-style: italic; color: var(--text); display: flex; align-items: center; gap: 8px; }
  .mat-meta      { font-size: 12.5px; color: var(--muted); margin-top: 5px; }
  .mat-date      { font-size: 11px; color: var(--faint); margin-top: 4px; }

  /* ── Password form ── */
  .pass-form     { margin-top: 18px; padding: 20px; background: rgba(0,0,0,.2); border-radius: var(--radius); border: 1px solid var(--border); }
  .pass-form h4  { font-family: var(--font-head); font-size: 17px; font-style: italic; color: var(--text); margin-bottom: 14px; }

  /* ── Modal ── */
  .modal-bg      { position: fixed; inset: 0; background: rgba(0,0,0,.65); backdrop-filter: blur(6px);
                   display: flex; align-items: center; justify-content: center; z-index: 1000; }
  .modal-box     { background: var(--card); border: 1px solid var(--border2); border-radius: 20px;
                   padding: 32px; max-width: 360px; width: 90%; text-align: center; }
  .modal-box h4  { font-family: var(--font-head); font-size: 22px; font-style: italic; color: var(--text); margin-bottom: 8px; }
  .modal-box p   { color: var(--muted); font-size: 13.5px; margin-bottom: 22px; line-height: 1.6; }
  .modal-actions { display: flex; gap: 10px; justify-content: center; }

  /* ── Marks entry (faculty upload) ── */
  .marks-entry   { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-bottom: 22px; }
  .entry-row     { display: flex; overflow: hidden; border-radius: var(--radius-sm); border: 1px solid var(--border2); background: var(--card); }
  .entry-enroll  { padding: 11px 12px; font-size: 12px; font-weight: 700; color: var(--muted);
                   border-right: 1px solid var(--border); white-space: nowrap; display: flex; align-items: center; }
  .entry-inp     { flex: 1; padding: 11px 10px; background: transparent; border: none;
                   color: var(--text); font-size: 13px; font-family: var(--font-body); outline: none; min-width: 0; }

  /* ── Filter card ── */
  .filter-card   { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; margin-bottom: 22px; }
  .filter-grid   { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
  .filter-title  { font-family: var(--font-head); font-size: 17px; font-style: italic; color: var(--text); margin-bottom: 16px; }

  /* ── Timetable ── */
  .tt-image      { width: 100%; border-radius: var(--radius); border: 1px solid var(--border); margin-top: 20px; box-shadow: var(--shadow); }

  /* ── Student viewer (faculty) ── */
  .student-viewer { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
                    padding: 22px; margin-top: 16px; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }

  /* ── Empty states ── */
  .empty         { text-align: center; padding: 52px 20px; color: var(--muted); }
  .empty-icon    { font-size: 38px; margin-bottom: 10px; }
  .empty p       { font-size: 14px; }
  .empty small   { font-size: 12px; color: var(--faint); margin-top: 4px; display: block; }

  /* ── Animations ── */
  @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
  .fade-up { animation: fadeUp .35s ease both; }
`;

