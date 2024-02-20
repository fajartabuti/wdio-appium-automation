const LoginPage = require('../pageobjects/login.page')

describe('Login/Sign Up Form', () => {
    it('should signup with valid credentials', async () => {
        await LoginPage.signUp('testing123@mailnator.com', 'SuperSecretPassword!')
        await expect(LoginPage.popupSignupSuccessMessage).toBePresent()
        await expect(LoginPage.popupSignupSuccessMessage).toHaveText('You successfully signed up!')
    })
})