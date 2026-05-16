# Gilded Fracture - Webtoon Master

## 01 Campaign Spine

Title: Gilded Fracture

Campaign-wide mystery: The Missing 46

Central question: What happened to the forty-six missing tier-three festival crystals, and why is the Cyriath Empire's sacred bureaucracy moving to hide it?

Core promise: A luminous imperial fantasy thriller where faith, citizenship, law, and reputation are controlled through holy records, and where the smallest accounting discrepancy may expose a conspiracy inside the light.

Adaptation model:

```text
D&D Campaign Notes
-> Prologue / Session 0 Hook
-> D&D Session
-> Webtoon Arc
-> Episode
-> Swipe Screen
-> Panel
```

Rule: The prologue/session 0 hook is `P00`. After that, one D&D session becomes one webtoon arc. The Missing 46 is the campaign mystery, not the title of Arc 01.

## 02 Adaptation Rules

- Preserve the campaign's mystery logic, emotional beats, and best visual moments.
- Compress table logistics, repeated investigation steps, and tactical details unless they create tension or reveal character.
- Every episode must end with a new danger, contradiction, suspect, reveal, or impossible question.
- The webtoon is not a transcript. Scenes may be reordered, combined, or reframed to improve pacing.
- The D&D notes are the archive. This master document is the adaptation source of truth.
- New session notes enter through `14 Intake Log` first, then only promoted material updates canon, arcs, characters, locations, or prompts.

## 03 Production Pipeline

Pipeline:

```text
1. Update D&D session notes.
2. Create an intake entry for the new session.
3. Convert that session into one arc.
4. Divide the arc into episodes with hooks.
5. Break each episode into swipe screens.
6. Write panel prompts using locked style, character, location, and layout IDs.
7. Generate images externally.
8. Pre-filter externally while generating images.
9. Place only the chosen image for each panel in the matching episode panel folder.
10. Integrate the chosen panels into the reader/dashboard manifest.
```

Folder structure:

```text
assets/
  characters/
  locations/
  props/
episodes/
  p00/
    e01/
      panels/
  a01/
    e01/
      panels/
```

No separate `selected`, `generated`, or `final` folder by default. The episode `panels/` folder contains only the chosen images that should be used by the reader.

## 04 ID & Filename System

ID format:

```text
A##-E##-S###-P##
```

Example:

```text
A01-E01-S003-P01
```

Prologue/session 0 uses the same pattern with `P00`:

```text
P00-E01-S003-P01
```

Filename format:

```text
a##_e##_s###_p##.png
```

Mapping rule: every panel listed in this master file must map to one exact filename in the episode panel folder.

Example:

```text
Panel ID: A01-E01-S003-P01
File: episodes/a01/e01/panels/a01_e01_s003_p01.png
```

Prologue example:

```text
Panel ID: P00-E01-S003-P01
File: episodes/p00/e01/panels/p00_e01_s003_p01.png
```

## 05 Visual Direction

### STYLE-CORE

Painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

The world should feel like sacred bureaucracy: polished white marble, gold inlay, crystal instruments, official seals, ledgers, ritual geometry, ceremonial documents, luminous halls, and institutional beauty hiding rot.

Use:

- warm sunlight and candle-gold against cool blue crystal glow
- white stone, ivory paper, polished brass, gold leaf, dark ink, deep blue crystal
- close-up evidence shots: hands, ledgers, seals, quills, folded notes, cracked crystals
- cinematic framing, strong focal depth, dramatic silhouettes
- expressive but grounded faces and hands

Avoid:

- flat anime style
- photorealistic photography
- generic medieval fantasy taverns
- overly clean plastic 3D render
- cluttered unreadable documents
- modern UI, modern clothing, modern city materials
- random purple glow unless explicitly requested

Reusable prompt anchor:

```text
premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art
```

## 06 Prompt System

Every panel prompt must include:

```text
Panel ID:
File:
Layout ID:
Target frame:
Aspect ratio:
Composition rule:
Safe text area:
Characters:
Location:
Props:
Continuity locks:
Prompt:
Negative prompt:
```

Prompt rule: every image must be generated for its intended screen slot. Do not write a generic beautiful image prompt and crop it later unless the layout explicitly allows cropping.

Global negative prompt:

```text
flat anime, photorealistic photo, plastic 3D render, generic medieval tavern, modern clothing, modern technology, blurry hands, malformed hands, unreadable focal object, extra fingers, random text, watermark, logo, speech bubbles baked into image
```

## 07 Screen Layout Library

### LAYOUT-FULL

Screen: 9:16 mobile-first
Panels: 1
Panel ratio: 9:16
Use for: major reveals, portraits, establishing moments, silent emotional beats.

Prompt instruction:

```text
vertical full-screen composition, 9:16 aspect ratio, subject readable on mobile, strong top-to-bottom depth, leave intentional negative space for optional overlay text
```

### LAYOUT-TWO-STACKED

Screen: 9:16 mobile-first
Panels: 2
Panel ratio: 16:7 each
Use for: setup/reaction, parallel evidence beats, question/answer, before/after.

Prompt instruction:

```text
wide horizontal cinematic panel designed for one half of a vertical swipe screen, 16:7 aspect ratio, clear focal point, minimal clutter, readable at small size
```

### LAYOUT-WIDE-TOP-TWO-BOTTOM

Screen: 9:16 mobile-first
Panels: 3
Top panel ratio: 16:8
Bottom panel ratio: 8:7 each
Use for: establishing shot plus two evidence/reaction details.

Prompt instruction for top panel:

```text
wide horizontal establishing panel, 16:8 aspect ratio, designed for the top half of a vertical mobile screen
```

Prompt instruction for bottom panels:

```text
compact panel, 8:7 aspect ratio, one clear subject, strong silhouette or object detail, no tiny text
```

### LAYOUT-DOCUMENT-INSERT

Screen: 9:16 mobile-first
Panels: 1
Panel ratio: 9:16 or 4:5
Use for: letters, ledger pages, official notices, seals, coded markings.

Prompt instruction:

```text
document-focused composition, readable visual hierarchy without relying on exact generated text, official paper texture, seal or mark as focal detail
```

### LAYOUT-REACTION-DETAIL

Screen: 9:16 mobile-first
Panels: 2
Panel ratio: top 9:10, bottom 9:6
Use for: character realization followed by evidence detail, or evidence detail followed by reaction.

Prompt instruction:

```text
mobile-first cinematic panel with one dominant subject, strong emotional read, controlled background detail
```

## 08 Character Locks

### CHAR-VESPER

Reference files:

- assets/characters/char_vesper_ref01.png

