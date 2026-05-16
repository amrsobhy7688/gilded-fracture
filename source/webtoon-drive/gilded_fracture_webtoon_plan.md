# Gilded Fracture — Webtoon Adaptation Plan

> **Status:** v0.1 — living document
> **Source:** D&D Campaign — Session 1 ("Gilded Fracture")
> **Format:** Vertical webtoon (9:16 mobile-first), AI-assisted art production
> **Last updated:** Initial draft

---

## Table of Contents

1. [Project Snapshot](#1-project-snapshot)
2. [Format Specifications](#2-format-specifications)
3. [Art Direction & Style Bible](#3-art-direction--style-bible)
4. [Character Visual Bible](#4-character-visual-bible)
5. [Location Bible](#5-location-bible)
6. [AI Prompt Engineering](#6-ai-prompt-engineering)
7. [Mind-Reading Visual Rules](#7-mind-reading-visual-rules)
8. [Session 1 — Episode Breakdown](#8-session-1--episode-breakdown)
9. [Panel Script Template](#9-panel-script-template)
10. [Production Workflow](#10-production-workflow)
11. [Future Sessions — Framework](#11-future-sessions--framework)
12. [Open Questions / Backlog](#12-open-questions--backlog)

---

## 1. Project Snapshot

- **Working title:** *Gilded Fracture*
- **Genre:** Dark fantasy mystery · political intrigue · urban occult
- **Tone:** *Arcane*'s political weight meets anime expressiveness in a sun-worshipping theocracy — Sherlock Holmes detective work, painted with oil brushes
- **Logline:** *In an empire that runs on faith and receipts, a hidden sorcerer and a noble detective notice the same rounding error — forty-six crystals — and pull a thread the Ministry expected to stay buried.*
- **Target platform:** Webtoon / Tapas / Lezhin (vertical scroll)
- **Production model:** AI-assisted art generation with strong consistency scaffolding
- **POV structure:** Dual protagonist — Vesper and Leo alternating, converging mid-arc

---

## 2. Format Specifications

### Page geometry
- **Aspect ratio:** 9:16 vertical
- **Suggested resolution:** 1080 × 1920 px (2x retina: 2160 × 3840)
- **Margins:** 60 px outer gutter, 40 px between panel rows
- **Max panel rows per page:** 4
- **Row logic:** 1 row = 1 horizontal 16:9 viewport when read on desktop monitor

### Row composition patterns
| Code | Layout | Best for |
|---|---|---|
| **R1-FULL** | 1 wide panel (full row) | Establishing shots, dramatic beats, splash moments |
| **R1-DUO** | 2 side-by-side panels | Dialogue volley, parallel action |
| **R1-TRIO** | 3 panels | Reaction beats, montage, time passing |
| **R1-INSET** | Main panel + smaller inset | Detail emphasis, internal thought layered on action |
| **R2-TALL** | 2 rows merged vertically | Full-body reveals, falling action, magic surges |
| **R3-TALL** | 3 rows merged | Splash page, episode climax |
| **MOSAIC** | Asymmetric overlapping | Emotional disorientation, mind-reading sequences |

### Pacing rules
- Average page = 3–4 rows
- "Beat pages" (silent emotional weight) = 1–2 rows with deep negative space
- Episode endings always close on a R1-FULL cliffhanger
- Use R2-TALL/R3-TALL sparingly — once per episode max — to preserve impact

---

## 3. Art Direction & Style Bible

### Style — Arcane × Anime mash
The visual target is a hybrid: **Arcane's painterly oil-textured rendering and dramatic cinematic lighting**, layered with **anime's expressive faces, eye design, reaction beats, and panel rhythm.** Think *Arcane* frames composed at *Vinland Saga* pacing, with character emotion read at *Frieren*-level subtlety.

### Style anchors (visual references to study)
- ***Arcane*** (Netflix / Fortiche) — **primary visual target.** Oil-painterly textures, hand-brushed surfaces, dramatic chiaroscuro, per-scene color grading, 2D/3D hybrid feel
- ***Castlevania (Netflix)*** — gothic elegance, Victorian fashion, painted backgrounds
- ***Vinland Saga*** — anime weight + maturity in faces and silhouettes
- ***Frieren*** — color sensitivity, ambient mood, quiet emotional beats
- ***Witch Hat Atelier*** — magical ornament density, painted environment detail
- ***Spy x Family*** — panel rhythm and expressive reaction beats (for anime side of the mash)

### Master style vector — Arcane × Anime mash
**Arcane DNA (rendering layer):**
- Painterly oil-textured rendering — visible brush strokes on surfaces
- Hand-crafted feel — no clean vector lines, no smooth gradients
- Dramatic chiaroscuro — strong contrast between lit and shadowed forms
- Per-scene color grading — each location wears its palette like a filter
- Cinematic framing — letterbox-style composition even in vertical format
- Subtle 2D/3D hybrid quality — characters feel sculptural but painted

**Anime DNA (storytelling layer):**
- Expressive faces with anime eye design (slightly stylized, more emotive than Arcane's realism)
- Anime panel rhythm — reaction shots, beat panels, emotion symbols when needed
- Cleaner line definition on character faces vs. painterly bodies/backgrounds
- Dynamic poses and silhouettes for dramatic moments
- Speed lines / impact effects reserved for combat or magic surges

**Blend rules:**
- **Backgrounds:** lean ~80% Arcane (painterly, textured, atmospheric)
- **Characters:** ~50/50 — Arcane proportions and material rendering, anime face structure and eye expressiveness
- **Lighting:** ~90% Arcane (chiaroscuro, color grading, bloom on aether)
- **Action/reaction beats:** ~70% anime (panel rhythm, emotion beats, dynamic framing)

### Color philosophy — palette by location/mood
*Arcane-style per-scene color grading: each location wears its palette like a filter, not just a paint job. Saturated where the Empire wants to be seen, desaturated where it doesn't.*

| Setting | Dominant palette | Emotional cue |
|---|---|---|
| **Cyritium daylight** | Gold, ivory, soft rose, sky blue | Empire-sanctioned warmth — almost overlit |
| **Aether-lit interiors** | Warm honey-amber + cool teal shadow | The "hum" made visual |
| **Vesper's office** | White, gold, crystalline pastels | Pristine, almost antiseptic divinity |
| **Leo's apartment** | Muted umber, ink black, lamp-amber | Working-class noble, tobacco-lit |
| **Calibration Hall** | Cold white marble + warm crystal glow | Clinical ritual |
| **Sun Scouring court** | Blinding gold, lens flare, fabric whites | Holy spectacle, almost too bright |
| **Lower Merchant Quarter** | Desaturated brick, soot, weak amber lamps | Working underside |
| **Service tunnel** | Deep teal, sickly aether-green, blood-rust | Hidden infrastructure, wrongness |
| **Eren's body / crime scene** | Crimson, scorched black, cold blue | Death framed as bureaucracy |

### Light language (recurring symbolic motifs)
- **Gold light = sanctioned / Imperial / "in the ledger"**
- **Teal-green aether glow = active crystal magic**
- **Cold white = ritual / official ceremony**
- **Crimson / rust = the unauthorized, the dead, the unaccounted-for**
- **Purple-violet = Sovereign Scars / heresy / the cracked symbol**

---

## 4. Character Visual Bible

### VESPER AURELIUS — Protagonist A
- **Age:** 30 · **Height:** 1.73 m · **Build:** Slender, elegant
- **Hair:** Long wavy crimson-red, often cascading; gold star hairpiece
- **Eyes:** Pale jade-green, sharp
- **Skin:** Fair, warm undertone
- **Wardrobe core:** White/cream layered Solari cleric robes, gold sunburst embroidery, burgundy/rose under-layer, slit skirt revealing gold sandal-heels and ankle chain
- **Signature accessories:** Sun-emblem pendant, prayer beads, signet ring (arcane focus), sunburst earrings, cleric shawl with sunburst
- **Visual identifiers (lock these in every prompt):**
  - Crimson wavy long hair with gold hair ornament
  - Layered white-and-burgundy cleric robes with gold sunburst motifs
  - Jade-green eyes
  - Composed, serene posture — chin slightly lifted
- **Hidden truth visual cue (sparingly used):** Faint sunlight reflection in her eyes when sorcery surfaces — never overt

### LEO GRAY — Protagonist B
- **Age:** 23 · **Height:** 1.78 m · **Build:** Lean, tall
- **Hair:** Messy black, slightly wavy, falling over forehead
- **Eyes:** Dark — near-black brown
- **Skin:** Pale, slightly cool undertone
- **Wardrobe core:** Long black Victorian-style overcoat with subtle pattern weave, charcoal three-piece suit, white shirt with cravat tie, polished black boots
- **Signature accessories:** Silver pocket watch on chain, signet ring (Gray & Co.), leather notebook, fountain pen, wax seal/stamp, monocle/reading glasses (situational)
- **Visual identifiers (lock these in every prompt):**
  - Messy black hair, dark eyes
  - Long black tailored overcoat, white cravat at throat
  - Silver pocket watch chain visible
  - Calm, observant, slightly closed-off body language
- **Logo:** Gray & Co. Investigations — eye-and-key motif, "Truth, Quietly Found."

### SUPPORTING CAST — initial designs needed
| Character | Visual brief | First appearance |
|---|---|---|
| **Felda** | F, ~55, dark hair with white streaks, mid-tier noble functionary, controlled face, slightly-too-fine garments | Ep 1 — Tea House |
| **Petre** | M, early 20s, cropped hair, straight-spined, junior administrator, military bearing forced into clerical role | Ep 2 — Vesper's office |
| **Lord Aurelian** | M, 40s–50s, refined businessman aesthetic, no overt rank cues, quietly powerful, warm-mannered but watchful eyes | Ep 3 — Sun Scouring |
| **Engineer Orvast** | M, 60s, House Solari engineer, decades of practiced motion, kind face, calibration tool in hand | Ep 2 — Calibration |
| **Marshal Bren Sable** | M, 40s, Gilded Guard senior officer, never seen in Ep 1 (only handwriting) — *design held for Ep 7+* | (referenced only) |
| **The Cleaner** | M, ageless 30–50, all-grey utilitarian uniform, gloved, briefcase, expressionless cataloguing demeanor | Ep 5 — Tunnel |
| **Eren Voss (corpse)** | M, ~35, grey clerk's robes, heavy wool coat, blunt trauma jaw, charged-contact discoloration on hand | Ep 5 — Tunnel |
| **The Senior Auditor** | F, 40s+, House Mccord aesthetic, controlled — *design held for Ep 7* | (referenced only) |

---

## 5. Location Bible

### Cyritium (capital)
- **Vibe:** Marble + gold + crystal + paperwork. Renaissance-Vienna-meets-Constantinople, lit by aether sconces. White silk drapes during Festival Week. The High Spire dominates the skyline.
- **Key sublocations for Session 1:**
  - The Tea House (small, quiet, back corner table)
  - Leo's apartment-office (modest, cluttered desk, papers, lamp-amber)
  - Vesper's new office (two rooms, white + gold + crystal, prepared)
  - Calibration Hall (formal, marble, witness benches)
  - Upper Light Court (tiered, mirrored sun-focusing architecture)
  - Aether cart (carriage with crystal propulsion — visible aether glow underneath)
  - Lower Merchant Quarter (working underside, soot, narrow streets)
  - Third Junction service tunnel (stairs down, sconce-lit, dirty stone)
  - Maintenance panel (water meters, hidden cavity)

### Atmosphere notes
- The hum: visualize as subtle ambient warm glow + faint air-shimmer near crystals
- Festival prep: white silk drapes, gold ribbons, beacon decorations on lamp posts, busy citizens
- Class layering: visual altitude = social rank (Sun Scouring tiers, High Spire above all)

---

## 6. AI Prompt Engineering

### Why this section matters
AI-assisted production lives or dies on **consistency**. Build a modular prompt library, never write prompts from scratch. Every panel = `[Master Style] + [Character Lock] + [Location Lock] + [Composition] + [Mood/Lighting] + [Negative]`.

### Master style prompt (paste in every generation)
```
arcane netflix style fused with anime aesthetic, painterly oil-textured
rendering with visible brush strokes, hand-crafted painted look, dramatic
chiaroscuro lighting, cinematic color grading, anime expressive faces
with stylized eyes, semi-realistic proportions, rich saturated colors in
lit areas with desaturated shadow zones, soft bloom on glowing aether
elements, detailed painted backgrounds, atmospheric depth, fortiche
studio style, webtoon vertical panel format,
crystal-clear sharp image, professional studio quality, crisp clean
detail throughout, smooth painted surfaces, high resolution output,
pristine image quality, no grain, no compression, no blur
```

### Anti-artifact lock (for ChatGPT)
ChatGPT doesn't have a formal negative prompt field, but it understands natural language — including instructions to *avoid* things. Use both positive and negative phrasing naturally in the prompt.

**Positive clean-image keywords (always include):**
- `crystal-clear sharp image`
- `professional studio quality`
- `crisp clean detail throughout`
- `smooth painted surfaces`
- `pristine image quality`
- `high resolution detailed output`
- `clean brushwork, well-defined edges`
- `magazine-print quality illustration`

**Natural-language exclusions (phrase as instructions):**
- `avoid any noise, grain, or compression artifacts`
- `no JPEG-style blockiness or banding`
- `avoid soft blur — keep all detail sharp`
- `no muddy or muted colors — keep palette rich and clean`
- `avoid 3D CGI look — stay painterly and hand-drawn`

**Rule of thumb:** Lead the prompt with the *clean state you want*, then add explicit exclusions at the end. Both work — clarity matters more than phrasing direction.

### Style reinforcement keywords (rotate into prompts as needed)
- `painterly brushwork`, `oil painting texture`, `hand-painted surfaces`
- `arcane netflix art style`, `fortiche animation aesthetic`
- `anime face structure`, `expressive anime eyes`, `stylized character design`
- `cinematic chiaroscuro`, `dramatic rim lighting`, `volumetric god rays`
- `desaturated shadows, vibrant highlights`
- `2D painted look`, `non-photorealistic rendering`

### Style avoidance keywords (force into negative prompt)
- `3D CGI render`, `pixar style`, `disney style`, `unreal engine`
- `clean vector lines`, `smooth gradients`, `digital cel-shading`
- `photorealistic`, `realistic photograph`

### Character lock prompts (paste verbatim for consistency)

**Vesper:**
```
woman, age 30, long wavy crimson red hair with gold star hair ornament,
pale jade green eyes, fair skin, wearing layered white and cream Solari
cleric robes with gold sunburst embroidery and burgundy under-layer,
sun-emblem gold pendant, prayer beads, gold sunburst earrings, composed
serene expression, elegant posture
```

**Leo:**
```
man, age 23, messy black wavy hair falling over forehead, dark brown
eyes near black, pale skin, wearing long black Victorian tailored
overcoat with subtle patterned weave, charcoal three-piece suit, white
shirt with cravat tie, silver pocket watch chain visible, calm observant
expression, slight closed-off body language
```

### Location lock prompts (examples)

**Service tunnel:**
```
underground stone service tunnel beneath fantasy city, aether crystal
sconces mounted on ceiling emitting warm amber-teal glow, dirty stone
walls with maintenance tools, deep teal shadows, sickly green ambient
light, atmospheric haze, gothic infrastructure
```

**Sun Scouring court:**
```
tiered open-air ceremonial court, large angled mirrors focusing late
afternoon sunlight into a warm golden column, white marble architecture
with gold ornament, drifting fabric banners, crowd of varied classes
on tiered platforms, blinding holy light, lens flare, particles of dust
in sunbeam
```

*(Expand this library as new locations appear — keep all prompts in a `/prompts/` folder for reuse.)*

### Composition modifiers
- `wide establishing shot, low angle`
- `medium shot, over-shoulder`
- `close-up portrait, soft focus background`
- `extreme close-up on hands holding [object]`
- `bird's eye view`
- `dutch angle, tense framing`
- `silhouette against bright window`

### Exclusion phrasing (append to prompts as needed)
Natural language to discourage common drift patterns:
```
Avoid: photorealistic style, 3D CGI render, Pixar or Disney 3D look,
clean vector lines, smooth digital gradients, flat cel-shading, modern
clothing, modern technology, anachronistic items, deformed hands, extra
fingers, watermarks, signatures, visible text artifacts, noise, grain,
compression artifacts, JPEG blockiness, banding, soft blur.
```

### Consistency workflow
1. **Generate reference sheet** for each character (already have these — use as IP-Adapter/character reference input)
2. **Generate location reference plates** before drafting any episode
3. **For every panel:** load character ref(s) + location ref + composition prompt
4. **Color match pass:** post-process to lock palette per the location bible
5. **Final assembly:** composite panels onto 9:16 page template, add gutters, add lettering

### Tooling recommendations
- **Base generation:** **ChatGPT image generation** (committed tool — natural language prompting)
- **Denoise + upscale (essential for ChatGPT output):**
  - **Topaz Photo AI** or **Topaz Gigapixel AI** — best paid option for denoise + 2–4× upscale
  - **Real-ESRGAN** (free) — open-source upscale, good for painterly content
  - **SwinIR** (free) — alternative upscaler
  - **GFPGAN** or **CodeFormer** — face restoration if AI faces drift soft
- **Refinement:** Photoshop (paint-over passes critical), Krita, Clip Studio Paint
- **Texture pass:** Brush overlays in Photoshop to reinforce oil-painted feel where output reads too clean or too soft
- **Lettering:** Clip Studio Paint or Affinity Publisher
- **Page assembly:** Photoshop or dedicated webtoon canvas templates

### Production notes (ChatGPT-specific)
ChatGPT image gen has known issues to plan around:
- **Soft/blurry output** — even at max resolution, output often reads softer than dedicated art tools
- **Subtle JPEG-like artifacts** — visible at zoom, kills the painterly Arcane texture
- **Color cast tendency** — sometimes drifts warm/sepia; color-match in post
- **Compression on download** — always export at maximum quality
- **Face inconsistency** — even with character lock prompts, faces drift across generations

**Mandatory mitigations:**
- Generate **6–10 options per panel** — pick the cleanest, not just the best composed
- **Always run through a denoise + 2× upscale pass** before any refinement work
- Budget **paint-over time per panel** — assume 30–50% of panels need manual face touch-up
- **Feed character sheets directly to ChatGPT each session** to lock likeness
- Generate at the **largest resolution ChatGPT allows**, then downsample to 1080×1920 — downsampling kills small noise

---

## 7. Mind-Reading Visual Rules

Mind-reading is core to the story. **Four techniques, applied by context.** Documenting the rules so the visual language stays legible.

| Technique | When to use | Visual treatment |
|---|---|---|
| **A. Floating overlay text** | Casual social reads, low-stakes (e.g., Petre's wounded thought) | Italicized text in a soft glowing color (Vesper's reads = warm gold); no bubble, no tail; placed near target's head |
| **B. Telepathic echo bubble** | Active *Detect Thoughts* casts on antagonists (e.g., the Cleaner) | Glowing distorted speech bubble with jagged/rippled edge, faint trailing echoes; thought rendered in stylized font |
| **C. Split-panel caption** | Important revelations the reader needs to weigh (e.g., Orvast's "this might not be right") | Panel splits — left: target's face neutral, right: thought as bold caption block on dark background |
| **D. Visual flash / symbol** | Climactic emotional or mutual reads (e.g., Lord Aurelian's "Formidable") | Minimal text, single word in stylized typography against a brief abstract overlay — sun motif, prism shard, or aether ripple — held for a beat |

### Mutual-read special rule (Lord Aurelian moment, Ep 3)
- Use **MOSAIC** layout
- Two overlapping circular panels: Vesper's eyes / Aurelian's eyes
- Both panels emit gold ripple outward
- Single word — *Formidable.* — floats between them
- This is the episode 3 cliffhanger; treat as signature moment

### Color coding (legibility lock)
- **Vesper's active read** = warm gold glow
- **Target's surface thought** = cool silver-white text
- **Failed/blocked read** = thought text fragments into particles
- **Mutual read** = both colors interlocked

---

## 8. Session 1 — Episode Breakdown

Session 1 splits into **6 episodes**, each ~15–22 pages (60–80 panel rows). Every episode closes on a cliffhanger.

### EPISODE 1 — "Forty-Six"
**Beats:**
- Cold open: Prologue — Cyritium establishing montage, Empire as ledger, the hum, festival prep
- Reveal the discrepancy: 46 crystals missing — set aside as rounding error
- Tea house: Leo meets Felda, the cooling tea, the saucer signal, the cash envelope
- Felda's hidden note discovered: *"The clerk is asking about the forty-sixth line again. It has been handled. Do not involve anyone else."*
- Leo returns home, cannot find his case notes — the blocked memory beat
- Window knock: Gilded Guard runner delivers Bren's sealed handwritten note
- Note revealed: Eren Voss dead, harmonic overload, Ministry cleaner on site, *be covert*

**Cliffhanger panel:**
- R1-FULL — Leo seated at his desk, lamplight catching the unfolded note in his hands, his expression unreadable, the wax seal of M. Bren glinting

**Key panels to budget extra time on:**
- The Cyritium establishing splash (R3-TALL recommended)
- The note reveal (split-panel: note in foreground sharp, Leo's face soft background)

---

### EPISODE 2 — "First Light"
**Beats:**
- Vesper's first morning in Cyritium — establishing her office (sanctification ritual, plush toy detail)
- Petre arrives, the tea tray, the sealed envelope from Lord Aurelian himself
- Vesper reads the personal note from Lord Aurelian — *unusual*
- Petre's surface thought caught (Technique A) — *"He wrote to her himself. In three years, he has written to me twice. Both times something was changing."*
- The Calibration Hall — 46 tier-three crystals on the cart
- Engineer Orvast performs the ceremony — touch, listen, mark, repeat (montage row)
- The 46th crystal: Orvast's pause
- Vesper's *Detect Thoughts* (Technique C — split-panel) catches: *"This might not be right. I'm not really sure."*
- Orvast signs anyway — *"All verified. Standard stock."*
- Vesper's gentle press: *"It didn't sound the same as the rest, did it?"*
- Orvast: *"You have an ear for crystals."*

**Cliffhanger panel:**
- R1-FULL — close-up on Orvast's ledger entry, three small private words handwritten beside the 46th crystal's number, the page closing under his palm

**Key panels:**
- The 46 crystals reveal (R2-TALL — overhead shot of the cart with all 46 glowing in rows)
- The pause moment (extreme close-up on Orvast's hand hovering over the crystal)

---

### EPISODE 3 — "Under the Sun"
**Beats:**
- Vesper attending the Sun Scouring — tiered court, descending classes, ascending light
- Quiet character beat: Vesper prays to Solaria for her daughter back in Solaris (lore drop — protagonist depth)
- Lord Aurelian appears — first full reveal of his design
- Their conversation: kind, warm, businesslike — *not what she expected*
- The mutual mind-read (Technique D — full MOSAIC moment)
- Vesper reaches for his thoughts — and realizes he is already reading hers
- Single word from him: *"Formidable."*
- He does not react outwardly
- Vesper internalizes: this man is more than the head of a minor house

**Cliffhanger panel:**
- R1-FULL — Lord Aurelian walking away into the golden processional light, Vesper standing motionless, the sunset behind framing him in silhouette, the word *Formidable* fading in floating gold

**Key panels:**
- The Sun Scouring establishing splash (R3-TALL — the column of focused sunlight, tiered crowd)
- The mutual read mosaic — *the signature visual of this episode, possibly of the series*

---

### EPISODE 4 — "Convergence"
**Beats:**
- Morning after — Vesper crosses Cyritium to find Leo
- Knock at the door — reunion. Warm, teasing, established friendship
- Compare notes:
  - Leo: Felda's note, the dead clerk, Bren's covert request
  - Vesper: the 46 crystals, the wrong one, Orvast's blocked-but-felt unease
- The shared number lands: **forty-six**
- Leo's blocked memory — Vesper helps with guidance, but the detail keeps slipping
- They decide to follow Bren's lead first
- Aether cart ride to Lower Merchant Quarter — visual contrast (gold city giving way to soot)
- Arrive at the Third Junction
- Investigation tape — *Investigation ongoing*
- The door is unlocked

**Cliffhanger panel:**
- R1-FULL — Vesper and Leo at the entrance, framed from behind, ducking under the tape, the stairs descending into teal-tinged darkness ahead

**Key panels:**
- The reunion exchange (R1-DUO rhythm — back-and-forth dialogue)
- The aether cart ride (R1-FULL — side view, two protagonists framed against shifting cityscape, transition from gold to grey)

---

### EPISODE 5 — "The Cleaner"
**Beats:**
- Descent into the tunnel — atmosphere shift, palette lock to teal/rust
- The body: Eren Voss revealed — clerk's robes, heavy wool coat, blunt trauma, charged hand
- The Cleaner — grey figure kneeling, calm voice: *"The tunnel is closed. Ministry business."*
- Vesper's *Suggestion* attempt — partially deflected
- Vesper's *Detect Thoughts* (Technique B — telepathic echo) catches the Cleaner's cataloguing — *"Female. House-marked. Military bearing. Male. Unaffiliated. Professional movement."*
- Deeper push — **blocked.** (visualize: gold thread fragmenting against grey barrier)
- The improvised lie — false names "Mohsen" and "Alaa", invented "Monsieur Laren"
- Leo forges a writ outside — montage row, fountain pen, wax seal, calm hands
- The forgery accepted (for now)
- Search the body — hidden paper in stitched-shut pocket, pin beneath the collar
- Vesper's *Mage Hand* distraction — wind, page flips
- Glimpse of the Cleaner's personal ledger — *eighteen entries*, last one about them, margin note: *"Lunaris Gilded Guard involvement??"*

**Cliffhanger panel:**
- R1-FULL — close-up on the Cleaner's margin note, hand still hovering above with pen, his eyes lifting just slightly toward where Vesper and Leo stand

**Key panels:**
- The body discovery (R2-TALL — top-down view, body, scorch trajectory)
- The forged writ creation (R1-TRIO montage — pen, seal, paper)
- The ledger glimpse (R1-INSET — page in focus, Cleaner's hand blurred reaching to correct it)

---

### EPISODE 6 — "What Remains"
**Beats:**
- Cleaner finishes, loads body into unmarked aether cart, drives away — *he sees them, but does not react*
- The two protagonists examine the hidden paper from Eren's coat:
  - Three torn manifest fragments
  - Each shows missing tier-three crystals routed through *"Sanctity Infrastructure, Internal. Authorized Office of Holy Order"*
  - **Total: 46.** The number lands a third time.
- Examine the pin: circle-with-line crossed by a crack — the **Sovereign Scars** symbol
- Eren was hiding more than one thing
- Night returns to the cleaned tunnel — lockpicked, descent again
- The scene has been scrubbed: no body, no scorch, nothing
- They retrieve the hidden evidence bags from the maintenance panel:
  - Cracked grey tier-one crystal (anomalous — should have disintegrated)
  - Eren's personal ledger (ciphered notes, dying mother's medication)
  - Clerking kit (recently purchased, barely used — forgery materials?)
- Leo finds the scratched code inside the panel: **CL-A-46-D**
- They copy it down, erase the original mark
- Cut to morning — Vesper's office, the **Vermont/Aurelian transfer packet** arrives
- Lady Lysandra Vermont's arrest proceedings, House Vermont assets routed to House Aurelian
- *The paperwork is prepared too early*
- Vesper signs — but adds House Aurelian to her own watch list
- Final beat: Leo checks his dead drop — *Eren had a contact. Senior auditor. Merchant Review tomorrow. She will not approach you.*

**Cliffhanger panel:**
- R1-FULL — Leo's hand holding the dead-drop note, the words "*If you want to reach her, you need to already be in the room.*" — and a small smiley face at the bottom of the page

**Key panels:**
- The manifest reveal (R1-INSET — the three fragments laid out, the recurring *46* circled in red)
- The pin examination (extreme close-up — the cracked circle symbol)
- The Vermont packet (R2-TALL — Vesper reading at her desk, packet contents floating around her as visualized list)

---

## 9. Panel Script Template

Use this format for every panel script (markdown-friendly, drop into per-episode files):

```markdown
### EP[X] / PAGE [Y] / ROW [Z]
**Layout:** R1-FULL / R1-DUO / R2-TALL / etc.
**Composition:** [shot type, angle, framing]
**Subjects:** [characters present]
**Location:** [location ref ID]
**Lighting/Mood:** [palette ref + emotional tone]
**Action:** [what is happening]
**Dialogue / Caption:**
  - [SPEAKER]: "line"
  - [CAPTION]: text
**Mind-read technique (if any):** A / B / C / D
**AI prompt assembly:**
  - Master style: ✓
  - Character lock: [Vesper / Leo / etc.]
  - Location lock: [location prompt ID]
  - Composition modifiers: [list]
  - Negative: ✓
**References to attach:** [character ref sheets, location plates]
**Notes:** [callbacks, foreshadowing, continuity flags]
```

---

## 10. Production Workflow

### Per-episode pipeline
1. **Script lock** — write full panel script using the template, lock dialogue
2. **Reference pass** — generate/confirm all location plates needed; confirm character refs (feed sheets to ChatGPT each session)
3. **Thumbnail pass** — rough layouts for all pages (low-res sketches, panel flow)
4. **Generation pass** — run prompts in ChatGPT panel-by-panel using locked references; generate 6–10 per panel
5. **Selection pass** — pick the cleanest generation per panel (cleanness ranks above composition — fix composition in paint, can't fix bad source)
6. **Denoise + upscale pass** — run every panel through Topaz/Real-ESRGAN at 2× before any other work (critical for ChatGPT output)
7. **Refinement pass** — manual paint-over: fix hands, fix character likeness drift, lock color palette, add brush texture if too smooth
8. **Composition pass** — assemble panels onto 9:16 page canvas; add gutters
9. **Lettering pass** — speech bubbles, captions, sound effects, mind-read styling
10. **QC pass** — read full episode on phone (mobile-first) AND desktop (verify row = viewport); zoom-check for residual artifacts
11. **Export** — publish-ready PNG at 2x retina + 1x mobile (PNG, not JPG, to avoid re-introducing compression)

### Estimated effort per episode (solo, ChatGPT pipeline)
- Script + thumbnails: **1–2 days**
- Generation + selection: **3–4 days**
- Denoise + upscale + refinement: **3–4 days** (critical for clean output)
- Lettering + assembly: **1–2 days**
- **Total: ~10–12 days per episode**

### Quality gates (don't skip)
- [ ] Character likeness matches reference sheet within tolerance
- [ ] Color palette matches location bible
- [ ] Mind-read technique applied per Section 7 rules
- [ ] Cliffhanger panel uses R1-FULL or stronger
- [ ] No anachronistic items, no AI artifacts in faces/hands
- [ ] **Zoom-test passed:** no visible noise, compression, or soft blur at 200% zoom
- [ ] **Denoise + upscale pass completed** on every panel
- [ ] Mobile read-through feels paced; desktop read-through respects row = viewport
- [ ] Final export is PNG (not JPG) to preserve clean output

---

## 11. Future Sessions — Framework

For each new session, build out using this template structure:

```markdown
## Session [N] — "[Title]"

### Story summary
[1–2 paragraph synopsis from session notes]

### Episode count target
[5–6 standard, adjust based on content density]

### Episode breakdown
- Ep N.1 — "[title]" — beats + cliffhanger
- Ep N.2 — "[title]" — beats + cliffhanger
- Ep N.3 — "[title]" — beats + cliffhanger
- Ep N.4 — "[title]" — beats + cliffhanger
- Ep N.5 — "[title]" — beats + cliffhanger
- Ep N.6 — "[title]" — beats + cliffhanger

### New characters introduced
[character | brief | first appearance episode]

### New locations introduced
[location | palette | atmosphere notes]

### New visual rules / motifs
[any new mind-read variants, lighting rules, symbolic motifs]

### Callbacks to prior sessions
[continuity beats, foreshadowing payoffs]
```

### Continuity flags to track across sessions
- The forty-six crystals — where each one ends up
- Lord Aurelian's true role and capabilities
- The Sovereign Scars — who, how many, what they want
- House Vermont's fate and the Vermont Cut
- Leo's blocked memory — what was Felda's actual document?
- Marshal Bren Sable — physical reveal pending
- The Cleaner — recurring antagonist?
- "CL-A-46-D" — unresolved code

---

## 12. Open Questions / Backlog

Decisions to make before Episode 1 production begins:

- [ ] **Final title** — *Gilded Fracture* or alternative?
- [ ] **Series logo design** — needed for episode headers
- [ ] **Mature content rating** — corpse, mind-reading, violence levels need a content tier decision
- [ ] **Marshal Bren Sable visual design** — needed before he appears on-page
- [ ] **House heraldry/sigils** — Aurelian, Vermont, Talos, Mccord, Solari, Halofel sigils need design pass
- [ ] **Sovereign Scars symbol** — finalize exact visual treatment (cracked circle-with-line)
- [ ] **Vesper's daughter** — design held until first mention/flashback episode
- [ ] **The hum** — final SFX/visual treatment for ambient aether presence
- [ ] **Episode cover/title cards** — template design
- [ ] **Release cadence** — weekly? bi-weekly? batch drop per season?
- [ ] **Language(s)** — English only or multilingual from launch?

### Stretch additions (consider for later)
- Character relationship map (visual)
- Cyritium city map (for reader orientation)
- Glossary page (Empire terms, magic terms)
- Timeline of events across sessions

---

*End of v0.1. Update this document as decisions land — keep section numbering stable so cross-references hold.*
