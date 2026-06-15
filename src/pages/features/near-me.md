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
      <div class="mt-1 rounded-md bg-[#2b2d31] px-3 py-2">/near-me coordinates: 120 64, -340 dimension: Overworld</div>
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
        <span class="ml-1 rounded bg-[#5865f2] px-1 text-[10px] font-semibold text-white">BOT</span>
        <span class="ml-1 text-xs text-[#949ba4]">9:31</span>
      </div>
      <div class="mt-2 rounded-md border-l-4 border-[#57f287] bg-[#2b2d31] p-3">
        <div class="font-semibold text-white">Nearby Coordinates</div>
        <div class="font-semibold text-white">Showing coordinates within **500 blocks** of your location.</div>
        <div class="mt-2 grid gap-2">
          <div><span class="font-semibold text-[#b5bac1]">Mineshaft</span><br />X: 100, Y: 63, Z: -300</div>
          <div><span class="font-semibold text-[#b5bac1]">Village</span><br />X: 180, Y: 70, Z: -410</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Previous / Next

[Continue to /register](/features/register/)