Locked traits:

- Noblewoman in her early thirties.
- Elegant, striking, composed, devout, deliberate.
- Solaria-inspired white and gold styling.
- Refined expensive clothing, restrained compared to Cyritium's grandest nobles.
- Visual language: celestial divinity, polished grace, controlled radiance.
- Has a private softness beneath the official poise.

Prompt anchor:

```text
Vesper Aurelian, elegant noblewoman in her early thirties, composed and striking, refined white and gold Solaria-inspired clothing, celestial jewelry and restrained luxury, graceful devout presence, polished but emotionally alert
```

Continuity warnings:

- Do not make her look teenage.
- Do not make her armor-heavy unless the scene calls for it.
- Do not overdo halos or literal angel imagery.

### CHAR-LEO

Reference files:

- assets/characters/char_leo_ref01.png

Locked traits:

- Private investigator, twenty-three.
- Composed, observant, quiet, difficult to read.
- Simple white shirt or understated streetwear.
- Stillness rather than theatrical brooding.
- Visual contrast to Vesper: lower-status, practical, less ornamented.

Prompt anchor:

```text
Leo Gray, quiet twenty-three-year-old private investigator, composed and observant, simple white shirt and practical understated clothing, sharp eyes, controlled posture, street-level investigative presence
```

Continuity warnings:

- Do not make him ruggedly middle-aged.
- Do not make him flamboyant or heavily armored.
- Keep his design grounded and readable.

### CHAR-FELDA

Reference files:

- assets/characters/char_felda_ref01.png

Locked traits:

- Woman in her fifties.
- Dark hair streaked with white.
- Controlled expression, noble-house functionary presence.
- Clothes slightly too fine for the rank she appears to represent.
- Carries fear through composure.

### CHAR-PETRE

Reference files:

- assets/characters/char_petre_ref01.png

Locked traits:

- Young house administrator, younger than he tries to appear.
- Cropped hair, straight spine, trained posture.
- Military-adjacent discipline redirected into office work.
- Polite, wounded, professional.

### CHAR-ORVAST

Reference files:

- assets/characters/char_orvast_ref01.png

Locked traits:

- Respected House Solari festival engineer.
- Older expert with decades of ritual muscle memory.
- Polished patience, experienced hands, quiet authority.

### CHAR-LORD-AURELIAN

Reference files:

- assets/characters/char_lord_aurelian_ref01.png

Locked traits:

- Head of House Aurelian.
- Calm, approachable, wealthy, not rigidly formal.
- Businessman-like authority rather than military command.
- Warm surface, politically dangerous interior.

## 09 Location Locks

### LOC-CYRITIUM

Reference files:

- assets/locations/loc_cyritium_ref01.png

Locked traits:

- Capital of the Celestial Ledger.
- White stone, gold light, crystal infrastructure, formal civic geometry.
- Beautiful, orderly, sanctified, controlled.
- City-wide feeling: everything has been logged, authorized, stamped, and lit.

### LOC-LEDGER-HALL

Reference files:

- assets/locations/loc_ledger_hall_ref01.png

Locked traits:

- Sacred bureaucratic chamber beneath or near the High Spire.
- Massive ledgers, white marble, gold seals, blue crystal light.
- Should feel religious and administrative at once.

### LOC-TEA-HOUSE

Reference files:

- assets/locations/loc_tea_house_ref01.png

Locked traits:

- Quiet morning tea house.
- Back corner table away from easy traffic.
- Civilian space with subtle tension.
- Good for controlled dialogue, hidden note, saucer gesture.

### LOC-AURELIAN-OFFICE

Reference files:

- assets/locations/loc_aurelian_office_ref01.png

Locked traits:

- Fresh plaster, wood oil, white finishes, gold accents, crystalline details.
- Refined magical clinic crossed with noble compliance office.
- Two rooms: reception/work area and private examination room.
- Vesper's plush toy may be visible on the desk when appropriate.

### LOC-CALIBRATION-HALL

Reference files:

- assets/locations/loc_calibration_hall_ref01.png

Locked traits:

- Formal procedure room designed for witnessing, signing, and moving on.
- Official, controlled, almost painfully orderly.
- A cart of forty-six tier-three festival crystals can be central.

### LOC-UPPER-LIGHT-COURT

Reference files:

- assets/locations/loc_upper_light_court_ref01.png

Locked traits:

- Tiered public ritual court.
- Last-hour sunlight focused through tilted mirrors into a warm column.
- Religious and social hierarchy visible through elevation.

### LOC-RAIL-MAINTENANCE-TUNNEL

Reference files:

- assets/locations/loc_rail_tunnel_ref01.png

Locked traits:

- Lower Merchant Quarter aether rail maintenance tunnel.
- Industrial sacred infrastructure: stone, metal, crystal conduits, service panels.
- Can shift from crime scene to scrubbed-clean ordinary passage.

## 10 Prop Locks

### PROP-CELESTIAL-LEDGER

Reference files:

- assets/props/prop_celestial_ledger_ref01.png

Locked traits:

- Vast holy record of Imperial crystal movement and civic legitimacy.
- Open pages, fine handwriting, official columns, seals, gold hardware.
- Should feel older than any living person.

### PROP-TIER3-FESTIVAL-CRYSTAL

Reference files:

- assets/props/prop_tier3_festival_crystal_ref01.png

Locked traits:

- Festival infrastructure crystal.
- Blue-white inner glow, sanctified tag, official inventory number.
- Important enough to be ceremonial, not a casual lamp.

### PROP-CRACKED-TIER1-CRYSTAL

Reference files:

- assets/props/prop_cracked_tier1_crystal_ref01.png

Locked traits:

- Small personal aether crystal.
- Grey, empty, cracked along its length.
- Wrong because it remains intact instead of disintegrating.

### PROP-SOVEREIGN-SCARS-PIN

Reference files:

- assets/props/prop_sovereign_scars_pin_ref01.png

Locked traits:

- Metal ring crossed by a vertical line, with a crack crossing the symbol.
- Socially and professionally dangerous if discovered.

### PROP-MINISTRY-SEAL

Reference files:

- assets/props/prop_ministry_seal_ref01.png

Locked traits:

- Official, polished, lawful, intimidating.
- Used on documents that may be legally clean and morally rotten.

## 11 Webtoon Canon

Locked campaign facts:

