/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2021-12-29 18:14:12
 * @LastEditTime: 2021-12-30 15:21:23
 */
import initStoryshots from '@storybook/addon-storyshots'; 
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getScreenshotOptions = () => {
  return {
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.
  }
}
  
const beforeScreenshot = async (page: any) => {
  await page.setViewport({ width: 1440, height: 960 })
}

initStoryshots({  
  suite: `storyshots`, 
  test: imageSnapshot( 
    {
      storybookUrl: 'http://localhost:6006',
      getScreenshotOptions,
      beforeScreenshot,
    }
  ),
});