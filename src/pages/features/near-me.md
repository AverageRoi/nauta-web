---
layout: '@/layouts/PageLayout.astro'
title: Near Me
description: Find the saved coordinates closest to a position.
activeHeaderLink: Features
---

[Back to all features](/features/)

# /near-me

## What It Does

Find the saved coordinates closest to a position. You can use this when you are somewhere in your Minecraft world and want to know which saved location is nearby. The locations can include other dimensions and you can personalize the block distance

## Syntax

```txt
/near-me
```

## Fields

- Coordinates: your current position in coordinates (X, Z or X, Y, Z)
- Dimension: Dimension you are currently in
- Target: (Optional) Any other dimension you want to include in the calculation
- Distance: (Optional) Block range to search coordinates from (500 by default)

## Example

<div class="not-prose rounded-md border border-[#3f4147] bg-[#313338] p-4 text-sm text-[#dbdee1]">
  <div class="mb-3 text-xs font-semibold uppercase text-[#b5bac1]"># coordinates</div>
  <div class="flex gap-3">
    <img
      class="h-10 w-10 shrink-0 rounded-full object-cover"
      src="https://preview.redd.it/the-new-discord-default-profile-pictures-v0-dd62486xej7f1.png?width=1024&format=png&auto=webp&s=834060ca1b6be81c4d32adfbfc7dcdbb7018cf32"
      alt="Melissa avatar"
    />
    <div>
      <div>
        <span class="font-semibold text-white">Melissa</span>
        <span class="ml-1 text-xs text-[#949ba4]">9:31</span>
      </div>
      <div class="mt-1 rounded-md bg-[#2b2d31] px-3 py-2">/near-me coordinates: 120, 64, -340 dimension: Overworld</div>
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
        <span class="ml-1 text-xs text-[#949ba4]">13:21</span>
      </div>
      <div class="mt-2 rounded-md border-l-4 border-[#57f287] bg-[#111214] p-5 shadow-sm">
        <div class="text-xl font-bold text-white">Nearby Coordinates</div>
        <div class="mt-4 text-lg text-white">
          Showing coordinates within <span class="font-bold">500 blocks</span> of your location
        </div>
        <div class="mt-5">
          <div class="text-lg font-bold text-white">Overworld</div>
          <div class="mt-2 text-lg font-bold text-white">Test1</div>
          <div class="mt-1 inline-block rounded-md bg-[#383a40] px-2 py-1 font-mono text-lg leading-none text-white">
            30, ?, 20
          </div>
        </div>
        <div class="mt-5 text-base font-semibold text-white">hoy a las 13:21</div>
      </div>
    </div>
  </div>
</div>

## Previous / Next

<nav class="not-prose mt-6 grid gap-3 sm:grid-cols-2" aria-label="Feature navigation">
  <span class="hidden sm:block"></span>
  <a
    href="/features/register/"
    class="border-accent/25 hover:border-accent rounded-md border p-4 text-right no-underline transition"
  >
    <span class="text-accent block text-xs font-semibold uppercase">Next</span>
    <span class="block text-base font-semibold">/register</span>
  </a>
</nav>
