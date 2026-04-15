import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { color, spacing, borderRadius, shadow } from '@fs-ds/tokens';

const meta: Meta = {
  title: 'Design Tokens / Overview',
  tags: ['autodocs'],
  parameters: { controls: { disable: true } },
};

export default meta;

// ── Color swatches ───────────────────────────────────────────────────────────
const swatchStyle = (bg: string) =>
  `display:inline-block;width:64px;height:64px;border-radius:6px;background:${bg};
   border:1px solid rgba(0,0,0,.08);`;

const swatchGroup = (name: string, scale: Record<string | number, string>) => html`
  <section style="margin-bottom:32px">
    <h3 style="font-family:sans-serif;font-size:14px;font-weight:600;text-transform:capitalize;margin:0 0 8px">${name}</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end">
      ${Object.entries(scale).map(
        ([key, value]) => html`
          <div style="text-align:center">
            <div style=${swatchStyle(value)}></div>
            <div style="font-family:monospace;font-size:11px;margin-top:4px">${key}</div>
            <div style="font-family:monospace;font-size:10px;color:#6b7280">${value}</div>
          </div>
        `
      )}
    </div>
  </section>
`;

export const Colors: StoryObj = {
  render: () => html`
    <div style="padding:24px">
      ${swatchGroup('Brand', color.brand)}
      ${swatchGroup('Neutral', color.neutral)}
      ${swatchGroup('Success', color.success)}
      ${swatchGroup('Warning', color.warning)}
      ${swatchGroup('Error', color.error)}
      ${swatchGroup('Info', color.info)}
    </div>
  `,
};

// ── Spacing scale ────────────────────────────────────────────────────────────
export const Spacing: StoryObj = {
  render: () => html`
    <div style="padding:24px;font-family:sans-serif">
      <h2 style="font-size:14px;font-weight:600;margin:0 0 16px">Spacing scale (4pt grid)</h2>
      ${Object.entries(spacing).map(
        ([key, value]) => html`
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
            <span style="font-family:monospace;font-size:12px;width:40px;color:#6b7280">${key}</span>
            <div style="height:16px;background:var(--fs-color-brand-400,#60a5fa);width:${value}"></div>
            <span style="font-family:monospace;font-size:12px;color:#374151">${value}</span>
          </div>
        `
      )}
    </div>
  `,
};

// ── Border radii ─────────────────────────────────────────────────────────────
export const BorderRadius: StoryObj = {
  render: () => html`
    <div style="padding:24px;font-family:sans-serif;display:flex;gap:16px;flex-wrap:wrap;align-items:flex-end">
      ${Object.entries(borderRadius).map(
        ([key, value]) => html`
          <div style="text-align:center">
            <div style="width:64px;height:64px;background:var(--fs-color-brand-200,#bfdbfe);
              border:2px solid var(--fs-color-brand-500,#3b82f6);
              border-radius:${value}"></div>
            <div style="font-family:monospace;font-size:11px;margin-top:4px">${key}</div>
            <div style="font-family:monospace;font-size:10px;color:#6b7280">${value}</div>
          </div>
        `
      )}
    </div>
  `,
};

// ── Shadows ──────────────────────────────────────────────────────────────────
export const Elevation: StoryObj = {
  render: () => html`
    <div style="padding:24px;font-family:sans-serif;display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end;background:#f9fafb">
      ${Object.entries(shadow).map(
        ([key, value]) => html`
          <div style="text-align:center">
            <div style="width:80px;height:80px;background:#fff;border-radius:8px;box-shadow:${value}"></div>
            <div style="font-family:monospace;font-size:11px;margin-top:8px">${key}</div>
          </div>
        `
      )}
    </div>
  `,
};