- The Cyriath Empire records citizenship, reputation, crystal movement, and civic legitimacy through sacred bureaucracy.
- Cyritium is the capital of accounting, verification, authorization, and the Celestial Ledger.
- Ascension Day is approaching, and the city is in festival preparation.
- Forty-six tier-three festival infrastructure crystals are missing from the ledger.
- Leo Gray is a private investigator pulled into the mystery through Felda and Marshal Bren Sable.
- Vesper Aurelian is newly appointed as Cyritium liaison, house notary, and sanctity compliance officer for House Aurelian.
- Eren Voss, a clerk, is found dead in an aether rail maintenance tunnel.
- The official cause is harmonic overload, but the scene and paperwork are suspicious.
- House Aurelian is connected to suspicious crystal-cutting tools from House Talos.
- House Aurelian is also connected to the transfer of House Vermont's crystal-processing asset, the Vermont Cut.
- Eren Voss carried evidence connected to missing tier-three crystals.
- The code `CL-A-46-D` is unresolved.

## 12 Mystery Threads

Campaign mystery:

- What happened to the forty-six missing tier-three crystals?

Open threads:

- Who arranged the missing crystals under "Sanctity Infrastructure, Internal"?
- Why did Orvast notice the final festival crystal was wrong and sign anyway?
- Who killed Eren Voss, and why was the report being closed so quickly?
- What does `CL-A-46-D` mean?
- What is House Aurelian building or stewarding?
- Why was House Vermont's transfer paperwork prepared before events had fully happened?
- Who is the senior auditor connected to Eren Voss?
- What is the cleaner's true primary objective?
- What is the Sovereign Scars connection?
- What full document did the torn manifest pieces come from?

## 13 Arc Roadmap

### P00 - Prologue: The Ledger Does Not Lie

Source: Session 0 hook / campaign prologue.

Campaign thread: The Missing 46.

Prologue question: What kind of empire can lose forty-six holy crystals and call it a rounding error?

Prologue function:

- Introduce the Empire's sacred bureaucracy.
- Establish Cyritium as the capital of ledgers, seals, crystal infrastructure, and official truth.
- Reveal the forty-six-crystal discrepancy as the campaign hook.
- End before the character-level investigation begins.

Suggested episodes:

- P00-E01 - The Ledger Does Not Lie

Endpoint:

- The audience understands that the Missing 46 is not just a missing-object problem. It is a flaw in a system that claims perfect order.

Status: ready to script.

### A01 - Session One Arc

Source: D&D Session 1.

Campaign thread: The Missing 46.

Arc question: How do Leo and Vesper first discover that the missing crystals, Eren Voss, House Aurelian, and Ministry paperwork are connected?

Arc function:

- Establish Leo and Vesper as parallel investigative leads.
- Connect the forty-six-crystal discrepancy to living people, dead bodies, and signed paperwork.
- Connect the discrepancy to Eren Voss's death.
- Connect House Aurelian to suspicious tools and House Vermont's asset transfer.
- End with the need to access the Merchant Review and find the senior auditor.

Suggested episodes:

- A01-E01 - The Note Beneath the Saucer
- A01-E02 - Standard Stock
- A01-E03 - Harmonic Overload
- A01-E04 - The Cleaner's Ledger
- A01-E05 - CL-A-46-D
- A01-E06 - The Merchant Review

Arc endpoint:

- Leo and Vesper understand that the missing crystals are not a clerical mistake.
- The investigation moves from crime scene evidence to controlled political access.

Status: scaffolded.

## 14 Episode Roadmap

### P00-E01 - The Ledger Does Not Lie

Purpose: Establish the Empire, Cyritium, the Celestial Ledger, Ascension Week, and the impossible discrepancy.

Core scenes:

- The name written in light.
- Cyritium as the city of receipts, seals, and holy accounting.
- Festival preparations running perfectly.
- The Celestial Ledger as sacred administrative artifact.
- The reveal: forty-six crystals are missing.

Cliffhanger: Forty-six crystals are missing from the ledger, and everyone is prepared to call it a rounding error.

Status: scripted; prompt pack drafted.

### A01-E01 - The Note Beneath the Saucer

Purpose: Introduce Leo, Felda, the private job, and the first human signal that the forty-sixth line matters.

Cliffhanger: "The clerk is asking about the forty-sixth line again. It has been handled. Do not involve anyone else."

Status: outline only.

### A01-E02 - Standard Stock

Purpose: Introduce Vesper, Petre, House Aurelian, the calibration assignment, and the wrong-sounding final crystal.

Cliffhanger: Orvast notices one crystal is different and signs anyway.

Status: outline only.

### A01-E03 - Harmonic Overload

Purpose: Bring Leo toward Eren Voss's death and frame the official explanation as too neat.

Cliffhanger: Ministry cleaner on site before the incident report is filed.

Status: outline only.

### A01-E04 - The Cleaner's Ledger

Purpose: Investigate the body, reveal missing evidence, the cleaner's suspicion, and the hidden objectives around the case.

Cliffhanger: The cleaner recorded them and still has a primary objective.

Status: outline only.

### A01-E05 - CL-A-46-D

Purpose: Recover evidence, reveal the torn manifests, Sovereign Scars pin, cracked crystal, and scratched code.

Cliffhanger: `CL-A-46-D`.

Status: outline only.

### A01-E06 - The Merchant Review

Purpose: Shift the mystery from the tunnel to institutional access.

Cliffhanger: The senior auditor will be at the Merchant Review, but Leo and Vesper must already be inside the room.

Status: outline only.

## 15 Current Episode Script

Current target: P00-E01 - The Ledger Does Not Lie

Status: scripted; ready for external image generation.

Episode purpose: Establish the sacred bureaucracy of Cyriath, the visual identity of Cyritium, and the campaign-wide hook: forty-six crystals missing from a system that claims perfect order.

Reader experience: slow, luminous, ceremonial, then quietly wrong.

### P00-E01-S001 - Your Name Is Written In Light

Layout: LAYOUT-FULL

Narration:

In the year 643 post-Unmaking, your name is not written in ink.

Your name is written in light.

Visual beat: A citizen silhouette stands beneath a vast projected ledger of light, making civic identity feel holy, beautiful, and inescapable.

### P00-E01-S002 - Faith And Receipts

Layout: LAYOUT-TWO-STACKED

Narration:

To belong to the Cyriath Empire is to exist inside the Celestial Ledger.

The Empire does not run on faith alone.

It runs on faith and receipts.

Visual beat: The first panel shows sanctified accounting; the second shows the machinery of verification.

### P00-E01-S003 - Cyritium Accounts

Layout: LAYOUT-FULL

Narration:

Where Lunaris mines, Solaris trades, and Cyritium accounts.

Visual beat: Establish Cyritium as a luminous capital of ledgers, seals, bridges, crystal infrastructure, and institutional grandeur.

