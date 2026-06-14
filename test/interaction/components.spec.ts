import test, { expect } from '@playwright/test'

test.describe('interaction - components', () => {
  let isMobile = false

  test.beforeEach(async ({ page, viewport }) => {
    await page.goto('/')

    isMobile = (viewport?.width ?? 0) < 640
  })

  test('mode toggle', async ({ page }) => {
    const html = page.locator('html')
    const button = page
      .locator('dark-light-toggle button')
      .filter({ visible: true })
    const initialMode = await html.getAttribute('data-mode')
    const newMode = initialMode === 'light' ? 'dark' : 'light'

    await button.click()

    await expect(html).toHaveAttribute('data-mode', newMode)
    await expect(button).toHaveAttribute('aria-label', newMode)

    await button.click()

    await expect(html).toHaveAttribute('data-mode', initialMode!)
    await expect(button).toHaveAttribute('aria-label', initialMode!)
  })

  test('mobile nav', async ({ page }) => {
    test.skip(!isMobile, 'mobile only')

    const nav = page.locator('#mobile-nav')

    await expect(nav).not.toBeVisible()
    await page.locator('mobile-nav-toggle button').click()
    await expect(nav).toBeVisible()
    await expect(nav.locator('a[href="/features/"]')).toHaveText('Features')
  })
})
