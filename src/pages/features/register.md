---
layout: '@/layouts/PageLayout.astro'
title: Register
description: Save a new coordinate so the server can find it later.
activeHeaderLink: Features
---

[Back to all features](/features/)

# /register

## What It Does

Save a new coordinate so the server can find it later. You can use this for bases, farms, portals, villages, meeting points, or any other useful Minecraft location.

## Syntax

```txt
/register
```

## Fields

- Alias: short name used to find the coordinate later
- X: X coordinate
- Y: Y coordinate
- Z: Z coordinate
- Dimension: world dimension, such as Overworld, Nether, or End
- Description: optional extra information about the location

## Example

<div class="not-prose rounded-md border border-[#3f4147] bg-[#313338] p-4 text-sm text-[#dbdee1]">
  <div class="mb-3 text-xs font-semibold uppercase text-[#b5bac1]"># coordinates</div>
  <div class="flex gap-3">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5865f2] font-semibold text-white">P</div>
    <div>
      <div>
        <span class="font-semibold text-white">Pipo</span>
        <span class="ml-1 text-xs text-[#949ba4]">Today at 18:45</span>
      </div>
      <div class="mt-1 rounded-md bg-[#2b2d31] px-3 py-2">/register alias: iron-farm x: 420 y: 72 z: -128 dimension: Overworld</div>
    </div>
  </div>

  <div class="mt-4 flex gap-3">
    <img
      class="h-10 w-10 shrink-0 rounded-full object-cover"
      src="https://cdn.discordapp.com/avatars/1515786853356277820/b2b885ed92e1845f6c3d893ff61509dc.webp?size=1024"
      alt="Nauta avatar"
    />
    <div class="min-w-0">
      <div>
        <span class="font-semibold text-white">Nauta</span>
        <span class="ml-1 rounded bg-[#5865f2] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">APP</span>
        <span class="ml-1 text-xs text-[#949ba4]">Today at 18:45</span>
      </div>
      <div class="mt-2 rounded-md border-l-4 border-[#57f287] bg-[#2b2d31] p-3">
        <div class="font-semibold text-white">Coordinate registered</div>
        <div class="mt-2 grid gap-2 sm:grid-cols-2">
          <div><span class="font-semibold text-[#b5bac1]">Alias</span><br />iron-farm</div>
          <div><span class="font-semibold text-[#b5bac1]">Dimension</span><br />Overworld</div>
          <div><span class="font-semibold text-[#b5bac1]">Coordinates</span><br />X: 420, Y: 72, Z: -128</div>
        </div>
      </div>
    </div>
  </div>
</div>


## Previous / Next

<nav class="not-prose mt-6 grid gap-3 sm:grid-cols-2" aria-label="Feature navigation">
  <a
    href="/features/near-me/"
    class="border-accent/25 hover:border-accent rounded-md border p-4 no-underline transition"
  >
    <span class="text-accent block text-xs font-semibold uppercase">Previous</span>
    <span class="block text-base font-semibold">/near-me</span>
  </a>
  <a
    href="/features/delete/"
    class="border-accent/25 hover:border-accent rounded-md border p-4 text-right no-underline transition"
  >
    <span class="text-accent block text-xs font-semibold uppercase">Next</span>
    <span class="block text-base font-semibold">/delete</span>
  </a>
</nav>
