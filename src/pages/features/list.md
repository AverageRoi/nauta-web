---
layout: '@/layouts/PageLayout.astro'
title: List
description: Browse the coordinates saved for a Discord server.
activeHeaderLink: Features
---

[Back to all features](/features/)

# /list

## What It Does

Browse the coordinates saved for a Discord server. You can use this to quickly review stored locations without remembering each alias.

## Syntax

```txt
/list
```

## Fields

- Dimension: optional dimension filter
- Page: optional page number if the server has many saved coordinates
- Search: optional text filter for aliases or names

## Example

<div class="not-prose rounded-md border border-[#3f4147] bg-[#313338] p-4 text-sm text-[#dbdee1]">
  <div class="mb-3 text-xs font-semibold uppercase text-[#b5bac1]"># coordinates</div>
  <div class="flex gap-3">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5865f2] font-semibold text-white">P</div>
    <div>
      <div>
        <span class="font-semibold text-white">Pipo</span>
        <span class="ml-1 text-xs text-[#949ba4]">Today at 18:51</span>
      </div>
      <div class="mt-1 rounded-md bg-[#2b2d31] px-3 py-2">/list dimension: Overworld</div>
    </div>
  </div>

  <div class="mt-4 flex gap-3">
    <img
      class="h-10 w-10 shrink-0 rounded-full object-cover"
      src="https://cdn.discordapp.com/avatars/1515786853356277820/b2b885ed92e1845f6c3d893ff61509dc.webp?size=1024"
      alt="Nauta avatar"
    />
    <div class="min-w-0 flex-1">
      <div>
        <span class="font-semibold text-white">Nauta</span>
        <span class="ml-1 rounded bg-[#5865f2] px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">APP</span>
        <span class="ml-1 text-xs text-[#949ba4]">0:55</span>
      </div>
      <div class="mt-2 rounded-md border-l-4 border-[#57f287] bg-[#111214] p-5 shadow-sm">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div class="min-w-0 flex-1">
            <div class="text-xl font-bold text-white">Overworld coordinates</div>
            <div class="mt-5 text-lg font-bold text-white">The list of Overworld coordinates</div>
          </div>
          <img
            class="h-20 w-32 shrink-0 rounded-md object-cover sm:h-[90px] sm:w-40"
            src="https://images-ext-1.discordapp.net/external/IDI1TNwlUImXnq0xnq5AHdqack4PVlmdpS3TND8_Qt4/%3Fu%3Dhttps%253A%252F%252Fp4.wallpaperbetter.com%252Fwallpaper%252F483%252F418%252F410%252Fminecraft-shaders-william-wythers-overhauled-overworld-nature-hd-wallpaper-preview.jpg%26f%3D1%26nofb%3D1%26ipt%3D3a6974e15e3a5eee3790a53ba83c51eed7883949a9ebadfa621ea160f0bcfcd0/https/external-content.duckduckgo.com/iu/?format=webp&amp;width=1456&amp;height=820"
            alt="Minecraft Overworld landscape"
          />
        </div>

        <div class="mt-5 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          <div class="min-w-0">
            <div class="break-words text-lg font-bold text-white">PruebaCercaMedio2</div>
            <div class="mt-1 inline-block max-w-full rounded-md bg-[#383a40] px-2 py-1 font-mono text-base leading-none text-white">
              123, ?, 240
            </div>
          </div>
          <div class="min-w-0">
            <div class="break-words text-lg font-bold text-white">PruebaLejos</div>
            <div class="mt-1 inline-block max-w-full rounded-md bg-[#383a40] px-2 py-1 font-mono text-base leading-none text-white">
              10000, 50, 10000
            </div>
          </div>
          <div class="min-w-0">
            <div class="break-words text-lg font-bold text-white">PruebaconNether</div>
            <div class="mt-1 inline-block max-w-full rounded-md bg-[#383a40] px-2 py-1 font-mono text-base leading-none text-white">
              1000, ?, 1000
            </div>
          </div>
          <div class="min-w-0">
            <div class="break-words text-lg font-bold text-white">PruebaconNether</div>
            <div class="mt-1 inline-block max-w-full rounded-md bg-[#383a40] px-2 py-1 font-mono text-base leading-none text-white">
              1000, ?, 1000
            </div>
          </div>
          <div class="min-w-0">
            <div class="break-words text-lg font-bold text-white">Test1</div>
            <div class="mt-1 inline-block max-w-full rounded-md bg-[#383a40] px-2 py-1 font-mono text-base leading-none text-white">
              30, ?, 20
            </div>
          </div>
        </div>

        <div class="mt-5 text-base font-semibold text-white">5 coordinates registered &bull; hoy a las 0:55</div>
      </div>

      <div class="mt-2 flex flex-wrap gap-3">
        <button type="button" class="rounded-md bg-[#2f6f55] px-5 py-3 text-base font-bold text-[#dbdee1]">
          Overworld
        </button>
        <button type="button" class="rounded-md bg-[#a12d2f] px-5 py-3 text-base font-bold text-white">
          Nether
        </button>
        <button type="button" class="rounded-md bg-[#4e5058] px-5 py-3 text-base font-bold text-[#dbdee1]">
          End
        </button>
      </div>
    </div>
  </div>
</div>


## Previous / Next

<nav class="not-prose mt-6 grid gap-3 sm:grid-cols-2" aria-label="Feature navigation">
  <a
    href="/features/delete/"
    class="border-accent/25 hover:border-accent rounded-md border p-4 no-underline transition"
  >
    <span class="text-accent block text-xs font-semibold uppercase">Previous</span>
    <span class="block text-base font-semibold">/delete</span>
  </a>
</nav>