### P00-E01-S004 - The Seal Says Holy

Layout: LAYOUT-WIDE-TOP-TWO-BOTTOM

Narration:

This crystal is sanctified.

This shipment is legitimate.

This person is in good standing.

This light is holy.

Visual beat: A top-wide procedural hall, then two close-up evidence-style panels: a seal pressed into wax and a tagged crystal being inspected.

### P00-E01-S005 - The Celestial Ledger

Layout: LAYOUT-FULL

Narration:

Beneath the High Spire, the Office of Holy Order maintains the longest unbroken document in the known world.

Six hundred and forty-three years of crystal movement. Every shipment. Every signature. Every seal.

Visual beat: The Ledger becomes an altar.

### P00-E01-S006 - Ascension Week

Layout: LAYOUT-WIDE-TOP-TWO-BOTTOM

Narration:

Fifteen days before Ascension Day, Cyritium is the most orderly place in the world.

Every bridge is draped. Every sconce assigned. Every festival crystal logged.

Visual beat: Public grandeur above, logistics and crystal assignment below.

### P00-E01-S007 - The Machine At Its Peak

Layout: LAYOUT-TWO-STACKED

Narration:

The city is a machine running at its annual peak.

The hum in the walls is warmer this week than any other.

Everything is exactly where it is supposed to be.

Visual beat: A warm, satisfied city system contrasted with perfect rows of festival crystals.

### P00-E01-S008 - The Missing 46

Layout: LAYOUT-DOCUMENT-INSERT

Narration:

There is only one small thing.

Forty-six crystals are missing from the ledger.

Visual beat: A ledger page or manifest with a quiet absence, not an explosion. The horror is clerical.

End hook: A rounding error. A clerical mistake. Not something any reasonable person would pursue.

## 16 Screen & Panel Prompt Packs

### P00-E01 Prompt Pack

Status: drafted for external image generation.

Global style for every prompt in this pack:

```text
STYLE-CORE: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art
```

Global negative prompt:

```text
flat anime, photorealistic photo, plastic 3D render, generic medieval tavern, modern clothing, modern technology, blurry hands, malformed hands, unreadable focal object, extra fingers, random text, watermark, logo, speech bubbles baked into image
```

### P00-E01-S001 - Your Name Is Written In Light

Layout: LAYOUT-FULL
Purpose: Establish civic identity as sacred surveillance.
Reader beat: awe first, unease underneath.
Hook function: The audience understands that bureaucracy is mystical power.

Panels:

- P00-E01-S001-P01
  File: episodes/p00/e01/panels/p00_e01_s001_p01.png
  Layout ID: LAYOUT-FULL
  Target frame: full vertical swipe screen
  Aspect ratio: 9:16
  Composition rule: vertical full-screen composition, small citizen silhouette in lower third, vast luminous ledger lines rising above, strong top-to-bottom depth
  Safe text area: upper third, soft dark-blue negative space between streams of light
  Characters: anonymous citizen silhouette only
  Location: LOC-CYRITIUM, abstract civic registration chamber
  Props: PROP-CELESTIAL-LEDGER as projected light
  Continuity locks: sacred bureaucracy, white marble, gold inlay, blue-white ledger light
  Prompt: STYLE-CORE. A vertical 9:16 mobile webtoon panel showing an anonymous citizen silhouette standing in a monumental white-marble imperial registration chamber, their face mostly unseen, while enormous luminous ledger lines and delicate golden script rise above them like stained glass made of light. Sacred bureaucracy atmosphere, white marble floor, gold inlay, blue-white magical ledger glow, elegant imperial geometry, beautiful but intimidating, cinematic low-angle composition, strong negative space in upper third for narration, no readable real text.
  Negative prompt: global negative prompt.

### P00-E01-S002 - Faith And Receipts

Layout: LAYOUT-TWO-STACKED
Purpose: Show that the Empire merges religion, auditing, and legitimacy.
Reader beat: the system is precise, ceremonial, and everywhere.
Hook function: Introduces "faith and receipts" visually.

Panels:

- P00-E01-S002-P01
  File: episodes/p00/e01/panels/p00_e01_s002_p01.png
  Layout ID: LAYOUT-TWO-STACKED
  Target frame: top half of vertical screen
  Aspect ratio: 16:7
  Composition rule: wide horizontal panel, robed auditors at a long marble table, one strong focal seal action
  Safe text area: upper-left dark architectural shadow
  Characters: anonymous House Mccord auditors
  Location: LOC-LEDGER-HALL
  Props: PROP-CELESTIAL-LEDGER, PROP-MINISTRY-SEAL
  Continuity locks: ceremonial accounting, official seal, warm gold light, cool ledger glow
  Prompt: STYLE-CORE. Wide horizontal 16:7 cinematic panel for the top half of a mobile screen. Robed imperial auditors sit at a long white-marble table beneath golden arches, recording crystal movement in huge ledgers. One auditor presses an ornate ministry seal into warm red wax, making the seal action the focal point. Blue crystal lamps glow softly, gold light cuts across parchment, sacred administrative ritual, no readable real text, clear composition readable at small size.
  Negative prompt: global negative prompt.

- P00-E01-S002-P02
  File: episodes/p00/e01/panels/p00_e01_s002_p02.png
  Layout ID: LAYOUT-TWO-STACKED
  Target frame: bottom half of vertical screen
  Aspect ratio: 16:7
  Composition rule: wide horizontal panel, rows of tagged crystals and clerks checking ledgers, visual rhythm of order
  Safe text area: lower-right darker floor area
  Characters: anonymous ministry clerks
  Location: LOC-CALIBRATION-HALL
  Props: PROP-TIER3-FESTIVAL-CRYSTAL, PROP-MINISTRY-SEAL
  Continuity locks: verification process, crystal inventory tags, clean official procedure
  Prompt: STYLE-CORE. Wide horizontal 16:7 cinematic panel for the bottom half of a vertical mobile screen. Rows of blue-white aether crystals sit on small gold-edged pedestals with official tags, while ministry clerks in refined white and gold uniforms compare inventory ledgers beside them. The room is orderly and ceremonial, polished stone, brass rails, cool crystal glow, warm sun shafts, everything aligned with almost unsettling precision, no readable real text.
  Negative prompt: global negative prompt.

### P00-E01-S003 - Cyritium Accounts

Layout: LAYOUT-FULL
Purpose: Establish the city as the capital of holy accounting.
Reader beat: the setting opens up.
Hook function: Cyritium becomes a character.

Panels:

