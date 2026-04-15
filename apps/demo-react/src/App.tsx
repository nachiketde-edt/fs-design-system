import { useState } from 'react';
import { Button, Input, Badge } from '@fs-ds/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 480, margin: '48px auto', padding: '0 16px', fontFamily: 'var(--fs-font-sans)' }}>
      <h1 style={{ fontSize: 'var(--fs-text-2xl)', fontWeight: 'var(--fs-font-weight-bold)', marginBottom: 8 }}>
        FS Design System
      </h1>
      <p style={{ color: 'var(--fs-color-neutral-500)', marginBottom: 32 }}>
        React consumer demo
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <Badge variant="success">React 18</Badge>
        <Badge variant="info">Vite</Badge>
        <Badge variant="default">@fs-ds/react</Badge>
      </div>

      {submitted ? (
        <div style={{ padding: 16, background: 'var(--fs-color-success-light)', borderRadius: 'var(--fs-radius-lg)' }}>
          <Badge variant="success">Submitted!</Badge>
          <p style={{ margin: '8px 0 0', color: 'var(--fs-color-success-dark)' }}>
            Email: <strong>{email}</strong>
          </p>
          <Button variant="ghost" style={{ marginTop: 8 }} onClick={() => { setSubmitted(false); setEmail(''); }}>
            Reset
          </Button>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); handleSubmit(); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
            required
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <Button type="submit" variant="primary" loading={loading}>
              {loading ? 'Submitting…' : 'Submit'}
            </Button>
            <Button variant="secondary" type="button" onClick={() => setEmail('')}>
              Clear
            </Button>
          </div>
        </form>
      )}

      <hr style={{ margin: '40px 0', borderColor: 'var(--fs-color-neutral-200)' }} />

      <section>
        <h2 style={{ fontSize: 'var(--fs-text-lg)', fontWeight: 'var(--fs-font-weight-semibold)', marginBottom: 16 }}>
          All button variants
        </h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}
