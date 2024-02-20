const { $ } = require('@wdio/globals')
const bottomMenu = require('./bottom.menu');

class DragAndDropPage extends bottomMenu {
    get dragAndDropPage () {
        return $('//*[contains(@content-desc,"Drag-drop-screen")]')
    }

    get retryButton () {
        return $('//*[contains(@content-desc,"button-Retry") or contains(@content-desc,"renew")]')
    }

    async openDragMenu () {
        const menuDrag = super.dragAndDrop
        await menuDrag.waitForExist({ timeout: 10000 })
        await menuDrag.click()
        await this.dragAndDropPage.waitForExist({ timeout: 10000 })
    }

    async retry () {
        let isExistRetryElement = await this.retryButton.waitForExist({ timeout: 3000})

        if(isExistRetryElement == true){
            await this.retryButton.click()
            await this.dragAndDropPage.waitForExist({ timeout: 10000 })
        }
    }
}

module.exports = new DragAndDropPage();
