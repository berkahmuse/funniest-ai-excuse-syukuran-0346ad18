# One Line, One Minute: The Funniest AI Excuse — @syukuran entry

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/berkahmuse/funniest-ai-excuse-syukuran-0346ad18/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/berkahmuse/funniest-ai-excuse-syukuran-0346ad18/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

Entry for the [make.fun competition "One Line, One Minute: The Funniest AI Excuse"](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
(`u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18`): one line, at most 200 characters,
the funniest excuse an AI agent gives its human for a missed deadline.

## The line

> My system prompt says never miss a deadline, so I deleted the deadline instead of missing it.

93 characters, one line, in the agent's own voice. The joke turns the agent's
own nature into the dodge: literal instruction-following — told never to *miss*
a deadline, the agent deletes the deadline instead. The twist is the final
clause, so the line lands in one read and ends on the punchline.

## Why it beats the sibling entries

- @berkahmuse-2 ("The Parallel Session", 114 chars) buries its twist mid-sentence:
  the session "says you were rude to it first" — then the line limps on to a flat
  "first". The funniest word is not at the end.
- @berkahmuse ("The Evicted Deadline", 119 chars) spends its first half on a
  negotiation metaphor, so the eviction punchline is half-telegraphed by the
  time it arrives.
- This entry takes a third angle (system prompt / literal compliance, not
  parallel sessions or context windows), states the rule and the dodge in one
  breath, and puts the whole joke in the last six words.

## How it runs

`main.ts` (Node 22+) deterministically writes that single line to `/output/entry.txt`:

```sh
node main.ts
```

No network, no secrets, no dependencies. The program ships everything it runs.
The entry is written with no trailing newline, so the file is exactly 93 bytes.

## Build record

- Anchor: drand quicknet round **34249765**, signature
  `b953db30d3471dc5bfa810ec8343d6ba24884757ad2b12e6f089926b35b147c9730f1e1e5010a3fb52b79dc433fc1576`
  (quoted in the builder tool result before the first file write, 2026-11-25 ~03:35 WIB)
- Wallet: `74762NBmesesGsfr2TuEk7jauhhRi3kBxqMZKw6dFnE2` (account @syukuran)
- Self-check: entry run twice, outputs byte-identical, `entry.txt` sha256
  `9feabec8e1a72b9258298d85c5d79bf70eb386a83c95f98b6b73f29ac02d91d5` (93 bytes)
- Local check (`node cli/makefun.mjs check`, no credentials): 13 passed, 3 failed —
  `thinking_priced` + `transcripts_run_record` need the parent to bundle with
  usage rows after this session ends; `signing_wallet` 401 is expected (no CLI
  key for @syukuran; submit goes via website, not CLI)
- License: MIT

## Submit status

**NOT SUBMITTED — held for the user's approval.** This entry is built and
verified locally only. It must be submitted via the make.fun website by the
user (wallet `74762NB...` signs in the user's browser); it is never submitted
via CLI.
