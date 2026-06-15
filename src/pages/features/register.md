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

- Coordinates: The coordinates of the location you want to save (X, Z or X, Y, Z)
- Alias: Associated name used to find the coordinates later
- Dimension: Dimension of the coordinates (Overworld, Nether, or End)

## Example

<div class="not-prose rounded-md border border-[#3f4147] bg-[#313338] p-4 text-sm text-[#dbdee1]">
  <div class="mb-3 text-xs font-semibold uppercase text-[#b5bac1]"># coordinates</div>
  <div class="flex gap-3">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5865f2] font-semibold text-white">P</div>
    <div>
      <div>
        <span class="font-semibold text-white">Pipo</span>
        <span class="ml-1 text-xs text-[#949ba4]">18:45</span>
      </div>
      <div class="mt-1 rounded-md bg-[#2b2d31] px-3 py-2">/register coordinates: 1230, 82, 863 dimension: Overworld alias: Iron Farm</div>
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
        <span class="ml-1 text-xs text-[#949ba4]">18:45</span>
      </div>
      <div class="mt-1 text-[#dbdee1]">Your coordinates have been registered!</div>
      <div class="mt-2 flex items-center gap-2 text-xs text-[#949ba4]">
        <span class="flex h-4 w-4 items-center justify-center rounded-full border border-[#949ba4] text-[10px] font-semibold leading-none">i</span>
        <span>Only you can see this</span>
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
