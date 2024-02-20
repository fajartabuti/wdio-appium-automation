const DragAndDropPage = require('../pageobjects/drag.and.drop.page')

describe('Drag and Drop Demo', () => {
    it('should complete picture with drag and drop', async () => {
        await DragAndDropPage.openDragMenu()
        await DragAndDropPage.retry()

        let pictureDimension = 3
        let picturePosition = [ 'l', 'c', 'r']
        for (i = 1; i <= pictureDimension; i++){
            for (j = 1; j <= picturePosition.length; j++){
                let dragElem = await $('//android.view.ViewGroup[@content-desc="drag-' + picturePosition[j - 1] + i + '"]')
                let dropElem = await $('//android.view.ViewGroup[@content-desc="drop-' + picturePosition[j - 1] + i + '"]')
                
                await browser.pause(2000)
                await dragElem.dragAndDrop(dropElem)
                await dragElem.waitForExist({ timeout: 10000, reverse: true })
                await dropElem.waitForExist({ timeout: 10000, reverse: true })
            }
        }
        
        const completedElem = await $('//*[contains(@text,"You made it")]')
        await expect(completedElem).toBePresent()
    })
})