- P00-E01-S003-P01
  File: episodes/p00/e01/panels/p00_e01_s003_p01.png
  Layout ID: LAYOUT-FULL
  Target frame: full vertical swipe screen
  Aspect ratio: 9:16
  Composition rule: grand vertical city establishing shot, High Spire in upper center, streets and bridges leading the eye upward
  Safe text area: top-left sky glow or lower dark foreground
  Characters: tiny citizen figures only
  Location: LOC-CYRITIUM
  Props: city-scale crystal infrastructure
  Continuity locks: white stone city, gold seals, festival preparation, blue crystal light
  Prompt: STYLE-CORE. Vertical 9:16 establishing shot of Cyritium, a luminous imperial capital of white stone, gold bridges, crystal-lit avenues, ceremonial banners, and a distant High Spire rising through warm morning haze. The city feels orderly and sacred, more administrative cathedral than ordinary city, with tiny citizens moving along clean processional streets. Blue crystal infrastructure glows from walls and bridge sconces, gold sunlight catches polished marble, cinematic depth, mobile-readable composition.
  Negative prompt: global negative prompt.

### P00-E01-S004 - The Seal Says Holy

Layout: LAYOUT-WIDE-TOP-TWO-BOTTOM
Purpose: Turn the Empire's repeated authorizations into visual rhythm.
Reader beat: the system stamps reality into truth.
Hook function: Establishes that official labels carry religious force.

Panels:

- P00-E01-S004-P01
  File: episodes/p00/e01/panels/p00_e01_s004_p01.png
  Layout ID: LAYOUT-WIDE-TOP-TWO-BOTTOM
  Target frame: top wide panel
  Aspect ratio: 16:8
  Composition rule: wide procedural hall, officials moving documents and crystals through checkpoints
  Safe text area: upper-right architecture shadow
  Characters: anonymous officials, guards, witnesses
  Location: LOC-CYRITIUM, ministry verification hall
  Props: PROP-TIER3-FESTIVAL-CRYSTAL, PROP-MINISTRY-SEAL
  Continuity locks: official checkpoints, gold-white ministry space, civic ritual
  Prompt: STYLE-CORE. Wide horizontal 16:8 panel designed for the top half of a vertical screen. A grand ministry verification hall where officials move documents, sealed boxes, and tagged blue crystals through elegant checkpoints. White marble counters, gold railings, blue crystal sconces, robed witnesses, quiet procedural choreography. The scene should feel calm, lawful, and intimidating, no readable real text, strong horizontal flow.
  Negative prompt: global negative prompt.

- P00-E01-S004-P02
  File: episodes/p00/e01/panels/p00_e01_s004_p02.png
  Layout ID: LAYOUT-WIDE-TOP-TWO-BOTTOM
  Target frame: bottom-left compact panel
  Aspect ratio: 8:7
  Composition rule: close-up object panel, seal pressing wax, strong diagonal hand and stamp
  Safe text area: none; object-only beat
  Characters: anonymous official hand only
  Location: ministry desk surface
  Props: PROP-MINISTRY-SEAL
  Continuity locks: gold seal, red wax, ivory document, official ritual
  Prompt: STYLE-CORE. Compact 8:7 close-up panel of an ornate gold ministry seal being pressed into dark red wax on ivory parchment. Only the official's gloved hand and the seal are visible. The wax glows in warm light, the parchment has elegant border lines but no readable text, shallow depth of field, tactile material detail, dramatic evidence-shot composition.
  Negative prompt: global negative prompt.

- P00-E01-S004-P03
  File: episodes/p00/e01/panels/p00_e01_s004_p03.png
  Layout ID: LAYOUT-WIDE-TOP-TWO-BOTTOM
  Target frame: bottom-right compact panel
  Aspect ratio: 8:7
  Composition rule: close-up object panel, tagged blue crystal being inspected by a crystal quill or instrument
  Safe text area: none; object-only beat
  Characters: anonymous hand only
  Location: ministry inspection table
  Props: PROP-TIER3-FESTIVAL-CRYSTAL
  Continuity locks: tier-three festival crystal, official tag, blue-white glow
  Prompt: STYLE-CORE. Compact 8:7 close-up panel of a blue-white tier-three festival crystal on a small gold pedestal, an official inventory tag attached with a thin cord, being inspected by a delicate gold-and-crystal instrument. White marble table, cool inner glow, warm rim light, sacred scientific precision, no readable real text, crisp focal detail.
  Negative prompt: global negative prompt.

### P00-E01-S005 - The Celestial Ledger

Layout: LAYOUT-FULL
Purpose: Present the Ledger as altar, archive, and machine of power.
Reader beat: the source of truth is ancient and holy.
Hook function: Makes the coming discrepancy feel impossible.

Panels:

- P00-E01-S005-P01
  File: episodes/p00/e01/panels/p00_e01_s005_p01.png
  Layout ID: LAYOUT-FULL
  Target frame: full vertical swipe screen
  Aspect ratio: 9:16
  Composition rule: vertical altar-like ledger composition, massive open book in lower half, crystal and spire geometry above
  Safe text area: upper-left or top-center glow
  Characters: small robed attendants only if needed
  Location: LOC-LEDGER-HALL
  Props: PROP-CELESTIAL-LEDGER
  Continuity locks: sacred ledger, enormous scale, white marble, gold, blue crystal
  Prompt: STYLE-CORE. Vertical 9:16 panel of the Celestial Ledger displayed like a holy altar beneath the High Spire. A massive ancient ledger lies open on a white marble plinth with gold hardware, surrounded by symmetrical statues, blue crystal light, and sunburst geometry. Tiny robed attendants stand at the edges to show scale. The pages are full of delicate column-like marks but no readable real text. Reverent, monumental, quiet, impossible to doubt.
  Negative prompt: global negative prompt.

### P00-E01-S006 - Ascension Week

Layout: LAYOUT-WIDE-TOP-TWO-BOTTOM
Purpose: Show the city operating perfectly before the contradiction.
Reader beat: a living machine at festival peak.
Hook function: Establishes stakes and deadline.

Panels:

- P00-E01-S006-P01
  File: episodes/p00/e01/panels/p00_e01_s006_p01.png
  Layout ID: LAYOUT-WIDE-TOP-TWO-BOTTOM
  Target frame: top wide panel
  Aspect ratio: 16:8
  Composition rule: wide city festival preparation shot, silk bridges and crystal sconces visible
  Safe text area: upper sky or lower-left shadow
  Characters: citizens and workers as small figures
  Location: LOC-CYRITIUM
  Props: festival decorations, crystal sconces
  Continuity locks: Ascension Week, white silk, gold civic order, warm hum
  Prompt: STYLE-CORE. Wide horizontal 16:8 panel for top half of mobile screen. Cyritium during Ascension Week: white silk draped over bridges, workers aligning blue crystal sconces along a processional avenue, gold banners, polished white stone, morning light, distant High Spire. The city feels beautiful and flawlessly organized, with small figures moving in disciplined festival preparation. No modern elements.
  Negative prompt: global negative prompt.

