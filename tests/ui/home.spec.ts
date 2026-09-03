import { assertTextEquals, assertUrl, assertVisible } from "../../assertions";
import { createUser, deleteUser } from "../../framework/factories/user.factory";
import { test } from "../../framework/fixtures/app.fixture";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

test("home page opens the live automationexercise site and navigates to products @ui", async ({
  page
}) => {
  const homePage = await new HomePage(page).open();

  await assertVisible(homePage.heroHeading);
  await assertTextEquals(homePage.featuredProducts.productNameByName("Blue Top"), "Blue Top");

  await homePage.header.openProducts();

  const productsPage = new ProductsPage(page);
  await productsPage.isOpened();
  await assertUrl(page, /\/products$/);
});

test("user can log in from the main page @ui", async ({ page }) => {
  const user = await createUser();

  try {
    const homePage = await new HomePage(page).open();
    await homePage.header.openSignupLogin();

    const loginPage = new LoginPage(page);
    await loginPage.isOpened();
    await loginPage.login({ email: user.email, password: user.password });

    await homePage.isOpened();
    await assertVisible(homePage.loginSuccessMessage);
  } finally {
    await deleteUser(user.email, user.password);
  }
});
