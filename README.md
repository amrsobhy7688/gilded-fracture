# Gilded Fracture - Webtoon

A swipe-based webtoon reader adapting the **Gilded Fracture** D&D campaign into a cinematic, phone-first reading experience.

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
  — Source of truth for the adaptation plan, style rules, prompt structure, canon locks, layout rules, and prologue script.

- `reader-mockup.html`
  — The complete self-contained reader. All CSS and JS are inlined. Open directly in a browser or serve via the local preview server. This is what gets deployed.

- `vercel.json`
  — Deployment config. Rewrites `/` to `reader-mockup.html` and serves the directory as static files.

- `reader-mockup.css` / `reader-mockup.js`
  — Legacy separate files, no longer linked. The reader is self-contained in `reader-mockup.html`.

- `source/`
  — Local archive of exported campaign/session material and Drive document shortcuts.

- `assets/`
  — Mockup images, style references, and future character/location/prop references.

- `episodes/`
  — Future home for chosen final panel images, organized by arc and episode.

## Current Reader State

The reader (`reader-mockup.html`) is fully interactive with 20 screens of real prologue content for `P00-E01`:

- Splash screen
- 19 captioned panel screens covering the full prologue narration
- Swipe / arrow key / button navigation
- Focus mode (tap artwork to hide UI)
- Evidence drawer with artifact close-ups
- Episode jump menu
- Progress indicator

Panel images are currently sourced from `assets/reference/drive-style/` (AI-generated placeholders). Once final artwork is approved, images move to `episodes/p00/e01/panels/` and the reader is updated to point there.

## Deployment Pipeline

### Local Preview

A Node.js inline server is configured in `.claude/launch.json` and runs on port **8765**. It handles URL-encoded filenames (needed for the current image paths with spaces).

To start it from Claude Code: use the `reader` launch configuration. Then open `http://localhost:8765` in a browser.

Alternatively, open `reader-mockup.html` directly in the browser — it works without a server for most purposes.

### Publishing (GitHub → Vercel)

1. Commit changes to the local repo.
2. Push to GitHub (`main` branch).
3. Vercel picks up the push automatically and deploys within ~30 seconds.
4. `vercel.json` routes `/` → `reader-mockup.html` and serves everything else as static files.

No build step. No framework. Vercel treats the project root as the output directory.

## Current Folder Map

```text
assets/
  characters/
  locations/
  mockup/
  props/
  reference/
    drive-style/       ← current placeholder panel images (19 PNGs)

episodes/
  p00/
    e01/
      panels/          ← empty; will hold final chosen artwork
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

## ID and File Naming Rules

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
```

Example mapping:

```text
Panel ID: P00-E01-S001-P01
File: episodes/p00/e01/panels/p00_e01_s001_p01.png
```

Only the chosen final image for each panel goes into the `panels/` folder. Generation and pre-filtering happen outside the project.

## Creative Direction

Arcane-style cinematic fantasy:

- painterly textured brushwork, sculpted lighting
- warm gold contrasted with cool blue crystal glow
- sacred bureaucracy: ledgers, seals, marble, gold inlay, ritual geometry
- dramatic compositions with clear focal points
- no baked-in speech bubbles or random generated text inside images

The reader UI matches the world: thin gold lines, quiet luxury, minimal obstruction of the artwork.

## Prompt Workflow

Prompts live in the master file, not inside episode folders. Each panel prompt includes:

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

Generate each image for the layout slot it will occupy. Portrait full-screen panels need different composition framing than landscape or companion panels.

## Reader Design Decisions

Swipe-style interface, not endless scroll.

Default mode: artwork visible, captions visible, navigation visible, evidence accessible.

Focus mode: tap artwork to hide all UI; tap again to restore.

Layout targets: phone (primary), tablet, HD desktop. At those breakpoints artwork should not be cropped. In-between sizes may adapt or crop slightly.

## Implemented So Far

- Local source archive and folder structure.
- Master adaptation document with prologue script and prompt structure.
- Interactive reader with 20 screens of `P00-E01` prologue content.
- Navigation, progress indicator, focus mode, evidence drawer, episode jump menu.
- GitHub repo with Vercel auto-deploy on push to `main`.
- Local Node.js preview server configured in `.claude/launch.json`.

## Not Implemented Yet

- Final generated artwork for `P00-E01` (placeholder images currently in use).
- Reader connected to a data manifest instead of hard-coded screens.
- Character, location, and evidence lock sheets.
- Episode selection dashboard.
- Save/read progress persistence.
- Full accessibility pass.

## Recommended Next Steps

1. Approve and finalize placeholder images or generate real `P00-E01` artwork in portrait proportions.
2. Move chosen images to `episodes/p00/e01/panels/` and update image paths in the reader.
3. Create character, location, and evidence lock sheets from the chosen prologue visuals.
4. Connect the reader to a simple data manifest instead of hard-coded screens.
5. Build the episode dashboard after the reading experience is stable.
6. Repeat the intake process for Session 1 to create Arc 1.

## Working Process for Future Sessions

1. Update source session notes.
2. Add a short intake entry to the master file.
3. Decide what becomes canon, what becomes a scene, what stays archive-only.
4. Convert the session into one arc, divide into episodes, break into screens and panels.
5. Write prompts using locked style and continuity.
6. Generate panels externally and place chosen images in the episode `panels/` folder.
7. Update the reader (or data manifest when that exists).
8. Commit and push — Vercel deploys automatically.