- P00-E01-S006-P02
  File: episodes/p00/e01/panels/p00_e01_s006_p02.png
  Layout ID: LAYOUT-WIDE-TOP-TWO-BOTTOM
  Target frame: bottom-left compact panel
  Aspect ratio: 8:7
  Composition rule: close-up of a festival crystal being assigned to a route map
  Safe text area: none
  Characters: anonymous clerk hand only
  Location: logistics desk
  Props: PROP-TIER3-FESTIVAL-CRYSTAL, route map
  Continuity locks: official assignment, festival infrastructure, no readable real text
  Prompt: STYLE-CORE. Compact 8:7 evidence-style panel. A clerk's hand places a tagged blue festival crystal beside an elegant route map of the processional path, with gold pins and thin blue lines marking assigned sconces. Ivory paper, brass tools, warm light, cool crystal glow. The map should look detailed but contain no readable real text.
  Negative prompt: global negative prompt.

- P00-E01-S006-P03
  File: episodes/p00/e01/panels/p00_e01_s006_p03.png
  Layout ID: LAYOUT-WIDE-TOP-TWO-BOTTOM
  Target frame: bottom-right compact panel
  Aspect ratio: 8:7
  Composition rule: close-up of hands tying white silk near a glowing crystal sconce
  Safe text area: none
  Characters: worker hands only
  Location: bridge or processional street
  Props: white silk, crystal sconce
  Continuity locks: festival preparation, tactile material detail, warm/cool light contrast
  Prompt: STYLE-CORE. Compact 8:7 close-up panel of worker hands tying white silk around a gold bridge rail beside a blue crystal sconce. The silk catches warm sunlight while the crystal casts cool glow. Polished white stone background, ceremonial preparation, tactile fabric and metal detail, no faces needed.
  Negative prompt: global negative prompt.

### P00-E01-S007 - The Machine At Its Peak

Layout: LAYOUT-TWO-STACKED
Purpose: Contrast civic perfection with inventory precision.
Reader beat: everything is too orderly to fail.
Hook function: Sets up the missing crystals as a system-level impossibility.

Panels:

- P00-E01-S007-P01
  File: episodes/p00/e01/panels/p00_e01_s007_p01.png
  Layout ID: LAYOUT-TWO-STACKED
  Target frame: top half of vertical screen
  Aspect ratio: 16:7
  Composition rule: wide infrastructure shot, warm city walls glowing with crystal conduits
  Safe text area: upper-left shadow
  Characters: tiny citizens only
  Location: LOC-CYRITIUM
  Props: crystal conduits, radiant broadcast fixtures
  Continuity locks: warm hum in walls, city as machine
  Prompt: STYLE-CORE. Wide horizontal 16:7 panel. Interior-exterior cutaway feeling of Cyritium's walls and streets humming with warm blue-gold crystal conduits, citizens moving calmly through a clean processional avenue. The architecture feels like a sacred machine, polished stone and gold veins, soft radiant broadcast light, calm and satisfied mood, no readable text.
  Negative prompt: global negative prompt.

- P00-E01-S007-P02
  File: episodes/p00/e01/panels/p00_e01_s007_p02.png
  Layout ID: LAYOUT-TWO-STACKED
  Target frame: bottom half of vertical screen
  Aspect ratio: 16:7
  Composition rule: wide shot of perfect rows of forty-six tagged festival crystals, or enough rows to imply forty-six
  Safe text area: lower-right marble floor
  Characters: none or distant officials
  Location: LOC-CALIBRATION-HALL
  Props: PROP-TIER3-FESTIVAL-CRYSTAL
  Continuity locks: official inventory, perfect rows, ceremonial stock
  Prompt: STYLE-CORE. Wide horizontal 16:7 panel showing perfectly ordered rows of blue-white tier-three festival crystals on individual gold pedestals in a formal calibration hall. Each crystal has a small official tag, aligned with obsessive precision. White marble, gold rails, cool glow, warm overhead light, distant officials blurred in background. The image should imply a complete official inventory without relying on exact count or readable text.
  Negative prompt: global negative prompt.

### P00-E01-S008 - The Missing 46

Layout: LAYOUT-DOCUMENT-INSERT
Purpose: Reveal the campaign-wide contradiction.
Reader beat: the beautiful system quietly fails.
Hook function: End on the Missing 46.

Panels:

- P00-E01-S008-P01
  File: episodes/p00/e01/panels/p00_e01_s008_p01.png
  Layout ID: LAYOUT-DOCUMENT-INSERT
  Target frame: full vertical swipe screen, document insert
  Aspect ratio: 9:16
  Composition rule: vertical close-up of ledger page with one visually emphasized missing block or empty row cluster; exact text not required
  Safe text area: upper third or bottom margin for final narration
  Characters: none
  Location: LOC-LEDGER-HALL, document close-up
  Props: PROP-CELESTIAL-LEDGER, PROP-MINISTRY-SEAL
  Continuity locks: sacred ledger page, absence as focal point, quiet clerical horror
  Prompt: STYLE-CORE. Vertical 9:16 document-focused panel. Close-up of a sacred ledger page on ivory paper with gold-edged columns, official seals, and delicate handwritten marks suggested but not readable. In the middle of the page is a subtle but unmistakable absence: a blank cluster of lines, missing entries, or pale ghostlike spaces where records should be. A gold ministry seal sits nearby, blue crystal light reflects on the paper, quiet clerical horror, elegant negative space for final narration, no readable real text.
  Negative prompt: global negative prompt.

#### Copy-Paste Image Prompts

Use these blocks directly in the image generator. Save the chosen result using the `File:` path shown in the matching structured panel entry above.

##### COPY PROMPT - P00-E01-S001-P01

```text
Create a vertical 9:16 mobile webtoon panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: An anonymous citizen silhouette stands in a monumental white-marble imperial registration chamber. Their face is mostly unseen. Enormous luminous ledger lines and delicate golden script rise above them like stained glass made of light.

Composition: small citizen silhouette in the lower third, vast glowing ledger architecture above, cinematic low angle, strong top-to-bottom depth. Leave soft dark-blue negative space in the upper third for narration.

Must include: sacred bureaucracy atmosphere, white marble floor, gold inlay, blue-white magical ledger glow, elegant imperial geometry, beautiful but intimidating mood.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern clothing, modern technology, malformed hands.
```

