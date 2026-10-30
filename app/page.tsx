'use client';
import { useEffect, useState } from 'react';
import {
  Emoji,
  Asterisk,
  DiamondStar,
  FourPointStar,
  HeartOutline,
  ArrowUpRight,
  ArrowDown,
  ArrowDownLeft,
  CheckIcon,
} from '../components/icons';

type Wish = { id: number; name: string; message: string; emoji: string; createdAt: string };

export default function Home() {
  const [wishes, setWishes] = useState<Wish[]>([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(''),
    [open, setOpen] = useState(false),
    [name, setName] = useState(''),
    [message, setMessage] = useState(''),
    [emoji, setEmoji] = useState('💛'),
    [saving, setSaving] = useState(false),
    [success, setSuccess] = useState(false),
    [copied, setCopied] = useState(false);

  async function load() {
    setLoading(true);
    setError('');
    try {
      const r = await fetch('/api/wishes');
      if (!r.ok) throw Error();
      setWishes((await r.json()) as Wish[]);
    } catch {
      setError('We couldn’t load the wishes. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const r = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, emoji }),
      });
      const data = (await r.json()) as Wish & { error?: string };
      if (!r.ok) throw Error(data.error);
      setWishes((v: Wish[]) => [data, ...v]);
      setOpen(false);
      setSuccess(true);
      setName('');
      setMessage('');
      setTimeout(() => setSuccess(false), 6000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Please try again.');
    } finally {
      setSaving(false);
    }
  }

  async function share() {
    try {
      await navigator.clipboard.writeText(location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setError('Copy the address from your browser to share this page.');
    }
  }

  return (
    <>
      <nav>
        <a className="brand" href="#">
          b<span><Asterisk size={18} /></span>27
        </a>
        <span className="nav-note">A BIRTHDAY TO REMEMBER</span>
        <button className="share" onClick={share}>
          {copied ? (
            <>Link copied <CheckIcon size={12} /></>
          ) : (
            <>Share the love <ArrowUpRight size={12} /></>
          )}
        </button>
      </nav>
      <main>
        <section className="hero">
          <div className="little">
            <FourPointStar size={10} /> &nbsp; 27 LOOKS GOOD ON YOU &nbsp; <FourPointStar size={10} />
          </div>
          <h1>
            Bijaya’s <em>27th.</em>
            <svg className="underline" viewBox="0 0 280 20">
              <path d="M5 12Q140 -5 275 10M15 18Q150 4 260 16" />
            </svg>
          </h1>
          <div className="star star1">
            <Asterisk size={74} />
          </div>
          <div className="star star2">
            <DiamondStar size={85} />
          </div>
          <span className="scribble">
            a whole lot<br />of love! <b><ArrowDownLeft size={36} /></b>
          </span>
          <p>
            One special person. So many beautiful wishes.<br />
            Dear Bijaya, here is a little love for you to keep, always.
          </p>
          <button className="primary" onClick={() => { setOpen(true); setError(''); }}>
            Leave a birthday wish <span><ArrowUpRight size={13} /></span>
          </button>
          <a className="read-link" href="#wishes">
            Read the wishes <ArrowDown size={11} />
          </a>
          <div className="birthday-seal">
            HAPPY<br />
            <strong>27</strong><br />
            BIRTHDAY
          </div>
        </section>
        <section id="wishes" className="wall">
          <header>
            <div>
              <span className="eyebrow">LITTLE NOTES. BIG FEELINGS.</span>
              <h2>
                A wall of love <span><HeartOutline size={22} /></span>
              </h2>
            </div>
            <div className="count">
              {wishes.length} {wishes.length === 1 ? 'wish' : 'wishes'} & counting{' '}
              <span><FourPointStar size={11} /></span>
            </div>
          </header>
          {success && (
            <div className="notice" role="status">
              Your wish is on the wall! Thanks for making Bijaya’s day.{' '}
              <Emoji symbol="💛" size={16} />
            </div>
          )}
          {error && !open && (
            <div role="alert" className="notice">
              {error} <button onClick={load}>Try again</button>
            </div>
          )}
          {loading ? (
            <div className="empty">Gathering the birthday love…</div>
          ) : wishes.length === 0 ? (
            <div className="empty">
              <span><Emoji symbol="💌" size={44} /></span>
              <h3>The first wish could be yours.</h3>
              <p>
                A favourite memory, an inside joke, or a simple happy birthday.<br />
                Your words will make this space special.
              </p>
              <button className="text-button" onClick={() => setOpen(true)}>
                Write the first wish <ArrowUpRight size={12} />
              </button>
            </div>
          ) : (
            <div className="cards">
              {wishes.map((w, i) => (
                <article className={'card color' + (i % 5)} key={w.id}>
                  <span className="tape" />
                  <span className="card-emoji">
                    <Emoji symbol={w.emoji} size={28} />
                  </span>
                  <p>{w.message}</p>
                  <div className="signature">
                    <span>with love,</span>
                    <strong>{w.name}</strong>
                  </div>
                  <small>
                    {new Date(w.createdAt).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                  </small>
                </article>
              ))}
            </div>
          )}
          <div className="wall-end">
            There’s always room for a little more love.{' '}
            <button onClick={() => setOpen(true)}>
              Add yours <ArrowUpRight size={12} />
            </button>
          </div>
        </section>
        <footer>
          <span>Made of memories & a whole lot of love.</span>
          <span>
            FOR BIJAYA, AT 27. <HeartOutline size={12} />
          </span>
        </footer>
      </main>
      {open && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget && !saving) setOpen(false);
          }}
        >
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="form-title">
            <button className="close" aria-label="Close form" onClick={() => setOpen(false)} disabled={saving}>
              ×
            </button>
            <span className="eyebrow">A LITTLE NOTE FOR BIJAYA</span>
            <h2 id="form-title">Make a birthday wish.</h2>
            <p>Your words will be saved on the wall for Bijaya to read and treasure.</p>
            <form onSubmit={submit}>
              <label htmlFor="name">Your name</label>
              <input
                autoFocus
                id="name"
                required
                maxLength={60}
                placeholder="Who’s sending the love?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="message">Your birthday message</label>
              <textarea
                id="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Dear Bijaya, …"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="character">{message.length}/2000</div>
              <label>Add a little feeling</label>
              <div className="emojis">
                {['💛', '🎂', '✨', '🌷', '🎉', '🥂'].map((v) => (
                  <button
                    type="button"
                    key={v}
                    aria-label={'Choose ' + v}
                    aria-pressed={emoji === v}
                    className={emoji === v ? 'selected' : ''}
                    onClick={() => setEmoji(v)}
                  >
                    <Emoji symbol={v} size={28} />
                  </button>
                ))}
              </div>
              {error && (
                <p className="error" role="alert">
                  {error}
                </p>
              )}
              <button className="primary send" disabled={saving}>
                {saving ? 'Saving your wish…' : <>Send birthday love <ArrowUpRight size={13} /></>}
              </button>
              <small className="form-note">Your name and message will be visible to visitors of this page.</small>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
