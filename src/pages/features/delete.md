---
layout: '@/layouts/PageLayout.astro'
title: Delete
description: Remove saved coordinate data when it is no longer needed.
activeHeaderLink: Features
---

[Back to all features](/features/)

# /delete

## What It Does

Remove a saved coordinate data from your server's stored data. You can use this to remove coordinates you no longer need.

## Syntax

```txt
/delete
```

## Fields

- Alias: associated name (alias) assigned to the saved coordinate you want to delete

## Example

<div class="not-prose rounded-md border border-[#3f4147] bg-[#313338] p-4 text-sm text-[#dbdee1]">
  <div class="mb-3 text-xs font-semibold uppercase text-[#b5bac1]"># coordinates</div>
  <div class="flex gap-3">
    <img
      class="h-10 w-10 shrink-0 rounded-full object-cover"
      src="https://preview.redd.it/the-new-discord-default-profile-pictures-v0-uqvmqo1cdj7f1.png?width=1024&amp;format=png&amp;auto=webp&amp;s=8cfc3d1836ac0b79e2ccabd65a9010da1eed29d7"
      alt="Average avatar"
    />
    <div>
      <div>
        <span class="font-semibold text-white">Trobbio</span>
        <span class="ml-1 text-xs text-[#949ba4]">18:48</span>
      </div>
      <div class="mt-1 rounded-md bg-[#2b2d31] px-3 py-2">/delete alias: Nether portal</div>
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
        <span class="ml-1 text-xs text-[#949ba4]">Today at 18:48</span>
      </div>
      <div class="mt-2 rounded-md border-l-4 border-[#57f287] bg-[#2b2d31] p-3">
        <div class="font-semibold text-white">"Nether portal" deleted</div>
      </div>
    </div>
  </div>
</div>

## Previous / Next

<nav class="not-prose mt-6 grid gap-3 sm:grid-cols-2" aria-label="Feature navigation">
  <a
    href="/features/register/"
    class="border-accent/25 hover:border-accent rounded-md border p-4 no-underline transition"
  >
    <span class="text-accent block text-xs font-semibold uppercase">Previous</span>
    <span class="block text-base font-semibold">/register</span>
  </a>
  <a
    href="/features/list/"
    class="border-accent/25 hover:border-accent rounded-md border p-4 text-right no-underline transition"
  >
    <span class="text-accent block text-xs font-semibold uppercase">Next</span>
    <span class="block text-base font-semibold">/list</span>
  </a>
</nav>