##### COPY PROMPT - P00-E01-S002-P01

```text
Create a wide horizontal 16:7 webtoon panel for the top half of a vertical mobile screen.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Robed imperial auditors sit at a long white-marble table beneath golden arches, recording crystal movement in huge ledgers. One auditor presses an ornate ministry seal into warm red wax.

Composition: the seal-pressing action is the focal point, with auditors and ledgers forming a ceremonial rhythm across the frame. Leave upper-left architectural shadow for narration.

Must include: blue crystal lamps, gold light across parchment, sacred administrative ritual, official seal, white marble, restrained holy atmosphere.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern clothing, modern technology, malformed hands.
```

##### COPY PROMPT - P00-E01-S002-P02

```text
Create a wide horizontal 16:7 webtoon panel for the bottom half of a vertical mobile screen.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Rows of blue-white aether crystals sit on small gold-edged pedestals with official tags, while ministry clerks in refined white and gold uniforms compare inventory ledgers beside them.

Composition: orderly rows create a visual rhythm of precision; clerks remain secondary. Leave darker marble floor space at lower-right for possible text.

Must include: formal calibration hall, polished stone, brass rails, cool crystal glow, warm sun shafts, obsessive alignment, clean official procedure.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern clothing, modern technology, malformed hands.
```

##### COPY PROMPT - P00-E01-S003-P01

```text
Create a vertical 9:16 mobile webtoon establishing shot.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Cyritium, a luminous imperial capital of white stone, gold bridges, crystal-lit avenues, ceremonial banners, and a distant High Spire rising through warm morning haze.

Composition: grand vertical city view, High Spire in the upper center, streets and bridges leading the eye upward, tiny citizens moving through clean processional streets. Leave usable negative space in the sky glow or lower dark foreground.

Must include: blue crystal infrastructure glowing from walls and bridge sconces, gold sunlight on polished marble, sacred administrative grandeur, orderly city atmosphere.

Avoid: modern buildings, readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, generic medieval tavern.
```

##### COPY PROMPT - P00-E01-S004-P01

```text
Create a wide horizontal 16:8 webtoon panel designed for the top half of a vertical mobile screen.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: A grand ministry verification hall where officials move documents, sealed boxes, and tagged blue crystals through elegant checkpoints.

Composition: strong horizontal flow through the hall; white marble counters and gold railings guide the eye. Leave upper-right architectural shadow for narration.

Must include: robed witnesses, blue crystal sconces, quiet procedural choreography, lawful intimidating atmosphere, white and gold ministry design.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern clothing, modern technology.
```

##### COPY PROMPT - P00-E01-S004-P02

```text
Create a compact 8:7 close-up webtoon panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: An ornate gold ministry seal is pressed into dark red wax on ivory parchment. Only the official's gloved hand and the seal are visible.

Composition: dramatic evidence-shot close-up, strong diagonal hand and stamp, shallow depth of field, object-only beat.

Must include: glowing red wax, ivory document, elegant border lines with no readable text, tactile material detail, official ritual.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, malformed hands, extra fingers.
```

##### COPY PROMPT - P00-E01-S004-P03

```text
Create a compact 8:7 close-up webtoon panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: A blue-white tier-three festival crystal rests on a small gold pedestal with an official tag attached by a thin cord. A delicate gold-and-crystal instrument inspects it.

Composition: object-focused close-up, one clear subject, crisp focal detail, no tiny readable text.

Must include: white marble inspection table, cool inner crystal glow, warm rim light, sacred scientific precision, official inventory feeling.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, malformed hands.
```

##### COPY PROMPT - P00-E01-S005-P01

```text
Create a vertical 9:16 mobile webtoon panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: The Celestial Ledger is displayed like a holy altar beneath the High Spire. A massive ancient ledger lies open on a white marble plinth with gold hardware, surrounded by symmetrical statues, blue crystal light, and sunburst geometry.

Composition: altar-like vertical composition, massive open book in lower half, crystal and spire geometry above. Tiny robed attendants at the edges may show scale. Leave upper-left or top-center glow for narration.

Must include: sacred ledger, enormous scale, white marble, gold, blue crystal, reverent monumental stillness. Pages may contain delicate column-like marks but no readable real text.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern technology.
```

##### COPY PROMPT - P00-E01-S006-P01

```text
Create a wide horizontal 16:8 webtoon panel for the top half of a vertical mobile screen.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Cyritium during Ascension Week. White silk drapes over bridges, workers align blue crystal sconces along a processional avenue, gold banners hang from polished white stone, and the distant High Spire rises in morning light.

Composition: wide festival preparation shot, city grandeur above practical labor, strong horizontal movement. Leave upper sky or lower-left shadow for narration.

Must include: disciplined festival preparation, white silk, gold civic order, crystal sconces, warm sunlight, cool blue glow.

Avoid: modern city elements, readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render.
```

##### COPY PROMPT - P00-E01-S006-P02

```text
Create a compact 8:7 evidence-style webtoon panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: A clerk's hand places a tagged blue festival crystal beside an elegant route map of a processional path, with gold pins and thin blue lines marking assigned sconces.

Composition: close-up object panel, crystal and map as the clear focal point, no text area needed.

Must include: ivory paper, brass tools, warm light, cool crystal glow, detailed map-like design without readable real text.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, malformed hands, extra fingers.
```

##### COPY PROMPT - P00-E01-S006-P03

```text
Create a compact 8:7 close-up webtoon panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Worker hands tie white silk around a gold bridge rail beside a blue crystal sconce.

Composition: tactile close-up, hands and fabric as the focal point, warm sunlight on silk contrasted with cool crystal glow.

Must include: polished white stone background, ceremonial preparation, detailed fabric and metal, blue crystal sconce, no faces needed.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, malformed hands, extra fingers.
```

##### COPY PROMPT - P00-E01-S007-P01

```text
Create a wide horizontal 16:7 webtoon panel for the top half of a vertical mobile screen.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Cyritium's walls and streets hum with warm blue-gold crystal conduits. Citizens move calmly through a clean processional avenue as radiant broadcast fixtures glow softly.

Composition: wide infrastructure shot, the city should feel like a sacred machine, polished stone and gold veins guiding the eye. Leave upper-left shadow for narration.

Must include: blue-gold conduits, clean civic architecture, calm satisfied mood, warm hum implied through light.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern technology.
```

##### COPY PROMPT - P00-E01-S007-P02

