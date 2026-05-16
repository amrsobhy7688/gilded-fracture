# Gilded Fracture - Webtoon

This folder is the local working home for turning the D&D campaign **Gilded Fracture** into a swipe-based webtoon reader.

The big idea is to keep the creative system powerful but light: one master planning file, one source archive, episode folders for chosen artwork, and a reader mockup that can grow into the real interface.

## Project Goal

Create a cinematic webtoon adaptation of the campaign with:

- a consistent Arcane-inspired painterly fantasy style
- locked character, location, prop, and visual continuity
- a low-overhead update process as new D&D sessions happen
- externally generated panel artwork that is easy to import
- a responsive reader designed for phone, tablet, and HD desktop viewing

## Core Story Structure

- Campaign title: **Gilded Fracture**
- Campaign-wide mystery: **The Missing 46**
- Prologue / session 0 hook: `P00`
- Arc 1: D&D Session 1
- Rule: one D&D session becomes one webtoon arc.
- Episodes divide each arc into readable dramatic chunks.
- Each episode should end with a hook, cliffhanger, contradiction, danger, or reveal.

The Missing 46 is the campaign-level mystery, not the title of Arc 1.

## Main Files

- `Gilded Fracture - Webtoon Master.md`
  - The source of truth for the adaptation plan, style rules, prompt structure, canon locks, layout rules, and prologue script.

- `reader-mockup.html`
  - The current reader interface mockup. It opens directly in the browser; no local server is needed.

- `reader-mockup.css`
  - Visual styling and responsive layout behavior for the reader mockup.

- `reader-mockup.js`
  - Reader interactions: screen navigation, progress, focus mode, and evidence drawer behavior.

- `source/`
  - Local archive of exported campaign/session material and Drive document shortcuts.

- `assets/`
  - Mockup images, copied style references, and future character/location/prop references.

- `episodes/`
  - Future home for chosen final panel images, organized by arc/prologue and episode.

## Current Folder Map

```text
assets/
  characters/
  locations/
  mockup/
    mock-ledger.png
    mock-portrait.png
    mock-quill.png
  props/
  reference/
    drive-style/

episodes/
  p00/
    e01/
      panels/
  a01/
    e01/
      panels/

source/
  session-notes/
    gilded-fracture-session-notes.txt
  webtoon-drive/
    episode_00_prologue.md
    gilded_fracture_webtoon_plan.md
  google-doc-shortcuts/
```

## Source Archive Status

The main session notes were exported locally:

```text
source/session-notes/gilded-fracture-session-notes.txt
```

The webtoon planning docs that could be exported cleanly are saved here:

```text
source/webtoon-drive/
```

Related Google Docs that required authenticated access for direct export are preserved as `.gdoc` shortcuts here:

```text
source/google-doc-shortcuts/
```

The Drive style reference images were copied locally:

```text
assets/reference/drive-style/
```

There are 19 PNG style reference images in that folder.

## ID and File Naming Rules

Every panel gets one stable ID and one matching filename.

Panel ID format:

```text
A##-E##-S###-P##
```

Prologue IDs use `P00`:

```text
P00-E01-S001-P01
```

Filename format:

```text
p00_e01_s001_p01.png
a01_e01_s001_p01.png
```

Example mapping:

```text
Panel ID: P00-E01-S001-P01
File: episodes/p00/e01/panels/p00_e01_s001_p01.png
```

There is no separate `selected`, `generated`, `v1`, or `final` folder by default. The generation and pre-filtering happen outside the project. Only the chosen panel image is placed into the episode `panels/` folder.

## Creative Direction

The visual direction is inspired by Arcane-style cinematic fantasy animation:

- painterly textured brushwork
- sculpted lighting
- elegant exaggerated realism
- warm gold light contrasted with cool blue crystal glow
- sacred bureaucracy, ledgers, seals, marble, gold inlay, ritual geometry, crystal instruments
- dramatic compositions with clear focal points
- no baked-in speech bubbles or random generated text inside images

The reader UI should feel like part of the world: art deco geometry, thin gold/crystal lines, quiet luxury, luminous details, and minimal obstruction of the artwork.

## Prompt Workflow

Prompts live in the master file, not inside each episode folder.

Each panel prompt should include:

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

Important rule: generate each image for the layout slot it will occupy. A portrait full-screen panel, a stacked horizontal panel, and a desktop companion panel should not all use the same generic composition prompt.

## Reader Design Decisions

The reader is a swipe-style interface, not an endless vertical scroll.

Default reading mode:

- artwork is visible
- captions/text are visible by default
- navigation and episode status are visible
- evidence can be opened from the reader

Focus mode:

- tapping the artwork hides the UI and text
- this lets the reader inspect the artwork without overlays
- tapping again restores the reading UI

Layout strategy:

- design for three deliberate target states: phone, tablet, and HD desktop
- at those target states, artwork should not be cropped
- in-between sizes can adapt or crop slightly if needed
- thin bezels separate images so multi-panel layouts do not become muddy
- avoid fake device frames or heavy card frames around the artwork

## Implemented So Far

- Local source archive created.
- Main session notes saved locally.
- Drive style reference images copied locally.
- Root folder structure created for assets and episodes.
- Master adaptation document created and expanded.
- Prologue/session 0 distinction corrected to `P00`.
- Arc 1 defined as Session 1.
- Panel ID and filename convention established.
- Prompt storage decision made: prompts live in the master file.
- Reader mockup created as an actual interactive interface.
- Reader supports multiple screens, navigation, progress, evidence drawer, captions, and focus mode.
- Reader layout has been adjusted toward phone/tablet/desktop target states with thin image bezels and no visible device frame.

## Not Implemented Yet

- Production data manifest for episodes and panels.
- Real generated panel artwork for `P00-E01`.
- Character lock sheets.
- Location lock sheets.
- Prop/evidence lock sheets.
- Final reader connected to real episode data.
- Episode selection dashboard.
- Save/read progress persistence.
- Full accessibility pass.
- Deployment or hosting.

## Recommended Next Steps

1. Finalize the reader mockup behavior for phone, tablet, and HD desktop.
2. Turn the prologue script in the master file into a clean panel manifest.
3. Generate the first batch of prologue artwork externally.
4. Put only chosen images into:

```text
episodes/p00/e01/panels/
```

5. Create character, location, and evidence lock sheets from the chosen prologue visuals.
6. Connect the reader to a simple data manifest instead of hard-coded mockup screens.
7. Build the episode dashboard after the reading experience feels right.
8. Repeat the intake process for Session 1 and convert it into Arc 1.

## Working Process for Future Sessions

When new D&D material arrives:

1. Update the source session notes.
2. Add a short intake entry to the master file.
3. Decide what becomes canon, what becomes a scene, and what stays archive-only.
4. Convert the session into one arc.
5. Divide the arc into episodes.
6. Break episodes into screens and panels.
7. Write prompts using locked style and continuity.
8. Generate panels externally.
9. Place chosen panels in the matching episode folder.
10. Update the reader manifest.

This keeps the project expandable without forcing every new session to create a mess of files.

## Opening the Mockup

Open this file in the browser:

```text
reader-mockup.html
```

Current local path:

```text
/Users/amrsobhy7688/Documents/Gilded Fracture - Webtoon/reader-mockup.html
```

