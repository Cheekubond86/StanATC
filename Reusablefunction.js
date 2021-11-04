import Loginpage from './Loginpage';
class Loginpage extends Launchbrowser {
async enterLoginEmail() {
    await this.page.click(selectors.LOGIN_EMAIL_INPUT);
    await this.page.type('email.email.com.au');
  }
async enterLoginPassword() {
    await this.page.click(selectors.LOGIN_PASSWORD_INPUT);
    await this.page.type('xxxAxyy121');
  } 
}
  //export default new Login();