```text
Create a wide horizontal 16:7 webtoon panel for the bottom half of a vertical mobile screen.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Perfectly ordered rows of blue-white tier-three festival crystals sit on individual gold pedestals in a formal calibration hall. Each crystal has a small official tag.

Composition: wide shot with obsessive alignment and visual rhythm. The image should imply a complete official inventory without relying on an exact count. Leave lower-right marble floor space for possible text.

Must include: white marble, gold rails, cool crystal glow, warm overhead light, distant blurred officials, ceremonial stock.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render.
```

##### COPY PROMPT - P00-E01-S008-P01

```text
Create a vertical 9:16 mobile webtoon document-insert panel.

Style: premium painterly cinematic fantasy animation, textured brushwork, sculpted lighting, elegant exaggerated realism, rich material detail, dramatic composition, warm gold light and cool blue crystal glow, high-end animated series concept art.

Scene: Close-up of a sacred ledger page on ivory paper with gold-edged columns, official seals, and delicate handwritten marks suggested but not readable. In the middle of the page is a subtle but unmistakable absence: a blank cluster of lines, missing entries, or pale ghostlike spaces where records should be.

Composition: vertical document-focused shot, absence as the focal point, quiet clerical horror. Leave upper third or bottom margin for final narration.

Must include: gold ministry seal nearby, blue crystal reflection on paper, elegant negative space, sacred administrative mood.

Avoid: readable real text, speech bubbles, watermark, logo, flat anime, photorealistic photo, plastic 3D render, modern documents.
```

## 17 Reader Interface Plan

Reader model: swipe-based, screen-first webtoon reader.

Design intent:

- Mobile-first.
- One screen at a time.
- Swipe left/right on mobile.
- Arrow keys and scroll wheel support on desktop.
- Screens can contain one or more panels.
- Panel layout adapts responsively while preserving intended composition.
- Optional overlay text should be separate from the image, not baked into generated art.

Interface visual direction:

- Inspired by elegant geometric decoration in premium painterly animated fantasy: angular art-deco linework, thin gold framing, crystal diamond motifs, symmetrical ornamental brackets, and luminous blue accent points.
- The UI should feel like an imperial crystal ledger interface, not a generic webtoon app.
- Decoration should be precise and restrained: thin lines, corner brackets, small glyphs, subtle dividers, and softly glowing nodes.
- Default narration should use `TEXT-DECO`: elegant serif text placed in the planned safe area, supported by thin gold geometric framing and a small crystal marker, without a heavy full box.
- Use larger crystal-glass cards only for special moments: major narration beats, interludes, evidence acquired, or busy backgrounds where text needs support.
- Dialogue should use a smaller refined subtitle treatment: dark translucent strip, thin gold line, minimal crystal accent.
- Evidence should use `TEXT-DOCUMENT`: parchment, official seals, red/blue annotation accents, and sacred-document styling.
- Default behavior prioritizes reading: text is visible by default. Tap center toggles focus mode, hiding UI/text to inspect artwork.
- Avoid bulky cards on every screen, neon cyberpunk UI, messy detective corkboards, generic fantasy scroll frames, and heavy decorative borders that compete with the panel art.

Text modes:

```text
TEXT-DECO: default narration, thin gold geometric framing, small crystal marker, no heavy box.
TEXT-SUBTITLE: dialogue, compact refined strip, dark translucent background, thin gold line.
TEXT-GLASS: rare dramatic narration card, crystal-glass treatment.
TEXT-DOCUMENT: evidence, notes, ledgers, official documents.
TEXT-INTERLUDE: text-focused breathing page between major visual beats.
TEXT-NONE: silent artwork screen.
```

Screen manifest concept:

```json
{
  "arc": "P00",
  "episode": "E01",
  "title": "The Ledger Does Not Lie",
  "screens": [
    {
      "id": "P00-E01-S001",
      "layout": "LAYOUT-FULL",
      "panels": [
        {
          "id": "P00-E01-S001-P01",
          "file": "episodes/p00/e01/panels/p00_e01_s001_p01.png"
        }
      ]
    }
  ]
}
```

## 18 Intake Log

### P00 + A01 Intake - Current Notes

New canon:

- Cyriath's sacred bureaucracy is the central pressure system of the campaign.
- Forty-six tier-three festival crystals are missing from the ledger.
- Leo receives two hooks: Felda's covert note and Bren's request about Eren Voss.
- Vesper is assigned to observe and cosign the calibration of forty-six tier-three festival crystals.
- Orvast notices the final crystal sounds different, then signs the compliance sheet anyway.
- Eren Voss is found dead in a rail maintenance tunnel.
- Ministry cleanup and case closure happen suspiciously quickly.
- Evidence includes torn manifests, a Sovereign Scars pin, a cracked tier-one crystal, a clerking kit, Eren's personal ledger, a Talos-to-Aurelian tool transfer notice, and `CL-A-46-D`.
- House Aurelian is tied to House Vermont's Vermont Cut transfer.
- The next major access problem is the Merchant Review.

Useful webtoon material:

- "Your name is written in light."
- The Empire runs on faith and receipts.
- Felda passing the saucer note.
- Orvast's tiny pause at the final crystal.
- Vesper realizing Lord Aurelian is reading her thoughts while she reads his.
- The cleaner's personal ledger noticing enchantment magic.
- Evidence hidden in the maintenance panel.
- The scratched code `CL-A-46-D`.

Roadmap impact:

- The opening world hook should become P00, the prologue/session 0.
- D&D Session 1 should become A01, the first full session arc.
- A01 should end by shifting from tunnel investigation to Merchant Review access.

Do not adapt yet:

- Exact lockpicking procedure.
- Full wording of every legal document.
- Repeated search logistics unless they create tension.
- Any table-level mechanics that do not affect character, clue, or pacing.

## 19 Production Log

### 2026-05-16

- Created the single master document structure.
- Added campaign/prologue/arc distinction: The Missing 46 is the campaign-wide mystery; session 0 hook is P00; each D&D session after that becomes one arc.
- Added screen-first reader model and layout-aware prompt requirements.
- Added initial P00 and A01 roadmap from current notes.
- Added first-pass style, character, location, and prop locks.
- Scripted `P00-E01 - The Ledger Does Not Lie` as eight swipe screens.
- Drafted the `P00-E01` panel prompt pack with layout-aware aspect ratios and exact filename mappings.
- Added copy-paste image prompts for all `P00-E01` panels.
- Added reader UI direction for geometric art-deco caption framing, inspired by premium animated fantasy decoration.
- Created a static reader mockup: `reader-mockup.html`, `reader-mockup.css`, and `reader-mockup.js`.
